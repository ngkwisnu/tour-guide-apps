import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputRow from "../../component/InputRow";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = function (data) {
    console.log(data);
  };

  return (
    <>
      <div className=" px-24 py-8">
        <div className="flex gap-8 items-center">
          <div>
            <img
              src="/default-user-2.png"
              alt="user profile"
              className=" w-24"
            />
            <Link to="/upload-foto" className="text-sky-500">
              Tambah foto
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold">Maya Anggita</p>
            <p className="text-sm text-gray-500">0812-3456-7890</p>
            <p className="text-sm text-gray-500">maya@example.com</p>
          </div>
        </div>
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <InputRow label="Nama Lengkap" error={errors?.nama?.message}>
            <input
              type="text"
              id="nama"
              className="border-b border-gray-900 p-2 bg-transparent"
              {...register("nama", { required: "Kolom nama harus diisi." })}
            />
          </InputRow>
          <button className="bg-sky-400">Submit</button>
        </form>
      </div>
    </>
  );
}
