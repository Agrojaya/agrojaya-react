import axios from "axios";
import React, { useState } from "react";

const TambahArtikel = ({ onClose }) => {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [isi, setIsi] = useState("");
  const [photo, setPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Hanya file gambar yang diperbolehkan!");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewPhoto(null);
    }
  };

  // Fungsi untuk mengubah format tanggal menjadi DD, MM, YYYY
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}, ${month}, ${year}`;
  };

  const handleSimpan = async () => {
    if (isSubmitting) return;
    if (!judul || !penulis || !tanggal || !isi || !photo) {
      alert("Semua field harus diisi!");
      return;
    }

    // Format tanggal sebelum dikirim
    const formattedDate = formatDate(tanggal);

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("penulis", penulis);
    formData.append("tanggal", formattedDate); // Tanggal sudah diformat menjadi DD, MM, YYYY
    formData.append("isi", isi);
    formData.append("photo", photo);

    try {
      setIsSubmitting(true);
  
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/artikel`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const result = await response.json();
      setIsSubmitting(false);

      if (response.ok) {
        alert(result.msg || "Artikel berhasil disimpan!");
        onClose();
      } else {
        alert(result.msg || "Gagal menyimpan artikel.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Tambah Artikel Baru
      </h2>
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
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="penulis"
        >
          Penulis
        </label>
        <input
          type="text"
          id="penulis"
          value={penulis}
          onChange={(e) => setPenulis(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tanggal"
        >
          Tanggal
        </label>
        <input
          type="date"
          id="tanggal"
          value={tanggal}
          onChange={(e) => setTanggal(e.target.value)}
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
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          rows="6"
          className="w-full p-4 border border-gray-300 rounded-md mb-4"
        ></textarea>

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="photo"
        >
          Upload Photo
        </label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handlePhotoChange}
          className="mb-4"
        />

        {previewPhoto && (
          <div className="mb-4">
            <img
              src={previewPhoto}
              alt="Preview"
              className="w-40 h-40 object-cover"
            />
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-yellow-400 text-white rounded-md"
          >
            Kembali
          </button>
          <button
            onClick={handleSimpan}
            className="px-6 py-2 bg-green-600 text-white rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahArtikel;
