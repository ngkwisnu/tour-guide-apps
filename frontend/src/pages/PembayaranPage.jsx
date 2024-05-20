import { Clock, CreditCard } from "lucide-react";
import React from "react";
import { formatCurrecy } from "../utils/helpers";

const tempData = {
  deadline: "2024-05-28T03:13:46.430Z",
  noRekening: 56748593057,
  tagihan: 321000,
};

export default function PembayaranPage() {
  return (
    <div className="profile-container">
      <div className="grid grid-cols-4">
        <div className=" col-span-3">
          <h1 className="profile-header mb-4">Menunggu Pembayaran</h1>
          <p className="text-gray-700">Batas Pembayaran</p>
          <p>
            {new Date(tempData.deadline).toLocaleString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="bg-gray-50 flex gap-4 border border-regent-500 rounded-full items-center h-fit py-2 px-6 text-base text-regent-500 mt-auto justify-center w-fit">
          <Clock size={22} />
          <span>08:30:54</span>
        </div>
      </div>
      <div className="w-full border mt-12 border-raven-500"></div>
      <div className="w-full  flex justify-center my-10">
        <div className=" w-full max-w-96">
          <div className="flex gap-4">
            <CreditCard size={96} />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold text-gray-950">
                Transfer Bank - BCA
              </p>
              <p>No. Rekening : 093374837409</p>
              <p>a/n PT Nuansa Digital Tech</p>
            </div>
          </div>
          <div className="mt-8 border-b border-raven-500">
            <p>Total Tagihan :</p>
            <p className="text-4xl font-bold text-gray-950 py-2">
              {formatCurrecy(tempData.tagihan)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul className="list-disc">
          <li>
            Pesananmu baru diproses ke toure guide setelah pembayaran
            terverifikasi
          </li>
          <li>Metode pembayaran tidak dapat diubah</li>
          <li>Ulasan dapat diisi setelah pembayaran berhasil</li>
        </ul>
      </div>
    </div>
  );
}
