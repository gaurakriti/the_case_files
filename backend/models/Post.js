const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:false,
        
    },
    username:{
        type:String,
        required:true,  
    },
    userId:{
        type:String,
        required:true,  
    },
    categories:{
        type:Array,
        
    },
    likes: {
        type: Array,
        default: [],
      },
      numberOfLikes: {
        type: Number,
        default: 0,
      },
},{timestamps:true})

module.exports=mongoose.model("Post",PostSchema)




// const mongoose = require('mongoose');

// const PostSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     desc: {
//         type: String,
//         required: true
//     },
//     photo: {
//         type: String,
//         required: false
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     userId: {
//         type: String,
//         required: true
//     },
//     categories: {
//         type: [String] // Assuming categories are stored as an array of strings
//     },
//     likes: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }],
//     followers: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }],
//     following: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }],
// }, { timestamps: true });

// module.exports = mongoose.model('Post', PostSchema);
