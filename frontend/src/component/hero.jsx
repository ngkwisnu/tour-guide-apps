import Background from '../assets/images/bg-hero.png';
import People from '../assets/images/people.png'
export default function Hero() {
  return (
    <>
      <section class="relative overflow-hidden  px-4 sm:px-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Background})` }}>
        {/* <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen items-center justify-center lg:px-8 lg:flex-row lg:justify-between">
          <div class="max-w-xl text-center md:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong class="block font-extrabold text-rose-700"> Forever Home. </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl/relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a href="#" class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Get Started
              </a>

              <a href="#" class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:flex hidden h-screen items-center justify-center p-6 mt-8 lg:mt-0  sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={People} alt="" className="object-contain h-72 sm:h-80 lg:h-[500px] " />
          </div>
        </div>
      </section>
    </>
  );
}
