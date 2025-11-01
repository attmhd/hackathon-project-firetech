import { useState } from "react";

// Icon Components
const TrophyIcon = () => (
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
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.25 18.48 11.61 18.5 12 18.5s.75-.02 1.03-.29c.5-.23.97-.66.97-1.21v-2.34"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const CrownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 6L13.13 8.09L15.5 7L14.37 9.09L17 10L14.37 10.91L15.5 13L13.13 11.91L12 14L10.87 11.91L8.5 13L9.63 10.91L7 10L9.63 9.09L8.5 7L10.87 8.09L12 6Z" />
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
  </svg>
);

const MedalIcon = ({ rank }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${
      rank === 1
        ? "text-yellow-500"
        : rank === 2
          ? "text-gray-400"
          : "text-amber-600"
    }`}
  >
    <circle cx="12" cy="12" r="10" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      className="text-white text-sm font-bold"
    >
      {rank}
    </text>
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-yellow-500"
  >
    <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z" />
  </svg>
);

const BookIcon = () => (
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
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const CalendarIcon = () => (
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
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

function Leaderboard() {
  const [timeFilter, setTimeFilter] = useState("all");

  // Mock data untuk demonstrasi
  const topContributors = [
    {
      id: 1,
      username: "AnakNagari_Padang",
      fullName: "Ahmad Rizki Pratama",
      wordCount: 1247,
      rank: 1,
      avatar: "AR",
      joinDate: "2023-01-15",
      nagari: "Padang",
      badge: "Legend Contributor",
      recentWords: ["makan", "pai", "rancak", "gadang", "aia"],
    },
    {
      id: 2,
      username: "BundoMinang",
      fullName: "Siti Aminah",
      wordCount: 967,
      rank: 2,
      avatar: "SA",
      joinDate: "2023-02-20",
      nagari: "Bukittinggi",
      badge: "Master Contributor",
      recentWords: ["suduik", "ciek", "pai", "makan", "rundiang"],
    },
    {
      id: 3,
      username: "PaduanNagari",
      fullName: "Budi Syahputra",
      wordCount: 823,
      rank: 3,
      avatar: "BS",
      joinDate: "2023-03-10",
      nagari: "Payakumbuh",
      badge: "Expert Contributor",
      recentWords: ["bana", "indak", "awak", "urang", "lai"],
    },
    {
      id: 4,
      username: "MinangCulture",
      fullName: "Rina Sari",
      wordCount: 756,
      rank: 4,
      avatar: "RS",
      joinDate: "2023-01-25",
      nagari: "Sawahlunto",
      badge: "Senior Contributor",
      recentWords: ["beko", "dek", "lai", "pulo", "taciek"],
    },
    {
      id: 5,
      username: "RantauMinang",
      fullName: "Dedi Rahman",
      wordCount: 689,
      rank: 5,
      avatar: "DR",
      joinDate: "2023-04-01",
      nagari: "Solok",
      badge: "Expert Contributor",
      recentWords: ["talatak", "lah", "nyo", "ko", "kini"],
    },
    {
      id: 6,
      username: "TradisiMinang",
      fullName: "Maya Putri",
      wordCount: 634,
      rank: 6,
      avatar: "MP",
      joinDate: "2023-02-14",
      nagari: "Tanah Datar",
      badge: "Senior Contributor",
      recentWords: ["lamo", "kini", "baru", "tuo", "mudo"],
    },
    {
      id: 7,
      username: "PesisirMinang",
      fullName: "Andi Saputra",
      wordCount: 567,
      rank: 7,
      avatar: "AS",
      joinDate: "2023-03-22",
      nagari: "Pesisir Selatan",
      badge: "Active Contributor",
      recentWords: ["lauik", "ikan", "panta", "batu", "aia"],
    },
    {
      id: 8,
      username: "RumahGadang",
      fullName: "Fitri Handayani",
      wordCount: 512,
      rank: 8,
      avatar: "FH",
      joinDate: "2023-04-15",
      nagari: "Lima Puluh Kota",
      badge: "Active Contributor",
      recentWords: ["rumah", "gadang", "gonjong", "atap", "tiang"],
    },
    {
      id: 9,
      username: "MinangMuda",
      fullName: "Reza Fahlevi",
      wordCount: 478,
      rank: 9,
      avatar: "RF",
      joinDate: "2023-05-01",
      nagari: "Agam",
      badge: "Rising Star",
      recentWords: ["mudo", "belajar", "alun", "kini", "esok"],
    },
    {
      id: 10,
      username: "SasakMinang",
      fullName: "Liza Marlina",
      wordCount: 445,
      rank: 10,
      avatar: "LM",
      joinDate: "2023-05-20",
      nagari: "Pasaman",
      badge: "Rising Star",
      recentWords: ["sasak", "jalan", "kampuang", "sawah", "tanah"],
    },
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Legend Contributor":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "Master Contributor":
        return "bg-gradient-to-r from-purple-400 to-purple-600 text-white";
      case "Expert Contributor":
        return "bg-gradient-to-r from-blue-400 to-blue-600 text-white";
      case "Senior Contributor":
        return "bg-gradient-to-r from-green-400 to-green-600 text-white";
      case "Active Contributor":
        return "bg-gradient-to-r from-orange-400 to-orange-600 text-white";
      case "Rising Star":
        return "bg-gradient-to-r from-pink-400 to-pink-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return <CrownIcon />;
    if (rank <= 3) return <MedalIcon rank={rank} />;
    return <span className="text-2xl font-bold text-zinc-400">#{rank}</span>;
  };

  const getStars = (rank) => {
    if (rank === 1) return 5;
    if (rank === 2) return 4;
    if (rank === 3) return 3;
    if (rank <= 5) return 2;
    return 1;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] rounded-2xl mb-6">
            <TrophyIcon />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#473322] mb-4">
            🏆 Leaderboard Kontributor
          </h1>
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
            Apresiasi untuk para pahlawan pelestarian bahasa Minangkabau yang
            telah berkontribusi dalam memperkaya kosakata platform kami
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600 mb-1">Total Kontributor</p>
                <p className="text-2xl font-bold text-[#473322]">500+</p>
              </div>
              <div className="w-12 h-12 bg-[#E6B17E]/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600 mb-1">Total Kata</p>
                <p className="text-2xl font-bold text-[#473322]">6,847</p>
              </div>
              <div className="w-12 h-12 bg-[#E6B17E]/20 rounded-xl flex items-center justify-center">
                <BookIcon />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600 mb-1">Minggu Ini</p>
                <p className="text-2xl font-bold text-[#473322]">124</p>
              </div>
              <div className="w-12 h-12 bg-[#E6B17E]/20 rounded-xl flex items-center justify-center">
                <CalendarIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Time Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            {[
              { value: "all", label: "Sepanjang Masa" },
              { value: "month", label: "Bulan Ini" },
              { value: "week", label: "Minggu Ini" },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setTimeFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  timeFilter === filter.value
                    ? "bg-[#FF8D28] text-white shadow-md"
                    : "text-zinc-600 hover:text-[#FF8D28]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#473322] text-center mb-8">
            🥇 Hall of Fame
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Second Place */}
            <div className="md:order-1 order-2">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-2">
                    {topContributors[1].avatar}
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <MedalIcon rank={2} />
                  </div>
                </div>
                <h3 className="font-bold text-[#473322] text-lg mb-1">
                  {topContributors[1].username}
                </h3>
                <p className="text-sm text-zinc-600 mb-2">
                  {topContributors[1].nagari}
                </p>
                <div className="text-3xl font-bold text-[#FF8D28] mb-2">
                  {topContributors[1].wordCount.toLocaleString()}
                </div>
                <p className="text-sm text-zinc-600">kata</p>
                <div className="flex justify-center mt-3">
                  {Array.from({ length: getStars(2) }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* First Place */}
            <div className="md:order-2 order-1">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 text-white p-2 rounded-full">
                    <CrownIcon />
                  </div>
                </div>
                <div className="relative mb-4 mt-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-2">
                    {topContributors[0].avatar}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    CHAMPION
                  </div>
                </div>
                <h3 className="font-bold text-[#473322] text-xl mb-1">
                  {topContributors[0].username}
                </h3>
                <p className="text-sm text-zinc-600 mb-2">
                  {topContributors[0].nagari}
                </p>
                <div className="text-4xl font-bold text-[#FF8D28] mb-2">
                  {topContributors[0].wordCount.toLocaleString()}
                </div>
                <p className="text-sm text-zinc-600">kata</p>
                <div className="flex justify-center mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* Third Place */}
            <div className="md:order-3 order-3">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-2">
                    {topContributors[2].avatar}
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <MedalIcon rank={3} />
                  </div>
                </div>
                <h3 className="font-bold text-[#473322] text-lg mb-1">
                  {topContributors[2].username}
                </h3>
                <p className="text-sm text-zinc-600 mb-2">
                  {topContributors[2].nagari}
                </p>
                <div className="text-3xl font-bold text-[#FF8D28] mb-2">
                  {topContributors[2].wordCount.toLocaleString()}
                </div>
                <p className="text-sm text-zinc-600">kata</p>
                <div className="flex justify-center mt-3">
                  {Array.from({ length: getStars(3) }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#E6B17E] to-[#FF8D28] px-6 py-4">
            <h2 className="text-xl font-bold text-white">
              📊 Daftar Lengkap Kontributor Teratas
            </h2>
          </div>

          <div className="divide-y divide-zinc-200">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className={`p-4 sm:p-6 hover:bg-zinc-50 transition-colors ${
                  index < 3
                    ? "bg-gradient-to-r from-yellow-50 to-orange-50"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Rank */}
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                      {getRankIcon(contributor.rank)}
                    </div>

                    {/* Avatar & Info */}
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          contributor.rank === 1
                            ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                            : contributor.rank === 2
                              ? "bg-gradient-to-br from-gray-400 to-gray-600"
                              : contributor.rank === 3
                                ? "bg-gradient-to-br from-amber-600 to-amber-800"
                                : "bg-gradient-to-br from-[#E6B17E] to-[#FF8D28]"
                        }`}
                      >
                        {contributor.avatar}
                      </div>

                      <div>
                        <h3 className="font-bold text-[#473322] text-lg">
                          {contributor.username}
                        </h3>
                        <p className="text-sm text-zinc-600">
                          {contributor.fullName} • {contributor.nagari}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(contributor.badge)}`}
                          >
                            {contributor.badge}
                          </span>
                          <div className="flex">
                            {Array.from({
                              length: getStars(contributor.rank),
                            }).map((_, i) => (
                              <StarIcon key={i} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-bold text-[#FF8D28] mb-1">
                      {contributor.wordCount.toLocaleString()}
                    </div>
                    <p className="text-sm text-zinc-600 mb-2">
                      kata dikontribusikan
                    </p>
                    <p className="text-xs text-zinc-500">
                      Bergabung:{" "}
                      {new Date(contributor.joinDate).toLocaleDateString(
                        "id-ID",
                      )}
                    </p>
                  </div>
                </div>

                {/* Recent Words */}
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <p className="text-sm text-zinc-600 mb-2">
                    Kata-kata terbaru:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {contributor.recentWords.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="px-3 py-1 bg-[#E6B17E]/20 text-[#473322] rounded-full text-sm font-medium"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#E6B17E]/20 to-[#FF8D28]/20 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-[#473322] mb-4">
              🚀 Ingin Bergabung di Leaderboard?
            </h3>
            <p className="text-zinc-600 mb-6 max-w-2xl mx-auto">
              Mulai berkontribusi sekarang dan jadilah bagian dari komunitas
              pelestari bahasa Minangkabau. Setiap kata yang Anda sumbangkan
              akan membantu generasi mendatang mengenal warisan budaya kita.
            </p>
            <button className="bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
              🌟 Mulai Berkontribusi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
