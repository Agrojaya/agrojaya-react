import React from "react";
import { Link } from "react-router-dom";
import artikelImage from "../assets/images/artikel-image.png"; // Replace with your actual image path

const ArtikelPage = () => {

  return (
    <div
      style={{
        paddingLeft: "16px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        marginTop: "64px",
      }}
      className="font-sans text-gray-600 "
    >
      {/* Hero Section */}
      <section className="hero relative text-white text-center">
        <img
          src={artikelImage}
          alt="Hero Image"
          className="w-full h-full object-cover "
        />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md"></div>
        <div className="hero-content absolute bottom-32 left-4 text-left">
          <h1 className="text-7xl md:text-5xl font-bold mb-2">
            Bagaimana Cara Memanfaatkan Lahan yang Terbatas?
          </h1>
          <p className="text-lg md:text-xl">
            Urban Farming merupakan teknik yang digunakan oleh masyarakat kota
          </p>
        </div>
      </section>

      {/* Article Grid Section */}
      <h2 className="text-2xl font-semibold text-center my-8">
        Pelajari Lebih Lanjut Artikel di Bawah Ini!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => (
          <Link to="/detail-artikel" key={index} className="article-card">
            <img src={artikelImage} alt="Artikel Thumbnail" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                Bagaimana Cara Memanfaatkan Lahan yang Terbatas?
              </h3>
            </div>
          </Link>
        ))}
      </div>
      {/* Footer Section */}
    </div>
  );
};

export default ArtikelPage;
