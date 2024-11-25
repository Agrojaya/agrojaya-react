import React from "react";
import { Link } from "react-router-dom";

const ListArtikel = () => {
  const articles = [
    {
      image: "src/assets/images/article1.png",
      title: "Urban Farming: Solusi Cerdas untuk Pertanian di Tengah Kota",
      date: "4 Oktober 2024",
      link: "/detail-artikel/1",
    },
    {
      image: "src/assets/images/article2.png",
      title:
        "Kebun Kecil di Rumah, Manfaat Besar bagi Lingkungan dan Kesehatan",
      date: "4 Oktober 2024",
      link: "/detail-artikel/2",
    },
    {
      image: "src/assets/images/article3.png",
      title:
        "Ingin Sayur Segar Setiap Hari? Ini Cara Mudah Menanam di Balkon Sendiri!",
      date: "4 Oktober 2024",
      link: "/detail-artikel/3",
    },
    {
      image: "src/assets/images/article4.png",
      title:
        "Panen Sendiri di Tengah Kota? Begini Strateginya Meski Lahan Terbatas!",
      date: "4 Oktober 2024",
      link: "/detail-artikel/4",
    },
    {
      image: "src/assets/images/article5.png",
      title: "Tanam Pangan di Lahan Sempit? Siapa Bilang Tidak Mungkin!",
      date: "4 Oktober 2024",
      link: "/detail-artikel/5",
    },
  ];

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4 text-green-800">
        Daftar Artikel
      </h1>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-lg shadow p-4"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-20 h-20 rounded-lg object-cover mr-4"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-green-800">{article.title}</h2>
              <p className="text-sm text-gray-500">
                Dipublikasikan, {article.date}
              </p>
            </div>
            <Link to={article.link}>
              <button className="text-gray-500 hover:text-green-800 focus:outline-none">
                <span className="material-icons">more_vert</span>
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/postartikel">
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Tambah
        </button>
      </Link>
    </div>
  );
};

export default ListArtikel;
