import { User } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <header className="h-16">
      <nav className="flex justify-between items-center h-full">
        <img src="/logo.png" alt="" />
        <ul className="flex gap-6 font-semibold items-center justify-center">
          <li>Home</li>
          <li>App</li>
          <li>Wisata</li>
          <li>Notifikasi</li>
          <li className="button flex gap-2 px-6 ml-10">
            <User />
            Akun
          </li>
        </ul>
      </nav>
    </header>
  );
}
