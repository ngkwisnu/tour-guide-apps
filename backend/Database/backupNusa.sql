/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 5.5.62-0ubuntu0.14.04.1 : Database - sql12714367
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `favorite` */

DROP TABLE IF EXISTS `favorite`;

CREATE TABLE `favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_wisata` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_wisata` (`id_wisata`),
  CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`id_wisata`) REFERENCES `wisata` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `favorite` */

insert  into `favorite`(`id`,`id_user`,`id_wisata`) values 
(1,8,19),
(2,8,14),
(3,8,4),
(4,3,4),
(5,3,5),
(7,6,8);

/*Table structure for table `keranjang` */

DROP TABLE IF EXISTS `keranjang`;

CREATE TABLE `keranjang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_wisata` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_wisata` (`id_wisata`),
  CONSTRAINT `keranjang_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  CONSTRAINT `keranjang_ibfk_2` FOREIGN KEY (`id_wisata`) REFERENCES `wisata` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `keranjang` */

insert  into `keranjang`(`id`,`id_user`,`id_wisata`) values 
(3,8,14),
(4,8,14);

/*Table structure for table `pesanan` */

DROP TABLE IF EXISTS `pesanan`;

CREATE TABLE `pesanan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total` int(11) DEFAULT NULL,
  `tanggal_pemesanan` date DEFAULT NULL,
  `tanggal_bayar` date DEFAULT NULL,
  `tanggal_keberangkatan` date DEFAULT NULL,
  `jumlah_orang` int(11) DEFAULT NULL,
  `kode_booking` varchar(10) DEFAULT NULL,
  `status` enum('menunggu_pembayaran','verifikasi','dalam_perjalanan','selesai') DEFAULT NULL,
  `metode_pembayaran` varchar(100) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_wisata` int(11) DEFAULT NULL,
  `file` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_wisata` (`id_wisata`),
  CONSTRAINT `pesanan_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  CONSTRAINT `pesanan_ibfk_3` FOREIGN KEY (`id_wisata`) REFERENCES `wisata` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `pesanan` */

insert  into `pesanan`(`id`,`total`,`tanggal_pemesanan`,`tanggal_bayar`,`tanggal_keberangkatan`,`jumlah_orang`,`kode_booking`,`status`,`metode_pembayaran`,`id_user`,`id_wisata`,`file`) values 
(1,250000,'0000-00-00','2024-06-11','2024-06-15',4,'KB01','selesai','BCA',1,2,'http://18.141.9.175:5000/api/files/null'),
(2,250000,'2024-06-10','2024-06-11','2024-06-15',4,'KB02','selesai','BCA',1,2,'https://go-f-one-id-production.s3.ap-southeast-1.amazonaws.com/public/61dfc9f6-efeb-43ed-8dcc-f16805');

/*Table structure for table `pusat_bantuan` */

DROP TABLE IF EXISTS `pusat_bantuan`;

