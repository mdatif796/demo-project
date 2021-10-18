const express = require('express');
var cors = require("cors");

const app = express();
const port = 5000;
const db = require('./config/mongoose');
app.use(cors());
app.use(express.json());
//Available routes
app.use("/api/auth/", require("./routes/auth"));


app.listen(port , (err)=>{
    if(err) {
        console.log(`Error in connecting with port : ${port}`);
    } else {
        console.log(`Server is up and running on port : ${port}`);
    }
});