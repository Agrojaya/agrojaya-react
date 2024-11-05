// src/components/Header.jsx
import phoneImage from "../assets/images/phone.png"; // Replace with the actual image path
import playStoreButton from "../assets/images/play-store-button.png"; // Replace with the actual Play Store button path

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-12 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Managing Your Task <br /> and Productivity <br /> Become Easier
        </h1>
        <p className="text-gray-600 mb-6">
          dan tidak memiliki banyak sumber pengairan untuk lahannya dengan cara
          menyediakan jasa pemasangan urban farming.
        </p>
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={playStoreButton}
            alt="Get it on Play Store"
            className="w-40"
          />
        </a>
      </div>
      <div className="flex-shrink-0">
        <img src={phoneImage} alt="Phone" className="w-82" />
      </div>
    </header>
  );
}

export default Header;
