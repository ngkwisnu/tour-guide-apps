import React from 'react';

const NavbarAdmin = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between">
        <img src="assets/img/logo.png" className="w-36" alt="" />
        <div className="flex gap-5 items-center">
          <p>Home</p>
          <p>App</p>
          <p>Wisata</p>
          <p>Notifikasi</p>
          <button className="text-white bg-blue-300 rounded-full w-32 ml-8">
            <i className="fa-solid fa-user mr-5"></i>Akun
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
