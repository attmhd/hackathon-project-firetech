import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Kamus from "./pages/Kamus";
import Leaderboard from "./pages/Leaderboard";
import Kontributor from "./pages/Kontributor";

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
          <Route path="/kontributor" element={<Kontributor />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
