import React from 'react'
import NavbarAdmin from '../component/NavbarAdmin'
import SidebarAdmin from '../component/SidebarAdmin'
import MainAdmin from '../component/MainAdmin'

const Admin = () => {
  return (
    <>
        <NavbarAdmin/>
        <div className='flex w-full bg-slate-200 h-screen'>
            <SidebarAdmin/>
            <MainAdmin/>
        </div>
    </>
  )
}

export default Admin