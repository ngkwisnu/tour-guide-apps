import React, { useEffect } from 'react';
import { ArrowDownWideNarrow, BadgeInfo, CreditCard, LayoutList, SquareCheckBig, User } from 'lucide-react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const links = [
  {
    title: 'Profile Pengguna',
    to: '/profile',
    icon: <User />,
  },
  {
    title: 'Invoice',
    to: '/profile/invoice',
    icon: <SquareCheckBig />,
  },
  {
    title: 'Bukti Pembayaran',
    to: '/profile/bukti-pembayaran',
    icon: <LayoutList />,
  },
  {
    title: 'Menunggu Pembayaran',
    to: '/profile/menunggu-pembayaran',
    icon: <CreditCard />,
  },
  {
    title: 'Riwayat Transaksi',
    to: '/profile/riwayat-transaksi',
    icon: <ArrowDownWideNarrow />,
  },
  {
    title: 'Pusat Bantuan',
    to: '/profile/pusat-bantuan',
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
            <Link to={link.to} className={`flex gap-4 ${path === link.to ? 'text-regent-500 font-semibold' : ''}`}>
              {link.icon} {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
