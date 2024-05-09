import React from 'react'

const UsersRegister = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center bg-cover h-screen bg-slate-100 relative'>
          <img src="assets/img/lingkaran.png" alt="" className='absolute z-10 bottom-0 left-0'/>
          <img src="assets/img/segitiga.png" alt="" className='absolute z-10 top-0 right-0'/>
          <div className='h-1/2 lg:h-4/5 bg-gradient-to-tr from-orange-400/30 to-cyan-400/30 m-auto rounded-lg border-2 border-white backdrop-blur-lg z-20 flex shadow-2xl'>
              {/* <div className='backdrop-blur-sm bg-white/60 w-2/5 rounded-e-lg py-32 px-20 flex flex-col items-center gap-10 p shadow-lg'> */}
              <div className='backdrop-blur-sm bg-white/60 w-2/5 rounded-e-lg py-32 px-10 lg:flex flex-col items-center gap-10 p shadow-lg hidden'>
                <h1 className='text-xl text-center'>Wellcome Back!</h1>
                <p className='text-center text-sm font-light'>To keep connected with us please login with your personal info</p>
                <button className='bg-transparent border border-orange-300 rounded-full h-10 w-4/5'>Sign in</button>
              </div>
              <div className='flex flex-col items-center gap-10 lg:w-4/5 lg:my-auto lg:gap-8 px-16 py-16'>
                <h1 className='text-xl text-slate-800 text-center font-bold'>Create Users Account</h1>
                <div class="w-full flex flex-col gap-4 items-center">
                    <input type="hidden" id="base-input" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" value='user'/>
                    <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder='Nama Lengkap'/>
                    <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder='Email'/>
                    <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder='Password'/>
                    <button className='bg-transparent border bg-orange-400 text-white font-bold rounded-full h-10 w-1/2 my-3'>Sign in</button>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default UsersRegister