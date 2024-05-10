import React from 'react'

const Login = () => {
  return (
    <div className='py-10 bg-cover h-screen' style={{ backgroundImage: 'url("assets/img/Login1.png")' }}>
        <div className='container w-4/5 m-auto flex justify-between'>
            <div className='w-2/5 backdrop-blur-xl bg-white/30 rounded-md'>
              <div className='w-full flex justify-center py-16'>
                  <div className='flex flex-col gap-8 w-4/5'>
                      <h1 className='text-3xl text-center font-bold text-white'>Create Account</h1>
                      <div className='flex justify-center gap-10'>
                          <div className='rounded-full w-5 h-5 flex justify-center items-center'><img src="assets/img/google.png" alt="" /></div>
                          <div className='rounded-full w-5 h-5 flex justify-center items-center'><img src="assets/img/Vector.png" alt="" /></div>
                          <div className='rounded-full w-5 h-5 flex justify-center items-center'><img src="assets/img/Vector-1.png" alt="" /></div>
                      </div>
                      <form action="" className='flex flex-col gap-4'>
                          <div className="">
                              <input type="text" id="base-input" className="bg-gray-100 py-3 px-5 text-sm rounded-md block w-full p-2 text-slate-400" placeholder='Username'/>
                          </div>
                          <div className="">
                              <input type="text" id="base-input" className="bg-gray-100 py-3 px-5 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 text-slate-400" placeholder='Password'/>
                          </div>
                          <div className="">
                              <select id="countries_disabled" class="py-3 px-5 bg-gray-100 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 text-slate-400">
                                  <option selected>Daftar Sebagai</option>
                                  <option value="US">Tour Guide</option>
                                  <option value="CA">Travelers</option>
                              </select>
                          </div>
                          <div className='flex justify-center mt-10'>
                              <button className='bg-transparent border border-white text-white rounded-md h-10 w-full'>Sign in</button>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
            <div className='w-1/2 flex flex-col'>
              <div className='h-1/2 flex flex-col gap-5 my-3 py-4 items-end pr-4'>
                <h1 className='font-bold text-blue-300 text-right text-5xl'>Wellcome Back</h1>
                <p className='text-blue-300 text-right text-lg w-3/5'>To keep connected with us please login with our personal info</p>
              </div>
              <div className='flex justify-end'>
                <img src="assets/img/ilustration.png" alt="" className='w-full' />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login