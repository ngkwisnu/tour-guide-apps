import React, { useRef, useEffect } from 'react';
import { Image } from '@chakra-ui/react';

const PHOTOS = [
  'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // 'https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // 'https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

export const DEMO_IMAGE = [...PHOTOS].map((item, index) => {
  return {
    id: index,
    url: item,
  };
});

export const getNewParam = ({ paramName = 'photoId', value }) => {
  let params = new URLSearchParams(document.location.search);
  params.set(paramName, String(value));
  return params.toString();
};

const ImageGallery = ({ images = DEMO_IMAGE, onClose, isShowModal }) => {
  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
        {images.map(({ id, url }) => (
          <div key={id} className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight focus:outline-none">
            <Image
              alt="chisfis listing gallery "
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 focus:outline-none"
              style={{
                transform: 'translate3d(0, 0, 0)',
              }}
              src={url}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 350px"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
