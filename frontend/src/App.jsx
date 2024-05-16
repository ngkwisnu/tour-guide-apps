import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ProfileAdmin from './pages/ProfileAdmin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile-admin" element={<ProfileAdmin />}/>
        <Route path="/pesanan-admin" element={<ProfileAdmin />}/>
        <Route path="/kelola-paket" element={<ProfileAdmin />}/>
        <Route path="/riwayat" element={<ProfileAdmin />}/>
      </Routes>
    </BrowserRouter>
  )
}
