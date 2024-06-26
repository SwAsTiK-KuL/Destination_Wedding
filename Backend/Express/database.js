const { error } = require("jquery");
const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("Connection Successful"))
    .catch((error) => {
        console.log("Issue in Connection");
        console.error(error.message);
        process.exit(1);
    } );
}

module.exports = dbconnect;