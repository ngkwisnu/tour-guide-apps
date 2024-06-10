import React, { useState } from 'react';
import Stars from './Stars';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import MainAdmin from './MainAdmin';
import Loading from './Loading';

const TambahData = () => {
  const [star, setStar] = useState(5);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const uploadGambar = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prevImages) => [...prevImages, file.name]);
    }
  };

  const simpanData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nama', e.target.nama.value);
    formData.append('lokasi', e.target.lokasi.value);
    formData.append('harga', e.target.harga.value);
    formData.append('jarak_lokasi', e.target.jarak_lokasi.value);
    formData.append('jam_buka', e.target.jam_buka.value);
    formData.append('jam_tutup', e.target.jam_tutup.value);
    formData.append('deskripsi', e.target.deskripsi.value);
    formData.append('kategori', e.target.kategori.value);
    formData.append('informasi_tourguide', e.target.informasi_tourguide.value);
    formData.append('harga_termasuk', e.target.harga_termasuk.value);

    if (e.target.gambar1.files[0]) {
      formData.append('gambar1', e.target.gambar1.files[0]);
    }
    if (e.target.gambar2.files[0]) {
      formData.append('gambar2', e.target.gambar2.files[0]);
    }
    if (e.target.gambar3.files[0]) {
      formData.append('gambar3', e.target.gambar3.files[0]);
    }
    if (e.target.gambar4.files[0]) {
      formData.append('gambar4', e.target.gambar4.files[0]);
    }

    console.log([...formData]); // Untuk debug, melihat isi formData

    if (
      e.target.nama.value ||
      e.target.lokasi.value ||
      e.target.jarak_lokasi.value ||
      e.target.harga.value ||
      e.target.deskripsi.value ||
      e.target.gambar1.files[0] ||
      e.target.gambar2.files[0] ||
      e.target.gambar3.files[0] ||
      e.target.gambar4.files[0] ||
      e.target.informasi_tourguide.value ||
      e.target.harga_termasuk.value ||
      e.target.kategori.value
    ) {
      setLoading(true);
      fetch('http://18.141.9.175:5000/wisata', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            setLoading(false);
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          Swal.fire({
            title: 'Berhasil!',
            text: data.message,
            icon: 'success',
          }).then(() => {
            setLoading(false);
            navigate('/admin');
          });
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          Swal.fire({
            title: 'Error',
            text: 'Terjadi kesalahan saat menambahkan data.',
            icon: 'error',
          });
          setLoading(false);
        });
    } else {
      setLoading(false);
      console.log('error');
    }
  };

  return (
    <div className="container mx-auto relative">
      {loading && <Loading />}
      <h1 className="text-4xl font-bold my-10 mx-10">Form Data</h1>
      <div className="w-full my-10 flex justify-center">
        <div className="w-4/5 my-10">
          <form className="w-full mx-auto" onSubmit={(e) => simpanData(e)}>
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="text" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">
                Nama
              </label>
              <input type="text" id="text" name="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan nama wisata" />
            </div>
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="text" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">
                Lokasi
              </label>
              <input type="text" id="text" name="lokasi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan lokasi wisata" />
            </div>
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">
                Jam Buka/Tutup
              </label>
              <div className="flex justify-between w-full gap-4">
                <input
                  type="time"
                  name="jam_buka"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                  placeholder="Masukkan jam buka wisata"
                />
                <input
                  type="time"
                  name="jam_tutup"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                  placeholder="Masukkan jam tutup wisata"
                />
              </div>
            </div>
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">
                Jarak Lokasi <i></i>
              </label>
              <input
                type="text"
                name="jarak_lokasi"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Masukkan jarak wisata (km)"
              />
            </div>
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">
                Harga <i></i>
              </label>
              <input type="number" name="harga" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan harga" />
            </div>
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="message" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">
                Deskripsi
              </label>
              <textarea
                id="message"
                name="deskripsi"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan deskripsi wisata..."
              ></textarea>
            </div>
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="message" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">
                Galeri
              </label>
              <div className="w-full flex gap-5 flex-col justify-between">
                <div className="w-full flex gap-5">
                  <input class="block w-full text-sm text-slate-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" name="gambar1" />
                  <input class="block w-full text-sm text-slate-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" name="gambar2" />
                </div>
                <div className="w-full flex gap-5">
                  <input class="block w-full text-sm text-slate-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" name="gambar3" />
                  <input class="block w-full text-sm text-slate-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" name="gambar4" />
                </div>
              </div>
            </div>
            <div className="lg:w-4/5 w-full mb-5 lg:mb-0 flex lg:flex-row flex-col lg:justify-end">
              <div className="lg:w-4/5 w-full justify-center lg:justify-start flex flex-wrap gap-5">
                {images.map((image, index) => {
                  return <img src={`assets/img/${image}`} key={index} className="w-32 lg:mb-5" alt="" />;
                })}
              </div>
            </div>
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="message" className="block mb-2 text-sm font-medium lg:w-1/6 pr-4 text-slate-700">
                Informasi Tour Guide
              </label>
              <textarea
                id="message"
                name="informasi_tourguide"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan deskripsi tour guide..."
              ></textarea>
            </div>
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">
                Harga Termasuk
              </label>
              <textarea
                id="message"
                name="harga_termasuk"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan deskripsi wisata..."
              ></textarea>
            </div>
            {/* <div className="mb-5 lg:flex justify-center">
              <label className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">
                Rating & Ulasan
              </label>
              <div className="w-full lg:flex lg:flex-row flex flex-col lg:gap-0 gap-4 lg:justify-between lg:items-center">
                <div className="flex items-center">
                  <Stars star={star} />
                </div>
                <div className="lg:w-4/5 w-full lg:flex lg:justify-between lg:items-center lg:flex-row flex flex-col gap-3">
                  <input
                    type="number"
                    name="rating_tour"
                    min="1"
                    max="5"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Masukkan rating user"
                    onChange={(e) => setStar(e.target.value)}
                  />
                  <input
                    type="number"
                    name="ulasan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Masukkan jumlah ulasan"
                  />
                </div>
              </div>
            </div> */}
            <div className="mb-5 lg:flex justify-center">
              <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">
                Harga <i></i>
              </label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="kategori">
                <option selected>Pilih Kategori</option>
                <option value="budaya">Budaya</option>
                <option value="tour">Tour</option>
                <option value="massage">Massage</option>
                <option value="alam">Alam</option>
                <option value="aktivitas-air">Aktivitas Air</option>
              </select>
            </div>
            <div className="w-full my-10 justify-center flex">
              <button type="submit" className="text-white bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-3/5 px-5 py-2.5 text-center">
                Tambah Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahData;
