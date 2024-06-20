import React, { useEffect, useState } from 'react';
import Background from '../assets/images/bg-hero.png';
import People from '../assets/images/people.png';
import { Star, MapPin } from 'lucide-react';
import { Button, ButtonGroup, Link, Text } from '@chakra-ui/react';
import Benefit from '../component/Benefit';
import SectionHowItWork from '../component/SectionHowItWork';
import SectionClientSay from '../component/SectionClientSay';
import SectionBanner from '../component/Banner';

async function getData() {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/wisata`, {
      method: 'GET',
      headers: {
        Authorization: localStorage('token'),
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (err) {
    return []; // Kembalikan array kosong jika terjadi error MapPin
  }
}

export default function Home() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      console.log('Data set in state:', data); // Log data yang diset ke state
      setPackages(data);
    });
  }, []);

  useEffect(() => {
    console.log('Packages state:', packages); // Log state packages setelah update
  }, [packages]);

  return (
    <>
      {/* Home */}
      <section className="relative overflow-hidden  px-4 sm:px-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Background})` }}>
        {/* <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen items-center justify-center lg:px-8 lg:flex-row lg:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">Lebih dari Sekadar Wisata!</h1>

            <p className="mt-4 max-w-lg text-white sm:text-lg">Jelajahi keindahan dan budaya Bali bersama Nusa Guide. Biarkan kami membantu merencanakan liburan impian Anda!</p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link color="white" href="#popular" _hover={{ textDecoration: 'none' }} className="block  bg-[#319795] w-full rounded  px-12 py-3 text-sm font-medium text-white shadow  sm:w-auto">
                Mulai perjalan
              </Link>
              <Link color="black" href="#learn" _hover={{ textDecoration: 'none' }} className="block  bg-white w-full rounded  px-12 py-3 text-sm font-medium text-white shadow  sm:w-auto">
                Pelajari lebih lanjut
              </Link>
            </div>
          </div>
          <div className="md:flex hidden h-screen items-center justify-center p-6 mt-8 lg:mt-0  sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={People} alt="" className="object-contain h-72 sm:h-80 lg:h-[500px] " />
          </div>
        </div>
      </section>

      {/* POPULAR DEST */}
      <section id="popular" className="relative w-full mt-10  px-[5%] grid grid-cols-1 gap-6">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <Text className="font-semibold inline-block">Popular destination</Text>
          </div>
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <Link color="teal.500" href="/package">
              See All
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 lg:gap-8 xl:gap-16 special-font ">
          {Array.isArray(packages.data) && packages.data.length > 0 ? (
            packages.data
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((pkg) => (
                <Link href={`/wisata/${pkg.id}`} _hover={{ textDecoration: 'none' }} className="group relative flex flex-col rounded-2xl shadow-sm border border-black " key={pkg.id}>
                  <div className="relative z-10" data-aos="fade-down">
                    <div className="h-[250px] ">
                      <img src={pkg.gambar1} alt={`Image of ${pkg.nama}`} width={300} height={300} className="w-full h-full rounded-tl-2xl rounded-tr-2xl group-hover:grayscale-[50%]" />
                    </div>
                    <div className="absolute w-full flex justify-between px-2 top-3 gap-2">
                      <div className="  p-1 bg-[#ff5b00]">
                        <p className="text-xs text-white font-semibold">pilihan kami</p>
                      </div>
                      <Star color="#ff5b00" />
                    </div>
                    <div className="grid grid-cols-1 gap-2 p-4">
                      <div className="flex gap-1 text-xs">
                        <MapPin color="#319795" size={16} />
                        {pkg.lokasi}
                      </div>
                      <p className="text-xs text-[#6B7280]">5 Km - 20 menit</p>
                      <p className="text-xl font-bold">{pkg.nama}</p>
                      <div className="text-base text-litegrey  flex items-center justify-between gap-4">
                        <div>
                          <p>Ulasan 1rb</p>
                          <div className="flex gap-2 items-center text-xs">
                            <Star size={16} color="#FABB05" fill="#FABB05" />
                            4.5
                          </div>
                        </div>
                        <p className="font-bold text-[#319795]">
                          {pkg.harga}
                          <span className="text-sm font-normal italic">/orang</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </section>

      {/* BENEFIT */}
      <Benefit />
      {/* HIW */}
      <SectionHowItWork className="px-4 lg:py-16 flex items-center justify-center flex-col" />

      {/* PREVIEW */}
      <SectionClientSay className="px-4 lg:py-16 flex items-center justify-center flex-col" />
      {/* Banner */}
      <SectionBanner />
    </>
  );
}
