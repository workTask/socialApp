const express = require('express')
const app = express();
const port = 8089;
const postRoutes = require('./routes/post')
const morgan = require('morgan')


//routes
//app.get("/", postRoutes.getPost);

//middleware
app.use(morgan('dev'));
app.use("/", postRoutes)
//
app.listen(port, ()=>{
    console.log("Server starting");
})