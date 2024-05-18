import React from "react";
import {
  ArrowDownWideNarrow,
  BadgeInfo,
  CreditCard,
  LayoutList,
  SquareCheckBig,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold">Akun</h1>
      <ul className="mt-16 flex flex-col gap-11">
        <li>
          <Link to="/profile" className="flex gap-4 text-sky-500">
            <User /> Profile Pengguna
          </Link>
        </li>
        <li>
          <Link to="invoice" className="flex gap-4">
            <SquareCheckBig /> Invoice
          </Link>
        </li>
        <li>
          <Link to="bukti-pembayaran" className="flex gap-4">
            <LayoutList /> Bukti Pembayaran
          </Link>
        </li>
        <li>
          <Link to="menunggu-pembayaran" className="flex gap-4">
            <CreditCard /> Menunggu Pembayaran
          </Link>
        </li>
        <li>
          <Link to="riwayat-transaksi" className="flex gap-4">
            <ArrowDownWideNarrow /> Riwayat Transaksi
          </Link>
        </li>
        <li>
          <Link to="pusat-bantuan" className="flex gap-4">
            <BadgeInfo /> Pusat Bantuan
          </Link>
        </li>
      </ul>
    </div>
  );
}
