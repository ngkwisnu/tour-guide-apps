import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Riwayat = () => {
  const [detail1, setDetail1] = useState(false)
  const [detail2, setDetail2] = useState(false)
  return (
    <>
      <div className='w-4/5 flex flex-col items-center gap-6 bg-white py-10'>
        <div className="w-11/12 h-max relative overflow-x-auto shadow-md sm:rounded-lg bg-blue-300/30 backdrop-blur-sm">
          <div className='bg-white shadow-md text-center w-11/12 backdrop-blur-sm rounded-xl mx-auto my-5'>
            <div className='flex justify-between px-10'>
              <div className='flex flex-col items-start gap-1 py-5'>
                <p className='font-normal'>22 Juni 2035</p>
                <p className='font-bold text-lg'>Ahmad Sumamad</p>
              </div>
              <div className='flex justify-center items-center'>
                <i class="fa-solid fa-circle-arrow-down text-3xl text-blue-400" onClick={() => setDetail1(!detail1)}></i>
              </div>
            </div>
            {detail1 && 
              <>
                <hr />
                <div className='flex justify-between mx-10 py-5'>
                  <div className='w-1/2 pr-5'>
                    <table className='w-full'>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>No. Telepon</td>
                        <td className='text-end'>085123777987</td>
                      </tr>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Email</td>
                        <td className='text-end'>ahmad03@gmail.com</td>
                      </tr>
                    </table>
                    <table className='w-full mt-5'>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Kode Pemesanan</td>
                        <td className='text-end'>W-345890</td>
                      </tr>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Tujuan</td>
                        <td className='text-end'>Nusa Penida</td>
                      </tr>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Jumlah Orang</td>
                        <td className='text-end'>1</td>
                      </tr>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Tanggal Bayar</td>
                        <td className='text-end'>01/06/2035</td>
                      </tr>
                    </table>
                  </div>
                  <div className='w-1/2 pl-5 justify-center items-center'>
                    <table className='w-full'>
                        <tr className='h-10'>
                          <td className='text-start font-medium'>No. Telepon</td>
                          <td className='text-end'>085123777987</td>
                        </tr>
                        <tr className='h-10'>
                          <td className='text-start font-medium'>Email</td>
                          <td className='text-end'>ahmad03@gmail.com</td>
                        </tr>
                      </table>
                      <div className='w-full justify-center items-center mt-5 flex flex-col gap-2'>
                        <span className="bg-green-400 text-white text-xs font-medium px-5 py-2 rounded-full mt-4">Selesai</span>
                        <h3 className='text-lg font-medium mt-3'>Total</h3>
                        <h1 className='text-xl font-bold'>Rp. 321000</h1>
                      </div>
                  </div>
                </div>
              </>
            }
          </div>
          <div className='bg-white shadow-md text-center w-11/12 backdrop-blur-sm rounded-xl mx-auto my-5'>
            <div className='flex justify-between px-10'>
              <div className='flex flex-col items-start gap-1 py-5'>
                <p className='font-normal'>22 Juni 2035</p>
                <p className='font-bold text-lg'>Ahmad Sumamad</p>
              </div>
              <div className='flex justify-center items-center'>
                <i class="fa-solid fa-circle-arrow-down text-3xl text-blue-400" onClick={() => setDetail2(!detail2)}></i>
              </div>
            </div>
            {detail2 && 
              <>
                <hr />
                <div className='flex justify-between mx-10 py-5'>
                  <div className='w-1/2 pr-5'>
                    <table className='w-full'>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>No. Telepon</td>
                        <td className='text-end'>085123777987</td>
                      </tr>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Email</td>
                        <td className='text-end'>ahmad03@gmail.com</td>
                      </tr>
                    </table>
                    <table className='w-full mt-5'>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Kode Pemesanan</td>
                        <td className='text-end'>W-345890</td>
                      </tr>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Tujuan</td>
                        <td className='text-end'>Nusa Penida</td>
                      </tr>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Jumlah Orang</td>
                        <td className='text-end'>1</td>
                      </tr>
                      <tr className='h-10'>
                        <td className='text-start font-medium'>Tanggal Bayar</td>
                        <td className='text-end'>01/06/2035</td>
                      </tr>
                    </table>
                  </div>
                  <div className='w-1/2 pl-5 justify-center items-center'>
                    <table className='w-full'>
                        <tr className='h-10'>
                          <td className='text-start font-medium'>No. Telepon</td>
                          <td className='text-end'>085123777987</td>
                        </tr>
                        <tr className='h-10'>
                          <td className='text-start font-medium'>Email</td>
                          <td className='text-end'>ahmad03@gmail.com</td>
                        </tr>
                      </table>
                      <div className='w-full justify-center items-center mt-5 flex flex-col gap-4'>
                        <span className="bg-green-400 text-white text-xs font-medium px-5 py-2 rounded-full mt-4">Selesai</span>
                        <h3 className='text-lg font-medium'>Total</h3>
                        <h1 className='text-xl font-bold'>Rp. 321000</h1>
                      </div>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Riwayat