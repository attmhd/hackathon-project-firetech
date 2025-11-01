import { useState } from "react";

// Icon Components
const PlusIcon = () => (
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
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
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
  >
    <path d="M12 1v9"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

const CheckIcon = () => (
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
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);

const InfoIcon = () => (
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
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const MapPinIcon = () => (
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
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const UserIcon = () => (
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
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

function Kontributor() {
  const [formData, setFormData] = useState({
    contributorName: "",
    contributorEmail: "",
    nagari: "",
    indonesianWord: "",
    minangWord: "",
    category: "",
    pronunciation: "",
    definition: "",
    examples: ["", "", ""],
    etymology: "",
    difficulty: "",
    regionalVariants: [
      { region: "Padang", word: "", pronunciation: "" },
      { region: "Bukittinggi", word: "", pronunciation: "" },
      { region: "Payakumbuh", word: "", pronunciation: "" },
      { region: "Solok", word: "", pronunciation: "" },
    ],
    audioFile: null,
    notes: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { value: "", label: "Pilih Kategori" },
    { value: "kata_benda", label: "Kata Benda" },
    { value: "kata_kerja", label: "Kata Kerja" },
    { value: "kata_sifat", label: "Kata Sifat" },
    { value: "kata_bilangan", label: "Kata Bilangan" },
    { value: "kata_ganti", label: "Kata Ganti" },
    { value: "kata_keterangan", label: "Kata Keterangan" },
    { value: "kata_sambung", label: "Kata Sambung" },
  ];

  const difficulties = [
    { value: "", label: "Pilih Tingkat Kesulitan" },
    { value: "mudah", label: "Mudah - Sering digunakan sehari-hari" },
    { value: "sedang", label: "Sedang - Kadang digunakan" },
    { value: "sulit", label: "Sulit - Jarang digunakan atau arkais" },
  ];

  const nagariOptions = [
    "Padang",
    "Bukittinggi",
    "Payakumbuh",
    "Solok",
    "Sawahlunto",
    "Tanah Datar",
    "Agam",
    "Lima Puluh Kota",
    "Pasaman",
    "Pesisir Selatan",
    "Dharmasraya",
    "Sijunjung",
    "Mentawai",
    "Padang Pariaman",
    "Lainnya",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleExampleChange = (index, value) => {
    const newExamples = [...formData.examples];
    newExamples[index] = value;
    setFormData((prev) => ({
      ...prev,
      examples: newExamples,
    }));
  };

  const handleRegionalVariantChange = (index, field, value) => {
    const newVariants = [...formData.regionalVariants];
    newVariants[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      regionalVariants: newVariants,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getStepTitle = (step) => {
    const titles = {
      1: "Informasi Kontributor",
      2: "Data Kata Utama",
      3: "Variasi Regional",
      4: "Informasi Tambahan",
    };
    return titles[step];
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#473322] mb-4">
              🎉 Kontribusi Berhasil Dikirim!
            </h1>
            <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
              Terima kasih atas kontribusi Anda! Kata yang Anda sumbangkan akan
              diverifikasi oleh tim ahli bahasa kami sebelum ditambahkan ke
              kamus.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto mb-8">
              <h3 className="font-bold text-[#473322] mb-4">Langkah Selanjutnya:</h3>
              <ul className="text-left space-y-2 text-sm text-zinc-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF8D28] rounded-full mr-3"></span>
                  Verifikasi oleh ahli bahasa (2-3 hari)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF8D28] rounded-full mr-3"></span>
                  Notifikasi email status verifikasi
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF8D28] rounded-full mr-3"></span>
                  Kata ditambahkan ke kamus digital
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF8D28] rounded-full mr-3"></span>
                  Poin kontribusi ditambahkan ke akun
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    contributorName: "",
                    contributorEmail: "",
                    nagari: "",
                    indonesianWord: "",
                    minangWord: "",
                    category: "",
                    pronunciation: "",
                    definition: "",
                    examples: ["", "", ""],
                    etymology: "",
                    difficulty: "",
                    regionalVariants: [
                      { region: "Padang", word: "", pronunciation: "" },
                      { region: "Bukittinggi", word: "", pronunciation: "" },
                      { region: "Payakumbuh", word: "", pronunciation: "" },
                      { region: "Solok", word: "", pronunciation: "" },
                    ],
                    audioFile: null,
                    notes: "",
                  });
                }}
                className="bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Kontribusi Kata Lain
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-white text-[#473322] px-6 py-3 rounded-full font-bold border border-zinc-300 hover:shadow-lg transition-all duration-300"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] rounded-2xl mb-6">
            <BookIcon />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#473322] mb-4">
            📝 Kontribusi Kata Baru
          </h1>
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
            Bantu melestarikan bahasa Minangkabau dengan menambahkan kata-kata
            dari nagari Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Guidelines Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-[#473322] mb-4 flex items-center">
                <InfoIcon className="mr-2 text-[#FF8D28]" />
                Panduan Kontribusi
              </h3>

              <div className="space-y-4 text-sm">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    📋 Syarat Kata yang Baik
                  </h4>
                  <ul className="text-blue-700 space-y-1 text-xs">
                    <li>• Kata asli bahasa Minang</li>
                    <li>• Digunakan di nagari tertentu</li>
                    <li>• Memiliki padanan Indonesia</li>
                    <li>• Dapat dijelaskan dengan jelas</li>
                  </ul>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    ✅ Tips Mengisi Form
                  </h4>
                  <ul className="text-green-700 space-y-1 text-xs">
                    <li>• Gunakan ejaan yang konsisten</li>
                    <li>• Berikan contoh kalimat nyata</li>
                    <li>• Jelaskan konteks penggunaan</li>
                    <li>• Sertakan variasi regional</li>
                  </ul>
                </div>

                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    🎤 Audio (Opsional)
                  </h4>
                  <p className="text-orange-700 text-xs">
                    Rekam pelafalan untuk membantu pembelajaran yang lebih baik
                  </p>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-6 border-t border-zinc-200">
                <h4 className="font-semibold text-[#473322] mb-3">Progress</h4>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`flex items-center text-sm ${
                        step <= currentStep
                          ? "text-[#FF8D28]"
                          : "text-zinc-400"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs font-bold ${
                          step < currentStep
                            ? "bg-[#FF8D28] text-white"
                            : step === currentStep
                              ? "bg-[#FF8D28] text-white"
                              : "bg-zinc-200 text-zinc-400"
                        }`}
                      >
                        {step < currentStep ? "✓" : step}
                      </div>
                      <span className="text-xs">
                        {getStepTitle(step)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#473322] mb-2">
                    {getStepTitle(currentStep)}
                  </h2>
                  <div className="w-full bg-zinc-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Step 1: Contributor Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center text-sm font-semibold text-[#473322] mb-2">
                          <UserIcon className="w-4 h-4 mr-2 text-[#FF8D28]" />
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contributorName}
                          onChange={(e) =>
                            handleInputChange("contributorName", e.target.value)
                          }
                          className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                          placeholder="Masukkan nama lengkap Anda"
                        />
                      </div>

                      <div>
                        <label className="flex items-center text-sm font-semibold text-[#473322] mb-2">
                          📧 Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.contributorEmail}
                          onChange={(e) =>
                            handleInputChange("contributorEmail", e.target.value)
                          }
                          className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-semibold text-[#473322] mb-2">
                        <MapPinIcon className="w-4 h-4 mr-2 text-[#FF8D28]" />
                        Nagari/Daerah Asal *
                      </label>
                      <select
                        required
                        value={formData.nagari}
                        onChange={(e) => handleInputChange("nagari", e.target.value)}
                        className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                      >
                        <option value="">Pilih nagari/daerah asal Anda</option>
                        {nagariOptions.map((nagari) => (
                          <option key={nagari} value={nagari}>
                            {nagari}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Main Word Data */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#473322] mb-2">
                          Kata dalam Bahasa Indonesia *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.indonesianWord}
                          onChange={(e) =>
                            handleInputChange("indonesianWord", e.target.value)
                          }
                          className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                          placeholder="Contoh: rumah, makan, indah"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#473322] mb-2">
                          Kata dalam Bahasa Minang *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.minangWord}
                          onChange={(e) =>
                            handleInputChange("minangWord", e.target.value)
                          }
                          className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                          placeholder="Contoh: rumah, makan, rancak"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#473322] mb-2">
                          Kategori Kata *
                        </label>
                        <select
                          required
                          value={formData.category}
                          onChange={(e) => handleInputChange("category", e.target.value)}
                          className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                        >
                          {categories.map((category) => (
                            <option key={category.value} value={category.value}>
                              {category.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#473322] mb-2">
                          Pelafalan (Fonetik)
                        </label>
                        <input
                          type="text"
                          value={formData.pronunciation}
                          onChange={(e) =>
                            handleInputChange("pronunciation", e.target.value)
                          }
                          className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                          placeholder="Contoh: /ru.mah/, /ran.cak/"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#473322] mb-2">
                        Definisi/Penjelasan *
                      </label>
                      <textarea
                        required
                        value={formData.definition}
                        onChange={(e) => handleInputChange("definition", e.target.value)}
                        rows={4}
                        className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                        placeholder="Jelaskan arti kata ini dengan detail dan jelas..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#473322] mb-2">
                        Contoh Penggunaan dalam Kalimat
                      </label>
                      {formData.examples.map((example, index) => (
                        <input
                          key={index}
                          type="text"
                          value={example}
                          onChange={(e) => handleExampleChange(index, e.target.value)}
                          className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm mb-3"
                          placeholder={`Contoh kalimat ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Regional Variants */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-[#E6B17E]/10 rounded-xl p-4 mb-6">
                      <h3 className="font-semibold text-[#473322] mb-2">
                        Variasi Regional
                      </h3>
                      <p className="text-sm text-zinc-600">
                        Isi variasi kata ini di daerah-daerah lain jika Anda mengetahuinya.
                        Kosongkan jika tidak tahu.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {formData.regionalVariants.map((variant, index) => (
                        <div key={index} className="bg-zinc-50 rounded-xl p-4">
                          <h4 className="font-semibold text-[#473322] mb-3 flex items-center">
                            <MapPinIcon className="w-4 h-4 mr-2 text-[#FF8D28]" />
                            {variant.region}
                          </h4>
                          <div className="space-y-3">
                            <input
                              type="text"
                              value={variant.word}
                              onChange={(e) =>
                                handleRegionalVariantChange(index, "word", e.target.value)
                              }
                              className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8D28] text-sm"
                              placeholder={`Kata dalam dialek ${variant.region}`}
                            />
                            <input
                              type="text"
                              value={variant.pronunciation}
                              onChange={(e) =>
                                handleRegionalVariantChange(
                                  index,
                                  "pronunciation",
                                  e.target.value,
                                )
                              }
                              className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8D28] text-sm"
                              placeholder="Pelafalan"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Additional Information */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#473322] mb-2">
                        Tingkat Kesulitan
                      </label>
                      <select
                        value={formData.difficulty}
                        onChange={(e) => handleInputChange("difficulty", e.target.value)}
                        className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                      >
                        {difficulties.map((difficulty) => (
                          <option key={difficulty.value} value={difficulty.value}>
                            {difficulty.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#473322] mb-2">
                        Etimologi/Asal Kata
                      </label>
                      <textarea
                        value={formData.etymology}
                        onChange={(e) => handleInputChange("etymology", e.target.value)}
                        rows={3}
                        className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                        placeholder="Jelaskan asal-usul kata ini jika Anda mengetahuinya..."
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-semibold text-[#473322] mb-2">
                        <MicrophoneIcon className="w-4 h-4 mr-2 text-[#FF8D28]" />
                        File Audio Pelafalan (Opsional)
                      </label>
                      <div className="border-2 border-dashed border-zinc-300 rounded-xl p-6 text-center">
                        <MicrophoneIcon className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
                        <p className="text-sm text-zinc-600 mb-3">
                          Drag & drop file audio atau klik untuk memilih
                        </p>
                        <input
                          type="file"
                          accept="audio/*"
                          onChange={(e) => handleInputChange("audioFile", e.target.files[0])}
                          className="hidden"
                          id="audioFile"
                        />
                        <label
                          htmlFor="audioFile"
                          className="bg-[#E6B17E]/20 text-[#473322] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#E6B17E]/30 transition-colors text-sm"
                        >
                          Pilih File Audio
                        </label>
                        <p className="text-xs text-zinc-500 mt-2">
                          Format: MP3, WAV, M4A (Max: 5MB)
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#473322] mb-2">
                        Catatan Tambahan
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        rows={4}
                        className="w-full p-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8D28] focus:border-[#FF8D28] text-sm"
                        placeholder="Informasi tambahan, konteks khusus, atau hal lain yang ingin Anda sampaikan..."
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t border-zinc-200">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                      currentStep === 1
                        ? "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                        : "bg-white text-[#473322] border border-zinc-300 hover:shadow-lg"
                    }`}
                  >
                    ← Sebelumnya
                  </button>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Selanjutnya →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                        isSubmitting
                          ? "bg-zinc-400 text-zinc-200 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white hover:shadow-lg hover:scale-105"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim...
                        </span>
                      ) : (
                        "🚀 Kirim Kontribusi"
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontributor;
