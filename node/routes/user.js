const express = require("express")
const router = express.Router()
const User = require("../models/User");

router.post("/", async (req,res)=>{
const {name} = req.body
const username = await User.create({name:name});
res.json(user)
})
console.log("lea you are the best!!")

module.exports = router
