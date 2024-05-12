import React from 'react'

const MainAdmin = () => {
  return (
    <div className='w-4/5 flex flex-col items-center gap-6 bg-white py-16'>
        
        <div className='w-4/5'>
            <button className='bg-blue-400 rounded-xl w-1/6 h-7 text-white'><i className="fa-solid fa-circle-plus text-white mr-4"></i>Tambah Data</button>
        </div>
        <div className="w-11/12 h-max relative overflow-x-auto shadow-md sm:rounded-lg">
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
                            Harga Tiket
                        </th>
                        <th scope="col" className="px-6 py-3 bg-blue-300/30 backdrop-blur-sm text-center">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-slate-600">
                        <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                            Nusa Penida
                        </th>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                        Nusa Penida adalah sebuah pulau yang ada di bali
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            Klungkung
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            15000
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            <i className="fa-regular fa-pen-to-square text-blue-300"></i>
                        </td>
                    </tr>
                    <tr className="border-b border-slate-600">
                        <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                            Nusa Penida
                        </th>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                        Nusa Penida adalah sebuah pulau yang ada di bali
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            Klungkung
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            15000
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            <i className="fa-regular fa-pen-to-square text-blue-300"></i>
                        </td>
                    </tr>
                    <tr className="border-b border-slate-600">
                        <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap bg-blue-300/30 text-center">
                            Nusa Penida
                        </th>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                        Nusa Penida adalah sebuah pulau yang ada di bali
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            Klungkung
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            15000
                        </td>
                        <td className="px-6 py-4 bg-blue-300/30 text-center">
                            <i className="fa-regular fa-pen-to-square text-blue-300"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default MainAdmin