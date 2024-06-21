import React, { useEffect, useState, useRef } from 'react';
import { Search } from 'lucide-react';
import { Input, InputGroup, InputRightElement, Button, Link, Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Image } from '@chakra-ui/react';
import { Star, MapPin } from 'lucide-react';
import Background from '/img/img2.jpg';
import useFetch from '../hook/useFetch';

async function getData() {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/wisata`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });

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
  const [searchItem, setSearchItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const selectedCategoryRef = useRef('All categories');
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Mengupdate kategori yang dipilih
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    selectedCategoryRef.current = category;
    setIsOpen(false); // Tutup dropdown setelah memilih kategori
  };

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      console.log('Data set in state:', result.data); // Log data yang diset ke state
      setPackages(result.data || []); // Inisialisasi packages dengan data atau array kosong
      setFilteredPackages(result.data || []); // Inisialisasi filteredPackages dengan data atau array kosong
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(packages)) {
      const filtered = packages.filter((pkg) => {
        // Pastikan nama dan capital ada sebelum mengaksesnya
        const nama = pkg.nama ? pkg.nama.toLowerCase() : '';
        const capital = pkg.capital ? pkg.capital.toLowerCase() : '';
        const kategori = pkg.kategori ? pkg.kategori.toLowerCase() : '';
        return (nama.includes(searchItem.toLowerCase()) || capital.includes(searchItem.toLowerCase())) && (selectedCategory === 'All' || kategori.includes(selectedCategory.toLowerCase()));
      });
      setFilteredPackages(filtered);
    }
  }, [searchItem, packages, selectedCategory]);

  // Mengupdate searchItem saat input berubah
  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <section className="overflow-hidden h-screen  px-4 sm:px-6 w-full relative">
        <div
          className="relative min-h-screen rounded-lg object-cover w-full"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
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
          <form class="w-full mx-auto">
            <div class="flex relative">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                class="flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-s-lg focus:ring-4 focus:outline-none    dark:border-black"
                type="button"
                onClick={toggleDropdown}
              >
                {selectedCategoryRef.current}{' '}
                <svg class="w-4 h-4 ms-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {/* dropwodn */}
              {isOpen && (
                <div id="dropdown" class="z-50 absolute left-2  top-16  bg-black divide-y divide-white rounde">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                      <button onClick={() => handleCategorySelect('Alam')} type="button" class="inline-flex w-full px-4 py-2 hover:bg-white  dark:hover:text-black">
                        Alam
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleCategorySelect('Budaya')} type="button" class="inline-flex w-full px-4 py-2 hover:bg-white  dark:hover:text-black">
                        Budaya
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleCategorySelect('Massage')} type="button" class="inline-flex w-full px-4 py-2 hover:bg-white  dark:hover:text-black">
                        Massage
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleCategorySelect('Outdoor Activity')} type="button" class="inline-flex w-full px-4 py-2 hover:bg-white  dark:hover:text-black">
                        Outdoor Activity
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              {/* searcj bar */}
              <div class="relative w-full bg-[#f5f4f4]   ">
                <input
                  type="search"
                  value={searchItem}
                  onChange={handleInputChange}
                  id="search-dropdown"
                  className="block  py-4 px-2 w-full z-20 text-sm text-gray-900 bg-[#f5f4f4] focus:outline-none   dark:placeholder-black  "
                  placeholder="Cari wisata idamanmu..."
                  required
                />
                <div className="space-y-8">
                  <button
                    type="submit"
                    class="absolute top-1/2 right-2 transform -translate-y-1/2 end-0 h-12 w-12 p-4 text-sm font-medium text-white bg-black border rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <section className="relative w-full py-8  px-[5%]  gap-6" id="destination">
        <div className="grid  grid-cols-2 sm:grid-cols-4 items-center gap-4 lg:gap-6 special-font">
          {/* {Array.isArray(filteredPackages) && filteredPackages.length > 0 ? (
        filteredPackages.map((pkg) */}
          {Array.isArray(filteredPackages) && filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
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
