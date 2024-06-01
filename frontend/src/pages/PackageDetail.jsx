import React, { useState, useEffect } from 'react';
import ImagePreview from '../component/ImagePreview';
import { Award, Star, BadgePercent } from 'lucide-react';
import { Button, Link } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

export default function PackageDetail() {
  const { id } = useParams();

  const [packageDetail, setPackageDetail] = useState(null);

  const getPackageDetail = async () => {
    try {
      const response = await fetch(`http://localhost:3000/wisata/${id}`); // Ganti dengan URL API yang sesuai
      const result = await response.json();
      if (Array.isArray(result.data) && result.data.length > 0) {
        setPackageDetail(result.data[0]); // Ambil elemen pertama dari array
      }
      // setPackageDetail(data);
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  useEffect(() => {
    getPackageDetail();
  }, [id]);

  useEffect(() => {
    console.log('Packages state:', packageDetail); 
  }, [packageDetail]);

  if (!packageDetail) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className=" mb-16 ">
        <ImagePreview
          src={packageDetail.gambar1}
          className="h-[20rem] w-full object-cover rounded-none"
          alt="Example Image"
        />
        <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div className="mt-8 grid gap-2">
            <h1 className="text-2xl font-bold md:text-4xl">{packageDetail.nama}</h1>
          </div>
          {/* harga dan info singkt */}
          <div className="my-6 flex justify-between">
            <div className="block text-[#6B7280]">
              <div className="flex gap-2 text-base">
                <BadgePercent />
                Sedang promo
              </div>
              <div className="flex gap-2">
                <Award />
                regular
              </div>
              <div className="flex gap-2">
                <Star />
                4.5
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-blue">
                Rp {packageDetail.harga} <span className="font-regular text-base italic">/orang</span>{' '}
              </h1>
              <p className="max-w-[280px] text-sm">Download aplikasi dan dapatkan harga spesial Rp 256.000!!</p>
            </div>
          </div>

          {/* deskrips */}
          <div className="mt-4 grid gap-8 lg:grid-cols-[auto,1fr]">
            <div id="mdx-article" className="prose max-w-4xl dark:prose-invert">
              {packageDetail.deskripsi}
              <span className="font-bold block text-red-500">{packageDetail.harga_termasuk}</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold md:text-4xl mt-5">Informasi Paket</h1>
          <ul className="list-disc px-8 py-2">
            <li>Low contrast between thick and thin strokes</li>
            <li>Diagonal stress in the strokes</li>
            <li>Slanted serifs on lower-case ascenders</li>
          </ul>
          <h4 className="text-2xl font-bold md:text-xl mt-5">Paket Termasuk</h4>
          <ul className="list-disc px-8 py-2">
            <li>Low contrast between thick and thin strokes</li>
            <li>Diagonal stress in the strokes</li>
            <li>Slanted serifs on lower-case ascenders</li>
          </ul>
          <h4 className="text-2xl font-bold md:text-xl mt-5">Paket tidak Termasuk</h4>
          <ul className="list-disc px-8 py-2">
            <li>Low contrast between thick and thin strokes</li>
            <li>Diagonal stress in the strokes</li>
            <li>Slanted serifs on lower-case ascenders</li>
          </ul>
          <h4 className="text-2xl font-bold md:text-xl mt-5">Pilihan Jenis Kendaraan</h4>
          <ul className="list-disc px-8 py-2">
            <li>Low contrast between thick and thin strokes</li>
            <li>Diagonal stress in the strokes</li>
            <li>Slanted serifs on lower-case ascenders</li>
          </ul>
          <div>
            <h1 className="text-2xl font-bold md:text-4xl mt-5">Rating & Reviews</h1>
          </div>
        </article>
        <div className="w-full text-center mt-8">
          <Button colorScheme="blue">
            <Link href="/pembayaran">Pesan sekarang</Link>{' '}
          </Button>
        </div>
      </main>
    </>
  );
}
