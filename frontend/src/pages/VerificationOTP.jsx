import React from 'react'
import { Link } from 'react-router-dom'

const VerificationOTP = () => {
  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
            <nav className='absolute z-10 top-0 w-full py-5 px-10'><img src="assets/img/logo.png" className='w-32' alt="" /></nav>
            <div className='lg:flex hidden h-4/5 mt-5 w-full gap-20 justify-center items-center'>
                <div className='w-1/5 flex flex-col gap-10 justify-center items-center'>
                    <h1 className='text-center text-slate-700 text-3xl font-semibold'>Verifikasi Kode</h1>
                    <img src="assets/img/otp.png" className='w-40' alt="" />
                </div>
                <div className='w-4/12 flex flex-col gap-10 bg-blue-300/30 backdrop-blur-sm rounded-lg border border-blue-400 h-full justify-center items-center'>
                    <h1 className='text-center text-2xl font-bold'>Masukkan Kode OTP</h1>
                    <p className='text-center w-4/5'>Masukkan kode OTP yang sudah kami kirimkan ke email yang sudah kamu masukkan!</p>
                    <form id="otp-form">
                      <p className='text-center mb-2'>Kode Verifikasi</p>
                        <div className="flex items-center justify-center gap-3">
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                />
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                />
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                />
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                />
                        </div>
                        <div className="max-w-[260px] mx-auto mt-8">
                            <button type="submit"
                                className="w-full inline-flex justify-center whitespace-nowrap rounded-full bg-blue-300 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-950/10 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors duration-150">Konfirmasi</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='lg:hidden flex flex-col h-4/5 mt-5 w-full gap-20 justify-center items-center'>
                <div className='w-full flex flex-col gap-10 justify-center items-center'>
                    <img src="assets/img/lupa-pass.png" className='w-32' alt="" />
                    <h1 className='text-center text-slate-700 text-3xl font-semibold'>Verifikasi Kode OTP</h1>
                    <p className='text-center w-4/5'>Masukkan kode OTP yang sudah kami kirimkan ke email yang sudah kamu masukkan!</p>
                </div>
                <div className='w-full'>
                <form id="otp-form">
                      <p className='text-center mb-2'>Kode Verifikasi</p>
                        <div className="flex items-center justify-center gap-3">
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                />
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                />
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                />
                            <input
                                type="text"
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                />
                        </div>
                        <div className="max-w-[260px] mx-auto mt-8">
                            <button type="submit"
                                className="w-full inline-flex justify-center whitespace-nowrap rounded-full bg-blue-300 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-950/10 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors duration-150">Konfirmasi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default VerificationOTP