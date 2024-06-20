//coba buat pembayatan pake EMBED dlu, klo dh berhasil baru pake SNAP

import React, { useState, useEffect } from 'react';
import Header from '../component/header';
import { Button, Link } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import Payment from '../assets/images/payment.png';
import { getTodayDate } from '../utils/todayDate';

const Pembayaran = () => {
  const [showNav, setShowNav] = useState(false);
  const { id } = useParams();
  const history = useNavigate();
  const todayDate = getTodayDate();

  const [packages, setpackages] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(`http://18.141.9.175:5000/wisata/${id}}`); // Ganti dengan URL API yang sesuai
      const result = await response.json();
      if (Array.isArray(result.data) && result.data.length > 0) {
        setpackages(result.data[0]); // Ambil elemen pertama dari array
      }
      // setpackages(data);
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    console.log('Packages state:', packages);
  }, [packages]);

  if (!packages) {
    return <p>Loading...</p>;
  }
  const handleBack = () => {
    history(`/wisata/${id}`);
  };
  return (
    <>
      <div className="lg:block hidden ">
        <main>
          <div className="flex justify-center relative items-center mx-20 gap-40 ">
            {/* <Button  onClick={handleBack} className=" absolute left-0 top-0">
              <i class="fa-solid fa-arrow-left mr-10"></i>Kembali
            </Button> */}
            <div className="w-1/4 flex flex-col gap-2 justify-between h-full">
              <img src={Payment} alt="" />
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
                <p className="font-bold">{todayDate}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Subtotal Pesanan</p>
                <p className="font-bold">{packages.harga}</p>
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
             
              <div className="flex flex-col justify-center items-center mt-10">
                <span className="bg-slate-200 text-sm px-5 py-1 rounded-t-md">Download aplikasi untuk dapat diskon Rp 20.000 dari transaksi ini!</span>
                <button className="w-full bg-blue-300 text-lg font-bold text-white h-12 rounded-md">Bayar</button>
              </div>
            </div>
          </div>
          <div className="w-full text-center my-8">
            <Button colorScheme="blue">
              <Link _hover={{ textDecoration: 'none' }} href="https://app.sandbox.midtrans.com/payment-links/1718439912442">
                Bayar
              </Link>{' '}
            </Button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Pembayaran;
