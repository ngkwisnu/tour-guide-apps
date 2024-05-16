import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileUser from "./pages/ProfileUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfileUser />} />
      </Routes>
    </BrowserRouter>
  );
}
