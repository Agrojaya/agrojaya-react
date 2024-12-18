import React, { useState, useEffect } from "react";
import axios from "axios";

const UbahArtikel = ({ onClose, articleData }) => {
  const [judul, setJudul] = useState(articleData.judul || "");
  const [penulis, setPenulis] = useState(articleData.penulis || "");
  const [tanggal, setTanggal] = useState(articleData.tanggal || "");
  const [isi, setIsi] = useState(articleData.isi || "");
  const [photo, setPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleUpdate = async () => {
    if (!judul || !penulis || !tanggal || !isi) {
      alert("Semua field harus diisi!");
      return;
    }

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("penulis", penulis);
    formData.append("tanggal", tanggal);
    formData.append("isi", isi);
    if (photo) {
      formData.append("photo", photo);
    }

    setLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:3000/api/artikel/${articleData.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.msg || "Artikel berhasil diubah!");
      onClose();
    } catch (error) {
      console.error("Error: ", error);
      alert("Gagal mengubah artikel!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (articleData) {
      setJudul(articleData.judul);
      setPenulis(articleData.penulis);
      setTanggal(articleData.tanggal);
      setIsi(articleData.isi);
    }
  }, [articleData]);

  return (
    <div className="max-w-md mx-auto p-8 bg-green-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Artikel</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Judul Artikel</label>
          <input
            type="text"
            placeholder="Masukan Judul Artikel"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Penulis</label>
          <input
            type="text"
            placeholder="Masukan Nama Penulis"
            value={penulis}
            onChange={(e) => setPenulis(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb- 1">Tanggal</label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Isi Artikel</label>
          <textarea
            placeholder="Masukan Isi Artikel"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Upload Photo</label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {previewPhoto && (
          <div className="mb-4">
            <img
              src={previewPhoto}
              alt="Preview"
              className="w-40 h-40 object-cover"
            />
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
          >
            Batal
          </button>
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UbahArtikel;
