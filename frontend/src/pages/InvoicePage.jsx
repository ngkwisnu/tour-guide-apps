import React from "react";
import { formatCurrecy } from "../utils/helpers";

const tempDataBooking = {
  nama: "Maya Anggita",
  handphone: 81234567890,
  tanggal: "2024-05-16T12:43:33.569Z",
  totalTiket: 3,
  item: "Paket Tour Guide A",
  tourGuide: "I Nengah Negara Atmaja",
  harga: 2400000,
};

export default function InvoicePage() {
  return (
    <div className="profile-container flex flex-col gap-8">
      <h1 className="profile-header">Kode Booking : W-123456</h1>
      <div>
        <p>
          Nama :{" "}
          <span className="font-semibold text-gray-700">
            {tempDataBooking.nama}
          </span>
        </p>
        <p>
          No. Telephone :{" "}
          <span className="font-semibold text-gray-700">
            {`0${tempDataBooking.handphone}`}
          </span>
        </p>
        <p>
          Tanggal :{" "}
          <span className="font-semibold text-gray-700">
            {tempDataBooking.tanggal.substring(0, 10)}
          </span>
        </p>
      </div>
      <table className="w-full text-center mb-16">
        <thead className="border-y border-gray-700">
          <tr>
            <th>Jumlah Tiket</th>
            <th>Item</th>
            <th>Tour Guide</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4">{tempDataBooking.totalTiket}</td>
            <td className="p-4">{tempDataBooking.item}</td>
            <td className="p-4">{tempDataBooking.tourGuide}</td>
            <td className="p-4">{formatCurrecy(tempDataBooking.harga)}</td>
          </tr>
        </tbody>
      </table>
      <button className="button w-2/3 mx-auto">Beri Ulasan</button>
      <div className="text-gray-500 text-sm">
        <p>*Tunjukan invoice ini pada pemandu saat tiba di kedatangan.</p>
        <p>*Pstikan data pemandu anda sesuai.</p>
      </div>
    </div>
  );
}
