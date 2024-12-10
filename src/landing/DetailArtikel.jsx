import { Link } from "react-router-dom";
import artikelImage from "../assets/images/artikel-image.png"; // Replace with your actual image path
import profile from "../assets/images/profil.png";

const DetailArtikel = () => {
  return (
    <div
      style={{
        padding: "16px",
        marginTop: "84px",
      }}
      className="font-sans text-gray-800"
    >
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-left mb-4">
        Bagaimana Cara Memanfaatkan Lahan yang Terbatas?
      </h1>

      {/* Author Section */}
      <div className="flex items-center justify-start mb-6">
        <img
          src={profile}
          alt="Author"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-lg font-semibold">Sri Rahayu</p>
          <p className="text-gray-500 text-sm">28 Oktober 2024</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full mb-8">
        <img
          src={artikelImage}
          alt="Hero"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Article Content Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Urban Farming: Solusi Cerdas Mengatasi Keterbatasan Lahan
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Di era urbanisasi yang semakin pesat, lahan menjadi komoditas yang
          sangat berharga. Keterbatasan lahan menjadi kendala utama bagi
          masyarakat perkotaan yang ingin memanfaatkan lahan untuk menanam
          tanaman pangan maupun hias. Urban Farming muncul sebagai solusi
          kreatif untuk mengatasi keterbatasan lahan dan juga sebagai langkah
          untuk mencapai ketahanan pangan di tengah lingkungan yang padat.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Konsep Urban Farming tidak hanya sekedar menanam di lahan terbatas,
          tetapi juga melibatkan penggunaan teknologi dan metode inovatif untuk
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

      {/* Related Articles Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-6">Artikel Lainnya</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Related Article Item */}
          <div className="relative bg-white shadow rounded-lg overflow-hidden">
            <img
              src={artikelImage}
              alt="Related Article 1"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <Link
                to="/artikel/"
                className="text-green-600 font-semibold text-lg hover:underline"
              >
                Bagaimana Cara Memanfaatkan Lahan yang Terbatas?
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                Urban Farming merupakan teknik yang digunakan oleh masyarakat
                kota
              </p>
            </div>
          </div>

          <div className="relative bg-white shadow rounded-lg overflow-hidden">
            <img
              src={artikelImage}
              alt="Related Article 2"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <Link
                to="/artikel/"
                className="text-green-600 font-semibold text-lg hover:underline"
              >
                Bagaimana Cara Memanfaatkan Lahan yang Terbatas?
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                Urban Farming merupakan teknik yang digunakan oleh masyarakat
                kota
              </p>
            </div>
          </div>

          <div className="relative bg-white shadow rounded-lg overflow-hidden">
            <img
              src={artikelImage}
              alt="Related Article 3"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <Link
                to="/artikel/"
                className="text-green-600 font-semibold text-lg hover:underline"
              >
                Bagaimana Cara Memanfaatkan Lahan yang Terbatas?
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                Urban Farming merupakan teknik yang digunakan oleh masyarakat
                kota
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Articles Link */}
      <div className="mt-8 text-center">
        <Link to="/artikel" className="text-green-600 hover:underline">
          Kembali ke Artikel
        </Link>
      </div>
    </div>
  );
};

export default DetailArtikel;
