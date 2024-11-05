// src/components/Navbar.jsx
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 bg-white border-b shadow-md z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-24 h-20 mr-2" />
      </div>
      {/* Apply ml-auto to move the list items to the right */}
      <ul className="flex space-x-8 text-black ml-auto">
        <li>
          <a href="/" className="hover:text-gray-700">
            Beranda
          </a>
        </li>
        <li>
          <a href="/artikel" className="hover:text-gray-700">
            Artikel
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700">
            Tentang Kami
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700">
            Kontak
          </a>
        </li>
      </ul>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md ml-4">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
