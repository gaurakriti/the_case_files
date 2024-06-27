const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const Post=require('../models/Post')
const Comment=require('../models/Comment')
const verifyToken = require('../verifyToken')
const Filter = require('bad-words');

const filter = new Filter();
//CREATE
router.post("/create",verifyToken,async (req,res)=>{
    try{
        const newComment=new Comment(req.body)
        newComment = filter.clean(newComment);
        const savedComment=await newComment.save()
        res.status(200).json(savedComment)
    }
    catch(err){
        res.status(500).json(err)
    }
     
})

//UPDATE
router.put("/:id",verifyToken,async (req,res)=>{
    try{
        
        const updatedComment=await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        const updated = filter.clean(updatedComment)
        res.status(200).json(updated)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE
router.delete("/:id",verifyToken,async (req,res)=>{
    try{
        await Comment.findByIdAndDelete(req.params.id)
        
        res.status(200).json("Comment has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})




//GET POST COMMENTS
router.get("/post/:postId",async (req,res)=>{
    try{
        const comments=await Comment.find({postId:req.params.postId})
        res.status(200).json(comments)
    }
    catch(err){
        res.status(500).json(err)
    }
})


router.patch("/:id/flag" ,verifyToken, async(req,res) =>{
       try{
         const comment = await Comment.findById(req.params.id);
         if(!comment) return res.status(400).send('Comment not found');

         comment.flagged = true;
         await comment.save();
         res.send(comment)
       }catch(err)
       {
        console.log(err);
        res.status(500).send('Server error');
       }
})


module.exports=router