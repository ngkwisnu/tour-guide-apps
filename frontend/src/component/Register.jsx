import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container mx-auto'>
      <div className='w-full bg-slate-100 lg:bg-transparent'><img src="assets/img/logo.png" className='w-2/5 lg:w-auto' alt="" /></div>
      <div className='mt-24 lg:mt-10 rounded-2xl flex flex-col gap-6 content-center lg:backdrop-blur-sm lg:mb-20 lg:bg-sky-200/20 lg:shadow-sm lg:border lg:border-sky-300 lg:mx-28 lg:py-10'>
        <h1 className='hidden lg:block mb-10 lg:mb-5 text-2xl text-center font-bold text-slate-700'>Anda akan masuk sebagai?</h1>
        <div className='flex flex-col gap-6 lg:flex-row lg:gap-0 lg:mx-28'>
          <div className='flex flex-col items-center gap-20 lg:gap-10 lg:w-1/2'>
            <div className='flex flex-col items-center gap-8'>
              <img src="assets/img/imageUser.png" className='w-40' alt="" />
              <h1 className='text-4xl text-slate-700 text-center font-bold leading-normal lg:hidden'>Masuk Sebagai Pengguna?</h1>
              <p className='text-center lg:h-12 w-3/5 text-slate-700 text-sm leading-normal'>Jelajahi keajaiban alam yang memukau dan warisan budaya yang kaya. Temukan Petualanganmu!</p>
            </div>
            <div className='w-full flex flex-col items-center gap-3'>
              <button className='w-4/5 hover:bg-white hover:text-sky-300 hover:border hover:border-sky-300 transition rounded-md bg-sky-300 h-16 lg:h-14 text-white font-semibold lg:w-3/5 lg:rounded-full'>Pengguna</button>
              <button className='w-4/5 rounded-md border border-sky-300 h-16 text-sky-300 font-semibold lg:hidden'>Tour Guide</button>
            </div>
          </div>
          <p className='text-center hidden lg:block my-auto font-semibold'>atau</p>
          <div className='lg:flex lg:w-1/2 hidden flex-col items-center lg:gap-10 gap-20'>
            <div className='flex flex-col items-center gap-8'>
              <img src="assets/img/imageTourGuide.png" className='w-36' alt="" />
              <h1 className='text-4xl text-slate-700 text-center font-bold leading-normal lg:hidden'>Masuk Sebagai Pengguna?</h1>
              <p className='text-center w-3/5 lg:h-12 text-slate-700 text-sm leading-normal'>Mulai Bisnismu dengan mudah dan temukan pengalaman yang baru!</p>
            </div>
            <div className='w-full flex flex-col items-center gap-3'>
              <button className='w-4/5 hover:bg-white hover:text-sky-300 hover:border hover:border-sky-300 rounded-md bg-sky-300 h-16 text-white font-semibold lg:hidden'>Pengguna</button>
              <button className='w-4/5 rounded-md border border-sky-300 h-16 text-sky-300 font-semibold lg:w-3/5 lg:rounded-full lg:h-14 lg:border-0 lg:bg-sky-300 lg:text-white hover:bg-white hover:text-sky-300 hover:border hover:border-sky-300 transition'>Tour Guide</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register