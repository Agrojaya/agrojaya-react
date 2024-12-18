import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import artikelImage from "../assets/images/artikel-image.png"; // Replace with your actual image path

const ArtikelPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fetch articles data from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/artikel");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };
    window.scrollTo(0, 0); 

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Hero Section */}
      <div className="flex-grow px-4 py-4 mt-16 text-gray-600 font-sans mx-auto max-w-screen-xl">
        <section className="relative text-white text-center">
          <img
            src={artikelImage}
            alt="Hero Image: Memanfaatkan Lahan yang Terbatas"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
          <div className="absolute bottom-8 left-4 text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              Bagaimana Cara Memanfaatkan Lahan yang Terbatas?
            </h1>
            <p className="text-lg md:text-xl">
              Urban Farming merupakan teknik yang digunakan oleh masyarakat kota
            </p>
          </div>
        </section>

        {/* Article Grid Section */}
        <h2 className="text-2xl font-semibold text-left my-8">
          Pelajari Lebih Lanjut Artikel di Bawah Ini!
        </h2>

        {loading ? (
          <p className="text-center text-lg text-gray-500">
            Loading articles...
          </p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-500">
            Tidak ada artikel yang ditemukan.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((artikel) => (
              <Link
                to={`/artikel/${artikel.id}`}
                key={artikel.id}
                className="bg-green-100 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
              >
                <img
                  src={artikel.photo || artikelImage}
                  alt={artikel.judul}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">
                    {artikel.judul}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {artikel.isi}
                  </p>
                  <button className="mt-2 text-green-600 rounded-md">
                    Baca Selengkapnya
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Sticky Footer */}
      <div className="w-full h-20 bg-green-600 mt-36"></div>
    </div>
  );
};

export default ArtikelPage;
