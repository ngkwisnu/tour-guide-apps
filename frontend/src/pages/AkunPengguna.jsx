import React from 'react'
import Navbar from '../component/pengguna/Navbar'
import { Link } from 'react-router-dom'
import Profile from '../component/pengguna/Profile'

const AkunPengguna = () => {
    return (
        <>
            {/* <Navbar/> */}
            <div className='flex w-full bg-slate-200 h-screen mb-10'>
                <div className='bg-white w-1/5 px-10 py-10'>
                    <h1 className='font-bold text-2xl'>Akun</h1>
                    <Link to = '/akun'>
                    <div className='flex items-center gap-5 text-blue-300 my-10 text-lg'>
                        <i className="fa-solid fa-user"></i>
                        <p>Profile</p>
                    </div>
                    </Link>
                    <Link to = '/akun/invoice'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i class="fa-regular fa-square-check"></i>
                        <p>Invoice</p>
                    </div>
                    </Link>
                    <Link to = '/tour-guide/paket'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i class="fa-solid fa-barcode"></i>
                        <p>Bukti Pembayaran</p>
                    </div>
                    </Link>
                    <Link to = '/tour-guide/riwayat'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        <p>Menunggu Pembayaran</p>
                    </div>
                    </Link>
                    <Link to = '/tour-guide/riwayat'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i class="fa-regular fa-bookmark"></i>
                        <p>Riwayat Transaksi</p>
                    </div>
                    </Link>
                    <Link to = '/tour-guide/riwayat'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i class="fa-solid fa-info"></i>
                        <p>Pusat Bantuan</p>
                    </div>
                    </Link>
                </div>
                <Profile/>
            </div>
        </>
    )
}

export default AkunPengguna