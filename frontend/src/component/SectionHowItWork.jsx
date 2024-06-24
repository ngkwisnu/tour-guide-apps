import React, { FC } from 'react';
import HIW1img from '../assets/images/HIW1.png';
import HIW2img from '../assets/images/HIW2.png';
import HIW3img from '../assets/images/HIW3.png';
import VectorImg from '../assets/VectorHIW.svg';
import { Image, Heading } from '@chakra-ui/react';
import { Reveal } from '../animations/Reveal';

const DEMO_DATA = [
  {
    id: 1,
    img: HIW1img,
    title: 'Kemudahan',
    desc: 'Mulai dari mencari, memesan, hingga mengikuti aktivitas, kami hadir untuk mempermudah perjalanan kamu.',
  },
  {
    id: 2,
    img: HIW2img,
    title: 'Autentik',
    desc: 'Tim lokal kami punya tips tentang aktivitas yang wajib dilakukan di ribuan destinasi.',
  },
  {
    id: 3,
    img: HIW3img,
    title: 'Keingintahuan',
    desc: 'Kami selalu mencari aktivitas baru dan unik yang bisa kamu nikmati.',
  },
];

const SectionHowItWork = ({ className = '', data = DEMO_DATA }) => {
  return (
    <section className="w-full bg-[#f5f5f5]">
      <div className={`container  flex flex-col items-center justify-center p-4 w-full mx-auto space-y-8 sm:p-10   ${className}`} data-nc-id="SectionHowItWork">
        <Reveal>
          <Heading className="text-center flex w-full items-center justify-center" isCenter desc="Keep calm & travel on">
            Janji Kami
          </Heading>
        </Reveal>
        <Reveal delay={1}>
          <div className="mt-10 relative grid md:grid-cols-3 gap-20">
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
        </Reveal>
      </div>
    </section>
  );
};

export default SectionHowItWork;
