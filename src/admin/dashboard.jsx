/* eslint-disable no-unused-vars */
import axios from "axios";
import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPrint, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import EditTransactionModal from "./EditTransactionModal";

const AdminDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [admin, setAdmin] = useState({ username: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const navigate = useNavigate();

  // Fungsi untuk mengecek token
  const checkAuthToken = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Anda harus login terlebih dahulu.");
      navigate("/loginadmin");
      return false;
    }
    return true;
  };

  // Fetch data transaksi
  useEffect(() => {
    const fetchData = async () => {
      if (!(await checkAuthToken())) return;

      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");
        const headers = { Authorization: `Bearer ${token}` };

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/transaksi`,
          { headers }
        );

        setTransactions(response.data || []);
        setAdmin({ username: "Admin" }); // Gantilah dengan fetch data admin jika ada endpoint
      } catch (error) {
        console.error("Gagal memuat data transaksi:", error);
        // eslint-disable-next-line no-undef
        setError("Gagal memuat data transaksi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);
  

  // Fungsi Export ke Excel
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

  // Filter Transaksi
  const filteredTransactions = transactions.filter((transaction) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      transaction.order_id?.toLowerCase().includes(searchLower) ||
      transaction.uid?.toLowerCase().includes(searchLower) ||
      transaction.paket_id?.toString().includes(searchLower) ||
      transaction.status_pembayaran?.toLowerCase().includes(searchLower) ||
      transaction.status_transaksi?.toLowerCase().includes(searchLower)
    );
  });

  // Fungsi untuk membuka modal dan memuat data transaksi
  const handleEditClick = async (orderId) => {
    try {
      const token = localStorage.getItem("authToken");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/transaksi/byid/${orderId}`,
        { headers }
      );
      setSelectedTransaction(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Gagal memuat data transaksi:", error);
      alert("Gagal memuat data transaksi.");
    }
  };

  // Fungsi untuk menangani perubahan pada form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedTransaction((prev) => ({ ...prev, [name]: value }));
  };

  // Fungsi untuk menyimpan perubahan
  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const headers = { Authorization: `Bearer ${token}` };

      await axios.put(
        `${import.meta.env.VITE_API_URL}/transaksi/${selectedTransaction.order_id}/update`,
        selectedTransaction,
        { headers }
      );
      alert("Transaksi berhasil diperbarui.");
      setShowModal(false);
      // Refresh data transaksi
      setTransactions((prev) =>
        prev.map((trx) =>
          trx.order_id === selectedTransaction.order_id
            ? selectedTransaction
            : trx
        )
      );
    } catch (error) {
      console.error("Gagal menyimpan perubahan:", error);
      alert("Gagal menyimpan perubahan.");
    }
  };

  if (loading) {
    return <div className="text-center py-10">Memuat data...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-2xl font-bold">{`Selamat Datang, ${admin.username}!`}</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <h3 className="font-bold text-lg">Daftar Transaksi</h3>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari Transaksi"
                className="p-2 pl-10 border rounded-full focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button
              className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={handleExportToExcel}
            >
              <FaPrint /> Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-2">Order ID</th>
                <th className="p-2">User ID</th>
                <th className="p-2">Paket</th>
                <th className="p-2">Total Harga</th>
                <th className="p-2">Tanggal</th>
                <th className="p-2">Status Pembayaran</th>
                <th className="p-2">Status Transaksi</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length ? (
                filteredTransactions.map((trx) => (
                  <tr key={trx.id} className="border-b">
                    <td className="p-2">{trx.order_id}</td>
                    <td className="p-2">{trx.uid}</td>
                    <td className="p-2">{trx.paket_id}</td>
                    <td className="p-2">{trx.total_harga}</td>
                    <td className="p-2">{trx.tanggal}</td>
                    <td className="p-2">{trx.status_pembayaran}</td>
                    <td className="p-2">{trx.status_transaksi}</td>
                    <td className="p-2">
                      <button
                        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={() => handleEditClick(trx.order_id)}
                      >
                        <FaEdit /> Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    Tidak ada data transaksi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <EditTransactionModal
        show={showModal}
        transaction={selectedTransaction}
        onClose={() => setShowModal(false)}
        onChange={handleInputChange}
        onSave={handleSaveChanges}
      />
    </div>
  );
};

export default AdminDashboard;
