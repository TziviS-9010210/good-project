const express = require("express")
const router = express.Router()
const User = require("../models/User");

router.post("/", async (req,res)=>{
const {name} = req.body
const username = await User.create({name:name});
res.json(user)
})

module.exports = router
