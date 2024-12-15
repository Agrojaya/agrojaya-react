// src/components/Header.jsx
import phoneImage from "../assets/images/phone.png"; // Replace with the actual image path
import playStoreButton from "../assets/images/play-store-button.png"; // Replace with the actual Play Store button path

function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-12 bg-gradient-to-br from-[#F1FCF1] to-[#BDBDBD]">

      <div className="max-w-xl">
        <h1 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
          Atur Kebun dan Aktivitas <br /> Anda Lebih Efisien <br /> dengan AgroJaya
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          AgroJaya adalah aplikasi mobile dan web yang menyediakan layanan Urban Farming, artikel edukasi, dan fitur reminder untuk membantu petani mengatur aktivitas mereka.
        </p>
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={playStoreButton}
            alt="Get it on Play Store"
            className="w-48"
          />
        </a>
      </div>
      <div className="flex-shrink-0 self-center relative -right-16 -bottom-12">
        <img src={phoneImage} alt="Phone" className="w-87" />
      </div>
    </header>
  );
}

export default Header;
