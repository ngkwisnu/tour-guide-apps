import ImagePreview from '../ImagePreview';
import { Award, Star, BadgePercent } from 'lucide-react';
import { Button, Link } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

export default function PackageLayout() {
  return (
    <>
      <main className=" mb-16 ">
        <ImagePreview
          src="https://images.unsplash.com/photo-1585060085275-6035d9d50f96?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-[20rem] w-full object-cover rounded-none"
          alt="Example Image"
        />
        <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div className="mt-8 grid gap-2">
            <h1 className="text-2xl font-bold md:text-4xl">Deskripsi</h1>
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
                Rp 320.000 <span className="font-regular text-base italic">/orang</span>{' '}
              </h1>
              <p className="max-w-[280px] text-sm">Download aplikasi dan dapatkan harga spesial Rp 256.000!!</p>
            </div>
          </div>

          {/* deskrips */}
          <div className="mt-4 grid gap-8 lg:grid-cols-[auto,1fr]">
            <div id="mdx-article" className="prose max-w-4xl dark:prose-invert">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat
              consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat
              vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
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
