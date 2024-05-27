const http = require('http');
const PORT = 5000;
const HOST = '0.0.0.0';
const express = require('express');
const app = express();
app.use(express.json());
const server = http.createServer(app);

const WisataRoute = require('./routes/WisataRoute');
const TourGuideRoute = require('./routes/TourGuideRoute');
const UserRoute = require('./routes/UserRoute');
const TransactionRoute = require('./routes/TransactionRoute');
const RiviewRoute = require('./routes/RiviewRoute');

app.use('/wisata', WisataRoute);
app.use('/tour-guide', TourGuideRoute);
app.use('/user', UserRoute);
app.use('/transaction', TransactionRoute);
app.use('/review', RiviewRoute);

//tes donk
app.get("/", (req, res)=> {
    res.json("Hello from backedn")
})

server.listen(PORT, HOST, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
