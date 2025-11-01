import MascotImage from "../assets/Maskotsatu.png";
import {
  BookOpen,
  Mic,
  CheckCircle,
  Code2,
  Bug,
  Smartphone,
  FileText,
} from "lucide-react";
import Footer from "../components/Footer";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-zinc-400"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MicrophoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-zinc-400"
  >
    <path d="M12 1v9"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

const SpeakerIcon = () => (
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
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const BookIcon = () => (
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
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const UsersIcon = () => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const HeartIcon = () => (
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
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

function Home() {
  const stats = [
    { number: "1,200+", label: "Kata & Frasa", icon: <BookIcon /> },
    { number: "15+", label: "Nagari", icon: <UsersIcon /> },
    { number: "500+", label: "Kontributor", icon: <HeartIcon /> },
  ];

  const wordExamples = [
    {
      indonesian: "Makan",
      minang: "Makan",
      type: "Kata kerja",
      definition:
        "Memasukkan makanan pokok ke dalam mulut serta mengunyah dan menelannya.",
      pronunciation: "/ma.kan/",
      example: "Kami makan nasi di warung.",
    },
    {
      indonesian: "Rumah",
      minang: "Rumah",
      type: "Kata benda",
      definition: "Bangunan untuk tempat tinggal keluarga.",
      pronunciation: "/ru.mah/",
      example: "Rumah gadang adalah rumah adat Minangkabau.",
    },
    {
      indonesian: "Indah",
      minang: "Rancak",
      type: "Kata sifat",
      definition: "Elok rupanya; molek; cantik; bagus benar.",
      pronunciation: "/ran.cak/",
      example: "Pemandangan di Bukittinggi sangat rancak.",
    },
    {
      indonesian: "Air",
      minang: "Aia",
      type: "Kata benda",
      definition:
        "Benda cair seperti yang biasa diminum, dipakai untuk mandi, mencuci, dan sebagainya.",
      pronunciation: "/a.ia/",
      example: "Aia di sumua tampak jernih.",
    },
    {
      indonesian: "Pergi",
      minang: "Pai",
      type: "Kata kerja",
      definition: "Meninggalkan tempat; berangkat; berjalan meninggalkan.",
      pronunciation: "/pai/",
      example: "Kami pai ka pasar pagi-pagi.",
    },
    {
      indonesian: "Besar",
      minang: "Gadang",
      type: "kata sifat",
      definition: "Lebih dari ukuran sedang; lawan dari kecil.",
      pronunciation: "/ga.dang/",
      example: "Pohon kayu gadang di halaman rumah.",
    },
  ];

  const features = [
    {
      title: "Kamus Digital",
      description:
        "Pencarian kata dalam bahasa Indonesia ke bahasa Minang dari berbagai nagari",
      icon: <BookIcon />,
    },
    {
      title: "Audio Pronunciation",
      description: "Dengarkan pelafalan asli dari penutur bahasa Minang",
      icon: <SpeakerIcon />,
    },
    {
      title: "Kontribusi Terbuka",
      description:
        "Platform terbuka untuk semua orang berkontribusi melestarikan bahasa",
      icon: <UsersIcon />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#E6B17E]/67 rounded-2xl sm:rounded-3xl lg:rounded-[3.5rem] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-16 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Content Column */}
              <div className="text-[#473322] space-y-4 sm:space-y-6 order-2 lg:order-1">
                {/* Title */}
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                    MinangLanguage
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                    Platform terbuka untuk mempelajari, mendokumentasikan, dan
                    melestarikan ragam bahasa daerah di Sumatera Barat.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base opacity-80 leading-relaxed">
                    Satu platform untuk menjaga dan belajar bahasa daerah
                    Minangkabau dari berbagai nagari di seluruh Sumatera Barat
                  </p>
                </div>

                {/* Search Form */}
                <div className="w-full">
                  <div className="relative max-w-2xl mx-auto">
                    <input
                      type="text"
                      placeholder="Cari kata dalam bahasa Indonesia..."
                      className="w-full h-11 sm:h-12 md:h-14 pl-10 sm:pl-12 pr-10 sm:pr-12 rounded-full border border-zinc-300 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-transparent text-sm md:text-base text-black placeholder-zinc-500 shadow-lg"
                    />
                    <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                      <SearchIcon />
                    </div>
                    <button className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 hover:text-[#FF8D28] transition-colors">
                      <MicrophoneIcon />
                    </button>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <button className="w-full sm:w-auto h-11 sm:h-12 md:h-14 px-6 md:px-8 bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white rounded-full font-bold text-sm md:text-base hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-lg">
                    Eksplor Bahasa Sekarang
                  </button>
                </div>
              </div>

              {/* Mascot Column */}
              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:translate-x-12">
                  <img
                    src={MascotImage}
                    alt="Maskot Kerbau MinangLanguage"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#FF8D28]/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#E6B17E]/30 rounded-full blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#E6B17E]/20 rounded-full text-[#FF8D28] mb-3 sm:mb-4">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#473322] mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-zinc-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-[#E6B17E]/10 to-[#FF8D28]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#473322] mb-3 sm:mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Temukan berbagai fitur yang membantu Anda mempelajari dan
              melestarikan bahasa Minangkabau
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#E6B17E]/20 to-[#FF8D28]/20 rounded-xl sm:rounded-2xl text-[#FF8D28] mb-4 sm:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#473322] mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Word Examples Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#473322] mb-3 sm:mb-4">
              Contoh Kata & Frasa
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto px-4">
              Jelajahi kekayaan kosakata bahasa Minangkabau dengan contoh kata
              sehari-hari
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {wordExamples.map((word, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-[#473322] truncate">
                        {word.indonesian}
                      </h3>
                      <p className="text-[#FF8D28] font-semibold text-base sm:text-lg truncate">
                        {word.minang}
                      </p>
                    </div>
                    <button className="text-zinc-400 hover:text-[#FF8D28] transition-colors p-1 sm:p-2 hover:bg-[#E6B17E]/10 rounded-full ml-2 flex-shrink-0">
                      <SpeakerIcon />
                    </button>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-xs px-2 py-1 bg-[#E6B17E]/20 text-[#473322] rounded-full font-medium inline-block w-fit">
                        {word.type}
                      </span>
                      <span className="text-xs sm:text-sm text-zinc-500 font-mono">
                        {word.pronunciation}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {word.definition}
                    </p>

                    <div className="pt-2 border-t border-zinc-100">
                      <p className="text-xs text-zinc-600">
                        <span className="font-medium">Contoh:</span>{" "}
                        {word.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="w-full sm:w-auto h-11 sm:h-12 md:h-14 px-6 md:px-8 bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white rounded-full font-bold text-sm md:text-base hover:shadow-lg hover:scale-105 transition-all duration-300">
              Lihat Semua Kata
            </button>
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="py-12 px-6 bg-[#FFF6ED]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#5C4634] mb-4">
            Bantu Kami Melestarikan Bahasa Minangkabau
          </h2>
          <p className="text-[#5C4634]/80 max-w-2xl mx-auto mb-10">
            Proyek ini bersifat terbuka untuk siapa pun yang ingin berkontribusi
            — menambah kosakata, membagikan dialek, atau membantu pengembangan
            teknologinya.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/80 rounded-xl border border-[#FF8D28]/10 shadow-md hover:-translate-y-1 hover:shadow-lg transition">
              <div className="p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#FF8D28]/10 rounded-lg">
                    <BookOpen className="w-5 h-5 text-[#FF8D28]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#5C4634]">
                    Kontributor Bahasa
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-[#5C4634]/80">
                  <li className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-[#FF8D28]" /> Rekam Pelafalan
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF8D28]" />{" "}
                    Verifikasi Terjemahan
                  </li>
                </ul>
                <a
                  href="/kontributor"
                  className="mt-6 inline-flex items-center justify-center w-full h-11 rounded-lg bg-[#FF8D28] text-white font-semibold hover:bg-[#E87A1A] transition"
                >
                  Mulai Kontribusi
                </a>
              </div>
            </div>

            <div className="bg-white/80 rounded-xl border border-[#FF8D28]/10 shadow-md hover:-translate-y-1 hover:shadow-lg transition">
              <div className="p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#FF8D28]/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-[#FF8D28]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#5C4634]">
                    Kontributor Developer
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-[#5C4634]/80">
                  <li className="flex items-center gap-2">
                    <Bug className="w-4 h-4 text-[#FF8D28]" /> Perbaiki Bug
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#FF8D28]" /> Desain
                    UI/UX
                  </li>
                </ul>
                <a
                  href="/kontributor"
                  className="mt-6 inline-flex items-center justify-center w-full h-11 rounded-lg bg-[#5C4634] text-white font-semibold hover:bg-[#4B3B2A] transition"
                >
                  Kontribusi Developer
                </a>
              </div>
            </div>
          </div>

          <button className="h-11 px-6 bg-white text-[#5C4634] border border-[#FF8D28]/20 rounded-full font-semibold hover:shadow transition">
            <FileText className="inline w-5 h-5 mr-2 text-[#FF8D28]" /> Baca
            Panduan Lengkap
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
