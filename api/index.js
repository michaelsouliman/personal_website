const express = require("express");
const app = express();
const port = 4000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.mongo_url).then(console.log("connected to mongo")).catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(port, () => {
    console.log("backend is running");
})

