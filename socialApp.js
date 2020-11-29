const express = require('express')
const app = express();
const port = 8089;
const postRoutes = require('./routes/post')
const morgan = require('morgan')


const myMiddleware = (req,res, next)=>{
    console.log("middleware connected!!!");
    next();
}

//routes
app.get("/", postRoutes.getPost);

//middleware
app.use(morgan('dev'));
app.use(myMiddleware)

//
app.listen(port, ()=>{
    console.log("Server starting");
})