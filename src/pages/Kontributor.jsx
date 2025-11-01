import { useState } from "react";

// Icon Components
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

function Kontributor() {
  const storedUser = (() => {
    try {
      return JSON.parse(localStorage.getItem("ml_auth_user"));
    } catch {
      return null;
    }
  })();

  const [formData, setFormData] = useState({
    indonesianWord: "",
    minangWord: "",
    category: "",
    pronunciation: "",
    definition: "",
    examples: ["", "", ""],
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      storedUser &&
      storedUser.region &&
      formData.nagari &&
      storedUser.region !== formData.nagari
    ) {
      alert("Anda hanya dapat berkontribusi untuk nagari/daerah Anda sendiri.");
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
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
            <div className="space-x-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    indonesianWord: "",
                    minangWord: "",
                    category: "",
                    pronunciation: "",
                    definition: "",
                    examples: ["", "", ""],
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] rounded-2xl mb-6">
            <BookIcon />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#473322] mb-4">
            📝 Kontribusi Kata Baru
          </h1>
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
            Bantu melestarikan bahasa Minangkabau dengan menambahkan kata-kata
            dari nagari Anda.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-[#473322] mb-6">
              Data Kata Utama
            </h2>
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
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
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
                  onChange={(e) =>
                    handleInputChange("definition", e.target.value)
                  }
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
          </div>

          <div className="flex justify-end pt-6 border-t border-zinc-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center ${
                isSubmitting
                  ? "bg-zinc-400 text-zinc-200 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#FF8D28] to-[#FF7A1A] text-white hover:shadow-lg hover:scale-105"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Mengirim...
                </span>
              ) : (
                "Tambah"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Kontributor;
