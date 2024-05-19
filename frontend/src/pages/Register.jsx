import React from "react";

const Register = () => {
  return (
    <>
      <div className="mx-auto lg:flex lg:h-auto">
        <div
          className="hidden lg:flex lg:h-screen w-3/5 bg-cover h-auto"
          style={{ backgroundImage: 'url("assets/img/farm.png")' }}
        >
          <div className="lg:w-1/5 lg:h-1/5 lg:ml-10 lg:mt-5">
            <img src="assets/img/logo-white.png" alt="" />
          </div>
        </div>
        <div className="h-screen lg:h-auto content-center lg:w-2/5 lg:py-16">
          <h1 className="text-2xl text-raven-800 font-semibold text-center mb-5">
            Daftar
          </h1>
          <div className="w-full flex flex-col items-center lg:hidden">
            <form className="w-4/5 mx-auto">
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-200 text-gray-950 text-sm rounded-full focus:ring-regent-500 focus:border-regent-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="base-input"
                  className="bg-gray-50 border border-gray-200 text-gray-950 text-sm rounded-full focus:ring-regent-500 focus:border-regent-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  No. Telepon / Whatsapp
                </label>
                <input
                  type="number"
                  id="base-input"
                  className="bg-gray-50 border border-gray-200 text-gray-950 text-sm rounded-full focus:ring-regent-500 focus:border-regent-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  id="base-input"
                  className="bg-gray-50 border border-gray-200 text-gray-950 text-sm rounded-full focus:ring-regent-500 focus:border-regent-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-9">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  id="base-input"
                  className="bg-gray-50 border border-gray-200 text-gray-950 text-sm rounded-full focus:ring-regent-500 focus:border-regent-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-2/5 bg-sky-300 rounded-full h-10 text-white font-semibold"
                >
                  Mulai
                </button>
              </div>
            </form>
            <div className="flex gap-3 mt-10 justify-center">
              <p className="text-sm content-center">Get The App Now!</p>
              <img src="assets/img/googleplay.png" className="w-1/3" alt="" />
            </div>
            <p className="mt-10">
              Sudah punya akun? <span className="text-regent-200">Masuk</span>
            </p>
          </div>
          <div className="w-full hidden flex-col items-center lg:flex">
            <form className="w-4/5 mx-auto">
              <div className="mb-3">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-950 border border-gray-200 rounded-full bg-gray-50 text-xs focus:ring-regent-500 focus:border-regent-500 "
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-950 border border-gray-200 rounded-full bg-gray-50 text-xs focus:ring-regent-500 focus:border-regent-500 "
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  No. Telepon / Whatsapp
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-950 border border-gray-200 rounded-full bg-gray-50 text-xs focus:ring-regent-500 focus:border-regent-500 "
                  required
                />
              </div>
              <div className="hidden lg:flex justify-between gap-4 w-full">
                <div className="mb-3 w-1/2">
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-950"
                  >
                    Kata Sandi
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="block w-full p-2 text-gray-950 border border-gray-200 rounded-full bg-gray-50 text-xs focus:ring-regent-500 focus:border-regent-500 "
                    required
                  />
                </div>
                <div className="mb-3 w-1/2">
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-950"
                  >
                    Konfirmasi Kata Sandi
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="block w-full p-2 text-gray-950 border border-gray-200 rounded-full bg-gray-50 text-xs focus:ring-regent-500 focus:border-regent-500 "
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center lg:mt-8">
                <button
                  type="submit"
                  className="w-1/5 bg-regent-200 rounded-full h-8 text-white font-semibold"
                >
                  Mulai
                </button>
              </div>
            </form>
            <div className="flex gap-3 mt-10 justify-center lg:hidden">
              <p className="text-sm content-center">Get The App Now!</p>
              <img src="assets/img/googleplay.png" className="w-1/3" alt="" />
            </div>
            <p className="mt-10 lg:mt-7">
              Sudah punya akun? <span className="text-regent-200">Masuk</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
