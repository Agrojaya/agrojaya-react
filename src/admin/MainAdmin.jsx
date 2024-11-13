import React, { useState } from "react";
import AdminDashboard from "./dashboard";
import DaftarPaket from "./daftarpaket";
import ListArtikel from "./postartikel";

const MainAdmin = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

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
              src="src/assets/images/icon-dashboard.png" // path to your icon image
              alt="Dashboard Icon"
              className="w-6 h-6 mr-3"
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
              src="src/assets/images/icon-daftarPaket.png" // path to your icon image
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
              src="src/assets/images/icon-postArtikel.png" // path to your icon image
              alt="List Artikel Icon"
              className="w-6 h-6 mr-3"
            />
            List Artikel
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none"
            />
          </div>
          <img
            src="src/assets/images/profil.png"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
        {renderContent()}
      </main>
    </div>
  )
  
};

export default MainAdmin;
