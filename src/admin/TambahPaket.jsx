import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahPaket = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();

  // Handle file upload
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  // Handle form submission
  const handleSave = async () => {
    if (!name || !description || !price || !photo) {
      alert("Semua field harus diisi!");
      return;
    }

    if (price <= 0) {
      alert("Harga harus lebih besar dari 0!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("photo", photo);

    try {
      await axios.post("http://localhost:3000/paket", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Paket berhasil ditambahkan!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan paket!");
    }
  };

  // Handle cancel button
  //   const handleCancel = () => {
  //     navigate("/dashboardadmin"); // Redirect ke halaman dashboard admin
  //   };

  return (
    <div className="max-w-md mx-auto p-8 bg-green-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Tambah Data Paket</h2>

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
            type="number"
            placeholder="Masukan Harga Paket"
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

        <div className="flex justify-end gap-x-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahPaket;
