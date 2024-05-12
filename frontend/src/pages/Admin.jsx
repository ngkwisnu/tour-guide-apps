import React from 'react'
import NavbarAdmin from '../component/admin/NavbarAdmin'
import SidebarAdmin from '../component/admin/SidebarAdmin'
import MainAdmin from '../component/admin/MainAdmin'

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