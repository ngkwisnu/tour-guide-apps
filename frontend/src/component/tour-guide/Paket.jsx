import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Paket = () => {
  return (
    <>
        <div className='container mx-auto py-5'>
            <div className='flex justify-between'>
                <img src="../assets/img/logo.png" className='w-36' alt="" />
                <div className='flex gap-5 items-center'>
                    <p>Home</p>
                    <p>App</p>
                    <p>Wisata</p>
                    <p>Notifikasi</p>
                    <button className='text-white bg-blue-300 rounded-full w-32 ml-8'><i className="fa-solid fa-user mr-5"></i>Akun</button>
                </div>
            </div>
        </div>
        <div className='flex w-full bg-slate-200 h-screen mb-10'>
            <div className='bg-white w-1/5 px-10 py-10'>
                <h1 className='font-bold text-2xl'>Akun Tour Guide</h1>
                <Link to = '/tour-guide'>
                <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                    <i className="fa-solid fa-user"></i>
                    <p>Profile</p>
                </div>
                </Link>
                <Link to = '/tour-guide/pesanan'>
                <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                    <i className="fa-solid fa-list"></i>
                    <p>Pesanan</p>
                </div>
                </Link>
                <Link to = '/tour-guide/paket'>
                <div className='flex items-center gap-5 text-blue-300 my-10 text-lg'>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Paket</p>
                </div>
                </Link>
                <Link to = '/tour-guide/riwayat'>
                <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    <p>Riwayat</p>
                </div>
                </Link>
            </div>
            <div className='w-4/5 flex flex-col items-center gap-6 bg-white'>
              <div className='bg-blue-300/30 backdrop-blur-sm border border-blue-400 rounded-3xl w-4/5 h-4/5 flex flex-col py-10 justify-center items-center gap-16'>
              </div>
            </div>
        </div>
    </>
  )
}

export default Paket