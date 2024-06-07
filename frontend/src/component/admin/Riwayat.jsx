import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Riwayat = () => {
  const [detail, setDetail] = useState(false);
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState([]);
  const [wisata, setWisata] = useState([]);
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://18.141.9.175:5000/pesanan");
        const fetchedDatas = await response.json();
        const { data } = fetchedDatas;
        setDatas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://18.141.9.175:5000/user");
        const result = await res.json();
        const { data } = result;
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://18.141.9.175:5000/wisata");
        const result = await res.json();
        const { data } = result;
        console.log(data);
        setWisata(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const getDataPesanan = async (id) => {
    try {
      const res = await fetch(`http://18.141.9.175:5000/pesanan/${id}`);
      const result = await res.json();
      const { data } = result;
      console.log(data);
      setGetData(data);
      setDetail(!detail);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="w-4/5 flex flex-col items-center gap-6 bg-white py-10">
        <div className="w-11/12 h-max relative overflow-x-auto shadow-md sm:rounded-lg bg-blue-300/30 backdrop-blur-sm">
          {datas
            .filter((data) => data.status == "selesai")
            .map((data, index) => (
              <div className="bg-white shadow-md text-center w-11/12 backdrop-blur-sm rounded-xl mx-auto my-5">
                <div className="flex justify-between px-10">
                  <div className="flex flex-col items-start gap-1 py-5">
                    <p className="font-normal">
                      {format(
                        new Date(data.tanggal_keberangkatan),
                        "yyyy-MM-dd"
                      )}
                    </p>
                    {user
                      .filter((user) => user.id == data.id_user)
                      .map((data) => (
                        <p className="font-bold text-lg">{data.username}</p>
                      ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <i
                      class="fa-solid fa-circle-arrow-down text-3xl text-blue-400"
                      onClick={() => getDataPesanan(data.id)}
                    ></i>
                  </div>
                </div>
                {detail && (
                  <>
                    <hr />
                    {getData.map((data, index) => (
                      <>
                        {user
                          .filter((user) => user.id == data.id_user)
                          .map((duser, index) => (
                            <div className="flex justify-between mx-10 py-5">
                              <div className="w-1/2 pr-5">
                                <table className="w-full">
                                  <tr className="h-10">
                                    <td className="text-start font-medium">
                                      No. Telepon
                                    </td>
                                    <td className="text-end">
                                      {duser.telepon}
                                    </td>
                                  </tr>
                                  <tr className="h-10">
                                    <td className="text-start font-medium">
                                      Email
                                    </td>
                                    <td className="text-end">{duser.email}</td>
                                  </tr>
                                </table>
                                <table className="w-full mt-5">
                                  <tr className="h-10">
                                    <td className="text-start font-medium">
                                      Kode Pemesanan
                                    </td>
                                    <td className="text-end">
                                      {data.kode_booking}
                                    </td>
                                  </tr>
                                  <tr className="h-10">
                                    <td className="text-start font-medium">
                                      Tujuan
                                    </td>
                                    {wisata
                                      .filter(
                                        (wisata) => wisata.id == data.id_wisata
                                      )
                                      .map((dwisata, index) => (
                                        <td className="text-end">
                                          {dwisata.nama}
                                        </td>
                                      ))}
                                  </tr>
                                  <tr className="h-10">
                                    <td className="text-start font-medium">
                                      Jumlah Orang
                                    </td>
                                    <td className="text-end">
                                      {data.jumlah_orang}
                                    </td>
                                  </tr>
                                  <tr className="h-10">
                                    <td className="text-start font-medium">
                                      Tanggal Bayar
                                    </td>
                                    <td className="text-end">
                                      {format(
                                        new Date(data.tanggal_bayar),
                                        "yyyy-MM-dd"
                                      )}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                              <div className="w-1/2 pl-5 justify-center items-center">
                                <table className="w-full">
                                  <tr className="h-10">
                                    <td className="text-start font-medium">
                                      No. Telepon
                                    </td>
                                    <td className="text-end">
                                      {duser.telepon}
                                    </td>
                                  </tr>
                                  <tr className="h-10">
                                    <td className="text-start font-medium">
                                      Email
                                    </td>
                                    <td className="text-end">{duser.email}</td>
                                  </tr>
                                </table>
                                <div className="w-full justify-center items-center mt-5 flex flex-col gap-2">
                                  <span className="bg-green-400 text-white text-xs font-medium px-5 py-2 rounded-full mt-4">
                                    {data.status}
                                  </span>
                                  <h3 className="text-lg font-medium mt-3">
                                    Total
                                  </h3>
                                  <h1 className="text-xl font-bold">
                                    {data.total}
                                  </h1>
                                </div>
                              </div>
                            </div>
                          ))}
                      </>
                    ))}
                  </>
                )}
              </div>
            ))}
          {datas
            .filter((data) => data.status !== "selesai")
            .map((d) => (
              <h1 className="text-blue-300 my-32 text-center font-bold text-2xl">
                <i>Tidak ada riwayat pesanan!</i>
              </h1>
            ))}
        </div>
      </div>
    </>
  );
};

export default Riwayat;
