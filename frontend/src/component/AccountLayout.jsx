import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

export default function AccountLayout() {
  return (
    <div className="mx-[72px] mb-16">
      <Navbar />
      <div className="grid grid-cols-4 mt-16">
        <Sidebar />
        <div className=" col-span-3 flex flex-col w-full ">
          <div className="border-2 border-regent-500  rounded-xl px-8 min-h-full bg-regent-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
