import React, { useState } from "react";
import axios from "axios";

const TambahPaket = ({ onClose }) => {
  const [namaPaket, setNamaPaket] = useState("");
  const [harga, setHarga] = useState("");
  const [variasiBibit, setVariasiBibit] = useState("");
  const [fitur, setFitur] = useState("");
  const [detail, setDetail] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSave = async () => {
    if (!namaPaket || !harga || !variasiBibit || !fitur || !detail || !photo) {
      alert("Semua field harus diisi!");
      return;
    }

    const formData = new FormData();
    formData.append("nama_paket", namaPaket);
    formData.append("harga", harga);
    formData.append("variasi_bibit", variasiBibit);
    formData.append("fitur", fitur);
    formData.append("detail", detail);
    formData.append("photo", photo);

    try {
      await axios.post("http://localhost:3000/data_paket", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Paket berhasil ditambahkan!");
      onClose();
    } catch (error) {
      console.error("Error adding package:", error);
      alert("Gagal menambahkan paket!");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-green-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Tambah Data Paket</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Nama Paket</label>
          <input
            type="text"
            placeholder="Masukkan Nama Paket"
            value={namaPaket}
            onChange={(e) => setNamaPaket(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Harga</label>
          <input
            type="number"
            placeholder="Masukkan Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Variasi Bibit</label>
          <input
            type="text"
            placeholder="Masukkan Variasi Bibit"
            value={variasiBibit}
            onChange={(e) => setVariasiBibit(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Fitur</label>
          <input
            type="text"
            placeholder="Masukkan Fitur Paket"
            value={fitur}
            onChange={(e) => setFitur(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Detail</label>
          <textarea
            placeholder="Masukkan Detail Paket"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Gambar</label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahPaket;
