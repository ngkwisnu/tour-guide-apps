import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Trash, Plus } from 'lucide-react';

const MainAdmin = (props) => {
  const [page, setPage] = useState("admin")
  const [datas, setDatas] = useState([
    {
        id: 1,
        nama: 'Nusa Penida',
        deskripsi: 'Nusa Penida adalah sebuah pulau yang ada di bali',
        alamat: 'Klungkung',
        harga: 150000,
        jam_buka: '08.00',
        jarak_lokasi: '20',
        rating: '5',
        galeri: [
            'assets/img/bg2.png',
            'assets/img/iamgeUser.png',
            'assets/img/farm.png',
        ],
        informasi_tourguide: 'Percayakan wisata Anda kepada ahlinya! Kami akan memilihkan pemandu wisata terbaik di Nusa Penisa untuk menemani Anda. Tak perlu ragu lagi, Anda akan mendapatkan pengalaman wisata yang tak terlupakan dan penuh petualangan.',
        rating_ulasan: 5
    },
    {
        id: 2,
        nama: 'Uluwatu Temple',
        deskripsi: 'Pura Uluwatu adalah salah satu pura Hindu yang terkenal di Bali.',
        alamat: 'Badung',
        harga: 50000,
        jam_buka: '09.00',
        jarak_lokasi: '30',
        rating: '4.5',
        galeri: [
            'assets/img/uluwatu1.png',
            'assets/img/uluwatu2.png',
            'assets/img/uluwatu3.png',
        ],
        informasi_tourguide: 'Pemandu wisata kami akan menjelaskan sejarah dan keindahan Pura Uluwatu dengan detail, membuat kunjungan Anda lebih bermakna.',
        rating_ulasan: 4.5
    },
    {
        id: 3,
        nama: 'Tegallalang Rice Terrace',
        deskripsi: 'Sawah terasering Tegallalang menawarkan pemandangan hijau yang memukau di Ubud.',
        alamat: 'Gianyar',
        harga: 25000,
        jam_buka: '07.00',
        jarak_lokasi: '15',
        rating: '4.7',
        galeri: [
            'assets/img/tegallalang1.png',
            'assets/img/tegallalang2.png',
            'assets/img/tegallalang3.png',
        ],
        informasi_tourguide: 'Nikmati pemandangan dan pelajari cara bertani tradisional Bali dengan pemandu wisata kami.',
        rating_ulasan: 4.7
    },
    {
        id: 4,
        nama: 'Monkey Forest',
        deskripsi: 'Hutan Monyet Ubud adalah rumah bagi ratusan monyet ekor panjang.',
        alamat: 'Ubud',
        harga: 60000,
        jam_buka: '08.00',
        jarak_lokasi: '10',
        rating: '4.3',
        galeri: [
            'assets/img/monkeyforest1.png',
            'assets/img/monkeyforest2.png',
            'assets/img/monkeyforest3.png',
        ],
        informasi_tourguide: 'Jelajahi hutan dan bertemu dengan monyet-monyet lucu dengan panduan dari ahli kami.',
        rating_ulasan: 4.3
    },
    {
        id: 5,
        nama: 'Kuta Beach',
        deskripsi: 'Pantai Kuta adalah salah satu pantai yang paling terkenal di Bali, cocok untuk berselancar.',
        alamat: 'Kuta',
        harga: 0,
        jam_buka: '24 Jam',
        jarak_lokasi: '5',
        rating: '4.8',
        galeri: [
            'assets/img/kutabeach1.png',
            'assets/img/kutabeach2.png',
            'assets/img/kutabeach3.png',
        ],
        informasi_tourguide: 'Nikmati pantai dan ombak dengan bantuan instruktur selancar kami yang berpengalaman.',
        rating_ulasan: 4.8
    }
  ])
  useEffect(() => {
    if (props.tambahData != null) {
        setDatas((prevData) => [...prevData, props.tambahData])
    }
  }, [])
  console.log(datas);
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
                    {datas.map((data, index) => { 
                        return <tr className="border-b border-slate-600" key={index}>
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
                                <Link to = '/admin/edit-wisata'><i className="fa-regular fa-pen-to-square text-green-600"></i></Link>
                                <Trash class="fa-solid fa-square-minus text-red-600" onClick={() => hapusData(index)}/>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default MainAdmin