//coba buat pembayatan pake EMBED dlu, klo dh berhasil baru pake SNAP

import React, { useState, useEffect } from 'react';
import Header from '../component/header';
import { Button, Link } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import Payment from '../assets/images/payment.png';
import { getTodayDate } from '../utils/todayDate';

const Pembayaran = () => {
  const [showNav, setShowNav] = useState(false);
  const { id } = useParams();
  const history = useNavigate();
  const todayDate = getTodayDate();

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
  const handleBack = () => {
    history(`/wisata/${id}`);
  };
  return (
    <>
      <div className="lg:block hidden">
        <main>
          <div className="flex justify-center items-center mx-20 gap-40 my-10">
            <div className="w-1/4 flex flex-col gap-2 justify-between h-full">
              <Button onClick={handleBack} className='flex'>
                <i class="fa-solid fa-arrow-left mr-10"></i>Kembali
              </Button>
              <img src={Payment} alt="" />
            </div>
            <div className="w-2/5 flex flex-col gap-3 text-slate-700">
              <h1 className="text-4xl font-bold">Detail Pembayaran</h1>
              <p className="font-bold mt-5">Ringkasan Pemesanan</p>
              <div className="flex justify-between">
                <p>Paket</p>
                <p className="font-bold">Nusa Penida</p>
              </div>
              <div className="flex justify-between">
                <p>Jumlah Orang</p>
                <p className="font-bold">1</p>
              </div>
              <div className="flex justify-between">
                <p>Tanggal Pemesanan</p>
                <p className="font-bold">{todayDate}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Subtotal Pesanan</p>
                <p className="font-bold">{packages.harga}</p>
              </div>
              <div className="flex justify-between">
                <p>Biaya Layanan</p>
                <p className="font-bold">Rp 1.000</p>
              </div>
              <div className="flex justify-between">
                <p>Diskon</p>
                <p className="font-bold">-</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p className="font-bold">Rp 321.000</p>
              </div>
              <div>
                <div className="flex flex-col justify-between gap-5 mt-2 w-full">
                  <p className="font-bold">Metode Pembayaran</p>
                  <div className="flex gap-4 justify-start items-center">
                    <svg width="65" height="20" viewBox="0 0 65 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.49273 14.9215C9.49273 14.1642 9.50147 12.1401 9.48163 11.8907C9.49892 8.87874 7.17148 6.75406 5.70111 6.9197C4.68366 7.00277 3.83078 7.39314 3.37312 8.51612C2.9486 9.5627 3.32816 10.9548 4.739 11.2814C6.24742 11.6322 7.12852 11.9241 7.76604 12.3359C8.54719 12.84 9.18489 13.8032 9.20182 14.9227"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.86239 14.9229C8.86731 13.9522 8.2915 13.0938 7.53893 12.6326C6.87137 12.2249 5.97516 11.9572 4.52937 11.612C4.08245 11.5044 3.61496 11.2655 3.47023 10.9609C3.08739 11.3239 3.01785 12.1399 3.08521 12.617C3.16349 13.1687 3.84888 14.0782 4.8809 14.1139C5.51113 14.1377 6.30794 13.9863 6.69005 13.9099C7.34924 13.7759 8.39217 14.1644 8.55819 14.9217"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0266 2.22559C8.27658 2.22559 6.76524 3.31139 6.77052 5.19027C6.77598 6.77025 8.12639 7.61608 8.60844 8.22022C9.33662 9.13063 9.73075 10.2082 9.77153 11.857C9.80357 13.1693 9.80193 14.4651 9.80903 14.9243H10.1951C10.1886 14.4439 10.1711 13.0682 10.191 11.8165C10.2172 10.1671 10.6255 9.13063 11.354 8.22022C11.8403 7.61608 13.1894 6.77025 13.1923 5.19027C13.1991 3.31139 11.6883 2.22559 9.9401 2.22559"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4706 14.9215C10.4706 14.1642 10.4615 12.1401 10.481 11.8907C10.4639 8.87874 12.7899 6.75406 14.2615 6.9197C15.279 7.00277 16.1308 7.39314 16.5899 8.51612C17.0139 9.5627 16.6323 10.9548 15.2233 11.2814C13.7138 11.6322 12.8339 11.9241 12.1948 12.3359C11.4145 12.84 10.8214 13.8032 10.8032 14.9227"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.1004 14.9229C11.0949 13.9522 11.6705 13.0938 12.4209 12.6326C13.0914 12.2249 13.9885 11.9572 15.433 11.612C15.8809 11.5044 16.3478 11.2655 16.49 10.9609C16.8747 11.3239 16.9442 12.1399 16.8767 12.617C16.7969 13.1687 16.1132 14.0782 15.083 14.1139C14.4531 14.1377 13.6519 13.9863 13.2714 13.9099C12.6148 13.7759 11.569 14.1644 11.4022 14.9217"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.6402 18.0563L11.4165 16.5189L11.957 16.4419C12.0884 16.4251 12.2486 16.4467 12.3127 16.5241C12.3835 16.6051 12.4052 16.6721 12.4188 16.7783C12.4394 16.9098 12.399 17.0616 12.2417 17.1373V17.1419C12.4172 17.1419 12.5233 17.2606 12.5543 17.461C12.5587 17.5035 12.5721 17.6056 12.5587 17.6909C12.523 17.8939 12.3944 17.9593 12.1771 17.9879L11.6402 18.0563ZM11.9877 17.7802C12.0518 17.7715 12.1168 17.7682 12.1676 17.7377C12.2455 17.6899 12.2384 17.5879 12.2275 17.5118C12.2005 17.3451 12.1543 17.2816 11.9662 17.3078L11.8479 17.3249L11.9229 17.7886L11.9877 17.7802ZM11.8755 17.0708C11.9471 17.0601 12.0439 17.0518 12.0844 16.9879C12.1056 16.9453 12.1326 16.9114 12.1148 16.8165C12.0927 16.7041 12.0532 16.6342 11.9012 16.6613L11.7598 16.6827L11.8157 17.0767L11.8755 17.0708Z"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.982 17.1327C13.9862 17.1613 13.9911 17.1931 13.9929 17.2217C14.0366 17.502 13.982 17.7342 13.647 17.7981C13.1517 17.8877 13.0569 17.5984 12.9698 17.1931L12.9234 16.9737C12.8552 16.5861 12.8258 16.2925 13.3086 16.2019C13.5808 16.1553 13.7606 16.2572 13.8355 16.5121C13.8471 16.5501 13.8617 16.5876 13.8671 16.626L13.571 16.6835C13.5367 16.5876 13.4914 16.4165 13.3581 16.4309C13.1189 16.4581 13.1979 16.738 13.2225 16.8552L13.3115 17.276C13.3383 17.4033 13.3915 17.6066 13.5984 17.5674C13.7665 17.5357 13.6931 17.2894 13.6782 17.1883"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4575 17.5987L14.3552 16.0078L14.753 15.8936L15.5873 17.2772L15.274 17.3654L15.0763 17.0138L14.7284 17.1121L14.7734 17.5119L14.4575 17.5987ZM14.7002 16.8553L14.9516 16.7868L14.6178 16.1431L14.7002 16.8553Z"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.62899 16.3945C4.75351 16.0195 4.86492 15.7433 5.34024 15.8659C5.59455 15.9329 5.7522 16.0382 5.74474 16.3162C5.74347 16.3781 5.7218 16.4413 5.7076 16.5022L5.41178 16.4255C5.45056 16.2719 5.47513 16.1501 5.27415 16.0918C5.04187 16.0319 4.98525 16.297 4.95321 16.4115L4.83288 16.8284C4.79465 16.9522 4.74877 17.1569 4.95321 17.2098C5.12215 17.2525 5.22446 17.0966 5.28562 16.8688L5.07882 16.8171L5.15036 16.5759L5.63697 16.723L5.40595 17.5269L5.18204 17.4697L5.23247 17.2998H5.22609C5.12288 17.4389 4.99726 17.4534 4.88713 17.4334C4.40052 17.3097 4.45131 17.0105 4.56746 16.6107"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.43857 17.0719L6.29202 17.7259L5.96216 17.6589L6.31369 16.1318L6.87602 16.2512C7.20516 16.3182 7.30455 16.4559 7.25795 16.7399C7.23137 16.9028 7.14599 17.0782 6.93755 17.064L6.93537 17.0614C7.11159 17.1193 7.12651 17.2031 7.09575 17.3475C7.08246 17.4091 6.99089 17.7822 7.05406 17.8425L7.05625 17.8884L6.71491 17.8045C6.70071 17.7012 6.74914 17.5152 6.76825 17.4121C6.78737 17.3209 6.81813 17.1925 6.71983 17.1443C6.643 17.1056 6.61424 17.1075 6.52722 17.0888L6.43857 17.0719ZM6.49653 16.8349L6.71863 16.8912C6.85352 16.9097 6.92852 16.8439 6.9551 16.6905C6.97913 16.5498 6.948 16.495 6.82694 16.4678L6.58883 16.4222L6.49653 16.8349Z"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.55427 16.4737L8.88049 16.5093L8.73996 17.5829C8.67169 17.9233 8.53188 18.072 8.13393 18.0255C7.72906 17.9772 7.63294 17.8039 7.65734 17.4608L7.79897 16.3882L8.12774 16.4235L7.98666 17.4721C7.97155 17.586 7.94369 17.7547 8.15887 17.7753C8.34983 17.789 8.39316 17.6698 8.41482 17.5218"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.24121 18.0839L9.33951 16.5488L9.96611 16.5744C10.2625 16.5882 10.3398 16.8157 10.3307 17.0329C10.322 17.165 10.2783 17.3124 10.156 17.3924C10.0557 17.4604 9.92661 17.4765 9.80719 17.4711L9.60293 17.4604L9.56216 18.1038L9.24121 18.0839ZM9.61133 17.2266L9.77735 17.2354C9.91225 17.24 10.0016 17.1898 10.0133 17.0035C10.02 16.8246 9.94793 16.7941 9.77317 16.7869L9.64173 16.7827L9.61133 17.2266Z"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M53.4473 3.70927L50.9562 7.96377C50.016 7.24521 48.868 6.71661 47.4031 6.71661C43.9364 6.71661 42.5281 9.1479 42.5281 10.8606C42.5281 12.1321 43.4129 14.0077 46.4974 14.0077C47.7923 14.0077 49.6328 13.1604 50.1625 12.7746L47.6989 17.7105C46.5245 17.931 46.1386 18.0676 45.1447 18.0966C39.6236 18.2516 37.3928 15.0603 37.3943 11.7996C37.3981 7.48878 41.4712 2.24628 48.2238 2.24628C48.6374 2.24628 49.1434 2.38109 49.5762 2.53028L50.0136 2.00391"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M63.7251 2.13818L64.4306 17.6007H59.1808L59.1779 14.949H55.598L54.4199 17.6007H48.7263L54.6788 6.55918L53.3366 6.55096L55.8867 2.13818H63.7251ZM59.1433 6.86777L57.1195 11.3653H59.2045L59.1433 6.86777Z"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M34.0793 2.13695C36.6791 2.15065 38.1482 3.47849 38.1482 5.39643C38.1482 7.16482 36.5988 8.7299 34.8979 9.53925C36.649 10.1451 36.8005 11.6319 36.8005 12.6836C36.8005 15.225 34.0906 17.5995 30.5678 17.5995H22.885L25.8818 6.71176L24.6508 6.70508L27.1672 2.13695C27.1672 2.13695 31.9652 2.12325 34.0793 2.13695ZM31.529 8.40712C32.0667 8.40712 33.0163 8.27899 33.2537 7.29973C33.5138 6.23653 32.6227 6.20792 32.1953 6.20792L30.6679 6.20176L30.1353 8.40712H31.529ZM29.369 11.1382L28.6657 13.6795H30.4643C31.1717 13.6795 32.136 13.3489 32.3723 12.5219C32.6057 11.6927 31.9316 11.1382 31.2267 11.1382H29.369Z"
                        fill="#0060AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0962 19.5C7.43597 19.5 4.70239 18.8835 1.97227 17.6643L1.90528 17.6333L1.87324 17.569C0.648079 15.1357 0 12.4744 0 9.87042C0 7.27024 0.6215 4.72264 1.84739 2.29255L1.88125 2.22797L1.94951 2.19577C4.47502 1.07005 7.19167 0.5 10.027 0.5C12.6679 0.5 15.4887 1.13463 18.1826 2.3388L18.2516 2.36775L18.2836 2.43352C19.5321 4.91175 20.1906 7.57256 20.1906 10.1335C20.1906 12.6842 19.5583 15.2342 18.3082 17.7109L18.2754 17.7758L18.2059 17.8059C15.7188 18.9137 12.9144 19.5 10.0962 19.5ZM2.22465 17.3306C4.87667 18.5047 7.52196 19.0973 10.0959 19.0973C12.8251 19.0973 15.5392 18.536 17.9555 17.472C19.1557 15.072 19.7641 12.602 19.7641 10.1336C19.7641 7.65482 19.1291 5.07673 17.928 2.67131C15.3136 1.51493 12.5833 0.901709 10.0267 0.901709C7.28184 0.901709 4.65075 1.44949 2.20171 2.53033C1.02607 4.88557 0.427686 7.35369 0.427686 9.87045C0.427686 12.3917 1.04937 14.971 2.22465 17.3306Z"
                        fill="#0060AF"
                      />
                    </svg>

                    <p className="ml-2.5 mr-1.5">Transfer Bank BCA</p>
                    <input className="ml-4" type="radio" />
                  </div>
                  <div className="flex gap-4 justify-start items-center">
                    <svg width="74" height="24" viewBox="0 0 74 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.0780027 16.1685C0.0780027 15.0631 0.0585021 14.1354 0 13.3083H2.02963L2.12479 14.7293H2.18174C2.64176 13.9784 3.48302 13.0903 5.05224 13.0903C6.27707 13.0903 7.23378 13.8023 7.63491 14.8672H7.6743C8.00016 14.3346 8.38159 13.9404 8.82133 13.6631C9.33849 13.2888 9.93189 13.0903 10.6973 13.0903C12.2468 13.0903 13.8149 14.1752 13.8149 17.2533V22.9148H11.5191V17.609C11.5191 16.0112 10.9841 15.0631 9.85584 15.0631C9.05085 15.0631 8.45706 15.656 8.20998 16.3468C8.15187 16.5828 8.09454 16.879 8.09454 17.1532V22.9148H5.79794V17.3517C5.79794 16.0112 5.28215 15.0631 4.19128 15.0631C3.31102 15.0631 2.71859 15.7744 2.50759 16.4437C2.41126 16.6819 2.37265 16.9574 2.37265 17.233V22.9148H0.0780027V16.1685Z"
                        fill="#003D79"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.7588 20.6079C22.7588 21.4754 22.797 22.3223 22.8928 22.9158H20.7682L20.6157 21.8508H20.5575C19.9838 22.6011 19.008 23.1329 17.8027 23.1329C15.9271 23.1329 14.8752 21.7334 14.8752 20.2727C14.8752 17.8454 16.9601 16.6234 20.4045 16.6429V16.4845C20.4045 15.853 20.1554 14.8081 18.5102 14.8081C17.5913 14.8081 16.6342 15.1043 16.0032 15.5178L15.5433 13.941C16.2335 13.5061 17.44 13.0913 18.9121 13.0913C21.8982 13.0913 22.7588 15.0455 22.7588 17.1357V20.6079ZM20.4618 18.2214C18.7974 18.1816 17.2097 18.5564 17.2097 20.0164C17.2097 20.9624 17.8027 21.3972 18.5492 21.3972C19.4856 21.3972 20.1755 20.7657 20.3853 20.0755C20.4423 19.898 20.4618 19.6999 20.4618 19.5427V18.2214Z"
                        fill="#003D79"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.3864 16.1685C24.3864 15.0631 24.3653 14.1354 24.3096 13.3083H26.3743L26.4897 14.7482H26.5463C26.9486 13.9995 27.9626 13.0903 29.5122 13.0903C31.1391 13.0903 32.8228 14.1752 32.8228 17.2139V22.9148H30.4696V17.4908C30.4696 16.1089 29.9722 15.0631 28.69 15.0631C27.7524 15.0631 27.1021 15.7537 26.8527 16.4839C26.7774 16.7014 26.7575 16.998 26.7575 17.2722V22.9148H24.3864V16.1685Z"
                        fill="#003D79"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M43.0264 9.44775V20.2111C43.0264 21.1973 43.064 22.2645 43.1024 22.9147H40.9975L40.9033 21.3959H40.8643C40.3091 22.4617 39.1785 23.1318 37.8214 23.1318C35.6029 23.1318 33.8419 21.1792 33.8419 18.2201C33.8224 15.0043 35.7741 13.0902 38.0126 13.0902C39.2941 13.0902 40.2134 13.6433 40.6336 14.3541H40.6724V9.44775H43.0264ZM40.6724 17.3111C40.6724 17.1158 40.6527 16.878 40.6158 16.6814C40.405 15.7344 39.6584 14.9646 38.5868 14.9646C37.0753 14.9646 36.2333 16.3462 36.2333 18.1414C36.2333 19.8966 37.0753 21.1791 38.5677 21.1791C39.524 21.1791 40.3664 20.5086 40.5958 19.4633C40.6527 19.2454 40.6724 19.0089 40.6724 18.7516V17.3111Z"
                        fill="#003D79"
                      />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M44.6897 22.9145H47.0647V13.3086H44.6897V22.9145Z" fill="#003D79" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M48.7284 16.406C48.7284 15.1046 48.7085 14.1761 48.6514 13.309H50.6991L50.774 15.143H50.8534C51.3118 13.7819 52.4027 13.309 53.3973 13.309C53.6264 13.309 53.7602 13.2686 53.952 13.309V15.4401C53.7602 15.4007 53.5501 15.3613 53.2631 15.3613C52.1344 15.3613 51.3684 16.1102 51.1582 17.1945C51.1209 17.4117 51.0823 17.6692 51.0823 17.9467V22.9161H48.7284V16.406Z"
                        fill="#003D79"
                      />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M55.0422 22.9145H57.4137V13.3086H55.0422V22.9145Z" fill="#003D79" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M54.4815 1.69521C53.057 2.54566 49.697 4.53247 48.4427 5.27235C47.6783 5.67385 45.9078 5.84917 44.9064 4.45708C44.8885 4.43194 43.5746 2.73928 43.5209 2.67554C43.4833 2.63051 42.6338 1.33151 40.7411 1.29089C40.4615 1.28406 39.0711 1.27642 37.7144 2.07138C35.9112 3.13354 31.7174 5.60549 31.7174 5.60549C31.7162 5.60549 31.7162 5.6077 31.714 5.6077C29.9902 6.62463 28.647 7.41637 28.647 7.41637L30.2339 9.4259C30.9763 10.3763 32.6505 11.1115 34.1023 10.2522C34.1023 10.2522 39.4667 7.04945 39.4864 7.04021C41.8064 5.72833 43.5966 5.72833 44.7848 6.21649C45.8513 6.68112 46.7791 7.83879 46.7791 7.83879C46.7791 7.83879 47.9917 9.3881 48.2056 9.65912C48.8955 10.5347 50.0375 10.1907 50.0375 10.1907C50.0375 10.1907 50.4606 10.1412 51.0985 9.7508C51.0985 9.7508 56.2947 6.64453 56.298 6.64353C57.9479 5.6455 59.4612 5.45912 60.2346 5.53251C62.6569 5.7595 63.4095 7.50424 64.4598 8.72141C65.0784 9.43736 65.6365 9.84389 66.49 9.82338C67.0508 9.81112 67.6844 9.46048 67.7778 9.39715L74.0001 5.69496C74.0001 5.69496 73.3617 4.70357 72.0541 3.16109C70.8839 1.78488 69.6409 2.40754 68.6499 2.91359C68.2336 3.1259 66.725 4.16052 65.2305 4.8823C64.1655 5.3964 62.6359 5.24179 61.7976 4.17379C61.7474 4.10885 60.3912 2.41599 60.2486 2.20769C59.7012 1.50079 58.6332 0.867676 57.2644 0.867676C56.4321 0.867676 55.4877 1.1017 54.4815 1.69521Z"
                        fill="url(#paint0_linear_2024_6557)"
                      />
                      <defs>
                        <linearGradient id="paint0_linear_2024_6557" x1="28.647" y1="10.6328" x2="74.0001" y2="10.6328" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFCA06" />
                          <stop offset="0.330844" stop-color="#FBAA18" />
                          <stop offset="0.694742" stop-color="#FFC907" />
                          <stop offset="1" stop-color="#FAA619" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p>Transfer Bank Mandiri</p>
                    <input type="radio" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-10">
                <span className="bg-slate-200 text-sm px-5 py-1 rounded-t-md">Download aplikasi untuk dapat diskon Rp 20.000 dari transaksi ini!</span>
                <button className="w-full bg-blue-300 text-lg font-bold text-white h-12 rounded-md">Bayar</button>
              </div>
            </div>
          </div>
          <div className="w-full text-center my-8">
            <Button colorScheme="blue">
              <Link _hover={{ textDecoration: 'none' }} href="/profile/invoice">
                Bayar
              </Link>{' '}
            </Button>
          </div>
        </main>
      </div>
      <div className="lg:hidden flex flex-col justify-center item-center">
        <div className={`flex justify-between items-center px-10 py-5 ${!showNav && `mb-5`}`}>
          <img src="assets/img/logo.png" className="w-40" alt="" />
          <i class="fa-solid fa-bars text-2xl" onClick={() => setShowNav(!showNav)}></i>
        </div>
        {showNav && (
          <div className={`${showNav && `mb-10`}`}>
            <ul className="bg-blue-300 flex flex-col justify-center items-center gap-3 py-3 text-white">
              <li>Home</li>
              <li>App</li>
              <li>Wisata</li>
              <li>Notifikasi</li>
            </ul>
          </div>
        )}
        <div className="w-4/5 flex flex-col gap-3 mx-auto text-slate-700">
          {Array.isArray(packages.data) && packages.data.length > 0 ? (
            packages.data.map((pkg) => (
              <>
                <h1 className="text-4xl font-bold mb-5">Detail Pembayaran</h1>
                <p className="font-bold mt-5">Ringkasan Pemesanan</p>
                <div className="flex justify-between">
                  <p>Paket</p>
                  <p className="font-bold">Nusa Penida</p>
                </div>
                <div className="flex justify-between">
                  <p>Jumlah Orang</p>
                  <p className="font-bold">1</p>
                </div>
                <div className="flex justify-between">
                  <p>Tanggal Pemesanan</p>
                  <p className="font-bold">23 Juni 2025</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Subtotal Pesanan</p>
                  <p className="font-bold">Rp {pkg.harga}</p>
                </div>
                <div className="flex justify-between">
                  <p>Biaya Layanan</p>
                  <p className="font-bold">Rp 1.000</p>
                </div>
                <div className="flex justify-between">
                  <p>Diskon</p>
                  <p className="font-bold">-</p>
                </div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <p className="font-bold">Rp 321.000</p>
                </div>
                <div>
                  <div className="flex flex-col justify-between gap-10 mt-2 w-full">
                    <p className="font-bold mt-5">Metode Pembayaran</p>
                    <div className="flex gap-10 justify-start items-center">
                      <img src="assets/img/logobca.png" alt="" />
                      <p className="ml-2.5 mr-1.5">Transfer Bank BCA</p>
                      <input className="ml-4" type="radio" />
                    </div>
                    <div className="flex gap-10 justify-start items-center">
                      <img src="assets/img/logomandiri.png" alt="" />
                      <p>Transfer Bank Mandiri</p>
                      <input type="radio" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                  <span className="bg-slate-200 text-sm px-5 py-1 rounded-t-md">Download aplikasi diskon Rp 20.000!</span>
                  <button className="w-full bg-blue-300 text-lg font-bold bg-black text-white h-12 rounded-md">Bayar</button>
                </div>
              </>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Pembayaran;
