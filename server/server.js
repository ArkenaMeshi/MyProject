const express = require('express');
const cors = require('cors');
const app = express();


const cookieParser = require('cookie-parser');
           
require('dotenv').config();
app.use(cors());
app.use(express.json()); 
app.use(cookieParser());                           
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require('./config/mongoose.config'); 
require('./routes/house.routes')(app);



app.listen(8000, () => {
    console.log("Listening at Port 8000")
})