CREATE TABLE `pusat_bantuan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(100) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `pusat_bantuan` */

insert  into `pusat_bantuan`(`id`,`judul`,`deskripsi`) values 
(1,'Apa itu Invoice?','Invoice adalah faktur yang akan didapatkan saat Anda sudah berhasil melakukan pembayaran dan upload bukti pembayaran'),
(2,'Bagaimana cara saya memesan tour guide?','Anda bisa melakukan pemesanan Tour Guide dengan menuju ke halaman Wisata/Paket -> Pesan Sekarang'),
(3,'Bagaimana mengubah akun saya?','Anda bisa melakukan perubahan akun dengan menuju halaman Profil -> Edit Data -> Simpan');

/*Table structure for table `ulasan` */

DROP TABLE IF EXISTS `ulasan`;

CREATE TABLE `ulasan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rating` int(11) NOT NULL,
  `ulasan` varchar(255) NOT NULL,
  `keunggulan` varchar(255) NOT NULL,
  `file` varchar(255) DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `id_wisata` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_wisata` (`id_wisata`),
  CONSTRAINT `ulasan_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  CONSTRAINT `ulasan_ibfk_3` FOREIGN KEY (`id_wisata`) REFERENCES `wisata` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `ulasan` */

insert  into `ulasan`(`id`,`rating`,`ulasan`,`keunggulan`,`file`,`id_user`,`id_wisata`,`created_at`,`updated_at`) values 
(1,4,'Tempat sejuk dan Indah','Akses Mudah','https://i.pinimg.com/236x/62/1a/aa/621aaa9bbb569413912d8e54fcca729b.jpg',1,2,'2024-06-10 00:43:05','2024-06-10 00:43:05'),
(2,5,'Sangat Bagus','ramah dan cepat','http://localhost:5000/api/files/null',2,1,'2024-06-19 09:20:47','2024-06-19 09:20:47');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` enum('admin','user') NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `telepon` varchar(20) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `token` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user` */

insert  into `user`(`id`,`email`,`username`,`password`,`role`,`nama`,`telepon`,`alamat`,`foto`,`created_at`,`updated_at`,`token`) values 
(1,'indahciptayani@gmail.com','indah','$2a$12$wArye/p4hM.cmMFzUkSE4e9JK7D9mGOGVbW6658lNXswi1gk2dGL2','user',NULL,'087987656789','Bali, Indonesia','https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?cs=srgb&dl=pexels-george-dolgikh-','2024-06-10 00:39:48','2024-06-10 00:39:48',NULL),
(2,'rizkiamaludin@gmail.com','Rizki 50','rizki12a','user','Rizki amaludin prasetyo','089765212214','Mojokerto','http://18.141.9.175:5000/api/files/1718544600095-image_profile.png','2024-06-16 13:30:00','2024-06-16 13:30:00',NULL),
(3,'wisnu@gmail.com','Wisnu','$2a$10$0x1VPk5B8YvWGUOhK4wO8Oo7Z29Ms9sDIlHcG7yWk9sSmt/zplCUm','user',NULL,NULL,NULL,NULL,'2024-06-11 08:57:29','2024-06-11 08:57:29',NULL),
(4,'kevinmama@gmail.com','Kevin','$2a$10$IbI2InB5OTGRAXWCkVqwN.15Tv99iuJRF/NHNQtcoGptXtvyuTqSC','user',NULL,NULL,NULL,NULL,'2024-06-11 12:35:08','2024-06-11 12:35:08',NULL),
(5,'yastrasw@gmail.com','kiram','$2a$10$X4F6DxOn0jiZvs594pNNQOooc0RUemPA2j6ks5RvzA2zEtvJ4S/DC','user',NULL,NULL,NULL,NULL,'2024-06-13 03:09:42','2024-06-13 03:09:42',NULL),
(6,'adminnusaguide2@gmail.com','kelvin','$2a$10$quGOJ2ghBZXxBGx/lFtf1eEuBm8w/zYA0esknUOfSilhp0GnGCLoO','user',NULL,NULL,NULL,NULL,'2024-06-14 06:31:30','2024-06-14 06:31:30',NULL),
(7,'rizkiam@gmail.com','iki','$2a$10$KJ6cTEj2qt7NkLvKHvMwE.tKrSqujeC6Qy73ma/iEqYmgn3.NmuVS','user','iki amaludin','0897652122141','Mojokertos','http://18.141.9.175:5000/api/files/1718544836292-gambarregister.png','2024-06-16 13:33:56','2024-06-16 13:33:56',NULL),
(8,'ngakanwisnu33@gmail.com','Wisnu Mahesa','$2a$10$RTGiAdFzF.Y0ek8C06eCB.UgBELhOdcvTiOu9Orp6D1zug4nSLBti','user','Ngakan Wisnu Mahesa Adnyana','085451236547','Bali','http://54.254.36.46:5000/api/files/null','2024-06-19 13:35:00','2024-06-19 13:35:00','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1haGVzYSIsImVtYWlsIjoiMjgubmdha2FubWFkZXdpc251bWFoZXNhYWRueWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRJRHY3QkVQWkcybC9xQzFJbVJBU09Pc3hFcEFIVkc2dWZRMlVIZDJjeFNCTU10SVZ3dU9rYSIsImlhdCI6MTcxODcyODUwMn0.tnogvk4iZbAXJwnSGhCRZrPRhzi76CBxFxAvsDn1Sq0'),
(9,' rroyhans870@gmail.com','Roy','$2a$10$T594ezmDwUX2GxbWmVRHoeMzESK8D6u2MOfUvot/biwwizlbyYgXa','user',NULL,NULL,NULL,NULL,'2024-06-16 13:50:55','2024-06-16 13:50:55',NULL),
(10,'royhan5123@gmail.com','Royhan5123','$2a$10$8KOu2mTy84jRyIU0lCki0.sa7DQWM0zIIW1DI8pkbUwTKBWoJBtmK','user',NULL,NULL,NULL,NULL,'2024-06-17 09:43:00','2024-06-17 09:43:00',NULL),
(11,'akunbaru@gmail.com','Akun Baru','$2a$10$7VxdU5oiSjyQUoSuxQXRp.8YxkdnWFSWi6wWHdWd1LtTX6czi8xla','user',NULL,NULL,NULL,NULL,'2024-06-17 10:13:16','2024-06-17 10:13:16',NULL),
(12,'akun@gmail.com','Akun','$2a$10$yTNITlOKRRfYaZna2q4GDurV7HHHrkX4n2sSwNBotTG/DtwLB6HVW','user',NULL,NULL,NULL,NULL,'2024-06-17 10:21:57','2024-06-17 10:21:57',NULL),
(13,'akun1@gmail.com','akun','$2a$10$iKKYETjt7X./nEYFeG1TceCqz6i7Ujvj9Nju0k1cf6Wy1Mr4qAjXW','user',NULL,NULL,NULL,NULL,'2024-06-17 10:25:02','2024-06-17 10:25:02',NULL),
(14,'cobadaftar@gmail.com','Coba','$2a$10$iQhO1jUgJKFUJmjU4dzZ.uBvz9T7XhitGSBTZP9mMEXECsXBt.hEq','user',NULL,NULL,NULL,NULL,'2024-06-17 10:25:16','2024-06-17 10:25:16',NULL),
(15,'nyoba@gmail.com','nyoba','$2a$10$7IVl/lw0MgSLs.z2xDa32OiKzJpCygHs.mzMcvUWqYdaq/dVpO/YS','user',NULL,NULL,NULL,NULL,'2024-06-17 12:57:36','2024-06-17 12:57:36',NULL),
(16,'fathinfayyadh5@gmail.com','Fatin ','$2a$10$zEbEFfwjCMT/avOnsobBXe8bMS494hZNkthPwdY8N7nY9DFGDy9V6','user',NULL,NULL,NULL,NULL,'2024-06-17 13:07:18','2024-06-17 13:07:18',NULL),
(17,'mas@gmail.com','Mas','$2a$10$ByrFqzQ.LQtHcxgHzRz8l.7lkUMSo779H8cDOHoS3G/Q3ILESipwK','user',NULL,NULL,NULL,NULL,'2024-06-17 13:26:32','2024-06-17 13:26:32',NULL),
(18,'123@gmail.com','123','$2a$10$hBsvFSspFS.6DEN8Jh6pk.KGPTjJMm3qYMEJFqTTH.zS.UMMwxgRi','user',NULL,NULL,NULL,NULL,'2024-06-18 05:05:38','2024-06-18 05:05:38',NULL),
(19,'royhan11@gmail.com	','Royhan','$2a$10$viDdCfzuccNXIhI5ItwTYuPxKlhV0Es6GDO.bZox3U3FM4W0J59BO','user',NULL,NULL,NULL,NULL,'2024-06-18 05:43:17','2024-06-18 05:43:17',NULL),
(20,'user1@gmail.com','nimas','$2a$10$Xe2MBMva9gI5QwPBSBsabeRyI3QGTg2ELACqFwOK.ZjCuVb/aeVAy','user',NULL,NULL,NULL,NULL,'2024-06-18 05:54:15','2024-06-18 05:54:15',NULL),
(21,'coba11@gmal.com','Coba','$2a$10$D2O3GJG75qNOzqCvtvJNrOTXGd8bvepPH04z8dfmIiHBVmVFKujN2','user',NULL,NULL,NULL,NULL,'2024-06-18 06:09:26','2024-06-18 06:09:26',NULL),
(22,'royroy@gmail.com','Royhan','$2a$10$piYISyI7j4gM6Om.2sIWwuZqWp0vl8/xlaT13qFqiGLotDchQUqSy','user',NULL,NULL,NULL,NULL,'2024-06-18 07:27:04','2024-06-18 07:27:04',NULL),
(23,'r@gmail.com','r','$2a$10$O6uWCK4SjojjIDL9ph8LWe1W3i.U3hRGlPCSxDnQp/5inw3OQhhca','user',NULL,NULL,NULL,NULL,'2024-06-18 07:27:38','2024-06-18 07:27:38',NULL),
(24,'abc@gmail.com','abc','$2a$10$KBWlJYp4Qur1R4RMskfWJumuvs41e4IoGcFtH4pLGf2KNEARzNYZ.','user',NULL,NULL,NULL,NULL,'2024-06-18 07:31:57','2024-06-18 07:31:57',NULL),
(25,'dsa@gmail.com','dsa','$2a$10$5Kbj.L8Bn59qP2UTrbHN5ehfZCb8WVRyHKP4Ngfma0ZtL/KC/Cf1a','user',NULL,NULL,NULL,NULL,'2024-06-18 07:38:58','2024-06-18 07:38:58',NULL),
(26,'coba2@gmail.com','coba2','$2a$10$Vvgw3X3Ea01AfyqYcZPG2.4qhsTGXxASycz5U/oI77PM0ApezRuMG','user',NULL,NULL,NULL,NULL,'2024-06-18 09:21:50','2024-06-18 09:21:50',NULL),
(27,'gg@gmail.com','gg','$2a$10$y3.rPoNFP2l61EL1qloDFOJpiEc0sU35AD.y8ojslshniaXhSEVnG','user',NULL,NULL,NULL,NULL,'2024-06-18 10:53:09','2024-06-18 10:53:09','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdnIiwiZW1haWwiOiJnZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCR5My5yUG9ORlAybDYxRUwxcWxvREZPSnBpRWMwc1UzNUFELnk4b2pzbHNobmlhWGhTRVZuRyIsImlhdCI6MTcxODk5MzI0Mn0.0gnTgNO8mcnvJloY_NGU9eueD-GUR9DYFZBXiEcdlsk'),
(28,'ad@gmail.com','ad','$2a$10$vBNhZuZjHtry40bGr9CWKuQpKJidfQo39pU4dVv9NBno.yvzjDR4O','user',NULL,NULL,NULL,NULL,'2024-06-18 10:55:03','2024-06-18 10:55:03',NULL),
(29,'abcs@gmail.com','abc','$2a$10$HiDh5HLQM4FpKHAvlA3C1OXLRNHmWXzYKLGGoQl31H42Oe8Tz19Ym','user',NULL,NULL,NULL,NULL,'2024-06-18 10:55:51','2024-06-18 10:55:51',NULL),
(30,'user2@gmail.com','nimass','$2a$10$qUr5b2SQEz048iPOZ6SWseU6qJegUxkR7v80le9iIy7QaQFWC/M66','user',NULL,NULL,NULL,NULL,'2024-06-18 23:21:28','2024-06-18 23:21:28','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pbWFzcyIsImVtYWlsIjoidXNlcjJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkcVVyNWIyU1FFejA0OGlQT1o2U1dzZVU2cUplZ1V4a1I3djgwbGU5aUl5N1FhUUZXQy9NNjYiLCJpYXQiOjE3MTg3NTk4NTN9.-LA_5BQUoFbn83o52fe_ZwGupHu6Xok-aWEc5NcHoxI'),
(31,'ninamaulidaa@gmail.com','nina','$2a$10$pWau7In5l82LK.gvuPGgfeK.1oAA08o4GS2qvuAPg7JOGFbAcmfOi','user',NULL,NULL,NULL,NULL,'2024-06-19 09:07:13','2024-06-19 09:07:13',NULL),
(32,'wisnumahesa@gmail.com','wisnu','$2a$10$c33l.Vk3loeeBzyXZDdsReiC9lzmI7dRASuikpEH6KVcHsFl6rCee','user',NULL,NULL,NULL,NULL,'2024-06-19 09:08:50','2024-06-19 09:08:50',NULL),
(33,'fikri@gmail.com','fikri','$2a$10$aueWuVttQh7O0SOrQGeRXOwkkW1ofAksjjt.gDruDGaDrJeN14hSi','user',NULL,NULL,NULL,NULL,'2024-06-19 09:18:03','2024-06-19 09:18:03','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZpa3JpIiwiZW1haWwiOiJmaWtyaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRhdWVXdVZ0dFFoN08wU09yUUdlUlhPd2trVzFvZkFrc2pqdC5nRHJ1REdhRHJKZU4xNGhTaSIsImlhdCI6MTcxOTAxODg0MH0.ZDQIdmQzjbJY5BxOltoR6qRV1vFmUm0zrx_LxK09OhU'),
(34,'12345678@gmail.com','123','$2a$10$OmFFM6ld7MEthf88L2k3leVxzxEo1C1BAx1hl7Hssni4IWqTcOEOi','user',NULL,NULL,NULL,NULL,'2024-06-19 13:28:46','2024-06-19 13:28:46',NULL),
(35,'123456782@gmail.com','HanzStoreID ','$2a$10$TOrDb8d3wwfV7PfbwHi9x.qzw32Vb5dH769BRyhAr2.3CQtw0E63O','user',NULL,NULL,NULL,NULL,'2024-06-19 13:30:21','2024-06-19 13:30:21',NULL),
(36,'Hanz@gmail.com','Hanz','12345Hanz','user','Hanz','081247741157','Bali','http://54.254.36.46:5000/api/files/1718804301203-diperpanjang.jpg','2024-06-19 13:38:23','2024-06-19 13:38:23',NULL),
(37,'yyyy@gmail.com','zul','$2a$10$rVtTtUIswsbrZ/VqyrDiXOyPuNcVoRqDWabuwMFng1.EEAqowPr.i','user',NULL,NULL,NULL,NULL,'2024-06-20 02:41:05','2024-06-20 02:41:05',NULL),
(38,'karim@gmail.com','karim','$2a$10$adx7VuTAR3KXzqjquGS4fudlVfk0Ydv8dh.fASc0LXAGqGz4Myg5i','user',NULL,NULL,NULL,NULL,'2024-06-20 02:41:28','2024-06-20 02:41:28','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthcmltIiwiZW1haWwiOiJrYXJpbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRhZHg3VnVUQVIzS1h6cWpxdUdTNGZ1ZGxWZmswWWR2OGRoLmZBU2MwTFhBR3FHejRNeWc1aSIsImlhdCI6MTcxODg5Mzk1OX0.cKa22cbID-TIcgR2BcFGYdE6S4WzcIkM9-nl76Ryl3g'),
(39,'kiram@gmail.com','kiram','$2a$10$v/cRLfHl9rDZJ8iaiWFBfO62RPxKu/SmaDGFWEmuzExh5ZURX1YZO','user',NULL,NULL,NULL,NULL,'2024-06-20 03:06:09','2024-06-20 03:06:09',NULL),
(40,'jackychan@gmail.com','Jacky','$2a$10$RyZt5gP5KVT47J7Ae.KBfeQPgGXf7yXc.L9t6NbRMMp6uWwOB0JhC','user',NULL,NULL,NULL,NULL,'2024-06-20 06:07:02','2024-06-20 06:07:02','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkphY2t5IiwiZW1haWwiOiJqYWNreWNoYW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkUnladDVnUDVLVlQ0N0o3QWUuS0JmZVFQZ0dYZjd5WGMuTDl0Nk5iUk1NcDZ1V3dPQjBKaEMiLCJpYXQiOjE3MTg4OTU2NTB9.uFKCV1jLSK00qyqJSo975clF_n0sJozlh2pDyjLIVag'),
(41,'wisnumhs@gmail.com','Kande','123654789','user','Wisnu Mahesa Adnyana','052145632589','-','http://54.254.36.46:5000/api/files/1718883573147-icon-profil.png','2024-06-20 19:39:33','2024-06-20 19:39:33',NULL),
(42,'kakaka@gmail.com','kakaka','$2a$10$bFJhgMrYR9NSidgEvXQgh.NJTtwIS9sQgS76M0Agws9ashPYAHXiu','user',NULL,NULL,NULL,NULL,'2024-06-20 13:16:25','2024-06-20 13:16:25','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imtha2FrYSIsImVtYWlsIjoia2FrYWthQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJGJGSmhnTXJZUjlOU2lkZ0V2WFFnaC5OSlR0d0lTOXNRZ1M3Nk0wQWd3czlhc2hQWUFIWGl1IiwiaWF0IjoxNzE4ODg5Mzk5fQ.cL9yyC0pXyW_t5ZjR03asFAHZWnh3CQYcaVxMam85SY'),
(43,'budi@gmail.com','budi','$2a$10$0waxZ7aKRO7l0.8eMq8C8.mC5BnUikdSic24IrLZ5h7WLUS.i9lhK','user',NULL,NULL,NULL,NULL,'2024-06-20 13:18:14','2024-06-20 13:18:14','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJ1ZGkiLCJlbWFpbCI6ImJ1ZGlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkMHdheFo3YUtSTzdsMC44ZU1xOEM4Lm1DNUJuVWlrZFNpYzI0SXJMWjVoN1dMVVMuaTlsaEsiLCJpYXQiOjE3MTg5ODA0NzV9.ey7W48PeXlbWCf-1PibEZtolwBK2IT74qcai1eEjM0U'),
(44,'ahmadzaqi98mmm@gmail.com','choi	','$2a$10$Toe7ud7ybe2MygkfReOcwe5xIuickowOFbxhuR5I0Eir5xlpZ/19q','user',NULL,NULL,NULL,NULL,'2024-06-20 14:46:35','2024-06-20 14:46:35',NULL),
(45,'budi1@gmail.com','budi1','$2a$10$TEkqIEGMYBeXJw/M1dKEReh9iAy0GptZebRVb8fxO0FrIrfPednyS','user',NULL,NULL,NULL,NULL,'2024-06-21 08:03:17','2024-06-21 08:03:17',NULL);

/*Table structure for table `wisata` */

DROP TABLE IF EXISTS `wisata`;

CREATE TABLE `wisata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) DEFAULT NULL,
  `lokasi` varchar(255) DEFAULT NULL,
  `jam_buka` time DEFAULT NULL,
  `jam_tutup` time DEFAULT NULL,
  `jarak_lokasi` varchar(50) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `deskripsi` text,
  `gambar1` varchar(100) DEFAULT NULL,
  `gambar2` varchar(100) DEFAULT NULL,
  `gambar3` varchar(100) DEFAULT NULL,
  `gambar4` varchar(100) DEFAULT NULL,
  `informasi_tourguide` text,
  `harga_termasuk` text,
  `kategori` enum('budaya','tour','massage','alam','aktivitas-air') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `payment_link` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;

