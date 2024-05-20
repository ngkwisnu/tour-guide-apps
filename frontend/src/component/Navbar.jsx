import { User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    title: 'Home',
    to: '/home',
  },
  {
    title: 'App',
    to: '/app',
  },
  {
    title: 'Wisata',
    to: '/package',
  },
  {
    title: 'Notifikasi',
    to: '/notifikasi',
  },
];

export default function Navbar() {
  return (
    <header className="h-16">
      <nav className="flex justify-between items-center h-full">
        <img src="/logo.png" alt="" />
        <ul className="flex gap-6 font-semibold items-center justify-center">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}

          <li>
            <Link className="button flex gap-2 px-6 ml-10 " to="/akun">
              <User />
              Akun
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
