import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

const DaftarPaket = () => {
  const [packages, setPackages] = useState([]);

  // Fetch packages from the backend
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:3000/data_paket'); // Make sure the URL matches your backend API
        const data = await response.json();
        setPackages(data); // Set packages data from the API response
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

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
                  className={`${index % 2 === 0 ? "bg-green-50" : "bg-green-100"}`}
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
                        src={pkg.photo} // Make sure 'photo' key is correct in your data
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
