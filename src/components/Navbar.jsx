// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-2 px-6 bg-white border-b shadow-md z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-24 h-20 mr-2" />
      </div>
      {/* Apply ml-auto to move the list items to the right */}
      <ul className="flex space-x-8 text-black ml-auto">
        <li>
          <button
            onClick={() => navigate("/")}
            className="hover:text-gray-700 focus:outline-none"
          >
            Beranda
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/artikel")}
            className="hover:text-gray-700 focus:outline-none"
          >
            Artikel
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("tentangKami")}
            className="hover:text-gray-700 focus:outline-none"
          >
            Tentang Kami
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("kontak")}
            className="hover:text-gray-700 focus:outline-none"
          >
            Kontak
          </button>
        </li>
      </ul>
      <button
        onClick={() => navigate("")}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md ml-4"
      >
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
