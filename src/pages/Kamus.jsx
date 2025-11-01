import { useState, useMemo } from "react";
import { BookOpen } from "lucide-react";

// Icon Components
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

const SpeakerIcon = () => (
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
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const ChevronDownIcon = () => (
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
    <polyline points="6,9 12,15 18,9"></polyline>
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

const FilterIcon = () => (
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
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon>
  </svg>
);

const MapPinIcon = () => (
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
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

function Kamus() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedWord, setExpandedWord] = useState(null);
  const [sortBy, setSortBy] = useState("alphabetical");

  // Mock dictionary data
  const dictionaryData = [
    {
      id: 1,
      indonesian: "Air",
      category: "kata_benda",
      pronunciation: "/a.ir/",
      definition:
        "Benda cair seperti yang biasa diminum, dipakai untuk mandi, mencuci, dan sebagainya.",
      dialects: [
        { region: "Padang", word: "Aia", pronunciation: "/a.ia/" },
        { region: "Bukittinggi", word: "Aia", pronunciation: "/a.ia/" },
        { region: "Payakumbuh", word: "Aia", pronunciation: "/a.ia/" },
        { region: "Solok", word: "Aia", pronunciation: "/a.ia/" },
      ],
      examples: [
        "Aia di sumua sangat jernih",
        "Minum aia supayo sehat",
        "Aia hujan mambasahi bumi",
      ],
      synonyms: ["cairan", "liquid"],
      etymology: "Dari bahasa Proto-Melayu *air",
      difficulty: "mudah",
      frequency: "tinggi",
    },
    {
      id: 2,
      indonesian: "Makan",
      category: "kata_kerja",
      pronunciation: "/ma.kan/",
      definition:
        "Memasukkan makanan ke dalam mulut serta mengunyah dan menelannya.",
      dialects: [
        { region: "Padang", word: "Makan", pronunciation: "/ma.kan/" },
        { region: "Bukittinggi", word: "Makan", pronunciation: "/ma.kan/" },
        { region: "Payakumbuh", word: "Makan", pronunciation: "/ma.kan/" },
        { region: "Solok", word: "Makan", pronunciation: "/ma.kan/" },
      ],
      examples: [
        "Awak lah makan nasi",
        "Makan bersama keluarga",
        "Jam makan di rumah",
      ],
      synonyms: ["santap", "konsumsi"],
      etymology: "Dari bahasa Proto-Melayu *makan",
      difficulty: "mudah",
      frequency: "tinggi",
    },
    {
      id: 3,
      indonesian: "Pergi",
      category: "kata_kerja",
      pronunciation: "/per.gi/",
      definition: "Meninggalkan tempat; berangkat; berjalan meninggalkan.",
      dialects: [
        { region: "Padang", word: "Pai", pronunciation: "/pai/" },
        { region: "Bukittinggi", word: "Pai", pronunciation: "/pai/" },
        { region: "Payakumbuh", word: "Pai", pronunciation: "/pai/" },
        { region: "Solok", word: "Pai", pronunciation: "/pai/" },
      ],
      examples: [
        "Awak pai ka pasar",
        "Pai jo hati-hati",
        "Kapan pai ka rumah?",
      ],
      synonyms: ["berangkat", "tolak"],
      etymology: "Dari bahasa Proto-Melayu *pərgi",
      difficulty: "mudah",
      frequency: "tinggi",
    },
    {
      id: 4,
      indonesian: "Indah",
      category: "kata_sifat",
      pronunciation: "/in.dah/",
      definition: "Elok rupanya; molek; cantik; bagus benar.",
      dialects: [
        { region: "Padang", word: "Rancak", pronunciation: "/ran.cak/" },
        { region: "Bukittinggi", word: "Rancak", pronunciation: "/ran.cak/" },
        { region: "Payakumbuh", word: "Elok", pronunciation: "/e.lok/" },
        { region: "Solok", word: "Rancak", pronunciation: "/ran.cak/" },
      ],
      examples: [
        "Pemandangan tu rancak bana",
        "Gadis tu rancak rupanyo",
        "Rumah gadang rancak bana",
      ],
      synonyms: ["cantik", "elok", "bagus"],
      etymology: "Rancak dari bahasa Minang kuno",
      difficulty: "sedang",
      frequency: "sedang",
    },
    {
      id: 5,
      indonesian: "Rumah",
      category: "kata_benda",
      pronunciation: "/ru.mah/",
      definition: "Bangunan untuk tempat tinggal keluarga.",
      dialects: [
        { region: "Padang", word: "Rumah", pronunciation: "/ru.mah/" },
        { region: "Bukittinggi", word: "Rumah", pronunciation: "/ru.mah/" },
        { region: "Payakumbuh", word: "Rumah", pronunciation: "/ru.mah/" },
        { region: "Solok", word: "Rumah", pronunciation: "/ru.mah/" },
      ],
      examples: [
        "Rumah gadang di kampuang",
        "Pulang ka rumah",
        "Rumah tuo di nagari",
      ],
      synonyms: ["hunian", "tempat tinggal"],
      etymology: "Dari bahasa Proto-Melayu *rumah",
      difficulty: "mudah",
      frequency: "tinggi",
    },
    {
      id: 6,
      indonesian: "Besar",
      category: "kata_sifat",
      pronunciation: "/be.sar/",
      definition: "Lebih dari ukuran sedang; lawan dari kecil.",
      dialects: [
        { region: "Padang", word: "Gadang", pronunciation: "/ga.dang/" },
        { region: "Bukittinggi", word: "Gadang", pronunciation: "/ga.dang/" },
        { region: "Payakumbuh", word: "Besar", pronunciation: "/be.sar/" },
        { region: "Solok", word: "Gadang", pronunciation: "/ga.dang/" },
      ],
      examples: [
        "Rumah gadang di kampuang",
        "Pohon gadang di halaman",
        "Ikan gadang di sungai",
      ],
      synonyms: ["besar", "gede"],
      etymology: "Gadang dari bahasa Minang asli",
      difficulty: "mudah",
      frequency: "tinggi",
    },
    {
      id: 7,
      indonesian: "Kecil",
      category: "kata_sifat",
      pronunciation: "/ke.cil/",
      definition: "Tidak besar; berukuran lebih kecil dari biasa.",
      dialects: [
        { region: "Padang", word: "Ketek", pronunciation: "/ke.tek/" },
        { region: "Bukittinggi", word: "Ketek", pronunciation: "/ke.tek/" },
        { region: "Payakumbuh", word: "Ketek", pronunciation: "/ke.tek/" },
        { region: "Solok", word: "Ciek", pronunciation: "/ci.ek/" },
      ],
      examples: [
        "Anak ketek di siko",
        "Rumah ketek di ujuang",
        "Buah ketek di pokoknyo",
      ],
      synonyms: ["kecil", "kecik"],
      etymology: "Ketek dari evolusi kata kecil",
      difficulty: "mudah",
      frequency: "tinggi",
    },
    {
      id: 8,
      indonesian: "Minum",
      category: "kata_kerja",
      pronunciation: "/mi.num/",
      definition:
        "Memasukkan air atau benda cair ke dalam mulut dan meneguknya.",
      dialects: [
        { region: "Padang", word: "Minum", pronunciation: "/mi.num/" },
        { region: "Bukittinggi", word: "Minum", pronunciation: "/mi.num/" },
        { region: "Payakumbuh", word: "Minum", pronunciation: "/mi.num/" },
        { region: "Solok", word: "Tenggak", pronunciation: "/teng.gak/" },
      ],
      examples: ["Minum aia es", "Minum kopi pagi", "Minum teh hangat"],
      synonyms: ["teguk", "hirup"],
      etymology: "Dari bahasa Proto-Melayu *minum",
      difficulty: "mudah",
      frequency: "tinggi",
    },
  ];

  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "kata_benda", label: "Kata Benda" },
    { value: "kata_kerja", label: "Kata Kerja" },
    { value: "kata_sifat", label: "Kata Sifat" },
    { value: "kata_bilangan", label: "Kata Bilangan" },
    { value: "kata_ganti", label: "Kata Ganti" },
  ];

  const sortOptions = [
    { value: "alphabetical", label: "A-Z" },
    { value: "frequency", label: "Populer" },
    { value: "difficulty", label: "Tingkat Kesulitan" },
  ];

  // Filter and sort dictionary data
  const filteredData = useMemo(() => {
    let filtered = dictionaryData.filter(
      (word) =>
        word.indonesian.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.dialects.some((dialect) =>
          dialect.word.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    );

    if (selectedCategory !== "all") {
      filtered = filtered.filter((word) => word.category === selectedCategory);
    }

    // Sort data
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "alphabetical":
          return a.indonesian.localeCompare(b.indonesian);
        case "frequency":
          const frequencyOrder = { tinggi: 3, sedang: 2, rendah: 1 };
          return frequencyOrder[b.frequency] - frequencyOrder[a.frequency];
        case "difficulty":
          const difficultyOrder = { mudah: 1, sedang: 2, sulit: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const getCategoryColor = (category) => {
    const colors = {
      kata_benda: "bg-blue-100 text-blue-800",
      kata_kerja: "bg-green-100 text-green-800",
      kata_sifat: "bg-purple-100 text-purple-800",
      kata_bilangan: "bg-orange-100 text-orange-800",
      kata_ganti: "bg-pink-100 text-pink-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      mudah: "bg-green-100 text-green-800",
      sedang: "bg-yellow-100 text-yellow-800",
      sulit: "bg-red-100 text-red-800",
    };
    return colors[difficulty] || "bg-gray-100 text-gray-800";
  };

  const formatCategory = (category) => {
    const labels = {
      kata_benda: "Kata Benda",
      kata_kerja: "Kata Kerja",
      kata_sifat: "Kata Sifat",
      kata_bilangan: "Kata Bilangan",
      kata_ganti: "Kata Ganti",
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Icon box */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FF8D28]/10 border border-[#FF8D28]/30 mb-6">
            <BookOpen className="w-8 h-8 text-[#FF8D28]" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#473322] mb-3 tracking-tight">
            Kamus <span className="text-[#FF8D28]">MinangLanguage</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#5A4A3A]/80 max-w-2xl mx-auto leading-relaxed">
            Jelajahi kosakata dan dialek Minangkabau dari berbagai nagari di
            Sumatera Barat. Kontribusi Anda membantu bahasa kita tetap hidup.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari kata dalam bahasa Indonesia atau Minang..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 md:h-14 pl-12 pr-4 rounded-full border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-transparent text-sm md:text-base text-black placeholder-zinc-500"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="flex items-center text-sm font-semibold text-[#473322] mb-3">
                <FilterIcon className="w-4 h-4 mr-2 text-[#FF8D28]" />
                Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm text-[#473322] bg-white shadow-sm transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="flex items-center text-sm font-semibold text-[#473322] mb-3">
                <span className="text-[#FF8D28] mr-2">📊</span>
                Urutkan
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm text-[#473322] bg-white shadow-sm transition-all duration-200"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <div className="bg-gradient-to-r from-[#E6B17E]/20 to-[#FF8D28]/10 rounded-xl p-4 w-full border border-[#E6B17E]/30">
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#FF8D28] mr-2">
                    {filteredData.length}
                  </span>
                  <span className="text-sm font-medium text-[#473322]">
                    kata ditemukan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dictionary Entries */}
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#473322] mb-2">
                Kata tidak ditemukan
              </h3>
              <p className="text-zinc-600">
                Coba gunakan kata kunci lain atau periksa ejaan Anda
              </p>
            </div>
          ) : (
            filteredData.map((word) => (
              <div
                key={word.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Word Header */}
                <div
                  className="p-4 sm:p-6 cursor-pointer hover:bg-zinc-50 transition-colors"
                  onClick={() =>
                    setExpandedWord(expandedWord === word.id ? null : word.id)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#473322]">
                          {word.indonesian}
                        </h3>
                        <span className="text-sm text-zinc-500 font-mono">
                          {word.pronunciation}
                        </span>
                        <button className="text-zinc-400 hover:text-[#FF8D28] transition-colors">
                          <SpeakerIcon />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(word.category)}`}
                        >
                          {formatCategory(word.category)}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(word.difficulty)}`}
                        >
                          {word.difficulty}
                        </span>
                        <span className="text-xs text-zinc-500">
                          Frekuensi: {word.frequency}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                        {word.definition}
                      </p>
                    </div>

                    <div className="ml-4">
                      <div
                        className={`transform transition-transform ${expandedWord === word.id ? "rotate-180" : ""}`}
                      >
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedWord === word.id && (
                  <div className="border-t border-zinc-200 p-4 sm:p-6 bg-zinc-50">
                    {/* Dialects */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-[#473322] mb-4 flex items-center">
                        <MapPinIcon className="mr-2" />
                        Dialek Daerah
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {word.dialects.map((dialect, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-xl p-4 shadow-sm border border-zinc-200"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-semibold text-[#473322]">
                                {dialect.region}
                              </h5>
                              <button className="text-zinc-400 hover:text-[#FF8D28] transition-colors">
                                <SpeakerIcon />
                              </button>
                            </div>
                            <p className="text-lg font-bold text-[#FF8D28] mb-1">
                              {dialect.word}
                            </p>
                            <p className="text-sm text-zinc-500 font-mono">
                              {dialect.pronunciation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Examples */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-[#473322] mb-3">
                        💬 Contoh Penggunaan
                      </h4>
                      <div className="space-y-2">
                        {word.examples.map((example, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-lg p-3 border border-zinc-200"
                          >
                            <p className="text-[#473322] italic">"{example}"</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Synonyms */}
                      <div>
                        <h4 className="text-lg font-bold text-[#473322] mb-3">
                          🔗 Sinonim
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {word.synonyms.map((synonym, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#E6B17E]/20 text-[#473322] rounded-full text-sm"
                            >
                              {synonym}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Etymology */}
                      <div>
                        <h4 className="text-lg font-bold text-[#473322] mb-3">
                          📖 Etimologi
                        </h4>
                        <p className="text-sm text-zinc-700 bg-white rounded-lg p-3 border border-zinc-200">
                          {word.etymology}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Pagination or Load More */}
        {filteredData.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Kamus;
