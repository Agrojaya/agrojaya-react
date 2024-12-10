import axios from "axios";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { FaPrint, FaSearch } from "react-icons/fa"; // Import additional icons as needed
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
=======
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaPrint, FaSearch } from "react-icons/fa";
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c

const AdminDashboard = ({ activeSection }) => {
  const [activities, setActivities] = useState([]);
  const [transactions, setTransactions] = useState([]);
<<<<<<< HEAD
  const [user, setUser] = useState({ first_name: "", last_name: "" });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch user activities
    const fetchActivities = async () => {
      try {
        const response = await axios.get("http://localhost:3000/activities", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setActivities(response.data.activities);
      } catch (error) {
        console.error("Error fetching user activities:", error);
      }
    };

    // Fetch transactions
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/transactions", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    // Fetch logged-in user data
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        console.log("User  data:", response.data.user); // Tambahkan ini
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchActivities();
    fetchTransactions();
    fetchUser();
  }, []);

  const handlePrint = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "transactions.xlsx");
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.invoice_number
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.package_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIconColor = (section) => {
    switch (section) {
      case "dashboard":
        return "text-blue-500";
      case "packages":
        return "text-green-500";
      case "articles":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div>
      {activeSection === "dashboard" && (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {`${user.username} ${user.last_name}, Selamat Datang kembali!`}
=======

  useEffect(() => {
    // Mengambil data aktivitas user
    axios.get('http://localhost:3000/api/user-activity', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then((response) => {
        setActivities(response.data.activities);
      })
      .catch((error) => {
        console.error("Error fetching user activities:", error);
      });

    // Mengambil data transaksi
      axios.get('http://localhost:3000/api/transactions', {
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
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
          </h2>
        </div>
      )}

<<<<<<< HEAD
      {activeSection === "dashboard" && (
        <div className="grid grid-cols-3 gap-6">
=======
      {/* Activity and Notification Sections */}
      {activeSection === "dashboard" && (
        <div className="grid grid-cols-3 gap-6">
          {/* Activity Section */}
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
          <div className="col-span-1 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Aktivitas</h3>
            <ul>
              {activities.map((activity) => (
                <li key={activity.id} className="flex items-center mb-4">
                  <img
                    src="src/assets/images/pp.png"
<<<<<<< HEAD
                    alt="User "
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {activity.username}
                    </p>
                    <p className="text-gray-500 text-sm">Membuat Pesanan</p>
=======
                    alt="User"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{activity.username}</p>
                    <p className="text-gray-500 text-sm">Membuat Pesanan</p>{/*pakai data dari database (sementara default membuat pesanan) */}
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
                  </div>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className=" text-lg font-bold">Notifikasi</h3>
=======
          {/* Notification Section */}
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Notifikasi</h3>
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none"
<<<<<<< HEAD
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${getIconColor(
                      activeSection
                    )}`}
                  />
                </div>
                <button
                  className={`p-2 rounded-md ${getIconColor(activeSection)}`}
                  onClick={handlePrint}
                >
=======
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className="p-2 bg-gray-300 rounded-md">
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
                  <FaPrint />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="px-4 py-2">Invoice</th>
<<<<<<< HEAD
                    <th className="px-4 py-2">User </th>
=======
                    <th className="px-4 py-2">User</th>
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
                    <th className="px-4 py-2">Paket</th>
                    <th className="px-4 py-2">Harga</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
<<<<<<< HEAD
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="px-4 py-2">
                        {transaction.invoice_number}
                      </td>
                      <td className="px-4 py-2">{transaction.username}</td>
                      <td className="px-4 py-2">{transaction.package_name}</td>
                      <td className="px-4 py-2">Rp {transaction.price}</td>
                      <td className="px-4 py-2 text-green-600">
                        {transaction.status}
                      </td>
=======
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="px-4 py-2">{transaction.invoice_number}</td>
                      <td className="px-4 py-2">{transaction.username}</td>
                      <td className="px-4 py-2">{transaction.package_name}</td>
                      <td className="px-4 py-2">Rp {transaction.price}</td>
                      <td className="px-4 py-2 text-green-600">{transaction.status}</td>
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
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
