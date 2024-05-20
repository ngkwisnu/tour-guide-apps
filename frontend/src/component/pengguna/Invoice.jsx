import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Invoice = () => {
  return (
    <>
      <div className="container mx-auto py-5">
        <div className="flex justify-between">
          <img src="../assets/img/logo.png" className="w-36" alt="" />
          <div className="flex gap-5 items-center">
            <p>Home</p>
            <p>App</p>
            <p>Wisata</p>
            <p>Notifikasi</p>
            <button className="text-white bg-blue-300 rounded-full w-32 ml-8">
              <i className="fa-solid fa-user mr-5"></i>Akun
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-slate-200 h-screen mb-10">
        <div className="bg-white w-1/5 px-10 py-10">
          <h1 className="font-bold text-2xl">Akun</h1>
          <Link to="/akun">
            <div className="flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg">
              <i className="fa-solid fa-user"></i>
              <p>Profile</p>
            </div>
          </Link>
          <Link to="/akun/invoice">
            <div className="flex items-center gap-5 text-blue-300 my-10 text-lg">
              <i class="fa-regular fa-square-check"></i>
              <p>Invoice</p>
            </div>
          </Link>
          <Link to="/akun/bukti-pembayaran">
            <div className="flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg">
              <i class="fa-solid fa-barcode"></i>
              <p>Bukti Pembayaran</p>
            </div>
          </Link>
          <Link to="/akun/menunggu-pembayaran">
            <div className="flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <p>Menunggu Pembayaran</p>
            </div>
          </Link>
          <Link to="/akun/riwayat-transaksi">
            <div className="flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg">
              <i class="fa-regular fa-bookmark"></i>
              <p>Riwayat Transaksi</p>
            </div>
          </Link>
          <Link to="/akun/pusat-bantuan">
            <div className="flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg">
              <i class="fa-solid fa-info"></i>
              <p>Pusat Bantuan</p>
            </div>
          </Link>
        </div>

        <div className="w-4/5 flex flex-col items-center gap-6 bg-white">
          <div className="bg-blue-300/30 flex flex-col gap-7 p-10 backdrop-blur-sm border border-blue-400 rounded-3xl w-11/12">
            <div className="flex flex-col gap-7 text-slate-700">
              <h1 className="text-2xl font-bold">Kode Booking : W-345890</h1>
              <div className="flex flex-col gap-2 text-sm">
                <p>
                  Nama: <span className="font-bold">Ahmad</span>
                </p>
                <p>
                  No. Telepon: <span className="font-bold">081-234-987</span>
                </p>
                <p>
                  Tanggal: <span className="font-bold">23/06/2035</span>
                </p>
              </div>
            </div>
            <table className="w-full text-sm">
              <thead className="text-xs uppercase w-full">
                <tr className="border-b border-t border-slate-600 w-full">
                  <th scope="col" className="px-6 py-3 text-center">
                    Jumlah Tiket
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Tour Guide
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap text-center">
                    3
                  </th>
                  <td className="px-6 py-4 text-center">Paket Tour Guide A</td>
                  <td className="px-6 py-4 text-center">I Nengah Negara Atmaja</td>
                  <td className="px-6 py-4 text-center">Rp 2.400.000</td>
                </tr>
              </tbody>
            </table>
            <div className="w-full flex justify-center items-center mt-16">
              <button className="bg-blue-300 w-2/5 rounded-full h-10 text-white font-medium">Beri Ulasan</button>
            </div>
            <div className="text-sm font-light text-slate-500 pt-3">
              <p>*Tunjukan invoice ini pada pemandu saat tiba di kedatangan</p>
              <p>*Pastikan data pemandu Anda sesuai</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
