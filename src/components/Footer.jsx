import hp from "../assets/images/hp.png"; // Ensure the logo is available in this path
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto flex justify-between items-start space-x-8">
        
        {/* Left Section - Overlapping Image */}
        <div className="w-1/4 flex justify-center relative">
          <img src={hp} alt="Agro Jaya" className="w-40 h-auto object-contain absolute -top-44" />
        </div>

        {/* Center Section - Informasi Aplikasi */}
        <div className="w-1/4 text-center">
          <h2 className="text-lg font-semibold mb-4">Informasi Aplikasi</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Artikel</li>
            <li>Kalender Tani</li>
            <li>Paket Urban Farming</li>
          </ul>
        </div>

        {/* Center Section - Akses Link */}
        <div className="w-1/4 text-center">
          <h2 className="text-lg font-semibold mb-4">Akses link</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Artikel</li>
            <li>Tentang Kami</li>
            <li>Kontak</li>
          </ul>
        </div>

        {/* Right Section - Social Media and Logo */}
        <div className="w-1/4 text-center">
          <h2 className="text-lg font-semibold mb-4">Ikuti Kami</h2>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#instagram" className="text-white hover:text-gray-400 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#youtube" className="text-white hover:text-gray-400 text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={logo} alt="Agro Jaya Logo" className="w-16 h-auto object-contain mb-2" />
            <span className="text-lg font-semibold">AGRO JAYA</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-gray-400">
        Copyright AgroJaya 2024, all rights reserved
      </div>
    </footer>
  );
}

export default Footer;

