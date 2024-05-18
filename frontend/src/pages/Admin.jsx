import React, { useState } from 'react'
import NavbarAdmin from '../component/admin/NavbarAdmin'
import MainAdmin from '../component/admin/MainAdmin'
import Pesanan from '../component/admin/Pesanan'
import Riwayat from '../component/admin/Riwayat'

const Admin = () => {
  const [page, setPage] = useState('data-wisata')
  return (
    <>
        <NavbarAdmin/>
        <div className='flex w-full bg-slate-200 h-screen'>
          <div className='bg-white w-1/5 px-10 py-10'>
            <h1 className='font-bold text-2xl'>Akun Admin</h1>
            <div
                className={`flex items-center gap-5 my-10 text-lg ${page == 'data-wisata' ? 'text-blue-300' : `hover:text-blue-300 text-slate-700`} `}
                onClick={() => setPage('data-wisata')}
              >
                <i className="fa-solid fa-database"></i>
                <p>Data Wisata</p>
            </div>
            <div
                className={`flex items-center gap-5 my-10 text-lg ${page == 'pesanan' ? 'text-blue-300' : `hover:text-blue-300 text-slate-700`} `}
                onClick={() => setPage('pesanan')}
              >
                <i className="fa-solid fa-list"></i>
                <p>Pesanan</p>
            </div>
            <div
                className={`flex items-center gap-5 my-10 text-lg ${page == 'riwayat' ? 'text-blue-300' : `hover:text-blue-300 text-slate-700`} `}
                onClick={() => setPage('riwayat')}
              >
                <i className="fa-solid fa-clock-rotate-left"></i>
                <p>Riwayat</p>
            </div>
          </div>
          {page == 'data-wisata' && <MainAdmin/>}
          {page == 'pesanan' && <Pesanan/>}
          {page == 'riwayat' && <Riwayat/>}
        </div>
    </>
  )
}

export default Admin