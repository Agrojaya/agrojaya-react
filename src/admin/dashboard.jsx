import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPrint, FaSearch } from "react-icons/fa";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ activeSection = "dashboard" }) => {
  const [activities, setActivities] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [admin, setAdmin] = useState({ username: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch data saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          alert("Token tidak ditemukan, silakan login kembali.");
          navigate("/login");
          return;
        }

        setLoading(true);

        const headers = { Authorization: `Bearer ${token}` };

        const [activityRes, transactionRes, adminRes] = await Promise.all([
          axios.get("http://localhost:3000/activities", { headers }),
          axios.get("http://localhost:3000/transaksi", { headers }),
          axios.get("http://localhost:3000/loginadmin", { headers }),
        ]);

        setActivities(activityRes.data.activities || []);
        setTransactions(transactionRes.data.transaksi || []); // Perbaikan nama properti
        setAdmin(adminRes.data.admin || { username: "" });
      } catch (error) {
        console.error("Error fetching data:", error);
        alert(
          error.response?.data?.message || "Gagal memuat data, silakan coba lagi."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  // Export Data ke Excel
  const handleExportToExcel = () => {
    if (transactions.length === 0) {
      alert("Tidak ada transaksi untuk diekspor.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transaksi");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "transaksi.xlsx");
  };

  // Filter Transaksi Berdasarkan Pencarian
  const filteredTransactions = transactions.filter((transaction) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      transaction.username?.toLowerCase().includes(searchLower) ||
      transaction.invoice_number?.toLowerCase().includes(searchLower) ||
      transaction.package_name?.toLowerCase().includes(searchLower)
    );
  });

  if (loading) {
    return <div className="text-center py-10">Loading data...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Card */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {`Selamat Datang, ${admin.username}!`}
        </h2>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-3 gap-6">
        {/* Aktivitas Section */}
        <div className="col-span-1 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">Aktivitas</h3>
          <ul>
            {activities.length > 0 ? (
              activities.map((activity) => (
                <li key={activity.id} className="flex items-center mb-4">
                  <img
                    src="src/assets/images/pp.png"
                    alt="User"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {activity.username || "Unknown User"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {activity.action || "No Action"}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500">Tidak ada aktivitas.</p>
            )}
          </ul>
        </div>

        {/* Transaksi Section */}
        <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Daftar Transaksi</h3>
            <div className="flex items-center space-x-2">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari Transaksi"
                  className="p-2 pl-10 border rounded-full focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {/* Export Button */}
              <button
                className="p-2 bg-green-600 text-white rounded-md"
                onClick={handleExportToExcel}
              >
                <FaPrint />
              </button>
            </div>
          </div>

          {/* Transactions Table */}
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
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="px-4 py-2">
                        {transaction.invoice_number || "N/A"}
                      </td>
                      <td className="px-4 py-2">
                        {transaction.username || "N/A"}
                      </td>
                      <td className="px-4 py-2">
                        {transaction.package_name || "N/A"}
                      </td>
                      <td className="px-4 py-2">
                        Rp {transaction.price || "0"}
                      </td>
                      <td className="px-4 py-2 text-green-600">
                        {transaction.status || "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-500 py-4">
                      Tidak ada transaksi ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
