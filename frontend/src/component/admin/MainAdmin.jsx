import React from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MainAdmin = () => {
  const [page, setPage] = useState("admin")
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
    <div className='w-4/5 flex flex-col items-center gap-6 bg-white py-10'>
        
        <div className='w-4/5'>
            <Link to = '/tambah-wisata'><button className='bg-blue-400 rounded-xl w-1/6 h-7 text-white'><i className="fa-solid fa-circle-plus text-white mr-4"></i>Tambah Data</button></Link>
        </div>
        <div className="w-11/12 h-max relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                            Nama
                        </th>
                        <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                            Deskripsi
                        </th>
                        <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                            Alamat
                        </th>
                        <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                            Harga Tiket
                        </th>
                        <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-slate-600">
                        <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                            Nusa Penida
                        </th>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                        Nusa Penida adalah sebuah pulau yang ada di bali
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            Klungkung
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            15000
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center justify-center flex gap-5">
                            <Link to = '/edit-wisata'><i className="fa-regular fa-pen-to-square text-green-600"></i></Link>
                            <i class="fa-solid fa-square-minus text-red-600" onClick={hapusData}></i>
                        </td>
                    </tr>
                    <tr className="border-b border-slate-600">
                        <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                            Nusa Penida
                        </th>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                        Nusa Penida adalah sebuah pulau yang ada di bali
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            Klungkung
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            15000
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center justify-center flex gap-5">
                            <Link to = '/edit-wisata'><i className="fa-regular fa-pen-to-square text-green-600"></i></Link>
                            <i class="fa-solid fa-square-minus text-red-600" onClick={hapusData}></i>
                        </td>
                    </tr>
                    <tr className="border-b border-slate-600">
                        <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                            Nusa Penida
                        </th>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                        Nusa Penida adalah sebuah pulau yang ada di bali
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            Klungkung
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            15000
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center justify-center flex gap-5">
                            <Link to = '/edit-wisata'><i className="fa-regular fa-pen-to-square text-green-600"></i></Link>
                            <i class="fa-solid fa-square-minus text-red-600" onClick={hapusData}></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default MainAdmin