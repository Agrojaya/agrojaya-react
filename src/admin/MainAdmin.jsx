import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DaftarPaket from "./daftarpaket";
import AdminDashboard from "./dashboard";
import ListArtikel from "./ListArtikel";

const MainAdmin = () => {
  const navigate = useNavigate();  // Initialize useNavigate
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/logoutadmin");
      localStorage.removeItem("authToken"); // Hapus token dari localStorage
      navigate("/loginadmin"); // Arahkan kembali ke halaman login setelah logout
    } catch (error) {
      console.error("Logout gagal:", error);
      alert("Terjadi kesalahan saat logout. Silakan coba lagi.");
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <AdminDashboard activeSection={activeSection} />;
      case "daftarPaket":
        return <DaftarPaket />;
      case "listArtikel":
        return <ListArtikel />;
      default:
        return <AdminDashboard activeSection={activeSection} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-green-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-green-600 text-white p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src="src/assets/images/logo2.png"
            alt="Agro Jaya Logo"
            className="w-40 mb-4"
          />
        </div>
        <nav className="space-y-4">
          <button
            className={`flex items-center w-full p-3 ${
              activeSection === "dashboard"
                ? "bg-gray-100 text-green-800"
                : "border border-white"
            } rounded-md`}
            onClick={() => setActiveSection("dashboard")}
          >
            <img
              src={
                activeSection === "dashboard"
                  ? "src/assets/images/icon-dashboard-2.png"
                  : "src/assets/images/icon-dashboard.png"
              }
              alt="Dashboard Icon"
              className="w-6 h-6 mr-3 object-contain"
            />
            Dashboard
          </button>

          <button
            className={`flex items-center w-full p-3 ${
              activeSection === "daftarPaket"
                ? "bg-gray-100 text-green-800"
                : "border border-white"
            } rounded-md`}
            onClick={() => setActiveSection("daftarPaket")}
          >
            <img
              src={
                activeSection === "daftarPaket"
                  ? "src/assets/images/icon-daftarPaket-2.png"
                  : "src/assets/images/icon-daftarPaket.png"
              }
              alt="Daftar Paket Icon"
              className="w-6 h-6 mr-3"
            />
            Daftar Paket
          </button>
          <button
            className={`flex items-center w-full p-3 ${
              activeSection === "listArtikel"
                ? "bg-gray-100 text-green-800"
                : "border border-white"
            } rounded-md`}
            onClick={() => setActiveSection("listArtikel")}
          >
            <img
              src={
                activeSection === "listArtikel"
                  ? "src/assets/images/icon-postArtikel-2.png"
                  : "src/assets/images/icon-postArtikel.png"
              }
              alt="List Artikel Icon"
              className="w-6 h-6 mr-3"
            />
            List Artikel
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-4 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none"
            />
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <img
              src="src/assets/images/profil.png"
              alt="User Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setProfileDropdownVisible(!isProfileDropdownVisible)}
            />
            {isProfileDropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <ul>
                  <li
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div>{renderContent()}</div>
      </main>
    </div>
  );
};

export default MainAdmin;
