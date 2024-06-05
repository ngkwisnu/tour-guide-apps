import React, { FC } from 'react';
import rightImgPng from '../assets/images/our-features.png';
import { Image } from '@chakra-ui/react';

export default function Benefit() {
  return (
    <div className={`nc-SectionOurFeatures relative my-6 flex flex-col items-center lg:flex-row  px-10`} data-nc-id="SectionOurFeatures">
      <div className="flex-grow">
        <Image  objectFit="cover" src={rightImgPng} alt="" />
      </div>
      <div className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5`}>
        <span className="uppercase text-sm text-gray-400 tracking-widest">BENnefits</span>
        <h2 className="font-semibold text-4xl mt-5">Kenapa Memilih Kami?</h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            {/* <Badge name="Advertising" /> */}
            <span className="block text-xl font-semibold">Rating & Review</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">With a free listing, you can advertise your rental with no upfront costs</span>
          </li>
          <li className="space-y-4">
            {/* <Badge color="green" name="Exposure " /> */}
            <span className="block text-xl font-semibold">Layana Terpercaya</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">Millions of people are searching for unique places to stay around the world</span>
          </li>
          <li className="space-y-4">
            {/* <Badge color="red" name="Secure" /> */}
            <span className="block text-xl font-semibold">Pemesanan Online</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
