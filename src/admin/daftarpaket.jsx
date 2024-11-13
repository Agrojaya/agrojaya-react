import React from "react";
import { FaSearch, FaEllipsisV } from "react-icons/fa";

const packages = [
  {
    name: "Paket Dasar",
    description:
      "Instalasi sederhana untuk kebun vertikal atau hidroponik kecil, termasuk 1-2 variasi tanaman sayuran atau herba, tanpa sistem irigasi",
    price: "Rp 150.000",
    image: "https://via.placeholder.com/80", // Replace with your image paths
  },
  {
    name: "Paket Menengah",
    description:
      "Instalasi sederhana untuk kebun vertikal atau hidroponik kecil, termasuk 1-2 variasi tanaman sayuran atau herba, tanpa sistem irigasi",
    price: "Rp 150.000",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Paket Lengkap",
    description:
      "Instalasi sederhana untuk kebun vertikal atau hidroponik kecil, termasuk 1-2 variasi tanaman sayuran atau herba, tanpa sistem irigasi",
    price: "Rp 150.000",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Paket Premium",
    description:
      "Instalasi sederhana untuk kebun vertikal atau hidroponik kecil, termasuk 1-2 variasi tanaman sayuran atau herba, tanpa sistem irigasi",
    price: "Rp 150.000",
    image: "https://via.placeholder.com/80",
  },
];

const DaftarPaket = () => {
  return (
    <div className="flex min-h-screen bg-green-100">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Package List Table */}
        <div className="bg-white rounded-lg shadow p-4">
          <table className="w-full">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Deskripsi</th>
                <th className="px-4 py-2">Harga</th>
                <th className="px-4 py-2">Gambar</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-green-50" : "bg-green-100"
                  }`}
                >
                  <td className="px-4 py-2 font-semibold">{pkg.name}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {pkg.description}{" "}
                    <a href="#" className="text-green-600">
                      selanjutnya
                    </a>
                  </td>
                  <td className="px-4 py-2 font-semibold">{pkg.price}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <FaEllipsisV className="ml-3 text-gray-600 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Button */}
        <div className="flex justify-end mt-4">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg">
            Tambah
          </button>
        </div>
      </main>
    </div>
  );
};

export default DaftarPaket;
