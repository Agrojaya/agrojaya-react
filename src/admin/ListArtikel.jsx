import React, { useEffect, useState } from "react";
import { FaEllipsisV, FaTrash, FaEdit } from "react-icons/fa";
import TambahArtikel from "./TambahArtikel";
import UbahArtikel from "./UbahArtikel"; // Import form edit artikel

const ListArtikel = () => {
  const [articles, setArticles] = useState([]); // State untuk menyimpan data artikel
  const [showTambahArtikel, setShowTambahArtikel] = useState(false); // State untuk modal tambah artikel
  const [showUbahArtikel, setShowUbahArtikel] = useState(false); // State untuk modal ubah artikel
  const [activeMenu, setActiveMenu] = useState(null); // State untuk menyimpan ID menu aktif
  const [selectedArtikel, setSelectedArtikel] = useState(null); // Artikel yang dipilih untuk diedit

  // Fetch data artikel dari backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/artikel"); // Ganti dengan URL backend
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Toggle modal tambah artikel
  const toggleTambahArtikel = () => {
    setShowTambahArtikel(!showTambahArtikel);
  };

  // Toggle menu titik tiga
  const handleMenuToggle = (id) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  // Fungsi untuk membuka form edit
  const handleEdit = (artikel) => {
    console.log("Editing article:", artikel); // Tambahkan log ini
    setSelectedArtikel(artikel); // Simpan data artikel yang akan diedit
    setShowUbahArtikel(true); // Buka modal ubah artikel
    setActiveMenu(null); // Tutup menu aktif
  };

  // Fungsi untuk menghapus artikel
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/artikel/${id}`, {
        method: "DELETE",
      });
      setArticles(articles.filter((art) => art.id !== id)); // Hapus data dari state
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-green-100">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Judul */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Daftar Artikel
        </h1>

        {/* Article List Table */}
        <div className="bg-white rounded-lg shadow p-4">
          <table className="w-full">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-2">Judul</th>
                <th className="px-4 py-2">Penulis</th>
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Isi</th>
                <th className="px-4 py-2">Foto</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((artikel, index) => (
                <tr
                  key={artikel.id}
                  className={`${
                    index % 2 === 0 ? "bg-green-50" : "bg-green-100"
                  }`}
                >
                  <td className="px-4 py-2 font-semibold">{artikel.judul}</td>
                  <td className="px-4 py-2 text-gray-700">{artikel.penulis}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {new Date(artikel.tanggal).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{artikel.isi}</td>
                  <td className="px-4 py-2">
                    <img
                      src={artikel.photo} // Pastikan URL gambar benar
                      alt={artikel.judul}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 relative">
                    <FaEllipsisV
                      className="text-gray-600 cursor-pointer"
                      onClick={() => handleMenuToggle(artikel.id)}
                    />
                    {activeMenu === artikel.id && (
                      <div className="absolute right-0 top-6 bg-white border rounded-lg shadow-lg w-24">
                        <button
                          className="flex items-center w-full px-4 py-2 text-blue-600 hover:bg-gray-100"
                          onClick={() => handleEdit(artikel)}
                        >
                          <FaEdit className="mr-2" />
                          Edit
                        </button>
                        <button
                          className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                          onClick={() => handleDelete(artikel.id)}
                        >
                          <FaTrash className="mr-2" />
                          Hapus
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tombol Tambah Artikel */}
        <div className="flex justify-end mt-4">
          <button
            onClick={toggleTambahArtikel}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Tambah Artikel
          </button>
        </div>
      </main>
      {/* Modal Tambah Artikel */}
      {showTambahArtikel && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <button
              onClick={toggleTambahArtikel}
              className="absolute top-2 right-2 text-gray-500 text-xl"
            >
              &times;
            </button>

            {/* Form Tambah Artikel */}
            <TambahArtikel onClose={toggleTambahArtikel} />
          </div>
        </div>
      )}
      {/* Modal Ubah Artikel */}
      {showUbahArtikel && selectedArtikel && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <button
              onClick={() => setShowUbahArtikel(false)}
              className="absolute top-2 right-2 text-gray-500 text-xl"
            >
              &times;
            </button>

            {/* Form Ubah Artikel */}
            <UbahArtikel
              articleData={selectedArtikel}
              onClose={() => setShowUbahArtikel(false)}
            />
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default ListArtikel;
