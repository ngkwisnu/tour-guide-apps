import React, { FC } from 'react';
import HIW1img from '../assets/images/HIW1.png';
import HIW2img from '../assets/images/HIW2.png';
import HIW3img from '../assets/images/HIW3.png';
import VectorImg from '../assets/VectorHIW.svg';
import { Image, Heading } from '@chakra-ui/react';

const DEMO_DATA = [
  {
    id: 1,
    img: HIW1img,
    title: 'Jelajahi Paket Liburan',
    desc: 'Lihat berbagai paket liburan yang telah kami sediakan. Dari pantai eksotis hingga pegunungan yang menakjubkan, kami memiliki semuanya.',
  },
  {
    id: 2,
    img: HIW2img,
    title: 'Pesan Paket Liburan',
    desc: 'Setelah menemukan paket yang sempurna, lakukan pemesanan dengan mudah dan cepat.',
  },
  {
    id: 3,
    img: HIW3img,
    title: 'Bersantai dan Nikmati Setiap Momen!',
    desc: 'Dengan semuanya sudah diatur, saatnya Anda bersantai dan menikmati liburan.',
  },
];

const SectionHowItWork = ({ className = '', data = DEMO_DATA }) => {
  return (
    <div className={`nc-SectionHowItWork  ${className}`} data-nc-id="SectionHowItWork">
      <Heading isCenter desc="Keep calm & travel on">
        How it work
      </Heading>
      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <Image className="hidden md:block absolute inset-x-0 top-10" src={VectorImg} alt="" />
        {data.map((item) => (
          <div key={item.id} className="relative flex flex-col items-center max-w-xs mx-auto">
            {item.imgDark ? (
              <>
                <Image className="dark:hidden block mb-8 max-w-[180px] mx-auto" src={item.img} alt="" />
                <Image alt="" className="hidden dark:block mb-8 max-w-[180px] mx-auto" src={item.imgDark} />
              </>
            ) : (
              <Image alt="" className="mb-8 max-w-[180px] mx-auto" src={item.img} />
            )}
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
