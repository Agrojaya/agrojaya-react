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
import DetailArtikel from "./landing/DetailArtikel";
import Footer from "./components/Footer";
import AdminLogin from "./admin/login";
import AdminDashboard from "./admin/MainAdmin";
<<<<<<< HEAD
import ListArtikel from "./admin/ListArtikel";
import TambahArtikel from "./admin/TambahArtikel";
=======
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c

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
<<<<<<< HEAD
        <Route path="/detail-artikel/" element={<DetailArtikel />} />
        <Route path="/loginadmin" element={<AdminLogin />} />
        <Route path="/dashboardadmin" element={<AdminDashboard />} />
        <Route path="/listartikel" element={<ListArtikel />} />
        <Route path="/postartikel" element={<TambahArtikel />} />
=======
        <Route path="/detail-artikel" element={<DetailArtikel />} />
        <Route path="/loginadmin" element={<AdminLogin />} />
        <Route path="/dashboardadmin" element={<AdminDashboard />} />
>>>>>>> b35cfaf46efbfde4b7d980732e2752c78eafd29c
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