/*Data for the table `wisata` */

insert  into `wisata`(`id`,`nama`,`lokasi`,`jam_buka`,`jam_tutup`,`jarak_lokasi`,`harga`,`deskripsi`,`gambar1`,`gambar2`,`gambar3`,`gambar4`,`informasi_tourguide`,`harga_termasuk`,`kategori`,`created_at`,`updated_at`,`payment_link`,`rating`) values 
(1,'Jatiluwih Rice Terraces in Bali','Tabanan','08:00:00','18:00:00','56,7 km',250000,'Sawah terasering Jatiluwih mencakup lebih dari 600 hektar sawah yang tersebar di lereng gunung Batukaru dan cenderung lebih sepi daripada Tegallalang. Anda juga akan menemukan lebih sedikit pengagum wisata di sini, sehingga lebih mudah untuk berjalan-jalan dan menjelajahi tanpa gangguan.','https://i.pinimg.com/236x/a2/7e/c5/a27ec55e489abbbd8369f5048c69e6f1.jpg','https://i.pinimg.com/236x/99/b6/d5/99b6d5698cfcb9b46a2ff0a1e304243e.jpg','https://i.pinimg.com/236x/75/f5/d8/75f5d8767c547a0d11c551f6a3f02a7c.jpg','https://i.pinimg.com/236x/12/c0/3b/12c03bbd3fb11f56c3a25b68709e6cb3.jpg','Tour guide kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan mendapat banyak testimoni positif dari wisatawan. Dengan kemampuan menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Private (TIDAK digabung dengan group lain) + BBM + Supir/Guide, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','alam','2024-05-25 15:42:00','2024-05-25 15:42:00','https://app.sandbox.midtrans.com/payment-links/1718439912442',4),
(2,'Melasti Beach','Gianyar','00:00:00','23:59:00','80,5 km',2340000,'Retret spiritual elegan dan taman yang dikelilingi oleh mata air alami, dengan berenang dan piknik.','https://i.pinimg.com/236x/bd/4d/98/bd4d9873a72e55ae1e67e8fbdd022aa7.jpg','https://i.pinimg.com/236x/34/a9/9c/34a99cc4b3067bf121181f8d78a6c25b.jpg','https://i.pinimg.com/236x/95/c2/e3/95c2e39c4587cdbe7448866c68ee4057.jpg','https://i.pinimg.com/236x/91/0c/5f/910c5f8000d89653a4db8c4207dae742.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','alam','2024-06-14 11:36:07','2024-06-14 11:36:07','https://app.sandbox.midtrans.com/payment-links/WB2-1718444954946',5),
(3,'Hutan Monyet Ubud','Gianyar','09:00:00','17:00:00','38,6 km',300000,'Mandala Suci Wenara Wana, atau lebih dikenal sebagai Hutan Monyet Ubud, adalah tempat perlindungan dan habitat alami monyet ekor panjang Bali.','https://i.pinimg.com/564x/78/2a/18/782a187800cdea57a5c6a14df3593844.jpg','https://i.pinimg.com/564x/69/35/66/693566315e077ab0bbf402c42c7869ce.jpg','https://i.pinimg.com/564x/33/17/25/331725ef39be146a25bd73ef70e506fa.jpg','https://i.pinimg.com/564x/d9/7b/49/d97b49e3342f5d8b58634580154f022a.jpg','Tour guide kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Private (TIDAK digabung dengan group lain) + BBM + Supir/Guide, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','tour','2024-05-25 15:42:02','2024-05-25 15:42:02','https://app.sandbox.midtrans.com/payment-links/wb3-1718445067141',3),
(4,'Goa Gajah','Gianyar','08:00:00','18:00:00','38,7 Km',150000,'Goa Gajah, atau Gua Gajah, terletak di pulau Bali dekat Ubud, di Indonesia. Dibangun pada abad ke-9, gua ini berfungsi sebagai tempat perlindungan.','https://i.pinimg.com/236x/a9/55/4d/a9554d514cdab67b1e59101aecc36a46.jpg','https://i.pinimg.com/236x/37/a4/c3/37a4c37983b96eeb26ce1fc001564629.jpg','https://i.pinimg.com/236x/99/3e/55/993e55d3b633737410791a317b920543.jpg','https://i.pinimg.com/236x/e6/69/8d/e6698d4155f7672e79357a23b2558caf.jpg','Tour guide kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Private (TIDAK digabung dengan group lain) + BBM + Supir/Guide, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','budaya','2024-05-25 15:42:03','2024-05-25 15:42:03','https://app.sandbox.midtrans.com/payment-links/wb4-1718445274714',4),
(5,'Tanah Lot','Tabanan','06:00:00','19:00:00','25,8 km',278000,'adalah formasi batu di lepas pantai pulau Bali, Indonesia. Tempat ini menjadi rumah bagi pura ziarah Hindu kuno Pura Tanah Lot (secara harfiah \"pura Tanah Lot\"), ikon wisata dan budaya yang populer untuk fotografi.','https://i.pinimg.com/236x/ae/2b/7b/ae2b7b597f1eced74bf70ed54c943687.jpg','https://i.pinimg.com/236x/f2/28/b4/f228b42604697affc1b38c19ca317ba3.jpg','https://i.pinimg.com/236x/c0/3b/5d/c03b5d77c650aa04479de97b1a6b44d9.jpg','https://i.pinimg.com/236x/78/18/77/781877d4d30e753dfedfe121b756b4cd.jpg','Tour guide kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan mendapat banyak testimoni positif dari wisatawan. Dengan kemampuan menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Private (TIDAK digabung dengan group lain) + BBM + Supir/Guide, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','budaya','2024-05-25 15:42:00','2024-05-25 15:42:00','https://app.sandbox.midtrans.com/payment-links/wb5-1718445313772',3),
(6,'Teggalalang Rice Terrace','Gianyar','08:00:00','18:00:00','49,1 km',250000,'Tegallalang adalah sebuah distrik di Kabupaten Gianyar, Bali, Indonesia.','https://i.pinimg.com/236x/82/54/0e/82540ee1dad1c34d8a844bb421115628.jpg','https://i.pinimg.com/236x/72/d3/f9/72d3f95b5a55d7769c0d2179d18c0fb5.jpg','https://i.pinimg.com/474x/c2/96/09/c29609980d0c41ee1fb082b1de6a34d6.jpg','https://i.pinimg.com/236x/b9/0c/b4/b90cb46eb8b2e48df24695f146ee31fe.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat-tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','alam','2024-05-25 15:42:05','2024-05-25 15:42:05','https://app.sandbox.midtrans.com/payment-links/1718446369790',5),
(7,'Sidemen Valley','Karangasem','00:00:00','23:59:00','54,1 km',200000,'Sidemen Valley mengingatkan suasana Bali tempo dulu, sebelum keramaian wisatawan datang ke pulau ini. Desa-desa yang tenang berjejer di lembah di tengah sawah bertingkat, dan Gunung Agung yang tertutup awan menjulang di latar belakang seperti penjaga yang baik hati.','https://i.pinimg.com/236x/ed/6e/e7/ed6ee79a40cbd869c36ef1914ca57a53.jpg','https://i.pinimg.com/236x/0b/b8/e0/0bb8e07211fbefa6aa4a4a1c33a17d45.jpg','https://i.pinimg.com/236x/a5/e9/ea/a5e9eaf4a1de0c4bc15bfe03033e6781.jpg','https://i.pinimg.com/474x/0b/98/8f/0b988f45b088b3c7d7e7e903c7503d37.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat-tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','budaya','2024-05-25 15:42:07','2024-05-25 15:42:07','https://app.sandbox.midtrans.com/payment-links/1718446403658',5),
(8,'Tirta Empul Temple','Gianyar','08:00:00','18:00:00','53,6 km',250000,'Pura Tirta Empul adalah pura air Hindu Bali yang terletak di dekat kota Tampaksiring, Bali, Indonesia. Komplek pura ini terdiri dari petirtaan atau tempat pemandian, terkenal dengan mata air sucinya, di mana umat Hindu Bali pergi untuk ritual penyucian. Kolam pura memiliki mata air yang selalu mengeluarkan air segar, yang dianggap suci atau amritha oleh umat Hindu Bali. Tirta Empul berarti Mata Air Suci dalam bahasa Bali.','https://i.pinimg.com/236x/1b/7c/1c/1b7c1c7c185afae54329121c10269070.jpg','https://i.pinimg.com/236x/ae/50/cf/ae50cfc4cb551ffd3387157afaf5a05e.jpg','https://i.pinimg.com/736x/96/a3/6d/96a36d1dca19e55db25fa4627aa41ad2.jpg','https://i.pinimg.com/236x/f2/b2/fd/f2b2fdcfb97b99daf1241968ddb76c2d.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat-tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','budaya','2024-05-25 15:42:08','2024-05-25 15:42:08','https://app.sandbox.midtrans.com/payment-links/1718446530963',4),
(9,'Taman Nasional Bali Barat','Buleleng','08:00:00','17:00:00','141,5 km',350000,'Taman Nasional Bali Barat adalah sebuah taman nasional yang terletak di Kabupaten Buleleng, Bali, Indonesia.','https://i.pinimg.com/236x/0d/ba/2d/0dba2d518bd38a0a3ee0e528a2f131a0.jpg','https://i.pinimg.com/236x/db/a0/29/dba029c2f3537e8715b76d6e6c74e964.jpg','https://i.pinimg.com/236x/96/b4/ed/96b4ed5f1d684572eb3f84d43a8b9f73.jpg','https://i.pinimg.com/236x/3d/bf/6e/3dbf6eb4aef28180164dd152435b5707.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat-tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','tour','2024-05-25 15:42:09','2024-05-25 15:42:09','https://app.sandbox.midtrans.com/payment-links/1718447748282',5),
(10,'Garuda Wisnu Kencana Cultural Park & Pura Uluwatu','Badung','09:00:00','21:00:00','11,0 km',500000,'Taman Budaya Garuda Wisnu Kencana (Indonesia: Taman Budaya Garuda Wisnu Kencana), atau GWK, adalah tujuan wisata dan atraksi yang terletak di Ungasan, Badung di pulau Bali, Indonesia, sekitar 10–15 menit berkendara dari Bandara Internasional Ngurah Rai. Taman ini didedikasikan untuk dewa Hindu Wisnu, dan tunggangannya, Garuda, burung mitos yang menjadi temannya.','https://i.pinimg.com/564x/78/90/d3/7890d35affbd42ba1614dd2f013821eb.jpg','https://i.pinimg.com/564x/03/94/14/03941405af58d53ae9f8325aff7951a2.jpg','https://i.pinimg.com/564x/d3/d4/3f/d3d43f9f4a389ca0314531bc330a2930.jpg','https://i.pinimg.com/564x/b6/9a/1d/b69a1dfd1a232e6c38b1ff7c8d6f2d39.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat-tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','tour','2024-05-25 15:42:10','2024-05-25 15:42:10','https://app.sandbox.midtrans.com/payment-links/1718447803553',5),
(11,'Bali Zoo','Gianyar','09:00:00','17:00:00','27,8 km',790000,'Kebun binatang besar yang menampilkan orangutan, gajah, dan singa Afrika, serta pertemuan interaktif dan pertunjukan.','https://i.pinimg.com/564x/c1/42/c3/c142c39c2d35537db254375ffcf1ba13.jpg','https://i.pinimg.com/564x/40/1b/83/401b832fb23f37203670e82086e661c4.jpg','https://i.pinimg.com/564x/a5/e9/d5/a5e9d595e14f86858ff41889ce9cb468.jpg','https://i.pinimg.com/564x/30/ad/5a/30ad5a8a3f3bf52dc623222a96d71e78.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat-tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','tour','2024-05-25 15:42:11','2024-05-25 15:42:11','https://app.sandbox.midtrans.com/payment-links/1718600932867',5),
(12,'Bali Bird Park','Gianyar','09:00:00','17:30:00','25,5 km',140000,'Taman hewan dengan pertunjukan burung eksotis, pemberian makan, dan pameran, serta reptil, tanaman asli, dan kafe.','https://i.pinimg.com/236x/2f/b6/54/2fb6545bb21034dc75771bbf8464e0c7.jpg','https://i.pinimg.com/736x/0c/23/73/0c23733a63d62b52e14529c6346175f0.jpg','https://i.pinimg.com/236x/d4/04/ce/d404ce2c86e9d1591c058dd58c3adc40.jpg','https://i.pinimg.com/236x/9f/00/e2/9f00e2b91f0a880fed6b03c2df3eeece.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat-tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','tour','2024-05-25 15:42:12','2024-05-25 15:42:12','https://app.sandbox.midtrans.com/payment-links/1718601032672',4),
(13,'Tirta Gangga','Karangasem','06:00:00','19:00:00','80,5 km',200000,'Retret spiritual elegan dan taman yang dikelilingi oleh mata air alami, dengan berenang dan piknik.','https://i.pinimg.com/236x/55/fe/72/55fe72feaa89722855ea245f8e149422.jpg','https://i.pinimg.com/236x/c7/40/e1/c740e1e70ccb5c9719daf000871875f8.jpg','https://i.pinimg.com/236x/73/10/27/7310273348b40fd512ac8f08bbb8ce9f.jpg','https://i.pinimg.com/236x/c9/53/0c/c9530c78846fee53681588c76e7ba572.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','budaya','2024-05-25 15:42:13','2024-05-25 15:42:13','https://app.sandbox.midtrans.com/payment-links/1718601080860',5),
(14,'Tegenungan Waterfall','Gianyar','06:30:00','18:30:00','33,3 km',150000,'Air terjun yang indah di tengah hutan lebat dengan area mandi dangkal di atasnya, serta kafe di sekitarnya.','https://i.pinimg.com/236x/3e/08/01/3e0801b16445785527b808038a3646a5.jpg','https://i.pinimg.com/236x/3d/c9/cc/3dc9cceb7224cabe13c458b828d67e2b.jpg','https://i.pinimg.com/236x/2a/d2/d2/2ad2d215da920e0754e0db20f31a0832.jpg','https://i.pinimg.com/236x/ca/9b/7d/ca9b7df2770079faf2b6cd88647c98c0.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','alam','2024-05-25 15:42:14','2024-05-25 15:42:14','https://app.sandbox.midtrans.com/payment-links/1718601121483',4),
(15,'Waterbom Bali','Badung','08:30:00','17:00:00','3,8 km',650000,'Taman air yang ramai dengan wahana untuk semua usia, ditambah restoran, food court, dan bar renang.','https://i.pinimg.com/564x/b3/dd/60/b3dd600a99416ca9764bf950731f9284.jpg','https://i.pinimg.com/564x/9c/1e/ff/9c1eff93fdf7505b4340faecbbce6449.jpg','https://i.pinimg.com/564x/6f/46/db/6f46db7dd0b45c685ba526ea8524781d.jpg','https://i.pinimg.com/564x/9c/1e/ff/9c1eff93fdf7505b4340faecbbce6449.jpg','Pemandu wisata kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan untuk menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Pribadi (TIDAK digabung dengan kelompok lain) + BBM + Supir/Pemandu, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','aktivitas-air','2024-05-25 15:42:15','2024-05-25 15:42:15','https://app.sandbox.midtrans.com/payment-links/1718601160903',3),
(16,'Bajra Sandhi Monument','Denpasar','08:30:00','17:00:00','16,1 km',250000,'Monumen yang megah menjadi landmark bagi masyarakat Bali, dikelilingi oleh taman yang hijau.','https://i.pinimg.com/564x/01/09/e0/0109e07fa64ae0bb442aa0699dbfafe5.jpg','https://i.pinimg.com/564x/53/b8/a1/53b8a109af57112b14a72d8ae934cbbb.jpg','https://i.pinimg.com/736x/88/3a/b7/883ab73a4f77cbcbea01818b4429364b.jpg','https://i.pinimg.com/564x/61/d0/de/61d0de755cbe331475f3ed83c0554322.jpg','Tour guide kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan mendapat banyak testimoni positif dari wisatawan. Dengan kemampuan menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Private (TIDAK digabung dengan group lain) + BBM + Supir/Guide, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','tour','2024-05-25 15:42:16','2024-05-25 15:42:16','https://app.sandbox.midtrans.com/payment-links/1718601196059',5),
(17,'Penglipuran Village & Kintamani','Bangli','08:00:00','18:30:00','54,0 km',495000,'Desa tradisional Bali yang menjual kerajinan tangan & produk lokal serta menawarkan akomodasi homestay.','https://i.pinimg.com/236x/de/44/75/de4475c3f8d36ce1b2b08248c38bcf66.jpg','https://i.pinimg.com/236x/bc/08/07/bc08079ceb27a06e0fd678f18e01f0bf.jpg','https://i.pinimg.com/736x/ec/11/7e/ec117e24a911447ec924e49df68ee6e2.jpg','https://i.pinimg.com/236x/d8/1c/ac/d81cac595b79e49873a0bd8f86e2a64d.jpg','Tour guide kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan mendapat banyak testimoni positif dari wisatawan. Dengan kemampuan menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Private (TIDAK digabung dengan group lain) + BBM + Supir/Guide, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','budaya','2024-05-25 15:42:17','2024-05-25 15:42:17','https://app.sandbox.midtrans.com/payment-links/1718601227926',5),
(18,'Goa Lawah Temple','Klungkung','00:00:00','23:59:00','48,4 km',150000,'Candi Hindu Bali kecil ini, berasal dari abad ke-11, dibangun di sekitar gua yang dipenuhi kelelawar.','https://i.pinimg.com/236x/b7/87/41/b78741b4e4e39f949a49b54b20ac8d6a.jpg','https://i.pinimg.com/236x/38/88/11/388811484692e8888f8ad7ceae532582.jpg','https://i.pinimg.com/236x/0a/db/6d/0adb6d5f7c8ae1456a6d5aadff2035a9.jpg','https://i.pinimg.com/236x/ef/54/df/ef54df80c43ef9eb6346a1bc8f8842e4.jpg','Tour guide kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Mahir dalam berbagai bahasa, mereka ramah, bersertifikasi, dan mendapat banyak testimoni positif dari wisatawan. Dengan kemampuan menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Private (TIDAK digabung dengan group lain) + BBM + Supir/Guide, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','budaya','2024-05-25 15:42:18','2024-05-25 15:42:18','https://app.sandbox.midtrans.com/payment-links/1718601261335',3),
(19,'Pantai Batu Bolong','Badung','00:00:00','23:59:00','18,3 km',150000,'Pantai berpasir terkenal ini dekat dengan toko & restoran, populer di kalangan peselancar & menyediakan penyewaan papan.','https://i.pinimg.com/236x/7a/79/49/7a7949d588baa488fa964688f6c02c50.jpg','https://i.pinimg.com/236x/c2/6c/37/c26c371272c363cc86393dc36ce85ece.jpg','https://i.pinimg.com/236x/a6/44/2c/a6442cfed4273c40a517f8d2706d6474.jpg','https://i.pinimg.com/236x/09/40/a5/0940a5c6973505ab81c331e92ea0afa9.jpg','Tour guide kami adalah profesional berpengalaman dengan pengetahuan mendalam tentang sejarah, budaya, dan tempat wisata lokal. Fasih dalam berbagai bahasa, mereka ramah, bersertifikasi, dan menerima banyak testimoni positif dari wisatawan. Dengan kemampuan menyesuaikan itinerary sesuai keinginan Anda, mereka memastikan perjalanan Anda nyaman, informatif, dan tak terlupakan.','Mobil Avanza Private (TIDAK digabung dengan group lain) + BBM + Supir/Guide, Tiket masuk objek wisata, Makan Siang, Asuransi Jiwa, Kain, Selendang, dan Payung, Parkir dan Retribusi','aktivitas-air','2024-06-12 12:48:44','2024-06-12 12:48:44','https://app.sandbox.midtrans.com/payment-links/1718601294726',4);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
