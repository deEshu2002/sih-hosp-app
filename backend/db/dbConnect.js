const mongoose = require("mongoose");

async function dbConnect(){
    mongoose.connect('mongodb://localhost:27017/mydatabase',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> {
        console.log("Successfully connected to Mongodb");
    }).catch((e) => {
        console.log("Unable to connect to the Mongodb");
        console.error(e);
    })
}

module.exports = dbConnect;