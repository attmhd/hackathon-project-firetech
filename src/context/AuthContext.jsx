/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { getSupabaseClient } from "../lib/supabaseClient";

/**
 * Minimal email-based auth with region (nagari) lock.
 * - Stores a single user in localStorage.
 * - Users can only contribute to their own region.
 * - No real backend; purely client-side for demo/hackathon purposes.
 */

const STORAGE_KEY = "ml_auth_user";
const USERS_KEY = "ml_auth_users";

const DUMMY_USERS = [
  {
    id: "uid_seed1",
    name: "Ani",
    email: "ani@example.com",
    password: "password123",
    region: "Padang",
    createdAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "uid_seed2",
    name: "Budi",
    email: "budi@example.com",
    password: "rahasia",
    region: "Bukittinggi",
    createdAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "uid_seed3",
    name: "Citra",
    email: "citra@example.com",
    password: "minang",
    region: "Payakumbuh",
    createdAt: "2025-01-01T00:00:00.000Z",
  },
];

function readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeUsers(users) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch {
    // ignore
  }
}

function ensureSeedUsers() {
  const existing = readUsers();
  if (!existing || existing.length === 0) {
    writeUsers(DUMMY_USERS);
  }
}

const AuthContext = createContext(null);

function readStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeStoredUser(user) {
  try {
    if (!user) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  } catch {
    // ignore storage errors
  }
}

function normalizeRegion(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function isValidEmail(email) {
  // Basic validation, good enough for client-only
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function genUserId(email) {
  // Not secure, just a simple unique id for demo
  const slug =
    String(email)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .slice(0, 6) || "user";
  return `uid_${slug}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = getSupabaseClient();

  function mapUser(user) {
    if (!user) return null;
    const meta = user.user_metadata || {};
    return {
      id: user.id,
      name: meta.name || user.email?.split("@")[0] || "User",
      email: user.email || "",
      region: meta.region || null,
      createdAt: user.created_at || null,
    };
  }

  useEffect(() => {
    let mounted = true;

    async function init() {
      const { data, error } = await supabase.auth.getSession();
      if (mounted) {
        if (error) {
          setCurrentUser(null);
        } else {
          const sessUser = data?.session?.user ?? null;
          setCurrentUser(mapUser(sessUser));
        }
        setLoading(false);
      }
    }

    init();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(mapUser(session?.user ?? null));
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, [supabase]);

  const isAuthenticated = !!currentUser;

  const registerWithEmail = useCallback(
    async ({ name, email, password }) => {
      if (!name || !String(name).trim()) {
        throw new Error("Nama wajib diisi.");
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
        throw new Error("Email tidak valid.");
      }
      const pwd = String(password || "");
      if (pwd.length < 6) {
        throw new Error("Password minimal 6 karakter.");
      }

      const { data, error } = await supabase.auth.signUp({
        email: String(email).trim().toLowerCase(),
        password: pwd,
        options: {
          data: { name: String(name).trim() },
        },
      });
      if (error) {
        throw new Error(error.message || "Gagal mendaftar.");
      }

      const user = mapUser(data.user ?? data.session?.user ?? null);
      if (user) {
        setCurrentUser(user);
      }
      return { ok: true, user, needsVerification: !user };
    },
    [supabase],
  );

  const loginWithEmail = useCallback(
    async ({ email, password }) => {
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
        throw new Error("Email tidak valid.");
      }
      if (!password || String(password).length === 0) {
        throw new Error("Password wajib diisi.");
      }
      const { data, error } = await supabase.auth.signInWithPassword({
        email: String(email).trim().toLowerCase(),
        password: String(password),
      });
      if (error) {
        throw new Error(error.message || "Kredensial salah.");
      }
      const user = mapUser(data.user ?? data.session?.user ?? null);
      setCurrentUser(user);
      return { ok: true, user };
    },
    [supabase],
  );

  const logout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message || "Gagal logout.");
    }
    setCurrentUser(null);
    return { ok: true };
  }, [supabase]);

  const getRegion = useCallback(
    () => currentUser?.region || null,
    [currentUser],
  );

  const canContributeTo = useCallback(
    (targetRegion) => {
      if (!currentUser) return false;
      const normalize = (v) =>
        String(v || "")
          .trim()
          .toLowerCase();
      return normalize(currentUser.region) === normalize(targetRegion);
    },
    [currentUser],
  );

  const updateProfile = useCallback(
    async (updates) => {
      if (!currentUser) throw new Error("Belum login.");
      const payload = { data: {} };
      if (typeof updates.name === "string") {
        payload.data.name = updates.name.trim();
      }
      if (
        typeof updates.region === "string" &&
        updates.region.trim() !== currentUser.region
      ) {
        throw new Error(
          "Perubahan nagari/daerah tidak diizinkan (region lock).",
        );
      }

      const { data, error } = await supabase.auth.updateUser(payload);
      if (error) {
        throw new Error(error.message || "Gagal memperbarui profil.");
      }
      const user = mapUser(data.user);
      setCurrentUser(user);
      return { ok: true, user };
    },
    [currentUser, supabase],
  );

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated,
      loading,
      registerWithEmail,
      loginWithEmail,
      logout,
      updateProfile,
      getRegion,
      canContributeTo,
    }),
    [
      currentUser,
      isAuthenticated,
      loading,
      registerWithEmail,
      loginWithEmail,
      logout,
      updateProfile,
      getRegion,
      canContributeTo,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
