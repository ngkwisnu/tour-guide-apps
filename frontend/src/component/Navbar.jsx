import { User } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
<header className='h-16'>
        <nav className='flex justify-between items-center h-full'>
            <img src="/logo.png" alt="" />
            <ul className='flex gap-6 font-semibold items-center justify-center'>
                <li>Home</li>
                <li>App</li>
                <li>Wisata</li>
                <li>Notifikasi</li>
                <li className='bg-sky-500 text-gray-50 py-2 px-6 rounded-3xl flex gap-2 text-base ml-10'><User />Akun</li>
            </ul>
        </nav>
      </header>
  )
}
