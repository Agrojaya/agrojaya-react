import React, { useEffect, useState } from "react";
import { FaPrint, FaSearch } from "react-icons/fa";
import axios from "axios";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data transaksi dari backend
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/transaksi`);

        // Pastikan data diatur dengan benar
        setTransactions(response.data);
        setFilteredTransactions(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Gagal memuat data transaksi");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  // Filter transaksi berdasarkan pencarian
  useEffect(() => {
    const filtered = transactions.filter(
      (transaction) =>
        transaction.nama_paket
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.nama_alamat
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.status_pembayaran
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }, [searchTerm, transactions]);

  // Handle cetak
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Daftar Transaksi</h3>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="p-2 bg-gray-300 rounded-md" onClick={handlePrint}>
            <FaPrint />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>Loading data transaksi...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-2">Invoice</th>
                <th className="px-4 py-2">Nama Paket</th>
                <th className="px-4 py-2">Alamat</th>
                <th className="px-4 py-2">Harga</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="px-4 py-2">{transaction.order_id}</td>
                  <td className="px-4 py-2">{transaction.nama_paket}</td>
                  <td className="px-4 py-2">{transaction.nama_alamat}</td>
                  <td className="px-4 py-2">Rp {transaction.total_harga}</td>
                  <td className="px-4 py-2 text-green-600">
                    {transaction.status_pembayaran}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
