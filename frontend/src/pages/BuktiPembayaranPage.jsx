import { CirclePlus } from "lucide-react";
import React from "react";

const tempDataBuktiPembayaran = [
  {
    id: 1,
    tanggal: "2024-05-18T12:43:33.569Z",
    lokasi: "Nusa Penida",
  },
  {
    id: 2,
    tanggal: "2024-04-28T12:43:33.569Z",
    lokasi: "Raja Ampat",
  },
];

export default function BuktiPembayaranPage() {
  return (
    <div className="profile-container">
      <div className="mx-auto text-center w-[520px] mb-16">
        <h1 className="profile-header leading-normal">
          Upload Bukti Pembayaran Anda Disini!
        </h1>
        <p>
          Bukti pembayaran bersifat wajib. Jika tidak, invoice tidak akan
          diterbitkan
        </p>
      </div>
      <div>
        <div>
          <button className="button px-6 flex gap-4 ml-auto">
            <CirclePlus /> Tambah File
          </button>
        </div>
        {tempDataBuktiPembayaran.map((data) => (
          <div className="border-b border-gray-700 py-4" key={data.id}>
            <p className="font-semibold">{data.tanggal.substring(0, 10)}</p>
            <p className="text-xl">{data.lokasi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
