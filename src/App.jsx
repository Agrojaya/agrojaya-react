import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./landing/LandingPage";
import ArtikelPage from "./landing/ArtikelPage";
import DetailArtikel from "./landing/DetailArtikel"; // Pastikan path sudah benar
import Footer from "./components/Footer";
import AdminLogin from "./admin/login";
import AdminDashboard from "./admin/MainAdmin";
import ListArtikel from "./admin/ListArtikel";
import TambahArtikel from "./admin/TambahArtikel";

function App() {
  const location = useLocation();

  // Update the route name to match the path for the Admin Dashboard
  const isLoginAdminRoute = location.pathname === "/loginadmin";
  const isMainAdminRoute = location.pathname === "/dashboardadmin";

  return (
    <>
      {/* Navbar and Footer only appear if not on login or admin dashboard routes */}
      {!isLoginAdminRoute && !isMainAdminRoute && <Navbar />}
      {!isLoginAdminRoute && !isMainAdminRoute && location.pathname === "/" && (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/artikel/:id" element={<DetailArtikel />} />{" "}
        {/* Perbaikan route */}
        <Route path="/loginadmin" element={<AdminLogin />} />
        <Route path="/dashboardadmin" element={<AdminDashboard />} />
        <Route path="/listartikel" element={<ListArtikel />} />
        <Route path="/postartikel" element={<TambahArtikel />} />
      </Routes>

      {/* Footer only if not on login or admin dashboard routes */}
      {!isLoginAdminRoute && !isMainAdminRoute && <Footer />}
    </>
  );
}

// Wrap App inside Router
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
