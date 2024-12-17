import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import artikelImage from "../assets/images/artikel-image.png"; // Ganti dengan path gambar yang sesuai
import profile from "../assets/images/profil.png"; // Ganti dengan path foto penulis

const DetailArtikel = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/artikel/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching article:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  // Fungsi untuk format tanggal menjadi format yang diinginkan
  const formatTanggal = (tanggal) => {
    if (!tanggal || isNaN(new Date(tanggal))) return "Tanggal tidak valid";
    return new Date(tanggal).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return <p className="text-center mt-16">Loading article...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-16">Error: {error}</p>;
  }

  if (!article) {
    return (
      <p className="text-center text-gray-500 mt-16">Article not found.</p>
    );
  }

  return (
    <div
      style={{
        padding: "16px",
        marginTop: "84px",
      }}
      className="font-sans text-gray-800"
    >
      {/* Title Section */}
      <h1 className="text-6xl font-bold text-left mb-8">
        {article.judul || "Untitled Article"}
      </h1>

      {/* Author Section */}
      <div className="flex items-center justify-start mb-6">
        <img
          src={article.penulisPhoto || profile} // URL foto penulis jika ada
          alt={article.penulis || "Author"}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-lg font-semibold">
            {article.penulis || "Unknown Author"}
          </p>
          <p className="text-gray-500 text-sm">
            {formatTanggal(article.tanggal)}
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full mb-8">
        <img
          src={article.photo || artikelImage}
          alt={article.judul || "Hero"}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Article Content Section */}
      <div className="mt-10">
        <p className="text-lg leading-relaxed mb-4">
          {article.isi || "Tidak ada konten."}
        </p>
      </div>

      {/* Related Articles Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-6">Artikel Lainnya</h3>
        {article.relatedArticles?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {article.relatedArticles.map((related) => (
              <div
                key={related.id}
                className="relative bg-white shadow rounded-lg overflow-hidden"
              >
                <img
                  src={related.photo || artikelImage}
                  alt={related.judul || "Related Article"}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <Link
                    to={`/artikel/${related.id}`}
                    className="text-green-600 font-semibold text-lg hover:underline"
                  >
                    {related.judul || "Untitled Article"}
                  </Link>
                  <p className="text-sm text-gray-500 mt-2">
                    {related.summary || "No summary available"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            Tidak ada artikel lain yang ditemukan.
          </p>
        )}
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
