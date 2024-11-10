import daun from "../assets/images/daun.png"; // Replace with actual image path
import app from "../assets/images/app.png"; // Replace with actual image path
import logo from "../assets/images/logo.png";
import kontak from "../assets/images/kontak.png";
import { FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/detail-artikel"); // Update with the correct route as needed
  };

  return (
    <div className="font-sans text-gray-700">
      {/* Hero Section */}
      <section className="p-6 bg-white">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex items-center p-4 space-x-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              {/* Image Section */}
              <img
                src={daun}
                alt="Urban Farming"
                className="object-cover w-1/2 h-full rounded-md"
              />

              {/* Text Section */}
              <div className="w-1/2">
                <h3 className="text-lg font-semibold">
                  Bagaimana Cara Memanfaatkan Lahan yang Sempit?
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Dengan pertumbuhan populasi yang semakin pesat dan urbanisasi
                  yang terus meningkat, lahan pertanian menjadi semakin langka.
                  Bagi banyak orang ...
                </p>
                <button
                  onClick={handleLearnMore}
                  className="flex items-center p-2 mt-4 text-green-600 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-200"
                >
                  <FaArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex items-center p-4 space-x-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              {/* Image Section */}
              <img
                src={daun}
                alt="Vertical Farming"
                className="object-cover w-1/2 h-full rounded-md"
              />

              {/* Text Section */}
              <div className="w-1/2">
                <h3 className="text-lg font-semibold">Vertical Farming</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Vertical farming is an innovative way to grow crops in urban
                  areas...
                </p>
                <button
                  onClick={handleLearnMore}
                  className="flex items-center p-2 mt-4 text-green-600 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-200"
                >
                  <FaArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center p-4 space-x-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              {/* Image Section */}
              <img
                src={daun}
                alt="Vertical Farming"
                className="object-cover w-1/2 h-full rounded-md"
              />

              {/* Text Section */}
              <div className="w-1/2">
                <h3 className="text-lg font-semibold">Vertical Farming</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Vertical farming is an innovative way to grow crops in urban
                  areas...
                </p>
                <button
                  onClick={handleLearnMore}
                  className="flex items-center p-2 mt-4 text-green-600 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-200"
                >
                  <FaArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center p-4 space-x-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              {/* Image Section */}
              <img
                src={daun}
                alt="Vertical Farming"
                className="object-cover w-1/2 h-full rounded-md"
              />

              {/* Text Section */}
              <div className="w-1/2">
                <h3 className="text-lg font-semibold">Vertical Farming</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Vertical farming is an innovative way to grow crops in urban
                  areas...
                </p>
                <button
                  onClick={handleLearnMore}
                  className="flex items-center p-2 mt-4 text-green-600 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-200"
                >
                  <FaArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlides as needed */}
        </Swiper>
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
            <h4 className="text-lg font-semibold text-green-600 mb-1">
              Tentang Kami
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Agro Jaya adalah aplikasi berbasis mobile dan website yang
              memiliki fungsi utama untuk membantu petani dalam mengelola lahan
              pertanian yang sempit dan tidak memiliki banyak sumber pengairan
              untuk lahannya dengan cara menyediakan jasa pemasangan urban
              farming.
            </p>
          </div>
        </div>
      </section>

      <section className="p-8 space-y-8 bg-white">
        {/* Feature 1 */}
        <div className="flex flex-col items-center md:flex-row md:space-x-4 bg-white p-6 rounded-md shadow-lg">
          <div className="w-full md:w-1/2">
            <h5 className="text-green-600 text-sm font-bold bg-green-100 py-1 px-3 inline-block rounded-md mb-2">
              ABOUT APP
            </h5>
            <h3 className="text-xl font-semibold">
              Urban Farming: Ciptakan Kebun Sehat di Rumahmu!
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Ubah ruang kosong di rumah menjadi kebun hijau dengan layanan
              urban farming kami! Mulai dari desain yang sesuai kebutuhan,
              instalasi, hingga perawatan awal, kami siap membantu Anda
              menciptakan kebun hidroponik, vertikal farming, atau taman sayur
              di balkon.
            </p>
            <div className="flex items-center mt-4 space-x-8">
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-green-600" />
                <div>
                  <span className="font-semibold">Collaboration</span>
                  <p className="text-sm text-gray-500">
                    Memungkinkan pengguna untuk berkolaborasi
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-green-600" />
                <div>
                  <span className="font-semibold">Service</span>
                  <p className="text-sm text-gray-500">
                    Menyediakan berbagai layanan mulai dari konsultasi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-1/2">
            <img src={app} alt="Feature" className="rounded-md shadow-lg" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center md:flex-row-reverse md:space-x-4 bg-gray-100 p-6 rounded-md shadow-lg">
          <div className="w-full md:w-1/2">
            <h5 className="text-green-600 text-sm font-bold bg-green-100 py-1 px-3 inline-block rounded-md mb-2">
              ABOUT APP
            </h5>
            <h3 className="text-xl font-semibold">
              Tanaman tumbuh maksimal, usaha minimal!
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Fitur reminder ini hadir untuk memastikan tanaman Anda selalu
              terjaga dan tumbuh sehat, bahkan di tengah jadwal padat Anda.
              Kini, siapa pun bisa memiliki kebun hijau di rumah, tanpa khawatir
              perawatan terlupakan.
            </p>
            <div className="flex items-center mt-4 space-x-8">
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-green-600" />
                <div>
                  <span className="font-semibold">Ease of Use</span>
                  <p className="text-sm text-gray-500">
                    Menyederhanakan pengalaman pengguna
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-green-600" />
                <div>
                  <span className="font-semibold">Time Management</span>
                  <p className="text-sm text-gray-500">
                    Memungkinkan pengguna untuk membuat jadwal harian
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-1/2">
            <img src={app} alt="Feature" className="rounded-md shadow-lg" />
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="p-8 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">
            Kontak
          </h2>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={kontak} // Ganti dengan path gambar Anda
                alt="Contact"
                className="rounded-md shadow-lg w-full md:w-[300px] h-auto"
              />
            </div>
            {/* Form */}
            <div className="flex-grow">
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Masukkan Nama"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Masukkan Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tuliskan Pesan..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Kirim
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-20 bg-green-600"></section>
    </div>
  );
};

export default LandingPage;
