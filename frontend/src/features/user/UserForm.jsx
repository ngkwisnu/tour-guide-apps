// user profile

import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputRow from '../../component/InputRow';
import Button from '../../component/Button';
import { AuthContext } from '../../context/AuthContext';

export default function UserForm() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  console.log(currentUser);
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  // const [userDetails, setUserDetails] = useState(null);

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       console.log('Token:', token);
  //       const res = await fetch(`http://54.254.36.46:5000/user/${currentUser?.id}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (res.ok) {
  //         const data = await res.json();
  //         setUserDetails(data);
  //       } else {
  //         console.error('Failed to fetch user details');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   if (currentUser) {
  //     fetchUserDetails();
  //   }
  // }, [currentUser]);

  // if (!userDetails) {
  //   return <div>Loading...</div>;
  // }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = function (data) {
    console.log(data);
  };

  return (
    <>
      <div className="profile-container mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="flex gap-8 items-center">
          <div>
            <img src="/default-user-2.png" alt="user profile" className=" w-24" />
            <Link to="/upload-foto" className="text-regent-500">
              Tambah foto
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold uppercase">{currentUser.username}</p>
            <p className="text-sm text-gray-500">0812-3456-7890</p>
            <p className="text-sm text-gray-500">{currentUser.email}</p>
          </div>
        </div>
        <form className="mt-8 w-full flex flex-col gap-8  " onSubmit={handleSubmit(onSubmit)}>
          <InputRow label="Nama Lengkap" error={errors?.nama?.message}>
            <input value={currentUser.username} type="text" id="nama" className="border-b border-gray-950 p-2 bg-regent-100 outline-regent-500" {...register('nama', { required: 'Kolom nama harus diisi.' })} />
          </InputRow>
          <InputRow label="No Handphone" error={errors?.handphone?.message}>
            <input
              type="number"
              id="handphone"
              className="border-b border-gray-950 p-2 bg-regent-100 outline-regent-500"
              {...register('handphone', {
                required: 'Kolom no handphone harus diisi.',
              })}
            />
          </InputRow>
          <InputRow label="E-mail" error={errors?.email?.message}>
            <input
              type="text"
              value={currentUser.email}
              id="email"
              className="border-b border-gray-950 p-2 bg-regent-100 outline-regent-500"
              {...register('email', {
                required: 'Kolom email harus diisi.',
              })}
            />
          </InputRow>
          <InputRow label="Ganti kata sandi" error={errors?.sandi?.message}>
            <input
              type="password"
              id="sandi"
              className="border-b border-gray-950 p-2 bg-regent-100 outline-regent-500"
              {...register('sandi', {
                required: 'Kolom sandi harus diisi.',
              })}
            />
          </InputRow>
          <div className="ml-auto">
            <Button type="primary">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}
