const express = require("express")
const router = express.Router()

const todos = require("../models/Todos");
router.post("/", async (req,res)=>{
const {title} = req.body
const todos = await Todos.create({title:title});
res.json(todos)
})
module.exports = router