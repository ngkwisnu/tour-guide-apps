// ref : https://mfikri.com/en/blog/react-express-mysql-authentication

import React, { useState } from 'react';
import { Link, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  //kita set dulu semua nila ini undefined di awal favicon
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  //register
  const onSubmit = async (e) => {
    //cegah agar tidak dikir form kosong
    e.preventDefault();
    //buat try untuk mengetahui error
    try {
      //kirim data dalam bentuk josn, yg isinya nama, email, pas
      const res = await fetch('http://18.141.9.175:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
        }),
      });
      //jika tidak ok maka akan kelaur pesan
      if (!res.ok) {
        const errorData = await res.json();
        setMsg(errorData.msg);
        console.log(res);
        return;
      }
      //jika oke masuk ke home
      navigate('/login');
    } catch (error) {
      //penangangan erro akan ditampilkan di konsol
      console.error('Error:', error);
      console.log('hehe');
      setMsg('An error occurred. Please try again.');
    }
  };

  //memberikan nilai baru
  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const Register = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch('http://18.141.9.175:5000/auth/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(credentials),
  //     });

  //     Check if response is not OK
  //     if (!res.ok) {
  //       const result = await res.json();
  //       alert(result.message);
  //       return;
  //     }

  //     const result = await res.json();
  //     dispatch({ type: 'REGISTER_SUCCESS', payload: result });
  //     navigate('/');
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  return (
    <>
      <div className="mx-auto lg:flex lg:h-auto">
        <div className="hidden lg:flex lg:h-screen w-3/5 bg-cover h-auto" style={{ backgroundImage: 'url("assets/img/farm.png")' }}>
          <div className="lg:w-1/5 lg:h-1/5 lg:ml-10 lg:mt-5">
            <img src="assets/img/logo-white.png" alt="" />
          </div>
        </div>
        <div className="h-screen  content-center lg:w-2/5 mt-20 md:mt-0 lg:py-16">
          <h1 className="text-2xl text-slate-700 font-semibold text-center mb-5">Daftar</h1>

          <div className="w-full hidden flex-col items-center lg:flex">
            <form className="w-4/5 mx-auto">
              <div className="mb-3">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">
                  Nama
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="text"
                  id="small-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
                  required
                />
              </div>

              <div className="hidden lg:flex justify-between gap-4 w-full">
                <div className="mb-3 w-1/2">
                  <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">
                    Kata Sandi
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    id="small-input"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
                    required
                  />
                </div>
                <div className="mb-3 w-1/2">
                  <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">
                    Konfirmasi Kata Sandi
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    id="small-input"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center lg:mt-8">
                <Button onClick={onSubmit} type="submit" className="w-1/5 bg-sky-300 rounded-full h-8 text-black font-semibold">
                  Mulai
                </Button>
              </div>
            </form>
            <div className="flex gap-3 mt-10 justify-center lg:hidden">
              <p className="text-sm content-center">Get The App Now!</p>
              <img src="assets/img/googleplay.png" className="w-1/3" alt="" />
            </div>
            <p className="mt-10 lg:mt-7">
              Sudah punya akun?{' '}
              <Link _hover={{ textColor: 'black' }} className="font-semibold" color="teal.500" href="/login">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
