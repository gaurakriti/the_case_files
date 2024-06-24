
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const verifyToken = require('../verifyToken');



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
        console.log(posts.photo);
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
