import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Jika sudah login sebelumnya, langsung arahkan ke dashboard admin
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/dashboardadmin"); // Arahkan ke dashboard admin jika ada token
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error

    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/loginadmin", {
        email,
        password,
      });

      if (response.data.accessToken) {
        localStorage.setItem("authToken", response.data.accessToken);
        navigate("/dashboardadmin"); // Setelah login, arahkan ke dashboard admin
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(error.response?.data?.msg || "Login failed. Check email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-200 rounded-2xl shadow-2xl p-10 max-w-md w-full">
        <div className="text-center">
          <img
            src="/assets/logo.png"
            alt="AgroJaya Logo"
            className="mx-auto mb-4 w-16"
          />
          <h1 className="text-3xl font-extrabold text-gray-800 mb-1">
            Welcome Back
          </h1>
          <p className="text-lg text-green-600 mb-8">Masuk Akun Agro Jaya</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email / Username
            </label>
            <input
              id="email"
              type="text"
              placeholder="Masukan Email atau Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Kata Sandi
            </label>
            <input
              id="password"
              type="password"
              placeholder="Masukan Kata Sandi"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
