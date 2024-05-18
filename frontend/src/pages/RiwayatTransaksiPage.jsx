import React from "react";
import { formatCurrecy } from "../utils/helpers";

const tempData = [
  {
    id: 1,
    tanggal: "2024-05-18T03:50:42.559Z",
    kode: "W-987323",
    tujuan: "Nusa Penida",
    harga: "2400000",
    status: "berhasil",
  },
  {
    id: 2,
    tanggal: "2024-05-20T03:50:42.559Z",
    kode: "W-456234",
    tujuan: "Raja Ampat",
    harga: "180000",
    status: "gagal",
  },
  {
    id: 3,
    tanggal: "2024-05-18T03:50:42.559Z",
    kode: "W-987323",
    tujuan: "Nusa Penida",
    harga: "2400000",
    status: "berhasil",
  },
  {
    id: 4,
    tanggal: "2024-05-20T03:50:42.559Z",
    kode: "W-456234",
    tujuan: "Raja Ampat",
    harga: "180000",
    status: "gagal",
  },
];

export default function RiwayatTransaksiPage() {
  return (
    <div className="profile-container">
      {tempData.map((data) => (
        <div
          className="flex gap-2 justify-between border-b py-4 border-gray-500"
          key={data.id}
        >
          <div>
            <p className="font-bold text-gray-700">23 Juni 2024</p>
            <p>
              Kode Pemesanan{" "}
              <span className="font-bold text-gray-700">{data.kode}</span>
            </p>
            <p className="font-bold text-gray-700">{data.tujuan}</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p
              className={`py-2 px-6  font-bold bg-white border  rounded-full text-center w-fit mx-auto first-letter:uppercase ${
                data.status === "gagal"
                  ? "text-gray-500 border-gray-500"
                  : "text-sky-500 border-sky-500"
              }`}
            >
              {data.status}
            </p>
            <p className="font-bold text-gray-700">
              {formatCurrecy(data.harga)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
