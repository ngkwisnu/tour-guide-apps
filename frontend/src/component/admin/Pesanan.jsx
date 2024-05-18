import React from 'react';
import { Link } from 'react-router-dom';

const Pesanan = () => {
  return (
    <>
      <div className='w-4/5 flex flex-col items-center gap-6 bg-white py-10'>
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
    </>
  );
}

export default Pesanan;
