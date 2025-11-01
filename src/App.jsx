import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Kamus from "./pages/Kamus";
import Leaderboard from "./pages/Leaderboard";
import Kontributor from "./pages/Kontributor";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useAuth } from "./context/AuthContext.jsx";

function RequireAuth({ children }) {
  const { isAuthenticated, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white/50">
        <div className="w-8 h-8 border-2 border-zinc-300 border-t-[#FF8D28] rounded-full animate-spin" />
      </div>
    );
  }
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Global Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kamus" element={<Kamus />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/kontributor"
            element={
              <RequireAuth>
                <Kontributor />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
