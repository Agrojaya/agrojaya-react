import app from "../assets/images/app.png";
import logo from "../assets/images/logo.png";
import kontak from "../assets/images/kontak.png";
import ide from "../assets/images/ide.png";
import service from "../assets/images/service.png";
import time from "../assets/images/time.png";
import timee from "../assets/images/timee.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react"; 
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/artikel");
        const data = await response.json();
        setArticles(data); 
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleLearnMore = () => {
    navigate("/artikel/${id}"); 
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        window.location.reload();
      } else {
        console.error("Error submitting form:", response.statusText);
        window.location.reload(); 
      }
    } catch (error) {
      console.error("Network error:", error);
      window.location.reload(); 
    }
  };
  return (
    <div className="font-sans text-gray-700">
      <section className="p-6 bg-white">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {articles.map((artikel, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center p-4 space-x-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={artikel.photo || "/default-daun.jpg"}
                  alt={artikel.judul || "Image"}
                  className="object-cover w-2/4 h-full rounded-md"
                />

                <div className="w-1/2">
                  <h3 className="text-xl font-semibold ">
                    {artikel.judul || "Untitled"}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {artikel.isi || "No summary available."}
                  </p>
                  <button
                    onClick={handleLearnMore}
                    className="p-2 mt-4 text-green-600 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <FaArrowRight className="text-xl" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
        {/** Feature Sections */}
        {[
          {
            id: 1,
            title: "Urban Farming: Ciptakan Kebun Sehat di Rumahmu!",
            description:
              "Ubah ruang kosong di rumah menjadi kebun hijau dengan layanan urban farming kami! Mulai dari desain yang sesuai kebutuhan, instalasi, hingga perawatan awal, kami siap membantu Anda menciptakan kebun hidroponik, vertikal farming, atau taman sayur di balkon.",
            features: [
              {
                icon: ide,
                title: "Collaboration",
                description: "Memungkinkan pengguna untuk berkolaborasi",
              },
              {
                icon: service,
                title: "Service",
                description:
                  "Menyediakan berbagai layanan mulai dari konsultasi",
              },
            ],
            image: app,
            reverse: false,
          },
          {
            id: 2,
            title: "Tanaman tumbuh maksimal, usaha minimal!",
            description:
              "Fitur reminder ini hadir untuk memastikan tanaman Anda selalu terjaga dan tumbuh sehat, bahkan di tengah jadwal padat Anda. Kini, siapa pun bisa memiliki kebun hijau di rumah, tanpa khawatir perawatan terlupakan.",
            features: [
              {
                icon: time,
                title: "Time Management",
                description:
                  "Memungkinkan pengguna untuk membuat jadwal harian",
              },
            ],
            image: timee,
            reverse: true,
          },
        ].map(({ id, title, description, features, image, reverse }) => (
          <div
            key={id}
            className={`flex flex-col items-center md:flex-row${
              reverse ? "-reverse" : ""
            } md:space-x-4 p-6`}
          >
            <div className="w-full md:w-1/2">
              <h5 className="text-white text-sm font-bold bg-green-600 py-1 px-3 inline-block rounded-md mb-2">
                ABOUT APP
              </h5>
              <h3 className="text-3xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
              <hr className="my-4 border-t border-gray-700" /> 
              <div className="flex items-center mt-4 space-x-8">
                {features.map(({ icon, title, description }, idx) => (
                  <div key={idx} className="flex flex-col items-left text-left">
                    {typeof icon === "string" ? (
                      <img src={icon} height="50" width="50" alt={title} />
                    ) : (
                      icon
                    )}
                    <div>
                      <span className="font-semibold">{title}</span>
                      <p className="text-sm text-gray-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-1/2">
              <img src={image} alt="Feature" />
            </div>
          </div>
        ))}
      </section>

      {/* Contact Form Section */}
      <section id="kontak" className="p-8 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">
            Kontak
          </h2>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={kontak} 
                alt="Contact"
                className="rounded-md shadow-lg w-full md:w-[300px] h-auto"
              />
            </div>
            {/* Form */}
            <div className="flex-grow">
              <form
                className="p-6 "
                id="my-form"
                action="https://formspree.io/f/mgvwvyoy"
                method="POST"
                onSubmit={handleSubmit}
              >
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
                  className="w-1/3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
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
