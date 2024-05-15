import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BuktiPembayaran = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='container mx-auto py-5'>
                <div className='flex justify-between'>
                    <img src="../assets/img/logo.png" className='w-36' alt="" />
                    <div className='flex gap-5 items-center'>
                        <p>Home</p>
                        <p>App</p>
                        <p>Wisata</p>
                        <p>Notifikasi</p>
                        <button className='text-white bg-blue-300 rounded-full w-32 ml-8'><i className="fa-solid fa-user mr-5"></i>Akun</button>
                    </div>
                </div>
            </div>
            <div className='flex w-full bg-slate-200 h-screen mb-10'>
                <div className='bg-white w-1/5 px-10 py-10'>
                    <h1 className='font-bold text-2xl'>Akun</h1>
                    <Link to = '/akun'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i className="fa-solid fa-user"></i>
                        <p>Profile</p>
                    </div>
                    </Link>
                    <Link to = '/tour-guide/pesanan'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i class="fa-regular fa-square-check"></i>
                        <p>Invoice</p>
                    </div>
                    </Link>
                    <Link to = '/tour-guide/paket'>
                    <div className='flex items-center gap-5 text-blue-300 my-10 text-lg'>
                        <i class="fa-solid fa-barcode"></i>
                        <p>Bukti Pembayaran</p>
                    </div>
                    </Link>
                    <Link to = '/tour-guide/riwayat'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        <p>Menunggu Pembayaran</p>
                    </div>
                    </Link>
                    <Link to = '/tour-guide/riwayat'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i class="fa-regular fa-bookmark"></i>
                        <p>Riwayat Transaksi</p>
                    </div>
                    </Link>
                    <Link to = '/tour-guide/riwayat'>
                    <div className='flex items-center gap-5 hover:text-blue-300 text-slate-700 my-10 text-lg'>
                        <i class="fa-solid fa-info"></i>
                        <p>Pusat Bantuan</p>
                    </div>
                    </Link>
                </div>
                
                <div className='w-4/5 flex flex-col items-center gap-6 bg-white'>
                    <div className='bg-blue-300/30 flex flex-col gap-7 p-10 backdrop-blur-sm border border-blue-400 rounded-3xl w-11/12 h-4/5'>
                        <div className='flex flex-col gap-4 text-slate-700 justify-center items-center'>
                            <h1 className='text-3xl text-center font-bold w-2/5'>Upload Bukti Pembayaran Anda Disini!</h1>
                            <p className='text-sm'>Bukti pembayaran bersifat wajib. Jika tidak, invoice tidak akan diterbitkan</p>
                        </div>
                        <table className="w-full text-sm">
                            <tbody>
                                <tr className="border-b border-slate-400">
                                    <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap">
                                        <div className='flex flex-col justify-start items-start'>
                                            <p>22 Juni 2035</p>
                                            <p className='text-lg font-semibold'>Nusa Penida</p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <div className='flex justify-end'>
                                            <button className='bg-blue-300 text-white flex gap-2 justify-center items-center p2 rounded-full w-2/5 h-7'><i class="fa-solid fa-circle-plus" onClick={handleShow}></i>Tambah File</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-400">
                                    <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap">
                                        <div className='flex flex-col justify-start items-start'>
                                            <p>22 Juni 2035</p>
                                            <p className='text-lg font-semibold'>Nusa Penida</p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <div className='flex justify-end'>
                                            <button className='bg-blue-300 text-white flex gap-2 justify-center items-center p2 rounded-full w-2/5 h-7'><i class="fa-solid fa-circle-plus"></i>Tambah File</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BuktiPembayaran