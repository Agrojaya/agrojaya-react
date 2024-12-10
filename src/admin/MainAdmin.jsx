import React, { useState } from "react";
import AdminDashboard from "./dashboard";
import DaftarPaket from "./daftarpaket";
<<<<<<< HEAD
import ListArtikel from "./ListArtikel";
=======
import ListArtikel from "./postartikel";
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c

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
<<<<<<< HEAD
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

=======
              src="src/assets/images/icon-dashboard.png" // path to your icon image
              alt="Dashboard Icon"
              className="w-6 h-6 mr-3"
            />
            Dashboard
          </button>
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
          <button
            className={`flex items-center w-full p-3 ${
              activeSection === "daftarPaket"
                ? "bg-gray-100 text-green-800"
                : "border border-white"
            } rounded-md`}
            onClick={() => setActiveSection("daftarPaket")}
          >
            <img
<<<<<<< HEAD
              src={
                activeSection === "daftarPaket"
                  ? "src/assets/images/icon-daftarPaket-2.png"
                  : "src/assets/images/icon-daftarPaket.png" // path to your icon image
              }
=======
              src="src/assets/images/icon-daftarPaket.png" // path to your icon image
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
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
<<<<<<< HEAD
              src={
                activeSection === "listArtikel"
                  ? "src/assets/images/icon-postArtikel-2.png" // path to your icon image
                  : "src/assets/images/icon-postArtikel.png" // path to your icon image
              }
=======
              src="src/assets/images/icon-postArtikel.png" // path to your icon image
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
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
<<<<<<< HEAD
  );
=======
  )
  
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
};

export default MainAdmin;
