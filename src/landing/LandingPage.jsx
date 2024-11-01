import daun from '../assets/images/daun.png'; // Replace with the actual image path
import app from '../assets/images/app.png'; // Replace with the actual image path
import logo from '../assets/images/logo.png';
import { FaLeaf } from "react-icons/fa"; // Add any other icon you might need

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-700">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center p-6 bg-white md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2">
          <img src={daun} alt="Urban Farming" className="rounded-md shadow-lg" />
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-1/2">
          <h3 className="text-lg font-semibold">Bagaimana Cara Memanfaatkan Lahan yang Sempit?</h3>
          <p className="mt-2 text-sm text-gray-600">
            Dengan pertumbuhan populasi yang pesat serta lahan yang terbatas, pertanian vertikal menjadi solusi menarik untuk memaksimalkan ruang.
          </p>
          <button className="flex items-center px-4 py-2 mt-4 text-sm font-medium text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-white">
            Learn More
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex items-center justify-center py-10 bg-green-50">
        <div className="flex items-center max-w-3xl p-6">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <img src={logo} alt="Logo" className="w-64 h-56" />
          </div>
          {/* Text Content */}
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-1">Tentang Kami</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Agro Jaya adalah aplikasi berbasis mobile dan website yang memiliki fungsi utama untuk membantu petani dalam mengelola lahan pertanian yang sempit dan tidak memiliki banyak sumber pengairan untuk lahannya dengan cara menyediakan jasa pemasangan urban farming.
            </p>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="p-8 space-y-8 bg-white">
        {/* Feature 1 */}
        <div className="flex flex-col items-center md:flex-row md:space-x-4">
          <div className="w-full md:w-1/2">
            <h5 className="text-green-600 text-sm">ABOUT APP</h5>
            <h3 className="text-lg font-semibold">Urban Farming: Ciptakan Kebun Sehat di Rumahmu!</h3>
            <p className="mt-2 text-sm text-gray-600">
              Lahan terbatas? Urban farming hadir sebagai solusi yang memungkinkan untuk menanam sayuran di rumah dengan mudah.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-green-600" />
                <span className="text-sm">Collaboration</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-green-600" />
                <span className="text-sm">Service</span>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-1/2">
            <img src={app} alt="Feature" className="rounded-md shadow-lg" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center md:flex-row-reverse md:space-x-4">
          <div className="w-full md:w-1/2">
            <h5 className="text-green-600 text-sm">ABOUT APP</h5>
            <h3 className="text-lg font-semibold">Tanaman tumbuh maksimal, usaha minimal!</h3>
            <p className="mt-2 text-sm text-gray-600">
              Dengan bantuan aplikasi kami, Anda dapat mempercepat pertumbuhan tanaman tanpa harus ribet.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-green-600" />
                <span className="text-sm">Ease of Use</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-green-600" />
                <span className="text-sm">Time Management</span>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-1/2">
            <img src={app} alt="Feature" className="rounded-md shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
