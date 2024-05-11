import React from 'react'
import { Link } from 'react-router-dom'

const UserRole = () => {
  return (
    <>
        <div>
            <div className=''>
                <div className='h-screen flex flex-col justify-center items-center'>
                    <div className='px-10 mb-5 w-full'>
                        <img src="assets/img/logo.png" alt="" />
                    </div>
                    <div className='w-4/5 lg:flex hidden flex-col justify-center items-center backdrop-blur-sm bg-blue-300/30 h-4/5 rounded-3xl border border-blue-400 gap-6'>
                        <h1 className='text-2xl text-slate-700 font-semibold'>Anda akan masuk sebagai?</h1>
                        <div className='flex w-4/5 justify-center'>
                            <div className='flex flex-col items-center gap-6 w-1/2'>
                                <img src="assets/img/imageUser.png" className='w-40' alt="" />
                                <p className='w-3/5 text-sm text-center h-16'>Jelajahi keajaiban alam yang memukau dan warisan budaya yang kaya. Temukan Petualanganmu!</p>
                                <Link to = '/register' className='w-full flex justify-center items-center'><button className='bg-blue-300 w-1/2 text-white font-semibold h-10 rounded-full'>Pengguna</button></Link>
                            </div>
                            <p className='my-auto text-md font-semibold text-slate-700'>atau</p>
                            <div className='flex flex-col items-center gap-6 w-1/2'>
                                <img src="assets/img/imageTourGuide.png" className='w-36' alt="" />
                                <p className='w-3/5 text-sm text-center h-16 content-center'>Mulai Bisnismu dengan mudah dan temukan pengalaman yang baru!</p>
                                <Link to = '/register' className='w-full flex justify-center items-center'><button className='bg-blue-300 w-1/2 text-white font-semibold h-10 rounded-full'>Tour Guide</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-4/5 lg:hidden flex flex-col justify-center items-center h-4/5 gap-6'>
                        <div className='flex w-4/5 justify-center'>
                            <div className='flex flex-col items-center gap-20'>
                                <div className='flex flex-col items-center gap-6'>
                                    <img src="assets/img/imageUser.png" className='w-4/5' alt="" />
                                    <p className='text-sm text-center'>Jelajahi keajaiban alam yang memukau dan warisan budaya yang kaya. Temukan Petualanganmu!</p>
                                </div>
                                <div className='w-full flex flex-col gap-3 justify-center items-center'>
                                    <p>Daftar Sebagai</p>
                                    <Link to = '/register'><button className='bg-blue-300 w-full text-white font-semibold h-10 rounded-lg'>Pengguna</button></Link>
                                    <Link to = '/register'><button className='border border-blue-300 w-full text-blue-300 font-semibold h-10 rounded-lg'>Tour Guide</button></Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserRole