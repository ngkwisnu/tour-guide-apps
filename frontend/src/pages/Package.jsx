import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { Input, InputGroup, InputRightElement, Button, Link, Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Image } from '@chakra-ui/react';
import { Star, MapPin } from 'lucide-react';
import Background from '/img/img2.jpg';
import useFetch from '../hook/useFetch';

async function getData() {
  try {
    const response = await fetch('http://18.141.9.175:5000/wisata');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (err) {
    return []; // Kembalikan array kosong jika terjadi error
  }
}

const Package = () => {
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
      <section className="overflow-hidden h-screen  px-4 sm:px-6 w-full relative">
        <div className="relative min-h-screen rounded-lg object-cover w-full" style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div class="absolute bg-black opacity-40 inset-0 rounded-lg "></div>
          {/* tulisan */}
          <div className="flex justify-start px-10 md:px-24 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 h-full w-full items-start pt-20 absolute inset-0 ">
            <div className="max-w-full">
              <h1 className="mb-5 md:text-4xl text-2xl text-[#fff] font-bold  ">
                Bali Memanggil <span className="block text-red-500 md:text-7xl text-4xl ">Temukan Surga yang Tak Terlupakan</span>
              </h1>
              <p className="mb-5 md:text-xl text-[#fff] ">
                Nikmati keindahan alam, pantai berpasir putih, budaya yang kaya, dan petualangan seru di setiap sudut Bali. Bersiaplah untuk menciptakan kenangan tak terlupakan di pulau surga ini.
              </p>
              <button className=" text-sm py-2 px-6 bg-white rounded-full  ">Pesan Sekarang!</button>
            </div>
          </div>
        </div>
      </section>

      {/* input */}
      <div class="flex items-center justify-center py-10">
        <div class="flex w-full mx-16 items-center">
          <InputGroup>
            <Input focusBorderColor="black" placeholder="Nyari opo...? " size="md" borderRadius="full" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" colorScheme="teal">
                <Search />
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
      </div>
      <section className="relative w-full py-8  px-[5%]  gap-6" id="destination">
        <div className="grid  grid-cols-2 sm:grid-cols-4 items-center gap-4 lg:gap-6 special-font">
          {Array.isArray(packages.data) && packages.data.length > 0 ? (
            packages.data.map((pkg) => (
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
      {/* <p>{this.packages.nama}</p> */}
    </>
  );
};

export default Package;
