import React from "react";
import {
  ArrowDownWideNarrow,
  BadgeInfo,
  CreditCard,
  LayoutList,
  SquareCheckBig,
  User,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold">Akun</h1>
      <ul className="mt-16 flex flex-col gap-11">
        <li className="flex gap-4 text-sky-500">
          <User /> Profile Pengguna
        </li>
        <li className="flex gap-4">
          <SquareCheckBig /> Invoice
        </li>
        <li className="flex gap-4">
          <LayoutList /> Bukti Pembayaran
        </li>
        <li className="flex gap-4">
          <CreditCard /> Menunggu Pembayaran
        </li>
        <li className="flex gap-4">
          <ArrowDownWideNarrow /> Riwayat Transaksi
        </li>
        <li className="flex gap-4">
          <BadgeInfo /> Pusat Bantuan
        </li>
      </ul>
    </div>
  );
}
