import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// requires a loader
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [packages, setpackages] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(`http://18.141.9.175:5000/wisata/${id}}`); // Ganti dengan URL API yang sesuai
      const result = await response.json();
      if (Array.isArray(result.data) && result.data.length > 0) {
        setpackages(result.data[0]); // Ambil elemen pertama dari array
      }
      // setpackages(data);
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    console.log('Packages state:', packages);
  }, [packages]);

  if (!packages) {
    return <p>Loading...</p>;
  }
  const PHOTOS = [
    { id: 1, src: packages.gambar1, alt: 'Description for image 1' },
    { id: 2, src: packages.gambar2, alt: 'Description for image 2' },
    { id: 3, src: packages.gambar3, alt: 'Description for image 3' },
    { id: 4, src: packages.gambar4, alt: 'Description for image 4' },
    { id: 5, src: packages.gambar1, alt: 'Description for image 5' },
  ];
  // const PHOTOS = [packages.gambar1, packages.gambar2, packages.gambar3, packages.gambar4, packages.gambar1];
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel infiniteLoop={true} showIndicators={false} showStatus={false} thumbWidth={60} className="productCarousel">
        {PHOTOS?.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
