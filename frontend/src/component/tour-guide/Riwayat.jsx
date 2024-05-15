import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Riwayat = () => {
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
                <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Paket</p>
                </div>
                </Link>
                <Link to = '/tour-guide/riwayat'>
                <div className='flex items-center gap-5 text-blue-300 my-10 text-lg'>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    <p>Riwayat</p>
                </div>
                </Link>
            </div>
            <div className='w-4/5 flex flex-col items-center gap-6 bg-white'>
              <div className="w-11/12 h-max relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                  <tbody>
                      <tr className="border-b border-slate-600 text-slate-700">
                          <td scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                              <div className='flex flex-col items-start ml-10 gap-3'>
                                <p className='font-medium'>22 Juni 2035</p>
                                <p className='font-bold'>Ahmad Sumamad</p>
                                <p>Kode Pemesanan <span className='font-bold'>W-345890</span></p>
                                <p className='font-bold'>Package Tour Guide A</p>
                                <p className='font-bold'>Nusa Penida</p>
                              </div>
                          </td>
                          <td className="w-1/4 px-6 py-4 bg-blue-300/30 text-center">
                              <div className='mr-10 flex justify-center items-center'>
                                <div className='flex flex-col justify-center items-center gap-3'>
                                  <span className="bg-white text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Selesai</span>
                                  <p className='font-bold'>IDR 2.400.000</p>
                                </div>
                              </div>
                          </td>
                      </tr>  
                      <tr className="border-b border-slate-600 text-slate-700">
                          <td scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                              <div className='flex flex-col items-start ml-10 gap-3'>
                                <p className='font-medium'>22 Juni 2035</p>
                                <p className='font-bold'>Ahmad Sumamad</p>
                                <p>Kode Pemesanan <span className='font-bold'>W-345890</span></p>
                                <p className='font-bold'>Package Tour Guide A</p>
                                <p className='font-bold'>Nusa Penida</p>
                              </div>
                          </td>
                          <td className="w-1/4 px-6 py-4 bg-blue-300/30 text-center">
                              <div className='mr-10 flex justify-center items-center'>
                                <div className='flex flex-col justify-center items-center gap-3'>
                                  <span className="bg-white text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Menunggu Perjanalan</span>
                                  <p className='font-bold'>IDR 2.400.000</p>
                                </div>
                              </div>
                          </td>
                      </tr>  
                  </tbody>
              </table>
          </div>
          </div>
        </div>
    </>
  )
}

export default Riwayat