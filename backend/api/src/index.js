const express = require('express');
const app = express();
app.use(express.json());

const http = require('http');
const server = http.createServer(app);
const PORT = 3000;
const HOST = '0.0.0.0';

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

const WisataRoute = require('./routes/WisataRoute');
const UserRoute = require('./routes/UserRoute');
const PusatBantuanRoute = require('./routes/PusatBantuanRoute');
const PesananRoute = require('./routes/PesananRoute');
const UlasanRoute = require('./routes/UlasanRoute');
const AuthRoute = require('./routes/AuthRoute');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use('/wisata', WisataRoute);
app.use('/user', UserRoute);
app.use('/pusat-bantuan', PusatBantuanRoute);
app.use('/pesanan', PesananRoute);
app.use('/ulasan', UlasanRoute);
app.use('/auth', AuthRoute);

app.use(cookieParser());
const dbPool = require('./config/database');
const testConnection = async () => {
  try {
    await dbPool.getConnection();
    console.log('Koneksi Berhasil');
  } catch (error) {
    console.log(error);
  }
};

const path = require('path');
const fs = require('fs');
const imagesDir = path.join(__dirname, 'images');

server.listen(PORT, HOST, () => {
  console.log(imagesDir);
  testConnection();
  console.log(`Server is running in http://localhost:${PORT}`);
});
