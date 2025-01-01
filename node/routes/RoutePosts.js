const express = require("express")
const router = express.Router()

const postsController = require("../controllers/postsControllers")
router.get("/",postsController.getAllPosts)
router.get("/:id", postsController.getPostById)
router.post("/", postsController.createNewPost)
router.delete("/:id",postsController.deletepost)
router.put("/",postsController.updatePosts)

module.exports = router