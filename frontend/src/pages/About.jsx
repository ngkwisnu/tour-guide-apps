import { Image } from '@chakra-ui/react';
import Team from '../component/Team';
import SectionHowItWork from '../component/SectionHowItWork';
import VideoEmbed from '../component/VideoEmbed';
import { Reveal } from '../animations/Reveal';
export default function About() {
  return (
    <>
      <main id="about" className="bg-gray-1  ">
        <div className="mx-auto relative max-w-screen-xl px-4 py-20 flex  md:h-screen items-start justify-start ">
          <div className="  block  md:px-0 px-4 ">
            <Reveal>
              <h1 className="text-8xl font-extrabold ">Nusa Guide Ni Boss.</h1>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-lg  max-w-4xl">
                <span className="font-semibold">Mencari keseruan? Kamu berada di tempat yang tepat!</span> Selamat datang di Nusa Guide Ni Boss, tempat di mana petualangan seru dan tawa tak pernah berhenti. Siap menjelajahi keindahan Bali
                dengan cara yang paling asyik dan menyenangkan? Bersama kami.
              </p>
            </Reveal>
          </div>
        </div>
        <VideoEmbed />

        <div className="container mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:h-screen items-center justify-center lg:px-8 lg:flex-row lg:justify-between">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className=" max-w-[540px] lg:mb-0">
                  <Reveal>
                    <h2 className="mb-5 text-3xl font-bold leading-tight text-dark text-black sm:text-[40px] sm:leading-[1.2]">This is Bali Golden Tour</h2>
                  </Reveal>
                  <Reveal delay={1}>
                    <p className="mb-10 text-xl leading-relaxed text-body-color dark:text-dark-6">
                      Tur Bali kami adalah paket lengkap yang mencakup perjalanan ke tempat-tempat menarik di Bali, melihat budaya unik, kehidupan sosial tradisional, dan aktivitas wisata seru
                      <br /> <br />
                      Sopir tur kami yang ramah akan memandu Anda menikmati panorama indah dan destinasi wisata lainnya dengan penuh kenyamanan dan kesenangan.
                    </p>
                  </Reveal>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}>
                      <Image
                        src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="about image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                      <Image
                        src="https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="about image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-blue px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                      <div>
                        <span className="block text-5xl font-extrabold text-white">2024</span>
                        <span className="block text-base font-semibold text-white">Nusa Guide</span>
                        <span className="block text-base font-medium text-white text-opacity-70">Comes to you</span>
                      </div>
                      <div>
                        <span className="absolute left-0 top-0 -z-10">
                          <svg width="106" height="144" viewBox="0 0 106 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.1" x="-67" y="47.127" width="113.378" height="131.304" transform="rotate(-42.8643 -67 47.127)" fill="url(#paint0_linear_1416_214)" />
                            <defs>
                              <linearGradient id="paint0_linear_1416_214" x1="-10.3111" y1="47.127" x2="-10.3111" y2="178.431" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute right-0 top-0 -z-10">
                          <svg width="130" height="97" viewBox="0 0 130 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.1" x="0.86792" y="-6.67725" width="155.563" height="140.614" transform="rotate(-42.8643 0.86792 -6.67725)" fill="url(#paint0_linear_1416_215)" />
                            <defs>
                              <linearGradient id="paint0_linear_1416_215" x1="78.6495" y1="-6.67725" x2="78.6495" y2="133.937" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute bottom-0 right-0 -z-10">
                          <svg width="175" height="104" viewBox="0 0 175 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.1" x="175.011" y="108.611" width="101.246" height="148.179" transform="rotate(137.136 175.011 108.611)" fill="url(#paint0_linear_1416_216)" />
                            <defs>
                              <linearGradient id="paint0_linear_1416_216" x1="225.634" y1="108.611" x2="225.634" y2="256.79" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Team />
        {/* janji kami pake  */}
        <SectionHowItWork />
      </main>
    </>
  );
}
