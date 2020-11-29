const express = require('express')
const app = express();
const port = 8089;
const postRoutes = require('./routes/post')

//routes
app.get("/", postRoutes.getPost);

app.listen(port, ()=>{
    console.log("Server starting");
})