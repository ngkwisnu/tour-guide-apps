import React, { useState, useEffect } from 'react';
import { Award, Star, BadgePercent, ArrowRight } from 'lucide-react';
import { Button, Link, Input, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ListingImageGallery from '../component/ImageGallery';
import LikeSaveBtns from '../component/LikeSavedButtons';
import StartRating from '../component/StarRating';
import CommentListing from '../component/CommentListing';




const PackageDetail2 = ({}) => {
  const { id } = useParams();

  const [packageDetail, setPackageDetail] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://18.141.9.175:5000/wisata/${id}`); // Ganti dengan URL API yang sesuai
      const result = await response.json();
      if (Array.isArray(result.data) && result.data.length > 0) {
        setPackageDetail(result.data[0]); // Ambil elemen pertama dari array
      }
      // setPackageDetail(data);
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://18.141.9.175:5000/ulasan');
        const fetchedDatas = await response.json();
        const { data } = fetchedDatas;
        console.log(data);
        setDatas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    console.log('Packages state:', packageDetail);
  }, [packageDetail]);

  if (!packageDetail) {
    return <p>Loading...</p>;
  }

  
const PHOTOS = [
  packageDetail.gambar1,
  packageDetail.gambar2,
  packageDetail.gambar3,
  packageDetail.gambar4,
  packageDetail.gambar1,
];

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap border rounded-md shadow-md p-6 !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
          <Button>Wooden hous</Button>
          <LikeSaveBtns />
        </div>

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{packageDetail.nama}</h2>

        {/* 3 */}
        <div className="flex items-center space-x-4">
          <StartRating />
          <span>·</span>
          <span>
            <i className="las la-map-marker-alt"></i>
            <span className="ml-1">{packageDetail.lokasi}</span>
          </span>
        </div>

        {/* 4 */}
        <div className="flex items-center">
          {/* <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" /> */}
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Hosted by <span className="text-neutral-900 dark:text-neutral-200 font-medium">Kevin Francis</span>
          </span>
        </div>

        {/* 5 */}
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

        {/* 6 */}
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              6 <span className="hidden sm:inline-block">guests</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              6 <span className="hidden sm:inline-block">beds</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              3 <span className="hidden sm:inline-block">baths</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              2 <span className="hidden sm:inline-block">bedrooms</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap border rounded-md shadow-md p-6">
        <h2 className="text-2xl font-semibold">Stay information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">{packageDetail.deskripsi}</div>
      </div>
    );
  };

  const renderSection5 = () => {
    return (
      <div className="listingSection__wrap border rounded-md shadow-md p-6">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Host Information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* host */}
        <div className="flex items-center space-x-4">
          {/* <Avatar hasChecked hasCheckedClass="w-4 h-4 -top-0.5 right-0.5" sizeClass="h-14 w-14" radius="rounded-full" /> */}
          <div>
            <a className="block text-xl font-medium" href="##">
              Kevin Francis
            </a>
            <div className="mt-1.5 flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <StartRating />
              <span className="mx-2">·</span>
              <span> 12 places</span>
            </div>
          </div>
        </div>

        {/* desc */}
        <span className="block text-neutral-6000 dark:text-neutral-300">
          Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities...
        </span>

        {/* info */}
        <div className="block text-neutral-500 dark:text-neutral-400 space-y-2.5">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Joined in March 2016</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span>Response rate - 100%</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span>Fast response - within a few hours</span>
          </div>
        </div>

        {/* == */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <Button href="/author">See host profile</Button>
        </div>
      </div>
    );
  };

  const renderSection6 = () => {
    return (
      <div className="listingSection__wrap border rounded-md shadow-md p-6">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* Content */}
        <div className="space-y-5">
          {/* <FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" /> */}
          <div className="relative">
            <Input fontClass="" sizeClass="h-16 px-4 py-3" rounded="rounded-3xl" placeholder="Share your thoughts ..." />
            <Button className="absolute right-2 top-1/2 transform rounded-full -translate-y-1/2" size=" w-12 h-12 ">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          {Array.from({ length: datas }).map((_, i) => (
            <CommentListing className="py-8" />
          ))}
          <div className="pt-8">
            <Button>View more 20 reviews</Button>
          </div>
        </div>
      </div>
    );
  };

  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap border rounded-md shadow-md p-6">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Location</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">San Diego, CA, United States of America (SAN-San Diego Intl.)</span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* MAP */}
        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
          <div className="rounded-xl overflow-hidden z-0">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/place/Tanah+Lot/@-8.6212118,115.0846145,17z/data=!4m5!3m4!1s0x2dd237824f71deab:0xcaabe270f7e34d69!8m2!3d-8.621213!4d115.086807"
              // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=Eiffel+Tower,Paris+France"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap border mb-6 rounded-md shadow-md p-6">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Things to know</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Cancellation policy</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Refund 50% of the booking value when customers cancel the room within 48 hours after successful booking and 14 days before the check-in time. <br />
            Then, cancel the room 14 days before the check-in time, get a 50% refund of the total amount paid (minus the service fee).
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Check-in time</h4>
          <div className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md text-sm sm:text-base">
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Check-in</span>
              <span>08:00 am - 12:00 am</span>
            </div>
            <div className="flex space-x-10 justify-between p-3">
              <span>Check-out</span>
              <span>02:00 pm - 04:00 pm</span>
            </div>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Special Note</h4>
          <div className="prose sm:prose">
            <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
              <li>Ban and I will work together to keep the landscape and environment green and clean by not littering, not using stimulants and respecting people around.</li>
              <li>Do not sing karaoke past 11:30</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap border rounded-md p-6 shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
            $119
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">/night</span>
          </span>
          <StartRating />
        </div>

        {/* FORM */}
        <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          {/* <StayDatesRangeInput className="flex-1 z-[11]" /> */}
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* <GuestsInput className="flex-1" /> */}
        </form>

        {/* SUM */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>$119 x 3 night</span>
            <span>$357</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Service charge</span>
            <span>$0</span>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$199</span>
          </div>
        </div>

        {/* SUBMIT */}
        <Button href={'/pembayaran'}>Reserve</Button>
      </div>
    );
  };

  return (
    <>
      <div className="nc-ListingStayDetailPage">
        <header className="rounded-md sm:rounded-xl px-4">
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
            <div className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer" >
              <Image fill className="object-cover rounded-md sm:rounded-xl w-[1000px] h-[500px]"  src={PHOTOS[0]} alt=""  />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
              <div key={index} className={`relative rounded-md sm:rounded-xl overflow-hidden ${index >= 3 ? 'hidden sm:block' : ''}`}>
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                  <Image fill className="object-cover rounded-md sm:rounded-xl w-[1000px] h-[250px]" src={item || ''} alt=""  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"  />
              </div>
            ))}
          </div>
        </header>
        <main className=" relative z-10 mt-10 flex flex-col lg:flex-row px-4">
          {/* CONTENT */}
          <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
            {renderSection1()}
            {renderSection2()}
            {/* {renderSection3()} */}
            {/* {renderSection4()} */}
            {/* <SectionDateRange /> */}
            {renderSection5()}
            {renderSection6()}
            {renderSection7()}
            {renderSection8()}
          </div>

          {/* SIDEBAR */}
          <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
            <div className="sticky top-28">{renderSidebar()}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PackageDetail2;
