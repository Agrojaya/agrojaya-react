import React from "react";
import { Link } from "react-router-dom";
import artikelImage from "../assets/images/artikel-image.png"; // Replace with your actual image path

const DetailArtikel = () => {
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

      {/* Article Content Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Urban Farming: Solusi Cerdas Mengatasi Keterbatasan Lahan
        </h2>
        <p className="text-lg leading-relaxed">
          Di era urbanisasi yang semakin pesat, lahan menjadi komoditas yang
          sangat berharga. Keterbatasan lahan menjadi kendala utama bagi
          masyarakat perkotaan yang ingin memanfaatkan lahan untuk menanam
          tanaman pangan maupun hias. Urban Farming muncul sebagai solusi
          kreatif untuk mengatasi keterbatasan lahan dan juga sebagai langkah
          untuk mencapai ketahanan pangan di tengah lingkungan yang padat.
        </p>
        <p className="text-lg leading-relaxed">
          Konsep Urban Farming tidak hanya sekedar menanam di lahan terbatas, te
          tapi juga melibatkan penggunaan teknologi dan metode inovatif untuk
          meningkatkan hasil pertanian. Dengan memanfaatkan ruang vertikal,
          hidroponik, dan aquaponik, masyarakat dapat menanam berbagai jenis
          tanaman di area yang sempit. Selain itu, Urban Farming juga mendorong
          kesadaran akan pentingnya keberlanjutan dan konsumsi makanan lokal.
        </p>
        <p className="text-lg leading-relaxed">
          Melalui artikel ini, kami akan membahas lebih dalam tentang
          teknik-teknik Urban Farming, manfaatnya, serta bagaimana Anda dapat
          memulainya di rumah. Mari kita eksplorasi lebih lanjut!
        </p>
      </div>

      {/* Back to Articles Link */}
      <div className="mt-8 text-center">
        <Link to="/artikel" className="text-blue-500 hover:underline">
          Kembali ke Artikel
        </Link>
      </div>
    </div>
  );
};

export default DetailArtikel;
