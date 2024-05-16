import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import UserForm from "../features/user/UserForm";

export default function ProfileUser() {
  return (
    <div className="mx-[72px]">
      <Navbar />
      <div className="grid grid-cols-4 mt-16">
        <Sidebar />
        <div className=" col-span-3 flex flex-col w-full relative">
          <div className="border-2 border-sky-300  rounded-xl px-8 min-h-full bg-sky-50">
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  );
}
