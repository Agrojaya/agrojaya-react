import React from "react";
import { FaSearch, FaPrint } from "react-icons/fa";

const AdminDashboard = ({ activeSection }) => {
  return (
    <div>
      {/* Conditional Content Rendering */}
      {activeSection === "dashboard" && (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Sri Rahayu, Selamat Datang kembali!
          </h2>
        </div>
      )}

      {/* Activity and Notification Sections */}
      {activeSection === "dashboard" && (
        <div className="grid grid-cols-3 gap-6">
          {/* Activity Section */}
          <div className="col-span-1 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Aktivitas</h3>
            <ul>
              <li className="flex items-center mb-4">
                <img
                  src="src/assets/images/pp.png"
                  alt="User"
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p className="text-gray-800 font-semibold">Aisyah Sadiah</p>
                  <p className="text-gray-500 text-sm">Membuat Pesanan</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Notification Section */}
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Notifikasi</h3>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className="p-2 bg-gray-300 rounded-md">
                  <FaPrint />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="px-4 py-2">Invoice</th>
                    <th className="px-4 py-2">User</th>
                    <th className="px-4 py-2">Paket</th>
                    <th className="px-4 py-2">Harga</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">001</td>
                    <td className="px-4 py-2">Aisyah Sadiah</td>
                    <td className="px-4 py-2">Paket Dasar</td>
                    <td className="px-4 py-2">Rp 500.000</td>
                    <td className="px-4 py-2 text-green-600">Proses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
