import express from 'express';
import route from 'express-route';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import aliranKungfuRoute from './toko/tokoRoute.js';

let app = express();

app.use(bodyParser.json());


// ...
app.use('/api', aliranKungfuRoute);



mongoose.connect('mongodb://localhost:27017/DBDesaKungfu');
//let db = mongoose.connection;




app.listen(8812);
// class Test {
//     datang (nama){
//         return nama;
//     }
// }
// console.log(Test.datang("Fullann"));