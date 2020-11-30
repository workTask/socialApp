const express = require('express')
const app = express();

const postRoutes = require('./routes/post')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config();


//routes
//app.get("/", postRoutes.getPost);

//middleware
app.use(morgan('dev'));
app.use("/", postRoutes)
//
app.listen(process.env.PORT, ()=>{
    console.log("Server starting");
})