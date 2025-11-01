import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../../assets/LOGO.png";
import { useAuth } from "../../context/AuthContext";

/* ================= ICONS ================= */
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ================= HEADER ================= */
export default function Header() {
  const textColor = "text-[#473322]";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated, currentUser, logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    setIsProfileOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Kamus", path: "/kamus" },
    { label: "Leaderboard", path: "/leaderboard" },
    ...(isAuthenticated
      ? [{ label: "Kontributor", path: "/kontributor" }]
      : []),
  ];

  const AuthButton = ({ isMobile = false }) => {
    if (isAuthenticated) {
      if (isMobile) {
        return (
          <div className="space-y-2">
            <Link
              to="/profile"
              className="flex items-center justify-center gap-2 w-full h-12 bg-white border border-zinc-300 text-[#473322] rounded-xl font-bold text-sm hover:shadow-lg transition-all duration-300 shadow-md"
              onClick={() => isMenuOpen && setIsMenuOpen(false)}
            >
              <UserIcon />
              <span>{currentUser?.name || "Profil"}</span>
            </Link>
            <button
              type="button"
              onClick={async () => {
                await handleLogout();
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full h-12 bg-white border border-zinc-200 text-[#473322] rounded-xl font-bold text-sm hover:bg-zinc-50 transition-all duration-300 shadow-md"
            >
              Logout
            </button>
          </div>
        );
      }

      return (
        <div className="hidden lg:block relative" ref={profileMenuRef}>
          <button
            type="button"
            className="flex items-center gap-2 h-10 xl:h-12 px-4 xl:px-6 bg-white border border-zinc-300 text-[#473322] rounded-full font-bold text-sm xl:text-base hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
            onClick={() => setIsProfileOpen((prev) => !prev)}
          >
            <UserIcon />
            <span>{currentUser?.name || "Profil"}</span>
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-lg py-1 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-[#473322] hover:bg-zinc-50"
                onClick={() => setIsProfileOpen(false)}
              >
                Profil
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-[#473322] hover:bg-zinc-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        to="/login"
        className={
          isMobile
            ? "flex items-center justify-center gap-2 w-full h-12 bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all duration-300 shadow-md"
            : "hidden lg:flex items-center gap-2 h-10 xl:h-12 px-4 xl:px-6 bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white rounded-full font-bold text-sm xl:text-base hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
        }
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
      >
        <PlusIcon />
        <span>Kontribusi</span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-zinc-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="block">
              <img
                src={LogoImage}
                alt="MinangLanguage Logo"
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm xl:text-base font-medium ${textColor} hover:text-[#FF8D28] transition-colors duration-300 relative group`}
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#FF8D28] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <AuthButton />
            {/* Mobile Toggle */}
            <button
              className={`lg:hidden p-2 rounded-full ${textColor} hover:bg-white/20 transition-colors duration-300`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="mx-4 sm:mx-6 mt-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <nav className="p-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-base font-medium ${textColor} hover:bg-[#E6B17E]/20 hover:text-[#FF8D28] rounded-xl transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Auth */}
          <div className="p-4 pt-0 border-t border-zinc-200/50">
            <AuthButton isMobile />
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
