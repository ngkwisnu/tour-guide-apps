import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Button } from '@chakra-ui/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from './Loading';

const MainAdmin = (props) => {
  const [page, setPage] = useState('admin');
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://18.141.9.175:5000/wisata');
        const fetchedDatas = await response.json();
        const { data } = fetchedDatas;
        setDatas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://18.141.9.175:5000/wisata");
  //       const fetchedDatas = await response.json();
  //       const { data } = fetchedDatas;
  //       setDatas(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [datas]); slice

  useEffect(() => {
    if (props.tambahData != null) {
      setDatas((prevData) => [...prevData, props.tambahData]);
    }
  }, []);

  const hapusData = (id) => {
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: 'Anda akan menghapus sebuah data wisata!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          const response = await fetch(`http://18.141.9.175:5000/wisata/${id}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            throw new Error('Failed to delete data');
          }

          if (response.ok) {
            setDatas((prevData) => {
              return prevData.filter((item) => item.id !== id);
            });

            setLoading(false);

            Swal.fire({
              title: 'Data Dihapus!',
              text: 'Data wisata telah dihapus!',
              icon: 'success',
            });
          } else {
            throw new Error('Data deletion failed');
          }
        } catch (error) {
          setLoading(false);
          console.error('Error fetching data:', error);
          Swal.fire({
            title: 'Error',
            text: 'Terjadi kesalahan saat menghapus data.',
            icon: 'error',
          });
        }
      }
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);
  console.log(datas);

  const lastPages = currentPage * dataPerPage;
  const firstPage = lastPages - dataPerPage;
  const currentPost = datas.slice(firstPage, lastPages);
  // console.log(currentPost);

  const totalData = datas.length / dataPerPage;
  let paginate = [];
  for (let index = 1; index <= Math.ceil(totalData); index++) {
    paginate.push(index);
  }

  return (
    <div className={`w-4/5 ${loading ? 'relatve' : 'flex flex-col'} items-center gap-6 bg-white py-10`}>
      {loading && <Loading />}
      <div className="w-4/5">
        <Link to="/tambah-wisata">
          <Button className="bg-blue-400 rounded-xl flex items-center w-1/6 h-7 text-black">
            <Plus />
            Tambah Data
          </Button>
        </Link>
      </div>
      <div className="w-11/12 relative overflow-x-auto shadow-md sm:rounded-lg">
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
            {currentPost.map((data, index) => (
              <tr className="border-b border-slate-600 text-sm" key={index}>
                <td className="px-6 py-4 bg-blue-300/30 text-center overflow-hidden whitespace-nowrap">
                  <span className="inline-block max-w-[100px] overflow-hidden whitespace-nowrap" style={{ textOverflow: 'ellipsis' }}>
                    {data.nama}
                  </span>
                </td>
                <td className="px-6 py-4 bg-blue-300/30 text-center overflow-hidden whitespace-nowrap">
                  <span className="inline-block max-w-[200px] overflow-hidden whitespace-nowrap" style={{ textOverflow: 'ellipsis' }}>
                    {data.deskripsi}
                  </span>
                </td>
                <td className="px-6 py-4 bg-blue-300/30 text-center">{data.lokasi}</td>
                <td className="px-6 py-4 bg-blue-300/30 text-center">{data.harga}</td>
                <td className="px-6 py-4 bg-blue-300/30 text-center justify-center flex gap-5">
                  <Link to={`/edit-wisata/${data.id}`}>
                    <i className="fa-regular fa-pen-to-square text-green-600"></i>
                  </Link>
                  <i className="fa-solid fa-square-minus text-red-600" onClick={() => hapusData(data.id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <ul className="flex gap-10 justify-center items-center my-5">
            {paginate.map((page, index) => (
              <li className={`w-8 text-center rounded-md text-black font-bold ${currentPage == page ? `bg-blue` : `bg-blue-300`} cursor-pointer`} onClick={() => setCurrentPage(page)} key={index}>
                {page}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainAdmin;
