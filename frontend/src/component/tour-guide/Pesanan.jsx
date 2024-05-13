import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Pesanan = () => {
  return (
    <>
        <Navbar/>
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
                <div className='flex items-center gap-5 text-blue-300 my-10 text-lg'>
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
            <div className='w-4/5 flex flex-col items-center gap-6 bg-white'>
              <div className="w-11/12 h-max relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs uppercase">
                      <tr>
                          <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                              Tanggal
                          </th>
                          <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                              Nama & Kontak
                          </th>
                          <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                              Kode Booking
                          </th>
                          <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                              Jumlah Tiket
                          </th>
                          <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                              Item
                          </th>
                          <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                              Status
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="border-b border-slate-600">
                          <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                              12/02/2024
                          </th>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              Ahmad 081-123-456
                          </td>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              W-345890
                          </td>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              3
                          </td>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              Package Tour Guide A
                          </td>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              <span className="bg-white text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Diterima</span>
                          </td>
                      </tr>
                      <tr className="border-b border-slate-600">
                          <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                              12/02/2024
                          </th>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              Ahmad 081-123-456
                          </td>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              W-345890
                          </td>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              3
                          </td>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              Package Tour Guide A
                          </td>
                          <td className="px-6 py-4 bg-blue-300/30 text-center">
                              <span className="bg-white text-yellow-400 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Menunggu</span>
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

export default Pesanan