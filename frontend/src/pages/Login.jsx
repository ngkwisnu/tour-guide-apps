import { Link, Button } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const onLogin = async (e) => {
    // Cegah agar tidak dikirim form kosong
    e.preventDefault();

    // Buat try untuk mengetahui error
    try {
      // Kirim data dalam bentuk JSON, yg isinya email dan password
      const res = await fetch('http://18.141.9.175:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      // Jika tidak ok maka akan keluar pesan
      if (!res.ok) {
        const errorData = await res.json();
        setMsg(errorData.msg);
        Swal.fire({
          title: 'Error',
          text: 'Username atau Password Tidak Sesuai!.',
          icon: 'error',
        });
        return;
      }

      // Ambil data respons
      const response = await res.json();
      const {data} = response

      // Simpan token atau informasi pengguna jika diperlukan
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', data.username);
      setCurrentUser(data.username);

      // Jika oke masuk ke home atau dashboard
      navigate('/');
    } catch (error) {
      // Penanganan error akan ditampilkan di konsol
      console.error('Error:', error);
      setMsg('An error occurred. Please try again.');
    }
  };
  return (
    <>
      <div className="mx-auto lg:flex lg:h-auto">
        <div className="hidden lg:flex lg:h-screen w-3/5 bg-cover h-auto" style={{ backgroundImage: 'url("assets/img/farm.png")' }}>
          <div className="lg:w-1/5 lg:h-1/5 lg:ml-10 lg:mt-5">
            <img src="assets/img/logo-white.png" alt="" />
          </div>
        </div>
        <div className="h-screen lg:h-auto content-center lg:w-2/5 lg:py-16">
          <h1 className="text-2xl text-slate-700 font-semibold text-center mb-5">Masuk</h1>

          <div className="w-full hidden flex-col items-center lg:flex">
            <form className="w-4/5 mx-auto">
              <div className="mb-3">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">
                  Username
                </label>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="masukkan username"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
                  required
                />
              </div>
              <div>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">
                  Kata Sandi
                </label>
                <input
                  type="text"
                  id="small-input"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="masukkan password"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
                  required
                />
                <Link href="/change-password">
                  <p className="text-sm text-blue-500 text-right mt-2">Lupa kata sandi?</p>
                </Link>
              </div>
              <div className="flex justify-center lg:mt-8">
                <button type="submit" className="w-1/5 bg-sky-300 rounded-full h-8 text-white font-semibold">
                  Masuk
                </button>
              </div>
              <div className="w-full text-center">
                <Button onClick={onLogin}>Masuk</Button>
              </div>
            </form>
            <div className="flex gap-3 lg:mt-10 justify-center">
              <p className="text-sm content-center">Get The App Now!</p>
              <img src="assets/img/googleplay.png" className="w-1/3" alt="" />
            </div>
            <p className="mt-10 lg:mt-7">
              Belum punya akun?{' '}
              <Link href="/register">
                <span className="text-sky-300">Daftar</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
