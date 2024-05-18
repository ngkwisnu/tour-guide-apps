import React from 'react'
import { Link } from 'react-router-dom'

const Riwayat = () => {
  return (
    <>
      <div className='w-4/5 flex flex-col items-center gap-6 bg-white py-10'>
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
    </>
  )
}

export default Riwayat