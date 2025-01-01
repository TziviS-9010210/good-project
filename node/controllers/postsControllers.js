const Posts = require("../models/Posts");

const getAllPosts = async (req, res) => {
    
    const posts = await Posts.find().lean()
    console.log(posts);
    // If no tasks
    if (!posts?.length) {
    return res.status(400).json({ message: 'No posts found' })
    }
    else{
    return res.status(200).json(posts)}
    // res.json(posts)
    }     
    
//create
const createNewPost = async (req, res) => {
    // console.log("ggggg");
    const {title,body} = req.body
    if (!title || !body ) { // Confirm data
    return res.status(400).json({ message: 'all is required' })
    }
    const post = await Posts.create({title,body})
    if (post) { // Created
        return res.status(200).json(await Posts.find().lean())
        } else {
        return res.status(400).json({ message: 'Invalid post ' })}}

       //read
        

    
    //update
 const updatePosts = async (req, res) => {
    const {_id,title,body} = req.body
    // Confirm data
    if (!title || !body ) { // Confirm data
        return res.status(400).json({ message: 'all is required' })
        }
    // Confirm task exists to update
    const post = await Posts.findById(_id).exec()
    if (!post) {
    return res.status(400).json({ message: 'post not found' })
    }
    post.title = title
    post.body = body
    
    const updatePosts = await post.save()
    const posts=await Posts.find().lean()
    res.json(posts)
    }
    
    //delete

    const deletepost= async (req, res) => {
        
        const {id} =req.params
        // Confirm task exists to delete
        const post = await Posts.findById(id).exec()
        if (!post) {
        return res.status(400).json({ message: 'posts not found' })
        }
        const result = await post.deleteOne()
        const reply=`posts '${result.title}' ID ${result._id} deleted`
        const posts = await Posts.find().lean()
        res.json(posts)
        }

   //gtebyid
   const getPostById = async (req, res) => {
    const {id} = req.params
    // Get single task from MongoDB
    const posts = await Posts.findById(id).lean()
    // If no tasks
    if (!posts) {
    return res.status(400).json({ message: 'No posts found' })
    }
    res.json(posts)
    }

    module.exports = {
        createNewPost,
        getAllPosts,
        updatePosts,
        deletepost,
        getPostById
     
        }