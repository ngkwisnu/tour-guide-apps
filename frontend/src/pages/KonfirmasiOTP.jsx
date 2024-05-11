import React from 'react'
import { Link } from 'react-router-dom'

const KonfirmasiOTP = () => {
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <nav className='absolute z-10 top-0 w-full py-5 px-10'><img src="assets/img/logo.png" className='w-32' alt="" /></nav>
            <div className='lg:flex hidden h-4/5 mt-5 w-full gap-20 justify-center items-center'>
                <div className='w-1/5 flex flex-col gap-10 justify-center items-center'>
                    <h1 className='text-center text-slate-700 text-3xl font-semibold'>Verifikasi Berhasil!</h1>
                    <img src="assets/img/verif-otp.png" className='w-40' alt="" />
                </div>
                <div className='w-4/12 flex flex-col gap-10 bg-blue-300/30 backdrop-blur-sm rounded-lg border border-blue-400 h-full justify-center items-center'>
                    <h1 className='text-center text-2xl font-bold'>Selamat Datang!</h1>
                    <p className='text-center w-4/5'>Selamat Datang di aplikasi Nusa Guide, temukan perjalanan mu dengan cara yang baru dan selamat berpetualang!</p>
                    <Link to = '/verifikasi-password' className='flex w-3/5 justify-center items-center'><button type='submit' className='w-full bg-sky-300 rounded-full h-8 text-white font-semibold'>Selanjutnya</button></Link>
                </div>
            </div>
            <div className='lg:hidden flex flex-col h-4/5 mt-5 w-full gap-20 justify-center items-center'>
                <div className='w-full flex flex-col gap-10 justify-center items-center'>
                    <img src="assets/img/verifikasi-pass.png" className='w-40' alt="" />
                    <h1 className='text-center text-slate-700 text-3xl font-semibold'>Selamat Datang!</h1>
                    <p className='text-center w-4/5'>Selamat Datang di aplikasi Nusa Guide, temukan perjalanan mu dengan cara yang baru dan selamat berpetualang!</p>
                    <Link to = '/verifikasi-password' className='flex w-3/5 justify-center items-center'><button type='submit' className='w-full bg-sky-300 rounded-full h-8 text-white font-semibold'>Selanjutnya</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default KonfirmasiOTP