require("dotenv").config()
const express = require('express')
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const mongoose=require("mongoose")
const PORT = process.env.PORT || 1003
const app = express()
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/user", require("./routes/RouteUser"))
app.use("/api/posts", require("./routes/RoutePosts"))

app.get('/',(req,res)=>{
        res.send("Hello world!!")
})

console.log(process.env.NODE_ENV)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))})

 mongoose.connection.on('error', err => {
     console.log(err)
     })