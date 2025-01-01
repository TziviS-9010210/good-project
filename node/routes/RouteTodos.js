const express = require("express")
const router = express.Router()

const todosController = require("../controllers/todosControllers")
router.get("/",todosController.getAllTodos)
router.get("/:id", todosController.gettodosById)
router.post("/", todosController.createNewTodos)
router.delete("/:id",todosController.deleteTodos)
router.put("/",todosController.updateTodos)

module.exports = router