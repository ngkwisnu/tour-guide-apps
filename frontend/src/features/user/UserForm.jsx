import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputRow from "../../component/InputRow";
import Button from "../../component/Button";

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
      <div className="profile-container">
        <div className="flex gap-8 items-center">
          <div>
            <img
              src="/default-user-2.png"
              alt="user profile"
              className=" w-24"
            />
            <Link to="/upload-foto" className="text-regent-500">
              Tambah foto
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold">Ahmad Sumamad</p>
            <p className="text-sm text-gray-500">0812-3456-7890</p>
            <p className="text-sm text-gray-500">sumamad@example.com</p>
          </div>
        </div>
        <form
          className="mt-8 w-full flex flex-col gap-8  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputRow label="Nama Lengkap" error={errors?.nama?.message}>
            <input
              type="text"
              id="nama"
              className="border-b border-gray-950 p-2 bg-regent-100 outline-regent-500"
              {...register("nama", { required: "Kolom nama harus diisi." })}
            />
          </InputRow>
          <InputRow label="No Handphone" error={errors?.handphone?.message}>
            <input
              type="number"
              id="handphone"
              className="border-b border-gray-950 p-2 bg-regent-100 outline-regent-500"
              {...register("handphone", {
                required: "Kolom no handphone harus diisi.",
              })}
            />
          </InputRow>
          <InputRow label="E-mail" error={errors?.email?.message}>
            <input
              type="text"
              id="email"
              className="border-b border-gray-950 p-2 bg-regent-100 outline-regent-500"
              {...register("email", {
                required: "Kolom email harus diisi.",
              })}
            />
          </InputRow>
          <InputRow label="Ganti kata sandi" error={errors?.sandi?.message}>
            <input
              type="password"
              id="sandi"
              className="border-b border-gray-950 p-2 bg-regent-100 outline-regent-500"
              {...register("sandi", {
                required: "Kolom sandi harus diisi.",
              })}
            />
          </InputRow>
          <div className="ml-auto">
            <Button type="primary">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}
