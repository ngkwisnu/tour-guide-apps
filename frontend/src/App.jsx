import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import UserRole from './pages/UserRole'
import ChangePassword from './pages/ChangePassword'
import VerifikasiChangePassword from './pages/VerifikasiChangePassword'
import KonfirmasiOTP from './pages/KonfirmasiOTP'
import VerificationOTP from './pages/VerificationOTP'
import Admin from './pages/Admin'
import TambahData from './component/admin/TambahData'
import EditData from './component/admin/EditData'
import TourGuide from './pages/TourGuide'
import Pesanan from './component/tour-guide/Pesanan'
import Paket from './component/tour-guide/Paket'
import Riwayat from './component/tour-guide/Riwayat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/pilih-pengguna' element={<UserRole/>} />
          <Route path='/change-password' element={<ChangePassword/>} />
          <Route path='/verifikasi-password' element={<VerifikasiChangePassword/>} />
          <Route path='/konfirmasi-otp' element={<KonfirmasiOTP/>} />
          <Route path='/verifikasi-otp' element={<VerificationOTP/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/tambah-wisata' element={<TambahData/>} />
          <Route path='/edit-wisata' element={<EditData/>} />
          <Route path='/tour-guide' element={<TourGuide/>} />
          <Route path='/tour-guide/pesanan' element={<Pesanan/>} />
          <Route path='/tour-guide/paket' element={<Paket/>} />
          <Route path='/tour-guide/riwayat' element={<Riwayat/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
