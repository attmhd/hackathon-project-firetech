export default function Footer() {
  return (
    <footer className="bg-[#473322] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                MinangLanguage
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6 max-w-md">
                Platform terbuka untuk mempelajari, mendokumentasikan, dan
                melestarikan ragam bahasa daerah Minangkabau dari berbagai
                nagari di Sumatera Barat.
              </p>
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 max-w-sm">
                <div className="text-center">
                  <div className="text-xl font-bold text-[#FF8D28] mb-1">
                    1,200+
                  </div>
                  <div className="text-xs text-zinc-400">Kata & Frasa</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#FF8D28] mb-1">
                    15+
                  </div>
                  <div className="text-xs text-zinc-400">Nagari</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#FF8D28] mb-1">
                    500+
                  </div>
                  <div className="text-xs text-zinc-400">Kontributor</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/kamus"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  Kamus Digital
                </a>
              </li>
              <li>
                <a
                  href="/leaderboard"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a
                  href="/kontribusi"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  Cara Berkontribusi
                </a>
              </li>
              <li>
                <a
                  href="/tentang"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Sumber Daya
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/panduan"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  Panduan Pengguna
                </a>
              </li>
              <li>
                <a
                  href="/api"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="/developer"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  Developer Guide
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  className="text-zinc-300 hover:text-[#FF8D28] transition-colors text-sm"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="border-t border-zinc-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-zinc-400">Ikuti Kami:</span>
              <div className="flex items-center space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/attmhd/hackathon-project-firetech"
                  className="text-zinc-400 hover:text-[#FF8D28] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  className="text-zinc-400 hover:text-[#FF8D28] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.427.413a4.9 4.9 0 0 1 1.75 1.145 4.9 4.9 0 0 1 1.145 1.75c.167.457.357 1.257.413 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.413 2.427a4.9 4.9 0 0 1-1.145 1.75 4.9 4.9 0 0 1-1.75 1.145c-.457.167-1.257.357-2.427.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.427-.413a4.9 4.9 0 0 1-1.75-1.145 4.9 4.9 0 0 1-1.145-1.75c-.167-.457-.357-1.257-.413-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.246-1.97.413-2.427a4.9 4.9 0 0 1 1.145-1.75 4.9 4.9 0 0 1 1.75-1.145c.457-.167 1.257-.357 2.427-.413C8.416 2.175 8.796 2.163 12 2.163zm0 1.687c-3.16 0-3.532.012-4.78.07-1.02.047-1.573.216-1.94.36-.488.19-.84.418-1.21.787-.369.369-.597.722-.787 1.21-.144.367-.313.92-.36 1.94-.058 1.248-.07 1.62-.07 4.78s.012 3.532.07 4.78c.047 1.02.216 1.573.36 1.94.19.488.418.84.787 1.21.369.369.722.597 1.21.787.367.144.92.313 1.94.36 1.248.058 1.62.07 4.78.07s3.532-.012 4.78-.07c1.02-.047 1.573-.216 1.94-.36.488-.19.84-.418 1.21-.787.369-.369.597-.722.787-1.21.144-.367.313-.92.36-1.94.058-1.248.07-1.62.07-4.78s-.012-3.532-.07-4.78c-.047-1.02-.216-1.573-.36-1.94a3.215 3.215 0 0 0-.787-1.21 3.215 3.215 0 0 0-1.21-.787c-.367-.144-.92-.313-1.94-.36-1.248-.058-1.62-.07-4.78-.07zm0 3.918a5.919 5.919 0 1 1 0 11.838 5.919 5.919 0 0 1 0-11.838zm0 9.775a3.856 3.856 0 1 0 0-7.712 3.856 3.856 0 0 0 0 7.712zm6.406-10.845a1.386 1.386 0 1 1 0-2.772 1.386 1.386 0 0 1 0 2.772z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/"
                  className="text-zinc-400 hover:text-[#FF8D28] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 3.9V24h-4V8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Open Source Badge */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">Open Source Project</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-zinc-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-zinc-400">
              &copy; 2025 MinangLanguage. Dibangun untuk melestarikan budaya
              Minangkabau.
            </p>
            <div className="flex items-center space-x-6 text-xs md:text-sm">
              <a
                href="/privacy"
                className="text-zinc-400 hover:text-[#FF8D28] transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a
                href="/terms"
                className="text-zinc-400 hover:text-[#FF8D28] transition-colors"
              >
                Syarat Layanan
              </a>
              <a
                href="/license"
                className="text-zinc-400 hover:text-[#FF8D28] transition-colors"
              >
                Lisensi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
