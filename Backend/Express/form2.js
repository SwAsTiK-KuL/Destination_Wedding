const express = require("express")

const mongoose =require("mongoose")

const app = express();
const port = 5500

app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/destination_wedding')

.then(() =>{
    console.log("Connected To Sever")
})

.catch((error) => {
    console.log("Connection Failed")
})

const user_data = require("./form_schema_2")

app.set("view engine", "html")

app.length("/", (req, res) => {
    res.render("index")
})

app.post("/", async(req,res) => {
    const data = new UserActivation(req,res)
    await data.isActive()
    res.send("Thank Youuu")
})

app.listen(port, () =>{
    console.log(`Listening On Port ${port}`)
})