import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileView = () => {
  const [showNav, setShowNav] = useState(false)
  const [page, setPage] = useState('')
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState('verifikasi')
  const [detail1, setDetail1] = useState(false)
  const [detail2, setDetail2] = useState(false)
  const hapusData = () => {
    Swal.fire({
        title: "Apakah anda yakin?",
        text: "Anda akan menghapus sebuah data wisata!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Data Dihapus!",
            text: "Data wisata telah dihapus!",
            icon: "success"
          });
        }
      });
  }
  return (
    <>
        <div className='flex justify-between items-center px-10 py-5'>
            <img src="assets/img/logo.png" className='w-40' alt="" />
            <i class="fa-solid fa-bars text-2xl" onClick={() => setShowNav(!showNav)}></i>
        </div>
        {showNav && 
        <div>
            <ul className='bg-blue-300 flex flex-col justify-center items-center gap-3 py-3 '>
            <li>Home</li>
            <li>App</li>
            <li>Wisata</li>
            <li>Notifikasi</li>
            </ul>
        </div>
        }
        {page == '' && 
        <div className='flex flex-col text-black gap-10 py-10 justify-center items-center'>
          <div className='bg-blue-300 w-4/5 rounded-md py-5 px-5 flex flex-col gap-4' onClick={() => setPage('data-wisata')}>
            <i class="fa-regular fa-folder-open text-4xl "></i>
            <h3 className='text-2xl font-bold '>Data Wisata</h3>
          </div>
          <div className='bg-green-400 w-4/5 rounded-md py-5 px-5 flex flex-col gap-4' onClick={() => setPage('data-pesanan')}>
            <i class="fa-solid fa-chart-simple text-4xl "></i>
            <h3 className='text-2xl font-bold '>Data Pesanan</h3>
          </div>
          <div className='bg-yellow-300 w-4/5 rounded-md py-5 px-5 flex flex-col gap-4' onClick={() => setPage('data-riwayat')}>
            <i class="fa-solid fa-clock-rotate-left text-4xl "></i>
            <h3 className='text-2xl font-bold '>Data Riwayat</h3>
          </div>
        </div>
        }
        {page == 'data-wisata' && 
          <>
          <h3 className='mx-10 flex justify-start font-bold text-blue-300 gap-3 items-center' onClick={() => setPage('')}><i class="fa-solid fa-arrow-left"></i>Kembali</h3>
            <div className='flex flex-col gap-10 py-10 justify-center items-center'>
              <button className='bg-blue-300 rounded-md  w-4/5 h-10'>Tambah Data</button>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Nama
                          </th>
                          <th scope="col" class="px-6 py-3 text-center">
                              Aksi
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:">
                              Nusa Penida
                          </td>
                          <td class="px-6 py-4 text-center justify-center flex gap-5">
                              <Link to = '/edit-wisata'><i className="fa-regular fa-pen-to-square text-green-600"></i></Link>
                              <i class="fa-solid fa-square-minus text-red-600" onClick={hapusData}></i>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:">
                              Nusa Penida
                          </td>
                          <td class="px-6 py-4 text-center justify-center flex gap-5">
                              <Link to = '/edit-wisata'><i className="fa-regular fa-pen-to-square text-green-600"></i></Link>
                              <i class="fa-solid fa-square-minus text-red-600" onClick={hapusData}></i>
                          </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        }
        {page == 'data-riwayat' && 
          <>
          <h3 className='mx-10 flex justify-start font-bold text-blue-300 gap-3 items-center mb-10' onClick={() => setPage('')}><i class="fa-solid fa-arrow-left"></i>Kembali</h3>
            <div className={`flex flex-col ${!detail1 && !detail2 ? 'gap-10' : `gap-0`} justify-center items-center`}>
              <div className={`flex justify-between w-4/5 shadow-md ${detail1 && `rounded-b-none`} rounded-lg py-2 px-7`}>
                <div className='flex flex-col items-start gap-1 py-5 text-slate-700'>
                  <p className='font-normal'>22 Juni 2035</p>
                  <p className='font-bold text-lg'>Ahmad Sumamad</p>
                </div>
                <div className='flex justify-center items-center'>
                  <i class="fa-solid fa-circle-arrow-down text-3xl text-blue-400" onClick={() => setDetail1(!detail1)}></i>
                </div>
              </div>
              {detail1 && 
              <>
                <div className={`flex flex-wrap w-4/5 px-5 justify-between mx-10 py-5 bg-white ${detail1 ? `shadow-lg mb-5 rounded-b-md` : 'shadow-none'}`}>
                  <div className='w-full pr-5'>
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
                    <table className='w-full'>
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
                      <span className="bg-green-400  text-xs font-medium px-5 py-2 rounded-full">Selesai</span>
                      <h3 className='text-lg font-medium'>Total</h3>
                      <h1 className='text-xl font-bold'>Rp. 321000</h1>
                    </div>
                  </div>
                 </div>
                </>
              }
              <div className={`flex justify-between w-4/5 shadow-lg rounded-lg py-2 px-7 ${detail2 && `rounded-b-none`}`}>
                <div className='flex flex-col items-start gap-1 py-5 text-slate-700'>
                  <p className='font-normal'>22 Juni 2035</p>
                  <p className='font-bold text-lg'>Ahmad Sumamad</p>
                </div>
                <div className='flex justify-center items-center'>
                  <i class="fa-solid fa-circle-arrow-down text-3xl text-blue-400" onClick={() => setDetail2(!detail2)}></i>
                </div>
              </div>
              {detail2 && 
              <>
                <div className={`flex flex-wrap w-4/5 px-5 justify-between mx-10 py-5 bg-white ${detail2 ? `shadow-lg mb-5 rounded-b-md` : 'shadow-none'}`}>
                  <div className='w-full pr-5'>
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
                    <table className='w-full'>
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
                      <span className="bg-green-400  text-xs font-medium px-5 py-2 rounded-full">Selesai</span>
                      <h3 className='text-lg font-medium'>Total</h3>
                      <h1 className='text-xl font-bold'>Rp. 321000</h1>
                    </div>
                  </div>
                 </div>
                </>
              }
            </div>
          </>
        }
        {page == 'data-pesanan' && 
          <>
          <h3 className='mx-10 flex justify-start font-bold text-blue-300 gap-3 items-center' onClick={() => setPage('')}><i class="fa-solid fa-arrow-left"></i>Kembali</h3>
            <div className='flex flex-col gap-10 py-10 justify-center items-center'>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Nama
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Tanggal
                          </th>
                          <th scope="col" class="px-6 py-3 text-center">
                              Aksi
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:">
                              Nusa Penida
                          </td>
                          <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:">
                              12/03/2024
                          </td>
                          <td className="px-6 py-4 text-center" data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={() => setShow(!show)}>
                            <span className="bg-white text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"><i class="fa-solid fa-eye mr-2"></i></span>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:">
                              Nusa Penida
                          </td>
                          <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:">
                              12/03/2024
                          </td>
                          <td className="px-6 py-4 text-center" data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={() => setShow(!show)}>
                            <span className="bg-white text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"><i class="fa-solid fa-eye mr-2"></i></span>
                          </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        }
        {/* Modal */}
      {/* <!-- Main modal --> */}
      <div id="default-modal" tabindex="-1" aria-hidden="true" class={`${show ? `absolute` : `hidden`} overflow-y-auto overflow-x-hidden bg-white/30 backdrop-blur-sm justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full top-0`}>
          <div class="relative p-4 w-full max-w-2xl max-h-full mx-auto my-56">
              {/* <!-- Modal content --> */}
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:">
                          Informasi User
                      </h3>
                      <button type="button" onClick={() => setShow(!show)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:" data-modal-hide="default-modal">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div class="p-4 md:p-5 space-y-4">
                      <div>
                        <table>
                          <tr className='h-10'>
                            <td className='w-20'>Nama</td>
                            <td className='w-5'>:</td>
                            <td>Ahmad Sumamad</td>
                          </tr>
                          <tr className='h-10'>
                            <td className='w-20'>Telepon</td>
                            <td className='w-5'>:</td>
                            <td>087789876567</td>
                          </tr>
                          <tr className='h-10'>
                            <td className='w-20'>Email</td>
                            <td className='w-5'>:</td>
                            <td>ahmadsumamad@gmail.com</td>
                          </tr>
                          {status != 'ulasan' && 
                            <tr className='h-10'>
                            <td className='w-20'>Status</td>
                            <td className='w-5'>:</td>
                            <td>
                              {status == 'menunggu-pembayaran' && 
                                <span className="bg-yellow-200 text-slate-700 text-xs font-medium me-2 px-5 py-2 rounded-full"><i class="fa-solid fa-clock-rotate-left mr-4"></i>Menunggu Pembayaran</span>
                              }
                              {status == 'verifikasi' && 
                                <span className="bg-green-300 text-slate-700 text-xs font-medium me-2 px-5 py-2 rounded-full"><i class="fa-solid fa-handshake mr-4"></i>Verifikasi</span>
                              }
                              {status == 'dalam-perjalanan' && 
                                <span className="bg-blue-400 text-slate-700 text-xs font-medium me-2 px-5 py-2 rounded-full"><i class="fa-solid fa-plane mr-4"></i>Dalam Perjalanan</span>
                              }
                              {status == 'selesai' && 
                                <span className="bg-gray-300 text-slate-700 text-xs font-medium me-2 px-5 py-2 rounded-full"><i class="fa-solid fa-check mr-4"></i>Selesai</span>
                              }
                            </td>
                          </tr>
                          }
                        </table>
                          {status == 'selesai' && 
                            <p className='text-yellow-500 font-medium mt-10'><i>Perjalanan user telah berakhir, kirim notifikasi untuk segara mengisi ulasan!</i></p>
                          }
                      </div>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      {status == 'menunggu-pembayaran' && 
                        <>
                          <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover: dark:hover:bg-gray-700" onClick={() => setShow(!show)}>Kembali</button>
                        </>
                      }
                      {status == 'verifikasi' && 
                        <>
                          <button data-modal-hide="default-modal" type="button" class=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setStatus('dalam-perjalanan')}>Terima</button>
                          <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover: dark:hover:bg-gray-700">Tolak</button>
                        </>
                      }
                      {status == 'dalam-perjalanan' && 
                        <>
                          <button data-modal-hide="default-modal" type="button" class=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setStatus('selesai')}>Selesaikan Perjalanan</button>
                          <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover: dark:hover:bg-gray-700" onClick={() => setShow(!show)}>Kembali</button>
                        </>
                      }
                      {status == 'selesai' && 
                        <>
                          <button data-modal-hide="default-modal" type="button" class=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim</button>
                          <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover: dark:hover:bg-gray-700" onClick={() => setShow(!show)}>Kembali</button>
                        </>
                      }
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default MobileView