import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Pesanan = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState('verifikasi')
  console.log(show);
  const kirimUlasan = () => {
    Swal.fire("SweetAlert2 is working!").then(() => {
      navigate('/admin')
    });
  }
  return (
    <>
      <div className='w-4/5 flex flex-col items-center gap-6 bg-white py-10'>
        <div className="w-11/12 h-max relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase">
              <tr>
                <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                  Tujuan
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                  Jumlah Orang
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                  Kode Booking
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-600">
                <td className="px-6 py-4 bg-blue-300/30 text-center">
                  Ahmad
                </td>
                <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                  12/02/2024
                </th>
                <td className="px-6 py-4 bg-blue-300/30 text-center">
                  Nusa Penida
                </td>
                <td className="px-6 py-4 bg-blue-300/30 text-center">
                  3
                </td>
                <td className="px-6 py-4 bg-blue-300/30 text-center">
                  W-345890
                </td>
                <td className="px-6 py-4 bg-blue-300/30 text-center" data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={() => setShow(!show)}>
                  <span className="bg-white text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"><i class="fa-solid fa-eye mr-2"></i>Lihat</span>
                </td>
              </tr>
              <tr className="border-b border-slate-600">
                <td className="px-6 py-4 bg-blue-300/30 text-center">
                  Ahmad
                </td>
                <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                  12/02/2024
                </th>
                <td className="px-6 py-4 bg-blue-300/30 text-center">
                  Nusa Penida
                </td>
                <td className="px-6 py-4 bg-blue-300/30 text-center">
                  3
                </td>
                <td className="px-6 py-4 bg-blue-300/30 text-center">
                  W-345890
                </td>
                <td className="px-6 py-4 bg-blue-300/30 text-center" data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={() => setShow(!show)}>
                  <span className="bg-white text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"><i class="fa-solid fa-eye mr-2"></i>Lihat</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      {/* <!-- Main modal --> */}
      <div id="default-modal" tabindex="-1" aria-hidden="true" class={`${show ? `absolute` : `hidden`} overflow-y-auto overflow-x-hidden bg-white/30 backdrop-blur-sm justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
          <div class="relative p-4 w-2/5 max-w-2xl max-h-full mx-auto my-10">
              {/* <!-- Modal content --> */}
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Informasi User
                      </h3>
                      <button type="button" onClick={() => setShow(!show)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
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
                                <>
                                <span className="bg-gray-300 text-slate-700 text-xs font-medium me-2 px-5 py-2 rounded-full"><i class="fa-solid fa-check mr-4"></i>Selesai</span>
                                </>
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
                          <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setShow(!show)}>Kembali</button>
                        </>
                      }
                      {status == 'verifikasi' && 
                        <>
                          <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setStatus('dalam-perjalanan')}>Terima</button>
                          <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Tolak</button>
                        </>
                      }
                      {status == 'dalam-perjalanan' && 
                        <>
                          <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setStatus('selesai')}>Selesaikan Perjalanan</button>
                          <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setShow(!show)}>Kembali</button>
                        </>
                      }
                      {status == 'selesai' && 
                        <>
                          <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={kirimUlasan}>Kirim</button>
                          <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setShow(!show)}>Kembali</button>
                        </>
                      }
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Pesanan;
