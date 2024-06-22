import Button from "../component/Button";
import InputRow from "../component/InputRow";
import { useForm } from "react-hook-form";

export default function ChangePassword() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = () => {
    console.log("test");
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 p-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="font-semibold text-4xl">Lupa Kata Sandi?</p>
          <img src="/assets/img/person1.png" alt="" />
        </div>
        <div className="flex flex-col gap-8 bg-regent-200 p-32 border-2 border-blue rounded-3xl justify-center">
          <p className="text-4xl font-semibold text-center">Masukkan Email</p>
          <p className="text-center">
            Masukkan email yang kamu gunakan, kami akan mengirimkan kode OTP ke
            email yang kamu masukkan
          </p>
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputRow label="Email" error={errors.email?.message}>
              <input
                type="text"
                id="email"
                className="border-2 border-blue rounded-full py-1 px-4 outline-none"
                {...register("email", { required: "this field is required" })}
              />
            </InputRow>
            <Button type="full">Kirim</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
