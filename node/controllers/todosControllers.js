const Todos = require("../models/Todos");

//create
const createNewTodos = async (req, res) => {
    const {title,body} = req.body
    if (!title ) { // Confirm data
    return res.status(400).json({ message: 'all is required' })
    }
    const todos = await Todos.create({title,body})
    if (todos) { // Created
        return res.status(201).json({ message: 'New todos created' })
        } else {
        return res.status(400).json({ message: 'Invalid todos ' })}}

//read
        
const getAllTodos = async (req, res) => {
    // Get all tasks from MongoDB
    const todos = await Todos.find().lean()
    // If no tasks
    if (!todos?.length) {
    return res.status(400).json({ message: 'No todos found' })
    }
    res.json(todos)
    } 
    
       //update
 const updateTodos = async (req, res) => {
    const {_id,title} = req.body
    // Confirm data
    if (!title ) { // Confirm data
        return res.status(400).json({ message: 'all is required' })
        }
    // Confirm task exists to update
    const todos = await Todos.findById(_id).exec()
    if (!todos) {
    return res.status(400).json({ message: 'todos not found' })
    }
    todos.title = title
    
    const updateTodos = await todos.save()
    res.json(`'${updateTodos.title} 'updated`)
    }

    //delete

    const deleteTodos= async (req, res) => {
        
        const {id} =req.params
        // Confirm task exists to delete
        const todos = await Todos.findById(id).exec()
        if (!todos) {
        return res.status(400).json({ message: 'todos not found' })
        }
        const result = await todos.deleteOne()
        const reply=`todos '${result.title}' ID ${result._id} deleted`
        res.json(reply)
        }
    
        //gtebyid
   const gettodosById = async (req, res) => {
    const {id} = req.params
    // Get single task from MongoDB
    const todos = await Todos.findById(id).lean()
    // If no tasks
    if (!todos) {
    return res.status(400).json({ message: 'No todos found' })
    }
    res.json(todos)
    }

    module.exports = {
        createNewTodos,
        getAllTodos,
        updateTodos,
        deleteTodos,
        gettodosById
     
        }