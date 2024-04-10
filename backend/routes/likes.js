// const express = require('express');
// const router = express.Router();
// const Comment = require('../models/Comment');
// const verifyToken = require('../verifyToken');
// const Post=require("../models/Post");
// const Post = require('../models/Post');
// // LIKE COMMENT
// router.put('/like', verifyToken, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }

//     // Check if the user has already liked the comment
//     if (post.likes.includes(req.user._id)) {
//       return res.status(400).json({ error: 'You have already liked this post' });
//     }

//     // Add user ID to the likes array of the comment
//     posts.likes.push(req.user._id);
//     await post.save();
    
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // UNLIKE COMMENT
// router.put('/unlike', verifyToken, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }

//     // Check if the user has liked the comment
//     if (!post.likes.includes(req.user._id)) {
//       return res.status(400).json({ error: 'You have not liked this post' });
//     }

//     // Remove user ID from the likes array of the comment
//     post.likes = post.likes.filter(userId => userId.toString() !== req.user._id.toString());
//     await post.save();
    
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const verifyToken = require('../verifyToken');

// LIKE POST
router.put('/like/:id', verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the user has already liked the post
    if (post.likes.includes(req.user._id)) {
      return res.status(400).json({ error: 'You have already liked this post' });
    }

    // Add user ID to the likes array of the post
    post.likes.push(req.user._id);
    await post.save();
    
    res.status(200).json({ message: 'Post liked successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UNLIKE POST
router.put('/unlike/:id', verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the user has liked the post
    if (!post.likes.includes(req.user._id)) {
      return res.status(400).json({ error: 'You have not liked this post' });
    }

    // Remove user ID from the likes array of the post
    post.likes = post.likes.filter(userId => userId.toString() !== req.user._id.toString());
    await post.save();
    
    res.status(200).json({ message: 'Post unliked successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
