import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, currentUser, loginWithEmail, logout, loading } =
    useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const redirectTo = useMemo(() => {
    // If a protected page set "from" in state, prefer going back there
    const from = location.state?.from?.pathname;
    return from || "/kontributor";
  }, [location.state]);

  useEffect(() => {
    if (isAuthenticated && !loading) {
      // If already logged-in, go to contribution page
      const t = setTimeout(() => navigate(redirectTo, { replace: true }), 250);
      return () => clearTimeout(t);
    }
  }, [isAuthenticated, loading, navigate, redirectTo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting || loading) return;

    setErrorMsg("");
    setSubmitting(true);
    try {
      await loginWithEmail({ email, password });
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setErrorMsg(err?.message || "Gagal masuk. Coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    setErrorMsg("");
    try {
      await logout();
    } catch (err) {
      setErrorMsg(err?.message || "Gagal keluar. Coba lagi.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-orange-50 to-white px-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-[#FF8D28] rounded-full animate-spin" />
          <p className="text-sm text-zinc-600">Memuat...</p>
        </div>
      </div>
    );
  }

  // Already authenticated: show small dashboard preview and CTA
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-linear-to-b from-orange-50 to-white flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-[#473322]">Sudah Masuk</h1>
            <p className="text-sm text-zinc-600">Selamat datang kembali.</p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 mb-6">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-zinc-500">Nama</div>
              <div className="font-semibold text-[#473322]">
                {currentUser?.name || "-"}
              </div>
            </div>
            <div className="h-px my-3 bg-zinc-200" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-zinc-500">Email</div>
              <div className="font-medium text-[#473322]">
                {currentUser?.email}
              </div>
            </div>
            <div className="h-px my-3 bg-zinc-200" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-zinc-500">Nagari/Daerah</div>
              <div className="font-medium text-[#473322]">
                {currentUser?.region}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/kontributor")}
              className="w-full h-11 px-5 rounded-full font-bold text-white bg-linear-to-r from-[#FF8D28] to-[#FF7A1A] hover:shadow-lg hover:scale-[1.01] transition"
            >
              Lanjut ke Kontributor
            </button>
            <button
              onClick={handleLogout}
              className="w-full h-11 px-5 rounded-full font-bold border border-zinc-300 text-[#473322] hover:bg-zinc-50 transition"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Not authenticated: show login form
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF8D28]/10 border border-[#FF8D28]/30 mb-4">
            <span className="text-2xl">🔐</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#473322]">
            Masuk
          </h1>
          <p className="text-sm text-zinc-600 mt-1">
            Gunakan email yang sudah kamu daftarkan
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-semibold text-[#473322] mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 text-black rounded-xl border border-zinc-300 bg-white px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-transparent"
                placeholder="nama@email.com"
              />
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
                ✉️
              </div>
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-semibold text-[#473322] mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 text-black rounded-xl border border-zinc-300 bg-white px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-transparent"
                placeholder="Password"
              />
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
                🔒
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={!email || !password || submitting}
            className={`w-full h-12 rounded-full font-bold text-white bg-linear-to-r from-[#FF8D28] to-[#FF7A1A] transition hover:shadow-lg hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed ${
              submitting ? "cursor-wait" : ""
            }`}
          >
            {submitting ? "Memproses..." : "Masuk"}
          </button>
        </form>

        {/* Basic login only */}

        <div className="mt-4 text-center text-sm">
          <span className="text-zinc-600">Belum punya akun? </span>
          <Link
            to="/register"
            className="font-semibold text-[#FF8D28] hover:text-[#FF7A1A] transition-colors"
          >
            Daftar sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
