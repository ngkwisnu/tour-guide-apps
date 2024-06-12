import React, { useState, useEffect } from "react";
import ImagePreview from "../component/ImagePreview";
import { Award, Star, BadgePercent, ArrowRight, Heading3 } from "lucide-react";
import {
  Button,
  Link,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ListingImageGallery from "../component/ImageGallery";
import CommentListing from "../component/CommentListing";

const PackageDetail = ({}) => {
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
      console.error("Error fetching package details:", error);
    }
  };

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://18.141.9.175:5000/ulasan");
        const fetchedDatas = await response.json();
        const { data } = fetchedDatas;
        console.log(data);
        setDatas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    console.log("Packages state:", packageDetail);
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

  const renderSection6 = () => {
    const adaUlasan = datas.filter((d) => d.id_wisata == id);
    return (
      <div className="listingSection__wrap border rounded-md shadow-md p-6">
        {/* HEADING */}

        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* Content */}
        <div className="space-y-5">
          {/* <FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" /> */}
          <div className="relative w-full">
            <InputGroup size="md">
              <Input pr="4.5rem" placeholder="Share your thought" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" bg={"#4f46e5"} size="sm">
                  {"Send"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
        </div>

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          {adaUlasan.length > 0 ? (
            adaUlasan.map((d, i) => {
              console.log(d);
              if (d != null) {
                console.log("haha", d);
                return <CommentListing className="py-8" />;
              }
            })
          ) : (
            <h3 className="my-10 text-center text-gray-700">
              <i>Belum ada ulasan!</i>
            </h3>
          )}
          {/* <div className="pt-8">
            <Button>View more 20 reviews</Button>
          </div> */}
        </div>
      </div>
    );
  };
  return (
    <>
      <main className=" mb-16 ">
        {/* <ListingImageGallery /> */}
        <header className="rounded-md sm:rounded-xl px-4">
          <Image
            fill
            className="object-cover rounded-md sm:rounded-xl w-full h-[500px]"
            src={PHOTOS[0]}
            alt=""
          />
        </header>
        <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div className="mt-8 grid gap-2">
            <h1 className="text-2xl font-bold md:text-4xl">
              {packageDetail.nama}
            </h1>
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
                Rp {packageDetail.harga}{" "}
                <span className="font-regular text-base italic">/orang</span>{" "}
              </h1>
              <p className="max-w-[280px] text-sm">
                Download aplikasi dan dapatkan harga spesial Rp 256.000!!
              </p>
            </div>
          </div>

          {/* deskrips */}
          <div className="mt-4 grid gap-8 lg:grid-cols-[auto,1fr]">
            <div id="mdx-article" className="prose max-w-4xl dark:prose-invert">
              {packageDetail.deskripsi}
              {/* <span className="font-bold block text-red-500">{packageDetail.harga_termasuk}</span> */}
            </div>
          </div>
          <h1 className="text-2xl font-bold md:text-4xl my-5">Galeri</h1>
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
            <div className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer">
              <Image
                fill
                className="object-cover rounded-md sm:rounded-xl w-[1000px] h-[500px]"
                src={PHOTOS[0]}
                alt=""
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? "hidden sm:block" : ""
                }`}
              >
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                  <Image
                    fill
                    className="object-cover rounded-md sm:rounded-xl w-[1000px] h-[250px]"
                    src={item || ""}
                    alt=""
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
            ))}
          </div>
          <h4 className="text-2xl font-bold md:text-xl mt-5">
            Informasi Tour Guidek
          </h4>
          <div id="mdx-article" className="prose max-w-4xl dark:prose-invert">
            {packageDetail.informasi_tourguide}
            {/* <span className="font-bold block text-red-500">{packageDetail.harga_termasuk}</span> */}
          </div>
          <h4 className="text-2xl font-bold md:text-xl mt-5">Harge Termasuk</h4>
          <ul className="list-disc px-8 py-2">
            {packageDetail.harga_termasuk}
          </ul>

          <div>
            <h1 className="text-2xl font-bold md:text-4xl mt-5 mb-5">
              Rating & Reviews
            </h1>
            {renderSection6()}
          </div>
        </article>
        <div className="w-full text-center mt-8">
          <Button colorScheme="blue">
            <Link
              href={`/wisata/${id}/payment`}
              _hover={{ textDecoration: "none" }}
            >
              Pesan sekarang
            </Link>{" "}
          </Button>
        </div>
      </main>
    </>
  );
};

export default PackageDetail;
