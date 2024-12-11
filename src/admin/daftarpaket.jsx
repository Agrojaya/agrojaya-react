import React, { useEffect, useState } from "react";
import { FaEllipsisV, FaTrash, FaEdit } from "react-icons/fa";
import TambahPaket from "./TambahPaket";
import UbahPaket from "./UbahPaket";

const DaftarPaket = () => {
  const [packages, setPackages] = useState([]); // State untuk menyimpan data paket
  const [showTambahPaket, setShowTambahPaket] = useState(false); // State untuk modal tambah paket
  const [showUbahPaket, setShowUbahPaket] = useState(false); // State untuk modal ubah paket
  const [activeMenu, setActiveMenu] = useState(null); // State untuk menyimpan ID menu aktif
  const [selectedPaket, setSelectedPaket] = useState(null); // Paket yang dipilih untuk diedit

  // Fetch data paket dari backend
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("http://localhost:3000/data_paket");
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  // Toggle modal tambah paket
  const toggleTambahPaket = () => setShowTambahPaket(!showTambahPaket);

  // Toggle menu titik tiga
  const handleMenuToggle = (id) =>
    setActiveMenu((prev) => (prev === id ? null : id));

  // Fungsi untuk membuka form edit
  const handleEdit = (paket) => {
    setSelectedPaket(paket);
    setShowUbahPaket(true);
    setActiveMenu(null);
  };

  // Fungsi untuk menghapus paket
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/data_paket/${id}`, { method: "DELETE" });
      setPackages(packages.filter((pkg) => pkg.id !== id));
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-green-100">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Daftar Paket</h1>
        <div className="bg-white rounded-lg shadow p-4">
          <table className="w-full">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Deskripsi</th>
                <th className="px-4 py-2">Harga</th>
                <th className="px-4 py-2">Gambar</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id} className="bg-green-50">
                  <td className="px-4 py-2 font-semibold">{pkg.name}</td>
                  <td className="px-4 py-2 text-gray-700">{pkg.description}</td>
                  <td className="px-4 py-2 font-semibold">{pkg.price}</td>
                  <td className="px-4 py-2">
                    <img
                      src={pkg.photo}
                      alt={pkg.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 relative">
                    <FaEllipsisV
                      className="text-gray-600 cursor-pointer"
                      onClick={() => handleMenuToggle(pkg.id)}
                    />
                    {activeMenu === pkg.id && (
                      <div className="absolute right-0 top-6 bg-white border rounded-lg shadow-lg w-24">
                        <button
                          className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => handleEdit(pkg)}
                        >
                          <FaEdit className="mr-2" />
                          Edit
                        </button>
                        <button
                          className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                          onClick={() => handleDelete(pkg.id)}
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
        <div className="flex justify-end mt-4">
          <button
            onClick={toggleTambahPaket}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Tambah Paket
          </button>
        </div>
      </main>

      {/* Modal Tambah Paket */}
      {showTambahPaket && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <button
              onClick={toggleTambahPaket}
              className="absolute top-2 right-2 text-gray-500 text-xl"
            >
              &times;
            </button>
            <TambahPaket onClose={toggleTambahPaket} />
          </div>
        </div>
      )}

      {/* Modal Ubah Paket */}
      {showUbahPaket && selectedPaket && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <button
              onClick={() => setShowUbahPaket(false)}
              className="absolute top-2 right-2 text-gray-500 text-xl"
            >
              &times;
            </button>
            <UbahPaket
              paketData={selectedPaket}
              onClose={() => setShowUbahPaket(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DaftarPaket;
