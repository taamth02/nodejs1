import express from "express";
import bodyParser from "body-parser"; // /user?id=7 thi tren phia sever muon lay id=7 phai goi thu vien bodyParser
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
// import cors from 'cors';

require('dotenv').config(); //dung de goi den ham config cua thu vien env

let app = express();
// app.use(cors({ origin: true }));
// app.use(cors())

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
    //nếu request hợp lệ thì sẽ cho phép đi tiếp 
});

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//PORT === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port : " + port)
})