import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileUser from "./pages/ProfileUser";
import AccountLayout from "./component/AccountLayout";
import InvoicePage from "./pages/InvoicePage";
import BuktiPembayaranPage from "./pages/BuktiPembayaranPage";
import PembayaranPage from "./pages/PembayaranPage";
import RiwayatTransaksiPage from "./pages/RiwayatTransaksiPage";
import BantuanPage from "./pages/BantuanPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AccountLayout />}>
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/bukti-pembayaran" element={<BuktiPembayaranPage />} />
          <Route path="/menunggu-pembayaran" element={<PembayaranPage />} />
          <Route path="/riwayat-transaksi" element={<RiwayatTransaksiPage />} />
          <Route path="/pusat-bantuan" element={<BantuanPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
