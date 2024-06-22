import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Link, Text } from '@chakra-ui/react';
import { Star, MapPin } from 'lucide-react';

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
    return []; // Kembalikan array kosong jika terjadi error MapPin
  }
}

export default function PackageRecom() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      //   console.log('Data set in state:', data);
      setPackages(data);
    });
  }, []);

  useEffect(() => {
    // console.log('Packages state:', packages);
  }, [packages]);

  return (
    <>
      <aside aria-label="Related articles" class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div class="px-4 mx-auto max-w-screen-xl">
          <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-black">Rekomendasi Lain</h2>
          <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {Array.isArray(packages.data) && packages.data.length > 0 ? (
              packages.data
                .sort(() => Math.random() - 0.5)
                .slice(0, 4)
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
        </div>
      </aside>
    </>
  );
}
