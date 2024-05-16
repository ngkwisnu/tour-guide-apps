import {
  ArrowDownWideNarrow,
  BookMarked,
  CirclePlus,
  List,
  Server,
  User,
} from "lucide-react";
import React from "react";
import Navbar from "../component/Navbar";

export default function ProfileAdmin() {
  return (
    <div className="mx-[72px]">
      <Navbar />
      <div className="grid grid-cols-4 mt-16">
        <div className="">
          <h1 className="text-4xl font-semibold">Akun Admin</h1>
          <ul className="mt-16 flex flex-col gap-11">
            <li className="flex gap-4 text-sky-500">
              <Server /> Data Wisata
            </li>
            <li className="flex gap-4">
              <List /> Pesanan
            </li>
            <li className="flex gap-4">
              <BookMarked /> Kelola Paket
            </li>
            <li className="flex gap-4">
              <ArrowDownWideNarrow /> Riwayat Transaksi
            </li>
          </ul>
        </div>
        <div className=" col-span-3 flex flex-col w-full relative">
          <button className="bg-sky-500 text-white flex gap-4 py-1 px-4 rounded-full w-fit absolute right-0">
            <CirclePlus /> Tambah Data
          </button>
          <div className="border-2 border-sky-300 mt-12 rounded-xl px-8">
            <div className="flex justify-between font-semibold">
              <div>Nama</div>
              <div>Deskripsi</div>
              <div>Alamat</div>
              <div>Harga Tiket</div>
              <div>Aksi</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
