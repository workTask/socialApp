const express = require('express');
const app = express();

const postRoutes = require('./routes/post');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exspressValidator = require('express-validator');
const authRoutes = require('./routes/auth')

dotenv.config();

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
app.use(exspressValidator());
app.use("/", postRoutes)
app.use("/", authRoutes)
//
app.listen(process.env.PORT||3001, ()=>{
    console.log("Server starting");
})