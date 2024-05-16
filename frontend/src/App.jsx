import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileUser from "./pages/ProfileUser";
import AccountLayout from "./component/AccountLayout";
import InvoicePage from "./pages/InvoicePage";
import BuktiPembayaranPage from "./pages/BuktiPembayaranPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AccountLayout />}>
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/bukti-pembayaran" element={<BuktiPembayaranPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
