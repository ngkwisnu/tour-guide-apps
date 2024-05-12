import React from 'react'

const EditData = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-4xl font-bold my-10 mx-10'>Form Data</h1>
        <div className='w-full my-10 flex justify-center'>
            <div className='w-4/5 my-10'>
                <form class="w-full mx-auto">
                    <div class="mb-5 flex justify-center">
                        <label for="email" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Nama</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700" value='Nusa Penida' required />
                    </div>
                    <div className='mb-5 flex justify-center'>
                        <label for="message" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Deskripsi</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-slate-700" value='Nusa Penida adalah sebuah pulau (nusa) bagian dari negara Republik Indonesia yang terletak di sebelah tenggara Bali yang dipisahkan oleh Selat Badung. Di dekat pulau ini terdapat juga pulau-pulau kecil lainnya yaitu Nusa Ceningan dan Nusa Lembongan. Perairan pulau Nusa Penida terkenal dengan kawasan selamnya di antaranya terdapat di Crystal Bay, Manta Point, Batu Meling, Batu Lumbung, Batu Abah, Toyapakeh dan Malibu Point.a Republik Indonesia yang terletak di sebelah tenggara Bali yang dipisahkan oleh Selat Badung.' ></textarea>                        
                    </div>
                    <div class="mb-5 flex justify-center">
                        <label for="email" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Lokasi</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700" value='Selatan Bali' required />
                    </div>
                    <div class="mb-5 flex justify-center">
                        <label for="email" class="block mb-2 text-sm font-medium w-1/6 text-slate-700">Harga Tiket</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-slate-700" value='15000' required />
                    </div>
                    <div className='w-full my-10 justify-end flex'>
                        <button type="submit" class="text-white bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-1/5 px-5 py-2.5 text-center">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditData