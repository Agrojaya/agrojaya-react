import React, { useState, useEffect } from "react";
import axios from "axios";

const UbahPaket = ({ onClose, paketData }) => {
  const [name, setName] = useState(paketData?.name || "");
  const [description, setDescription] = useState(paketData?.description || "");
  const [price, setPrice] = useState(paketData?.price || "");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleSave = async () => {
    if (!name || !description || !price) {
      alert("Semua field harus diisi!");
      return;
    }

    if (isNaN(price)) {
      alert("Harga harus berupa angka!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    if (photo) {
      formData.append("photo", photo);
    }

    setLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:3000/data_paket/${paketData.id}`, // Perbaiki URL endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.msg || "Paket berhasil diubah!");
      onClose();
    } catch (error) {
      console.error("Error: ", error);
      alert("Gagal mengubah paket!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (paketData) {
      setName(paketData.name);
      setDescription(paketData.description);
      setPrice(paketData.price);
    }
  }, [paketData]);

  return (
    <div className="max-w-md mx-auto p-8 bg-green-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Ubah Data Paket</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Nama Paket</label>
          <input
            type="text"
            placeholder="Masukan Nama Paket"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Deskripsi Paket</label>
          <textarea
            placeholder="Masukan Deskripsi Paket"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Harga</label>
          <input
            type="text"
            placeholder="Rp 150.000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Gambar</label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Simpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UbahPaket;
