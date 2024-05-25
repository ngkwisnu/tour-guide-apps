const http = require('http');
const PORT = 5000;
const HOST = '0.0.0.0';
const express = require('express');
const app = express();
app.use(express.json());
const server = http.createServer(app);

const WisataRoute = require('./routes/WisataRoute');
const UserRoute = require('./routes/UserRoute');
const PusatBantuanRoute = require('./routes/PusatBantuanRoute');
const PesananRoute = require('./routes/PesananRoute');
const UlasanRoute = require('./routes/UlasanRoute');
const AuthRoute = require('./routes/AuthRoute');

app.use('/wisata', WisataRoute);
app.use('/user', UserRoute);
app.use('/pusat-bantuan', PusatBantuanRoute);
app.use('/pesanan', PesananRoute);
app.use('/ulasan', UlasanRoute);
app.use('/auth', AuthRoute);

server.listen(PORT, HOST, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
