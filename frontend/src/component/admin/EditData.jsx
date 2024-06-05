import React, { useEffect, useState } from 'react';
import Stars from './Stars';
import Swal from 'sweetalert2';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditData = () => {
  const [star, setStar] = useState(5);
  const [images, setImages] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await fetch(`http://localhost:3000/wisata/${id}`);
        const result = await response.json();
        const { data } = result;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
  }, []);
  console.log(data);
  const navigate = useNavigate();
  const uploadGambar = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prevImages) => [...prevImages, file.name]);
    }
  };
  console.log(images);
  const imgWisata = ['bg2.png', 'farm.png', 'login.png'];

  const simpanData = (e) => {
    e.preventDefault();
    const datas = {
      nama: e.target.nama.value,
      lokasi: e.target.lokasi.value,
      harga: e.target.harga.value,
      //   gambar1: e.target.gambar1.value,
      //   gambar2: e.target.gambar2.value,
      //   gambar3: e.target.gambar3.value,
      //   gambar4: e.target.gambar4.value,
      gambar1: images[0],
      gambar2: images[1],
      gambar3: images[2],
      gambar4: images[3],
      jarak_lokasi: e.target.jarak_lokasi.value,
      jam_buka: e.target.jam_buka.value,
      jam_tutup: e.target.jam_tutup.value,
      deskripsi: e.target.deskripsi.value,
      kategori: e.target.kategori.value,
      informasi_tourguide: e.target.informasi_tourguide.value,
      harga_termasuk: e.target.harga_termasuk.value,
    };
    console.log(datas);
    if (datas.nama || datas.lokasi || datas.jarak_lokasi || datas.harga || datas.deskripsi || datas.gambar1 || datas.gambar2 || datas.gambar3 || datas.gambar4 || datas.informasi_tourguide || datas.harga_termasuk || datas.kategori) {
      fetch(`http://localhost:3000/wisata/${id}`, {
        method: 'PUT',
        body: JSON.stringify(datas),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            title: 'Berhasil!',
            text: 'Data wisata telah diubah.',
            icon: 'success',
          }).then(() => {
            navigate('/admin');
          });
        });
    } else {
      console.log('error');
    }
  };
  const onChangeHandler = (id, key, value) => {
    setData((values) => {
      return values.map((item) => (item.id === id ? { ...item, [key]: value } : item));
    });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-10 mx-10">Form Edit Data</h1>
      <div className="w-full my-10 flex justify-center">
        {data.map((data, index) => (
          <div className="w-4/5 my-10">
            <form className="w-full mx-auto" onSubmit={(e) => simpanData(e)}>
              <div className="mb-5 lg:flex justify-center">
                <label htmlFor="text" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">
                  Nama
                </label>
                <input
                  type="text"
                  id="text"
                  value={data.nama}
                  onChange={(e) => onChangeHandler(data.id, 'nama', e.target.value)}
                  name="nama"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Masukkan nama wisata"
                />
              </div>
              <div className="mb-5 lg:flex justify-center">
                <label htmlFor="text" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">
                  Lokasi
                </label>
                <input
                  type="text"
                  id="text"
                  value={data.lokasi}
                  onChange={(e) => onChangeHandler(data.id, 'lokasi', e.target.value)}
                  name="lokasi"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Masukkan lokasi wisata"
                />
              </div>
              <div className="mb-5 lg:flex justify-center">
                <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">
                  Jam Buka/Tutup
                </label>
                <div className="flex justify-between w-full gap-4">
                  <input
                    type="time"
                    value={data.jam_buka}
                    onChange={(e) => onChangeHandler(data.id, 'jam_buka', e.target.value)}
                    name="jam_buka"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                    placeholder="Masukkan jam buka wisata"
                  />
                  <input
                    type="time"
                    name="jam_tutup"
                    onChange={(e) => onChangeHandler(data.id, 'jam_tutup', e.target.value)}
                    id="text"
                    value={data.jam_tutup}
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
                  value={data.jarak_lokasi}
                  onChange={(e) => onChangeHandler(data.id, 'jarak_lokasi', e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Masukkan jarak wisata (km)"
                />
              </div>
              <div className="mb-5 lg:flex justify-center">
                <label htmlFor="text" className="block mb-2 text-sm font-medium lg:w-1/6 text-slate-700">
                  Harga <i></i>
                </label>
                <input
                  type="number"
                  name="harga"
                  id="text"
                  value={data.harga}
                  onChange={(e) => onChangeHandler(data.id, 'harga', e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Masukkan harga"
                />
              </div>
              <div className="mb-5 lg:flex justify-center">
                <label htmlFor="message" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">
                  Deskripsi
                </label>
                <textarea
                  id="message"
                  name="deskripsi"
                  rows="6"
                  value={data.deskripsi}
                  onChange={(e) => onChangeHandler(data.id, 'deskripsi', e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan deskripsi wisata..."
                ></textarea>
              </div>
              <div className="mb-5 lg:flex justify-center">
                <label htmlFor="message" className="block mb-2 text-sm font-medium w-1/6 text-slate-700">
                  Galeri
                </label>

                <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Klik untuk upload</span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" name="file" onChange={(e) => uploadGambar(e)} className="hidden" />
                  </label>
                </div>
              </div>
              {images.push(data.gambar1)}
              {images.push(data.gambar2)}
              {images.push(data.gambar3)}
              {images.push(data.gambar4)}
              <div className="lg:w-4/5 w-full mb-5 lg:mb-0 flex lg:flex-row flex-col lg:justify-end">
                <div className="lg:w-4/5 w-full justify-center lg:justify-start flex flex-wrap gap-5">
                  <img src={`${data.gambar1}`} key={index} className="w-32 lg:mb-5" alt="" />
                  <img src={`${data.gambar2}`} key={index} className="w-32 lg:mb-5" alt="" />
                  <img src={`${data.gambar3}`} key={index} className="w-32 lg:mb-5" alt="" />
                  <img src={`${data.gambar4}`} key={index} className="w-32 lg:mb-5" alt="" />
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
                  value={data.informasi_tourguide}
                  onChange={(e) => onChangeHandler(data.id, 'informasi_tourguide', e.target.value)}
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
                  value={data.harga_termasuk}
                  onChange={(e) => onChangeHandler(data.id, 'harga_termasuk', e.target.value)}
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
                  Kategori <i></i>
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="kategori"
                  value={data.kategori}
                  onChange={(e) => onChangeHandler(data.id, 'kategori', e.target.value)}
                >
                  <option selected>Pilih Kategori</option>
                  <option value="budaya">Budaya</option>
                  <option value="tour">Tour</option>
                  <option value="massage">Massage</option>
                  <option value="alam">Alam</option>
                  <option value="aktivitas-air">Aktivitas Air</option>
                </select>
              </div>
              <div className="w-full my-20 justify-center flex lg:gap-10 gap-5">
                <button type="submit" className="text-white bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm lg:w-1/5 px-5 py-2.5 text-center">
                  Simpan
                </button>
                <Link className="lg:w-1/5 justify-center" to="/admin">
                  <button type="button" className="text-white bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center">
                    Batal
                  </button>
                </Link>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditData;
