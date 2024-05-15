import Background from '../assets/images/bg-hero.png';


export default function Benefit() {
  return (
    <>
      <div className="max-w-screen-xl h-screen flex flex-col items-center justify-center mt-10 mx-auto p-5 sm:p-10 md:p-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Background})` }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div class="bg-[#9BCFE0] relative shadow rounded-lg w-full mx-auto">
            <div class="flex justify-center">
              <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
            </div>

            <div class=" h-48 flex justify-center items-center flex-col gap-4">
              <h1 class="font-bold text-center text-xl text-gray-900">Rating & Review</h1>
              <p class="text-center text-sm text-gray-400 font-medium">Membantu pengguna memilih tour guide yang terpercaya</p>
            </div>
          </div>
          <div class="bg-[#9BCFE0] relative shadow rounded-lg w-full mx-auto">
            <div class="flex justify-center">
              <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
            </div>

            <div class=" h-48 flex justify-center items-center flex-col gap-4">
              <h1 class="font-bold text-center text-xl text-gray-900">Rating & Review</h1>
              <p class="text-center text-sm text-gray-400 font-medium">Membantu pengguna memilih tour guide yang terpercaya</p>
            </div>
          </div>
          <div class="bg-[#9BCFE0] relative shadow rounded-lg w-full mx-auto">
            <div class="flex justify-center">
              <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
            </div>

            <div class=" h-48 flex justify-center items-center flex-col gap-4">
              <h1 class="font-bold text-center text-xl text-gray-900">Rating & Review</h1>
              <p class="text-center text-sm text-gray-400 font-medium">Membantu pengguna memilih tour guide yang terpercaya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
