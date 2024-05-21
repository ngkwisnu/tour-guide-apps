import React, { useState } from 'react'
import Stars from './Stars'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import MainAdmin from './MainAdmin';

const TambahData = () => {
  const [star, setStar] = useState(5)
  const [images, setImages] = useState([])
  const navigate = useNavigate()
  const uploadGambar = (e) => {
    const file = e.target.files[0];
    if (file) {
        setImages((prevImages) => [...prevImages, file.name]);
    }
  }
  console.log(images);
  const imgWisata = [
    'bg2.png',
    'farm.png',
    'login.png',
  ]

  const simpanData = (e) => {
    e.preventDefault()
    const datas = {
        nama: e.target.nama.value,
        lokasi: e.target.lokasi.value,
        jam_buka: e.target.jam_buka.value,
        jarak_lokasi: e.target.jarak_lokasi.value,
        rating: e.target.rating.value,
        deskripsi: e.target.deskripsi.value,
        galeri: images,
        informasi_tourguide: e.target.informasi_tourguide.value,
        rating_tour: e.target.rating_tour.value,
        ulasan: e.target.ulasan.value,
    }
    console.log('Data Berhasil Ditambahkan!');
    console.log(datas);
    Swal.fire({
        title: "Berhasil!",
        text: "Data wisata telah ditambahkan.",
        icon: "success"
      }).then(() => {
        navigate('/admin')
      });
  }
  return (
    <div className='container mx-auto'>
        <h1 className='text-4xl font-bold my-10 mx-10'>Form Data</h1>
        <div className='w-full my-10 flex justify-center'>
            <div className='w-4/5 my-10'>
                <form className="w-full mx-auto" onSubmit={(e) => simpanData(e)}>
                    <div className="mb-5 lg:flex justify-center">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">Nama</label>
                        <input type="text" id="text" name='nama' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan nama wisata" />
                    </div>
                    <div className="mb-5 lg:flex justify-center">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">Lokasi</label>
                        <input type="text" id="text" name='lokasi' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan lokasi wisata" />
                    </div>
                    <div className="mb-5 lg:flex justify-center">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">Jam Buka</label>
                        <input type="time" name='jam_buka' id="text" className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan jam buka wisata" />
                    </div>
                    <div className="mb-5 lg:flex justify-center">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">Jarak Lokasi <i></i></label>
                        <input type="number" name='jarak_lokasi' id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan jarak wisata (km)" />
                    </div>
                    <div className="mb-5 lg:flex justify-center">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">Rating</label>
                        <input type="number" name='rating' id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan rating wisata" />
                    </div>
                    <div className='mb-5 lg:flex justify-center'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">Deskripsi</label>
                        <textarea id="message" name='deskripsi' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan deskripsi wisata..."></textarea>                        
                    </div>
                    <div className='mb-5 lg:flex justify-center'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">Galeri</label>
                        
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Klik untuk upload</span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" name='file' onChange={(e) => uploadGambar(e)} className="hidden" />
                            </label>
                        </div>   
                    </div>
                    <div className='lg:w-4/5 w-full mb-5 lg:mb-0 flex lg:flex-row flex-col lg:justify-end'>
                        <div className='lg:w-4/5 w-full justify-center lg:justify-start flex flex-wrap gap-5'>
                            {images.map((image, index) => {
                                return <img src={`assets/img/${image}`} key={index} className='w-32 lg:mb-5' alt="" />
                            })}
                        </div>
                    </div>
                    <div className='mb-5 lg:flex justify-center'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium lg:w-1/6 pr-4 text-slate-700">Informasi Tour Guide</label>
                        <textarea id="message" name='informasi_tourguide' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan deskripsi tour guide..."></textarea>                        
                    </div>
                    <div className="mb-5 lg:flex justify-center">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">Harga Termasuk</label>
                        <input type="number" id="text" name='harga' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan harga" />
                    </div>
                    <div className="mb-5 lg:flex justify-center">
                        <label className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">Rating & Ulasan</label>
                        <div className='w-full lg:flex lg:flex-row flex flex-col lg:gap-0 gap-4 lg:justify-between lg:items-center'>
                            <div className="flex items-center">
                                <Stars star={star}/>
                            </div>
                            <div className='lg:w-4/5 w-full lg:flex lg:justify-between lg:items-center lg:flex-row flex flex-col gap-3'>
                                <input type="number" name='rating_tour' min='1' max='5' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan rating user" onChange={e => setStar(e.target.value)}/>
                                <input type="number" name='ulasan' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan jumlah ulasan" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-10 justify-center flex'>
                        <button type="submit" className="text-black bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-3/5 px-5 py-2.5 text-center">Tambah Data</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default TambahData