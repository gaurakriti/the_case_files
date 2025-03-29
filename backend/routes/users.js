const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const Post=require('../models/Post')
const Comment=require('../models/Comment')
const verifyToken = require('../verifyToken')


//UPDATE
// router.put("/:id",verifyToken,async (req,res)=>{
//     try{
//         if(req.body.password){
//             const salt=await bcrypt.genSalt(10)
//             req.body.password=await bcrypt.hashSync(req.body.password,salt)
//         }
//         const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
//         res.status(200).json(updatedUser)

//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })

router.put("/:id", verifyToken, async (req, res) => {
    console.log("Request Body:", req.body); // Debug to see the incoming request body
    try {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        console.log("Updating user ID:", req.params.id); // Debug to see the ID of the user being updated
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        console.log("Updated User:", updatedUser); // Debug to see the result of the update operation
        res.status(200).json(updatedUser);
    } catch(err) {
        console.error("Update Error:", err); // This will print any error to the console.
        res.status(500).json(err);
    }
});



//DELETE
router.delete("/:id",verifyToken,async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        await Post.deleteMany({userId:req.params.id})
        await Comment.deleteMany({userId:req.params.id})
        res.status(200).json("User has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET USER
router.get("/:id",async (req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        const {password,...info}=user._doc
        res.status(200).json(info)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router