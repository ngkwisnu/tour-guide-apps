import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Trash, Plus } from 'lucide-react';

const MainAdmin = (props) => {
  const [page, setPage] = useState("admin")
  const [datas, setDatas] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/wisata');
        const fetchedDatas = await response.json();
        setDatas([fetchedDatas]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (props.tambahData != null) {
        setDatas((prevData) => [...prevData, props.tambahData])
    }
  }, [])
  const hapusData = (index) => {
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
          const newData = datas.filter((data) => {
            return data !== datas[index]
          })
          console.log(newData);
          setDatas(newData)
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
            <Link to = '/admin/tambah-wisata'><button className='bg-blue-400 rounded-xl w-1/6 h-7 text-black flex items-center'><Plus/>Tambah Data</button></Link>
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
                            Harga
                        </th>
                        <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                {datas.map((obj) => ( 
                    obj.data.map((data, index) => (
                        <tr className="border-b border-slate-600" key={index}>
                            <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                                {data.nama}
                            </th>
                            <td className="px-6 py-4 bg-blue-300/30 text-center">
                                {data.deskripsi}
                            </td>
                            <td className="px-6 py-4 bg-blue-300/30 text-center">
                                {data.alamat}
                            </td>
                            <td className="px-6 py-4 bg-blue-300/30 text-center">
                                {data.harga}
                            </td>
                            <td className="px-6 py-4 bg-blue-300/30 text-center justify-center flex gap-5">
                                <Link to="/admin/edit-wisata"><i className="fa-regular fa-pen-to-square text-green-600"></i></Link>
                                <Trash className="fa-solid fa-square-minus text-red-600" onClick={() => hapusData(index)}/>
                            </td>
                        </tr>
                    ))
                ))}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default MainAdmin