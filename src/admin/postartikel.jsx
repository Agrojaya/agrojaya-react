import React, { useState } from "react";

const TambahArtikel = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [jumlahKata, setJumlahKata] = useState(0);

  const handleIsiChange = (event) => {
    const text = event.target.value;
    setIsi(text);
    setJumlahKata(
      text
        .trim()
        .split(/\s+/)
        .filter((word) => word).length
    );
  };

  return (
    <div className="flex min-h-screen bg-green-100">
      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Tambah Artikel Baru
        </h2>

        {/* Form Tambah Artikel */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="judul"
          >
            Judul Artikel
          </label>
          <input
            type="text"
            id="judul"
            placeholder="Masukan Judul Artikel"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="isi"
          >
            Isi Artikel
          </label>
          <textarea
            id="isi"
            rows="10"
            placeholder="Tulis isi artikel di sini..."
            value={isi}
            onChange={handleIsiChange}
            className="w-full p-4 border border-gray-300 rounded-md mb-2 resize-none"
          ></textarea>
          <div className="text-right text-gray-500 text-sm mb-4">
            Jumlah Kata: {jumlahKata}
          </div>

          <div className="flex justify-end space-x-4">
            <button className="px-6 py-2 bg-yellow-400 text-white rounded-md">
              Kembali
            </button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-md">
              Simpan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TambahArtikel;
