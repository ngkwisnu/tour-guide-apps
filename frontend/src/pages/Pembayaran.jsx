import React, { useState } from 'react';
import Header from '../component/header';

const Pembayaran = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="lg:block hidden">
        <main>
          <div className="flex justify-center items-center mx-20 gap-40 my-10">
            <div className="w-1/4">
              <img src="assets/img/payment.png" alt="" />
              <p className="text-lg font-bold mt-14 text-blue-400">
                <i class="fa-solid fa-arrow-left mr-10"></i>Kembali
              </p>
            </div>
            <div className="w-2/5 flex flex-col gap-3 text-slate-700">
              <h1 className="text-4xl font-bold">Detail Pembayaran</h1>
              <p className="font-bold mt-5">Ringkasan Pemesanan</p>
              <div className="flex justify-between">
                <p>Paket</p>
                <p className="font-bold">Nusa Penida</p>
              </div>
              <div className="flex justify-between">
                <p>Jumlah Orang</p>
                <p className="font-bold">1</p>
              </div>
              <div className="flex justify-between">
                <p>Tanggal Pemesanan</p>
                <p className="font-bold">23 Juni 2025</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Subtotal Pesanan</p>
                <p className="font-bold">Rp 320.000</p>
              </div>
              <div className="flex justify-between">
                <p>Biaya Layanan</p>
                <p className="font-bold">Rp 1.000</p>
              </div>
              <div className="flex justify-between">
                <p>Diskon</p>
                <p className="font-bold">-</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p className="font-bold">Rp 321.000</p>
              </div>
              <div>
                <div className="flex flex-col justify-between gap-5 mt-2 w-full">
                  <p className="font-bold">Metode Pembayaran</p>
                  <div className="flex gap-10 justify-start items-center">
                    <img src="assets/img/logobca.png" alt="" />
                    <p className="ml-2.5 mr-1.5">Transfer Bank BCA</p>
                    <input className="ml-4" type="radio" />
                  </div>
                  <div className="flex gap-10 justify-start items-center">
                    <img src="assets/img/logomandiri.png" alt="" />
                    <p>Transfer Bank Mandiri</p>
                    <input type="radio" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-10">
                <span className="bg-slate-200 text-sm px-5 py-1 rounded-t-md">Download aplikasi untuk dapat diskon Rp 20.000 dari transaksi ini!</span>
                <button className="w-full bg-blue-300 text-lg font-bold text-white h-12 rounded-md">Bayar</button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:hidden flex flex-col justify-center item-center">
        <div className={`flex justify-between items-center px-10 py-5 ${!showNav && `mb-5`}`}>
          <img src="assets/img/logo.png" className="w-40" alt="" />
          <i class="fa-solid fa-bars text-2xl" onClick={() => setShowNav(!showNav)}></i>
        </div>
        {showNav && (
          <div className={`${showNav && `mb-10`}`}>
            <ul className="bg-blue-300 flex flex-col justify-center items-center gap-3 py-3 text-white">
              <li>Home</li>
              <li>App</li>
              <li>Wisata</li>
              <li>Notifikasi</li>
            </ul>
          </div>
        )}
        <div className="w-4/5 flex flex-col gap-3 mx-auto text-slate-700">
          <h1 className="text-4xl font-bold mb-5">Detail Pembayaran</h1>
          <p className="font-bold mt-5">Ringkasan Pemesanan</p>
          <div className="flex justify-between">
            <p>Paket</p>
            <p className="font-bold">Nusa Penida</p>
          </div>
          <div className="flex justify-between">
            <p>Jumlah Orang</p>
            <p className="font-bold">1</p>
          </div>
          <div className="flex justify-between">
            <p>Tanggal Pemesanan</p>
            <p className="font-bold">23 Juni 2025</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Subtotal Pesanan</p>
            <p className="font-bold">Rp 320.000</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya Layanan</p>
            <p className="font-bold">Rp 1.000</p>
          </div>
          <div className="flex justify-between">
            <p>Diskon</p>
            <p className="font-bold">-</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p className="font-bold">Rp 321.000</p>
          </div>
          <div>
            <div className="flex flex-col justify-between gap-10 mt-2 w-full">
              <p className="font-bold mt-5">Metode Pembayaran</p>
              <div className="flex gap-10 justify-start items-center">
                <img src="assets/img/logobca.png" alt="" />
                <p className="ml-2.5 mr-1.5">Transfer Bank BCA</p>
                <input className="ml-4" type="radio" />
              </div>
              <div className="flex gap-10 justify-start items-center">
                <img src="assets/img/logomandiri.png" alt="" />
                <p>Transfer Bank Mandiri</p>
                <input type="radio" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <span className="bg-slate-200 text-sm px-5 py-1 rounded-t-md">Download aplikasi diskon Rp 20.000!</span>
            <button className="w-full bg-blue-300 text-lg font-bold text-white h-12 rounded-md">Bayar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pembayaran;
