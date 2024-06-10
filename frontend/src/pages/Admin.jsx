import React, { useState } from 'react';
import NavbarAdmin from '../component/admin/NavbarAdmin';
import MainAdmin from '../component/admin/MainAdmin';
import Pesanan from '../component/admin/Pesanan';
import Riwayat from '../component/admin/Riwayat';
import MobileView from '../component/admin/MobileView';
import { useLocation } from 'react-router-dom';

const Admin = () => {
  const [page, setPage] = useState('data-wisata');
  // const location = useLocation()
  // const {datas} = location.state || {}
  // console.log(datas);

  return (
    <>
      <div className="hidden lg:block">
        {/* <NavbarAdmin /> */}
        <div className="flex w-full bg-slate-200">
          <div className="bg-white w-1/5 px-10 py-10">
            <h1 className="font-bold text-2xl">Akun Admin</h1>
            <div className={`flex items-center gap-5 my-10 text-lg ${page == 'data-wisata' ? 'text-blue-300' : `hover:text-blue-300 text-slate-700`} `} onClick={() => setPage('data-wisata')}>
              <i className="fa-solid fa-database"></i>
              <button>Data Wisata</button>
            </div>
            <div className={`flex items-center gap-5 my-10 text-lg ${page == 'pesanan' ? 'text-blue-300' : `hover:text-blue-300 text-slate-700`} `} onClick={() => setPage('pesanan')}>
              <i className="fa-solid fa-list"></i>
              <button>Pesanan</button>
            </div>
            <div className={`flex items-center gap-5 my-10 text-lg ${page == 'riwayat' ? 'text-blue-300' : `hover:text-blue-300 text-slate-700`} `} onClick={() => setPage('riwayat')}>
              <i className="fa-solid fa-clock-rotate-left"></i>
              <button>Riwayat</button>
            </div>
          </div>
          {page == 'data-wisata' && <MainAdmin />}
          {page == 'pesanan' && <Pesanan />}
          {page == 'riwayat' && <Riwayat />}
        </div>
      </div>
      <div className="lg:hidden block">
        <MobileView />
      </div>
    </>
  );
};

export default Admin;
