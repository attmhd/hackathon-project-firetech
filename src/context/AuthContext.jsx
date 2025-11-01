/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

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

  // Hydrate from storage on mount
  useEffect(() => {
    // Seed dummy users once on mount for demo/testing
    ensureSeedUsers();

    // Hydrate session
    const u = readStoredUser();
    if (u && u.email && u.region) {
      setCurrentUser(u);
    }
    setLoading(false);
  }, []);

  // Persist on change
  useEffect(() => {
    writeStoredUser(currentUser);
  }, [currentUser]);

  const isAuthenticated = !!currentUser;

  const registerWithEmail = useCallback(
    async ({ name, email, region, password }) => {
      if (!name || !String(name).trim()) {
        throw new Error("Nama wajib diisi.");
      }
      if (!isValidEmail(email)) {
        throw new Error("Email tidak valid.");
      }
      if (!region || !String(region).trim()) {
        throw new Error("Nagari/Daerah wajib dipilih.");
      }

      const users = readUsers();
      const normalizedEmail = String(email).trim().toLowerCase();
      if (users.some((u) => u.email === normalizedEmail)) {
        throw new Error("Email sudah terdaftar. Silakan masuk.");
      }

      const pwd = String(password || "changeme");
      if (pwd.length < 6) {
        // Long enough for demo; adjust as needed
        throw new Error("Password minimal 6 karakter.");
      }

      const user = {
        id: genUserId(email),
        name: String(name).trim(),
        email: normalizedEmail,
        region: String(region).trim(),
        createdAt: new Date().toISOString(),
      };

      // Store credential (client-side demo only)
      const userRecord = { ...user, password: pwd };
      writeUsers([...users, userRecord]);

      setCurrentUser(user);
      return { ok: true, user };
    },
    [],
  );

  const loginWithEmail = useCallback(async ({ email, password }) => {
    if (!isValidEmail(email)) {
      throw new Error("Email tidak valid.");
    }
    if (!password || String(password).length === 0) {
      throw new Error("Password wajib diisi.");
    }

    const users = readUsers();
    const normalizedEmail = String(email).trim().toLowerCase();
    const found = users.find((u) => u.email === normalizedEmail);

    if (!found) {
      throw new Error("Akun tidak ditemukan. Silakan daftar terlebih dahulu.");
    }
    if (found.password !== String(password)) {
      throw new Error("Kredensial salah. Periksa email atau password Anda.");
    }

    const sessionUser = {
      id: found.id,
      name: found.name,
      email: found.email,
      region: found.region,
      createdAt: found.createdAt,
    };

    setCurrentUser(sessionUser);
    return { ok: true, user: sessionUser };
  }, []);

  const logout = useCallback(async () => {
    setCurrentUser(null);
    return { ok: true };
  }, []);

  // Region lock helpers
  const getRegion = useCallback(
    () => currentUser?.region || null,
    [currentUser],
  );

  const canContributeTo = useCallback(
    (targetRegion) => {
      if (!currentUser) return false;
      return (
        normalizeRegion(currentUser.region) === normalizeRegion(targetRegion)
      );
    },
    [currentUser],
  );

  // Optional profile updates (restrict region changes by default)
  const updateProfile = useCallback(
    async (updates) => {
      if (!currentUser) throw new Error("Belum login.");
      const next = { ...currentUser };

      if (typeof updates.name === "string") {
        next.name = updates.name.trim();
      }

      if (
        typeof updates.region === "string" &&
        updates.region.trim() !== currentUser.region
      ) {
        // Region lock by default: disallow region change
        throw new Error(
          "Perubahan nagari/daerah tidak diizinkan (region lock).",
        );
      }

      setCurrentUser(next);
      return { ok: true, user: next };
    },
    [currentUser],
  );

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated,
      loading,
      // auth actions
      registerWithEmail,
      loginWithEmail,
      logout,
      // profile
      updateProfile,
      // region lock
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
