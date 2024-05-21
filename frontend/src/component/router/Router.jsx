import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/home';
import Package from '../../pages/Package';
import PackageDetail from '../../pages/PackageDetail';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from '../../pages/NotFound';
import Admin from '../admin/MainAdmin';
import TambaData from '../admin/TambahData';
import EditData from '../admin/EditData';
import UserLayout from '../layout/userLayout';
import AccountLayout from '../AccountLayout';
import ProfileUser from '../../pages/ProfileUser';
import InvoicePage from '../../pages/InvoicePage';
import BuktiPembayaran from '../../pages/BuktiPembayaranPage';
import PembayaranPage from '../../pages/PembayaranPage';
import RiwayatTransaksi from '../../pages/RiwayatTransaksiPage';
import BantuanPage from '../../pages/BantuanPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/package" element={<Package />} />
        <Route path="/package/package-detail" element={<PackageDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/tambah-wisata" element={<TambaData />} />
        <Route path="/admin/edit-wisata" element={<EditData />} />
        <Route path="/profile" element={<UserLayout />}>
          <Route index element={<ProfileUser />} />
          <Route path="invoice" element={<InvoicePage />} />
          <Route path="bukti-pembayaran" element={<BuktiPembayaran />} />
          <Route path="menunggu-pembayaran" element={<PembayaranPage />} />
          <Route path="riwayat-transaksi" element={<RiwayatTransaksi />} />
          <Route path="pusat-bantuan" element={<BantuanPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
