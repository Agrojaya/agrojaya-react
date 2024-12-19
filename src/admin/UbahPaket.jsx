import React, { useState, useEffect } from "react";
import axios from "axios";

const UbahPaket = ({ onClose, paketData }) => {
  const [namaPaket, setNamaPaket] = useState("");
  const [harga, setHarga] = useState("");
  const [variasiBibit, setVariasiBibit] = useState("");
  const [fitur, setFitur] = useState("");
  const [detail, setDetail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (paketData) {
      setNamaPaket(paketData.nama_paket);
      setHarga(paketData.harga);
      setVariasiBibit(paketData.variasi_bibit);
      setFitur(paketData.fitur);
      setDetail(paketData.detail);
    }
  }, [paketData]);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSave = async () => {
    if (!namaPaket || !harga || !variasiBibit || !fitur || !detail) {
      alert("Semua field harus diisi!");
      return;
    }

    const formData = new FormData();
    formData.append("nama_paket", namaPaket);
    formData.append("harga", harga);
    formData.append("variasi_bibit", variasiBibit);
    formData.append("fitur", fitur);
    formData.append("detail", detail);
    if (photo) formData.append("photo", photo);

    setLoading(true);

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/data_paket/${paketData.id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Paket berhasil diperbarui!");
      onClose();
    } catch (error) {
      console.error("Error updating package:", error);
      alert("Gagal memperbarui paket!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-green-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Ubah Data Paket</h2>
      <div className="space-y-4">
        <div>
          <label>Nama Paket</label>
          <input
            type="text"
            value={namaPaket}
            onChange={(e) => setNamaPaket(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label>Harga</label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label>Variasi Bibit</label>
          <input
            type="text"
            value={variasiBibit}
            onChange={(e) => setVariasiBibit(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label>Fitur</label>
          <input
            type="text"
            value={fitur}
            onChange={(e) => setFitur(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label>Detail</label>
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label>Gambar</label>
          <input type="file" onChange={handlePhotoChange} />
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className={`bg-green-600 text-white px-4 py-2 rounded ${
              loading ? "opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UbahPaket;
