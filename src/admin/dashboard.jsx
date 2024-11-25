import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaPrint, FaSearch } from "react-icons/fa";

const AdminDashboard = ({ activeSection }) => {
  const [activities, setActivities] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Mengambil data aktivitas user
    axios.get('http://localhost:3000/activities', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then((response) => {
        setActivities(response.data.activities);
      })
      .catch((error) => {
        console.error("Error fetching user activities:", error);
      });

    // Mengambil data transaksi
      axios.get('http://localhost:3000/transactions', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((response) => {
          console.log("Transactions Data:", response.data); // Tambahkan log
          setTransactions(response.data.transactions);
        })
        .catch((error) => {
          console.error("Error fetching transactions:", error);
        });
    }, []);
    

  return (
    <div>
      {/* Conditional Content Rendering */}
      {activeSection === "dashboard" && (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Sri Rahayu, Selamat Datang kembali! {/*pakai first_name dan last_name dari user admin yang sedang login */}
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
              {activities.map((activity) => (
                <li key={activity.id} className="flex items-center mb-4">
                  <img
                    src="src/assets/images/pp.png"
                    alt="User"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{activity.username}</p>
                    <p className="text-gray-500 text-sm">Membuat Pesanan</p>{/*pakai data dari database berdasarkan status dari transactions */}
                  </div>
                </li>
              ))}
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
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="px-4 py-2">{transaction.invoice_number}</td>
                      <td className="px-4 py-2">{transaction.username}</td>
                      <td className="px-4 py-2">{transaction.package_name}</td>
                      <td className="px-4 py-2">Rp {transaction.price}</td>
                      <td className="px-4 py-2 text-green-600">{transaction.status}</td>
                    </tr>
                  ))}
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
