import React from 'react'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <nav className='absolute z-10 top-0 w-full py-5 px-10'><img src="assets/img/logo.png" className='w-32' alt="" /></nav>
            <div className='lg:flex hidden h-4/5 mt-5 w-full gap-20 justify-center items-center'>
                <div className='w-1/5 flex flex-col gap-10 justify-center items-center'>
                    <h1 className='text-center text-slate-700 text-3xl font-semibold'>Lupa kata sandi?</h1>
                    <img src="assets/img/lupa-pass.png" className='w-40' alt="" />
                </div>
                <div className='w-4/12 flex flex-col gap-10 bg-blue-300/30 backdrop-blur-sm rounded-lg border border-blue-400 h-full justify-center items-center'>
                    <h1 className='text-center text-2xl font-bold'>Masukkan Email</h1>
                    <p className='text-center w-4/5'>Masukkan email yang kamu gunakan, kami akan mengirimkan kode OTP ke email yang kamu masukkan</p>
                    <form className="w-4/5 mx-auto">
                        <div className="mb-3">
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 " required/>
                        </div>
                        <div className='flex justify-center lg:mt-8'>
                        <Link to = '/verifikasi-password' className='flex w-full justify-center items-center'><button type='submit' className='w-full bg-sky-300 rounded-full h-8 text-white font-semibold'>Kirim</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='lg:hidden flex flex-col h-4/5 mt-5 w-full gap-20 justify-center items-center'>
                <div className='w-full flex flex-col gap-10 justify-center items-center'>
                    <img src="assets/img/lupa-pass.png" className='w-40' alt="" />
                    <h1 className='text-center text-slate-700 text-3xl font-semibold'>Lupa kata sandi?</h1>
                    <p className='text-center w-4/5'>Masukkan email yang kamu gunakan, kami akan mengirimkan kode OTP ke email yang kamu masukkan</p>
                </div>
                <div className='w-full'>
                    <form className="w-4/5 mx-auto">
                        <div className="mb-5">
                            <input type="text" id="small-input" className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 " required placeholder='Masukkan email'/>
                        </div>
                        <div className='flex justify-center lg:mt-8'>
                            <Link to = '/verifikasi-password' className='w-full flex justify-center items-center'><button type='submit' className='w-full bg-sky-300 rounded-lg h-10 text-white font-semibold'>Kirim</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChangePassword