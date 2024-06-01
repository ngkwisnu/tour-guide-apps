import { useState } from "react";
import SectionContainer from "./component/sectionContainer";
import Header from "./component/header";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserRole from "./pages/UserRole";
import ChangePassword from "./pages/ChangePassword";
import VerifikasiChangePassword from "./pages/VerifikasiChangePassword";
import KonfirmasiOTP from "./pages/KonfirmasiOTP";
import VerificationOTP from "./pages/VerificationOTP";
import Admin from "./pages/Admin";
import TambahData from "./component/admin/TambahData";
import EditData from "./component/admin/EditData";
import TourGuide from "./pages/TourGuide";
import Pesanan from "./component/admin/Pesanan";
import Paket from "./component/tour-guide/Paket";
import Riwayat from "./component/admin/Riwayat";
import AkunPengguna from "./pages/AkunPengguna";
import Invoice from "./component/pengguna/Invoice";
import BuktiPembayaran from "./component/pengguna/BuktiPembayaran";
import ChatBot from "./component/ChatBot";
import Package from "./pages/Package";
import Footer from "./component/footer";
import Pembayaran from "./pages/Pembayaran";

function App() {
  return (
    <>
      {/* <Header />
      <ChatBot /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/package" element={<Package />} />
        <Route path="/pilih-pengguna" element={<UserRole />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route
          path="/verifikasi-password"
          element={<VerifikasiChangePassword />}
        />
        <Route path="/konfirmasi-otp" element={<KonfirmasiOTP />} />
        <Route path="/verifikasi-otp" element={<VerificationOTP />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tambah-wisata" element={<TambahData />} />
        <Route path="/edit-wisata/:id" element={<EditData />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
