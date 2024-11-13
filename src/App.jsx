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
        <Route path="/detail-artikel" element={<DetailArtikel />} />
        <Route path="/loginadmin" element={<AdminLogin />} />
        <Route path="/dashboardadmin" element={<AdminDashboard />} />
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
