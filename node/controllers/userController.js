const User = require("../models/User");

//create
const createNewUser = async (req, res) => {
    const {name,username,email,address,phone} = req.body
    console.log(name);
    if (!name || !username || !email|| !address||!phone) { // Confirm data
    return res.status(400).json({ message: 'all is required' })
    }
    const user = await User.create({ name,username,email,address,phone
        })
    if (user) { // Created
        return res.status(201).json({ message: 'New user created' })
        } else {
        return res.status(400).json({ message: 'Invalid user ' })}}
//read
        
const getAllUsers = async (req, res) => {
            // Get all tasks from MongoDB
            const users = await User.find().lean()
            // If no tasks
            if (!users?.length) {
            return res.status(400).json({ message: 'No users found' })
            }
            res.json(users)
            }     

 //update
 const updateUser = async (req, res) => {
    const {_id,name,username,email,address,phone}= req.body
    // Confirm data
    if (!_id || !name ) {
    return res.status(400).json({ message: 'fields are required' })
    }
    // Confirm task exists to update
    const user = await User.findById(_id).exec()
    if (!user) {
    return res.status(400).json({ message: 'user not found' })
    }
    user.name = name
    user.username = username
    user.email = email
    user.address = address
    user.phone = phone
    const updateUser = await user.save()
    res.json(`'${updateUser.username} 'updated`)
    }
    
    //delete

    const deleteUser= async (req, res) => {
        const {_id} = req.params
        // Confirm task exists to delete
        const user = await User.findById(_id).exec()
        if (!user) {
        return res.status(400).json({ message: 'user not found' })
        }
        const result = await user.deleteOne()
        const reply=`User '${result.name}' ID ${result._id} deleted`
        res.json(reply)
        }

        //gtebyid
        const getUserById = async (req, res) => {
            const {_id} = req.params
            // Get single task from MongoDB
            const user = await User.findById(_id).lean()
            // If no tasks
            if (!user) {
            return res.status(400).json({ message: 'No user found' })
            }
            res.json(user)
            }
            module.exports = {
                createNewUser,
                getAllUsers,
                updateUser,
                deleteUser,
                getUserById
             
                }


            