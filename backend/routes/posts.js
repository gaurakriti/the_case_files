// const express=require('express')
// const router=express.Router()
// const User=require('../models/User')
// const bcrypt=require('bcrypt')
// const Post=require('../models/Post')
// const Comment=require('../models/Comment')
// const verifyToken = require('../verifyToken')

// //CREATE
// router.post("/create",verifyToken,async (req,res)=>{
//     try{
//         const newPost=new Post(req.body)
//         // console.log(req.body)
//         const savedPost=await newPost.save()
        
//         res.status(200).json(savedPost)
//     }
//     catch(err){
        
//         res.status(500).json(err)
//     }
     
// })

// //UPDATE
// router.put("/:id",verifyToken,async (req,res)=>{
//     try{
       
//         const updatedPost=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
//         res.status(200).json(updatedPost)

//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })


// //DELETE
// router.delete("/:id",verifyToken,async (req,res)=>{
//     try{
//         await Post.findByIdAndDelete(req.params.id)
//         await Comment.deleteMany({postId:req.params.id})
//         res.status(200).json("Post has been deleted!")

//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })


// //GET POST DETAILS
// router.get("/:id",async (req,res)=>{
//     try{
//         const post=await Post.findById(req.params.id)
//         res.status(200).json(post)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })

// //GET POSTS
// router.get("/",async (req,res)=>{
//     const query=req.query
    
//     try{
//         const searchFilter={
//             title:{$regex:query.search, $options:"i"}
//         }
//         const posts=await Post.find(query.search?searchFilter:null)
//         res.status(200).json(posts)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })


// //GET USER POSTS
// router.get("/user/:userId",async (req,res)=>{
//     try{
//         const posts=await Post.find({userId:req.params.userId})
//         res.status(200).json(posts)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })


// //Like the post



// module.exports=router
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const verifyToken = require('../verifyToken');

// Middleware to handle liking a post
// const likePostMiddleware = async (req, res, next) => {
//     try {
//         const postId = req.body.postId;
//         const userId = req.user._id;

//         // Check if the user has already liked the post
//         const post = await Post.findById(postId);
//         if (!post) {
//             return res.status(404).json({ error: 'Post not found' });
//         }

//         const alreadyLiked = post.likes.includes(userId);
//         if (alreadyLiked) {
//             return res.status(400).json({ error: 'You have already liked this post' });
//         }

//         // Add the user's ID to the post's likes array
//         post.likes.push(userId);
//         await post.save();

//         res.status(200).json({ message: 'Post liked successfully' });
//     } catch (error) {
//         console.error('Error liking post:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// // Route to like a post
// router.put('/like', verifyToken, likePostMiddleware);

//CREATE
router.post("/create", verifyToken, async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET POST DETAILS
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET POSTS
router.get("/", async (req, res) => {
    const query = req.query;
    try {
        const searchFilter = {
            title: { $regex: query.search, $options: "i" }
        };
        const posts = await Post.find(query.search ? searchFilter : null);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER POSTS
router.get("/user/:userId", async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.params.userId });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});




router.put('/likePosts/:id', verifyToken, async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const userIndex = post.likes.indexOf(req.user.id);
    if (userIndex === -1) {
      post.numberOfLikes += 1;
      post.likes.push(req.user.id);
    } else {
      post.numberOfLikes -= 1;
      post.likes.splice(userIndex, 1);
    }
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
