import { CirclePlus } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../component/Button';
import Modal from '../component/Modal';
// import { FileUploader } from 'react-drag-drop-files';

const tempDataBuktiPembayaran = [
  {
    id: 1,
    tanggal: '2024-05-18T12:43:33.569Z',
    lokasi: 'Nusa Penida',
    status: 'PENDING',
  },
  {
    id: 2,
    tanggal: '2024-04-28T12:43:33.569Z',
    lokasi: 'Raja Ampat',
    status: 'PAID',
  },
];

const fileTypes = ['JPG', 'PNG', 'GIF'];

export default function BuktiPembayaranPage() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <>
      <div className="profile-container">
        <div className="mx-auto text-center w-[520px] mb-16">
          <h1 className="profile-header leading-normal">Upload Bukti Pembayaran Anda Disini!</h1>
          <p>Bukti pembayaran bersifat wajib. Jika tidak, invoice tidak akan diterbitkan</p>
        </div>
        <div>
          {tempDataBuktiPembayaran.map((data) => (
            <div className="border-b border-gray-700 py-4 flex justify-between items-center" key={data.id}>
              <div>
                <p className="font-semibold">{data.tanggal.substring(0, 10)}</p>
                <p className="text-xl">{data.lokasi}</p>
              </div>
              {data.status === 'PENDING' && (
                <Button type="primary" onClick={() => setShowModal(true)}>
                  <CirclePlus /> Tambah File
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <p className="font-semibold text-xl mb-4">Silahkan unggah file bukti pembayaran Anda</p>
          {/* <div className="border h-full min-h-80 flex items-center justify-center mb-4">
            <input type="file" className="border" />
          </div> */}

          <div className="h-96 border border-dashed rounded-xl border-gray-700 flex items-center justify-center mb-8">
            {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} label="Pilih gambar atau drop disini." /> */}
          </div>
          <Button type="full">Upload</Button>
        </Modal>
      )}
    </>
  );
}
