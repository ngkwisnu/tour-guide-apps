import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { Input, InputGroup, InputRightElement, Button, Link, Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Image } from '@chakra-ui/react';
import { Star, MapPin } from 'lucide-react';
import Background from '/img/img2.jpg';

const Package = () => {
  const [modal, setModal] = useState(false);
  const destination = [
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Nusa Penida',
      amount: 'Rp 300.000',
      days: '10 Days Trip',
      sideImg: '',
    },
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Nusa Penida',
      amount: 'Rp 300.000',
      days: '12 Days Trip',
      sideImg: '',
    },
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Nusa Penida',
      amount: 'Rp 300.000',
      days: '28 Days Trip',
      sideImg: '/img/Decore2.png',
    },
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Nusa Penida',
      amount: 'Rp 300.000',
      days: '28 Days Trip',
      sideImg: '/img/Decore2.png',
    },
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Nusa Penida',
      amount: 'Rp 300.000',
      days: '28 Days Trip',
      sideImg: '/img/Decore2.png',
    },
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Nusa Penida',
      amount: 'Rp 300.000',
      days: '28 Days Trip',
      sideImg: '/img/Decore2.png',
    },
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Nusa Penida',
      amount: 'Rp 300.000',
      days: '28 Days Trip',
      sideImg: '/img/Decore2.png',
    },
    {
      img: 'https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Nusa Penida',
      amount: 'Rp 300.000',
      days: '28 Days Trip',
      sideImg: '/img/Decore2.png',
    },
  ];
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
          {/* nengok konsep blog */}
          {destination.map((destinations, index) => (
            <Link href="/package/package-detail" _hover={{ textDecoration: 'none' }} className="group relative flex flex-col rounded-2xl shadow-sm border border-black " key={index}>
              <div className="relative z-10" data-aos="fade-down">
                <div className="h-[250px] ">
                  <img src={destinations.img} width={300} height={300} alt="img" className="w-full h-full rounded-tl-2xl rounded-tr-2xl group-hover:grayscale-[50%]" />
                </div>
                <div className='absolute w-full flex justify-between px-2 top-3 gap-2'>
                  <div className="  p-1 bg-[#ff5b00]">
                    <p className="text-xs text-white font-semibold">pilihan kami</p>
                  </div>
                  <Star color='#ff5b00' />
                </div>
                <div className="grid grid-cols-1 gap-2 p-4">
                  <div className="flex gap-1 text-xs">
                    <MapPin color="#319795" size={16} />
                    Kabupaten Klungkung, Bali
                  </div>
                  <p className="text-xs text-[#6B7280]">5 Km - 20 menit</p>
                  <p className="text-xl font-bold">{destinations.location}</p>
                  <div className="text-base text-litegrey  flex items-center justify-between gap-4">
                    <div>
                      <p>Ulasan 1rb</p>
                      <div className="flex gap-2 items-center text-xs">
                        <Star size={16} color="#FABB05" fill="#FABB05" />
                        4.5
                      </div>
                    </div>
                    <p className="font-bold text-[#319795]">
                      {destinations.amount}
                      <span className="text-sm font-normal italic">/orang</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* <Center py={6}>
            <Box maxW={'350px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
              <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image src={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} layout={'fill'} />
              </Box>
              <Stack>
                <Text color={'green.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}>
                  Blog
                </Text>
                <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'} fontFamily={'body'}>
                  Boost your conversion rate
                </Heading>
                <Text color={'gray.500'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                </Text>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} alt={'Author'} />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
          </Center> */}
        </div>
      </section>
    </>
  );
};

export default Package;
