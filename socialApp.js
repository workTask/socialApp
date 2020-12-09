const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const exspressValidator = require('express-validator');
dotenv.config();
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth')



//DB
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true }).then(()=>console.log('DB connected'))
mongoose.connection.on('error', err => {console.log(` DB conection error: ${err.message}`);
});
//

//routes
//app.get("/", postRoutes.getPost);
//

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(exspressValidator());
app.use("/", postRoutes)
app.use("/", authRoutes)
//
app.listen(process.env.PORT||3001, ()=>{
    console.log("Server starting");
})