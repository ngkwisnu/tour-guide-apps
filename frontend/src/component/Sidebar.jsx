import React, { useEffect } from "react";
import {
  ArrowDownWideNarrow,
  BadgeInfo,
  CreditCard,
  LayoutList,
  SquareCheckBig,
  User,
} from "lucide-react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const links = [
  {
    title: "Profile Pengguna",
    to: "/profile",
    icon: <User />,
  },
  {
    title: "Invoice",
    to: "/invoice",
    icon: <SquareCheckBig />,
  },
  {
    title: "Bukti Pembayaran",
    to: "/bukti-pembayaran",
    icon: <LayoutList />,
  },
  {
    title: "Menunggu Pembayaran",
    to: "/menunggu-pembayaran",
    icon: <CreditCard />,
  },
  {
    title: "Riwayat Transaksi",
    to: "/riwayat-transaksi",
    icon: <ArrowDownWideNarrow />,
  },
  {
    title: "Pusat Bantuan",
    to: "/pusat-bantuan",
    icon: <BadgeInfo />,
  },
];

export default function Sidebar() {
  const path = useLocation().pathname;

  return (
    <div className="">
      <h1 className="text-4xl font-semibold">Akun</h1>
      <ul className="mt-16 flex flex-col gap-11">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`flex gap-4 ${
                path === link.to ? "text-sky-500 font-semibold" : ""
              }`}
            >
              {link.icon} {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
