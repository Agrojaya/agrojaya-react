<<<<<<< HEAD
// src/App.jsx
import Navbar from './components/Navbar';
import Header from './components/Header';
import LandingPage from './landing/LandingPage';
import Footer from './components/Footer';




function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./landing/LandingPage";
import ArtikelPage from "./landing/ArtikelPage";
import DetailArtikel from "./landing/DetailArtikel"; // Ensure this line appears only once
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <>a
      <Navbar />
      {location.pathname === '/' && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/detail-artikel" element={<DetailArtikel />} /> {/* Ensure this is also present */}
      </Routes>
      <Footer />
    </>
  );
}

// Wrap App in Router here
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
>>>>>>> Nabila
