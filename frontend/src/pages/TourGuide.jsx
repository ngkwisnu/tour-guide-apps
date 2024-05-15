import React from 'react'
import Profile from '../component/tour-guide/Profile'
import { Link } from 'react-router-dom'
import Navbar from '../component/tour-guide/Navbar'

const TourGuide = () => {
  return (
    <>
        <Navbar/>
        <div className='flex w-full bg-slate-200 h-screen mb-10'>
            <div className='bg-white w-1/5 px-10 py-10'>
                <h1 className='font-bold text-2xl'>Akun Tour Guide</h1>
                <Link to = '/tour-guide/profile'>
                <div className='flex items-center gap-5 text-blue-300 my-10 text-lg'>
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
                <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
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
            <Profile/>
        </div>
    </>
  )
}

export default TourGuide