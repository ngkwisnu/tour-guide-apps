import React, { useState } from "react";
import { formatCurrecy } from "../utils/helpers";
import Button from "../component/Button";
import Modal from "../component/Modal";
import { Star } from "lucide-react";
import InputRow from "../component/InputRow";
import { useForm } from "react-hook-form";

const tempDataBooking = {
  nama: "Ahmad Sumamad",
  handphone: 81234567890,
  tanggalKeberangkatan: "2024-05-16T12:43:33.569Z",
  tanggalBayar: "2024-05-08T12:43:33.569Z",
  totalTiket: 3,
  item: "Paket Tour Guide A",
  tourGuide: "I Nengah Negara Atmaja",
  harga: 2400000,
  tujuan: "Nusa Penida",
  jumlahOrang: 2,
  kodeBooking: "B-01237831",
};

export default function InvoicePage() {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = function (data) {
    console.log(data);
  };

  return (
    <>
      <div className="profile-container flex flex-col gap-8">
        <h1 className="profile-header">
          Kode Booking : {tempDataBooking.kodeBooking}
        </h1>
        <div className="w-1/2">
          <div className="grid grid-cols-2">
            <p>Nama Tour Guide</p>
            <span className="font-semibold text-gray-950">
              : {tempDataBooking.nama}
            </span>
          </div>

          <div className="grid grid-cols-2">
            <p>No WhatsApp</p>
            <span className="font-semibold text-gray-950">
              : {tempDataBooking.handphone}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <p>Tanggal Keberangkatan</p>
            <span className="font-semibold text-gray-950">
              :{" "}
              {new Date(tempDataBooking.tanggalKeberangkatan).toLocaleString(
                "id-ID",
                {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}
            </span>
          </div>
        </div>
        <table className="w-full text-center mb-16">
          <thead className="border-y border-gray-700">
            <tr>
              <th>Tanggal Bayar</th>
              <th>Tujuan</th>
              <th>Jumlah Orang</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">
                {new Date(tempDataBooking.tanggalBayar).toLocaleString(
                  "id-ID",
                  {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </td>
              <td className="p-4">{tempDataBooking.tujuan}</td>
              <td className="p-4">{tempDataBooking.jumlahOrang}</td>
              <td className="p-4">{formatCurrecy(tempDataBooking.harga)}</td>
            </tr>
          </tbody>
        </table>
        <Button type="halfFull" onClick={() => setShowModal(true)}>
          Beri Ulasan
        </Button>
        <div className="txt-raven-500 text-sm">
          <p>*Tunjukan invoice ini pada pemandu saat tiba di kedatangan.</p>
          <p>*Pstikan data pemandu anda sesuai.</p>
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <p className="text-2xl font-semibold mb-4">Berikan review anda!</p>
          <div className="flex flex-col gap-2 mb-4">
            <p>Berikan rating pada destinasi anda!</p>
            <div className="flex">
              {new Array(5).fill().map((_, i) => (
                <Star
                  size={32}
                  fill="yellow"
                  className="text-yellow-300"
                  key={i}
                />
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputRow
              label="Berikan Ulasanmu disini!"
              error={errors?.ulasan?.message}
            >
              <textarea
                id="ulasan"
                {...register("ulasan", { required: true })}
                className="border outline-none p-2 border-raven-500"
                rows={6}
                placeholder="Contoh: “Tempatnya bagus banget! murah dan ramah banget petugas petugasnya gaess 🤩💫”."
              />
            </InputRow>
            <div className="mt-4">
              <p>Apa keunggulan dari tempat ini?</p>
              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" id="lokasi" {...register("lokasi")} />
                  <label htmlFor="lokasi">Lokasi dekat kota</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="pemandangan"
                    {...register("pemandangan")}
                  />
                  <label htmlFor="pemandangan">Pemandangannya bagus</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" id="biaya" {...register("biaya")} />
                  <label htmlFor="biaya">Biayanya murah</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" id="akses" {...register("akses")} />
                  <label htmlFor="akses">Aksesnya mudah</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="sesuaiEkspetasi"
                    {...register("sesuaiEkspetasi")}
                  />
                  <label htmlFor="sesuaiEkspetasi">Sesuai ekspetasi</label>
                </div>
              </div>
            </div>
            <input
              type="file"
              id="image"
              {...register("image")}
              className="border border-regent-500 w-full rounded-full cursor-pointer my-4 file:bg-regent-500 file:text-regent-100 file:border-none file:py-2 file:px-4"
            />
            <Button type="full">Kirim Ulasan</Button>
          </form>
        </Modal>
      )}
    </>
  );
}
