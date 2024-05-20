import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/home';
import Package from '../../pages/Package';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from '../../pages/NotFound';
import Admin from '../admin/MainAdmin';
import TambaData from '../admin/TambahData';
import EditData from '../admin/EditData';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/package" element={<Package />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/tambah-wisata" element={<TambaData />} />
        <Route path="/admin/edit-wisata" element={<EditData />} />
      </Routes>
    </>
  );
};

export default Router;
