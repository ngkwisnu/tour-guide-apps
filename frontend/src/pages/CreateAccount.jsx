import React from 'react'

const CreateAccount = () => {
  return (
    <>
        <div className='container mx-auto lg:flex lg:h-auto'>
            <div className='hidden lg:flex w-3/5 bg-cover h-auto' style={{ backgroundImage: 'url("assets/img/farm.png")' }}></div>
            <div className='h-screen lg:h-auto content-center lg:w-2/5 lg:py-16'>
                <h1 className='text-2xl text-slate-700 font-semibold text-center mb-5'>Daftar</h1>
                <div className='w-full flex flex-col items-center'>
                    <form className="w-4/5 mx-auto">
                        <div className="mb-3">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
                            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">No. Telepon / Whatsapp</label>
                            <input type="number" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Kata Sandi</label>
                            <input type="password" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        </div>
                        <div className="mb-9">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Konfirmasi Kata Sandi</label>
                            <input type="password" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' className='w-2/5 bg-sky-300 rounded-full h-10 text-white font-semibold'>Mulai</button>
                        </div>
                    </form>
                    <div className='flex gap-3 mt-10 justify-center'>
                        <p className='text-sm content-center'>Get The App Now!</p>
                        <img src="assets/img/googleplay.png" className='w-1/3' alt="" />
                    </div>
                    <p className='mt-10'>Sudah punya akun? <span className='text-sky-300'>Masuk</span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateAccount