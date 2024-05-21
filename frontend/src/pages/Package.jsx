import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { Input, InputGroup, InputRightElement, Button, Link } from '@chakra-ui/react';
import { Star, MapPin } from 'lucide-react';
const Package = () => {
  const [modal, setModal] = useState(false);
  const destination = [
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Rome, Italy',
      amount: 'Rp 300.000',
      days: '10 Days Trip',
      sideImg: '',
    },
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'London, UK',
      amount: 'Rp 300.000',
      days: '12 Days Trip',
      sideImg: '',
    },
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Full Europe',
      amount: 'Rp 300.000',
      days: '28 Days Trip',
      sideImg: '/img/Decore2.png',
    },
  ];
  return (
    <>
      <section className="overflow-hidden h-screen  px-4 sm:px-6 w-full relative">
        <div
          className="relative min-h-screen rounded-lg "
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1613121618125-025de63d792d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
        >
          <div class="absolute inset-0 bg-black opacity-40 rounded-lg "></div>
          {/* tulisan */}
          <div className="flex justify-start px-24 h-full w-full items-start pt-8 absolute inset-0 ">
            <div className="max-w-full">
              <h1 className="mb-5 text-8xl text-[#fff] font-bold">Explore the sight of the azore</h1>
              <p className="mb-5 text-xl text-[#fff] ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className=" text-sm py-2 px-6 bg-white rounded-full  ">Book Now</button>
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
        <div className="grid  grid-cols-1 sm:grid-cols-3 items-center gap-4 lg:gap-8 xl:gap-16 special-font">
         {/* nengok konsep blog */}
          {destination.map((destinations, index) => (
            <Link href="/package/package-detail"  _hover={{ textDecoration: "none" }}   className="group relative flex flex-col rounded-2xl shadow-sm border border-black " key={index}>
              <div className="relative z-10" data-aos="fade-down">
                <div className="h-[250px] ">
                  <img src={destinations.img} width={300} height={300} alt="img" className="w-full h-full rounded-tl-2xl rounded-tr-2xl group-hover:grayscale-[50%]" />
                </div>
                <div className="grid grid-cols-1 gap-2 p-4">
                  <div className='flex gap-1 text-xs'>
                    <MapPin color='#319795' size={16} />
                    Kabupaten Klungkung, Bali
                  </div>
                  <p className='text-xs text-[#6B7280]'>5 Km - 20 menit</p>
                  <p className="text-xl font-bold">{destinations.location}</p>
                  <div className="text-base text-litegrey  flex items-center justify-between gap-4">
                    <div>
                      <p>Ulasan 1rb</p>
                      <div className="flex gap-2 items-center text-xs">
                        <Star size={16} color="#FABB05" fill="#FABB05" />
                        4.5
                      </div>
                    </div>
                    <p className='font-bold text-[#319795]'>
                      {destinations.amount}<span className="text-sm font-normal italic">/orang</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Package;
