import React from 'react'

const TambahData = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-4xl font-bold my-10 mx-10'>Form Data</h1>
        <div className='w-full my-10 flex justify-center'>
            <div className='w-4/5 my-10'>
                <form class="w-full mx-auto">
                    <div class="mb-5 flex justify-center">
                        <label for="email" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Nama</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div className='mb-5 flex justify-center'>
                        <label for="message" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Deskripsi</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>                        
                    </div>
                    <div class="mb-5 flex justify-center">
                        <label for="email" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Lokasi</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div class="mb-5 flex justify-center">
                        <label for="email" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Harga Tiket</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div class="mb-5 flex justify-center">
                        <label for="email" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Jam Buka</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div class="mb-5 flex justify-center">
                        <label for="email" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Rating</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div className='mb-5 flex justify-center'>
                        <label for="message" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Galeri</label>
                        
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>   
                    </div>
                    <div className='w-full my-10 justify-center flex'>
                        <button type="submit" class="text-white bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-3/5 px-5 py-2.5 text-center">Tambah Data Data</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default TambahData