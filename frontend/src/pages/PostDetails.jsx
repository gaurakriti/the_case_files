// import { useNavigate, useParams } from "react-router-dom"
// import Comment from "../components/Comment"
// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
// import {BiEdit} from 'react-icons/bi'
// import {MdDelete} from 'react-icons/md'
// import axios from "axios"
// import { URL,IF } from "../url"
// import { useContext, useEffect, useState } from "react"
// import { UserContext } from "../context/UserContext"
// import Loader from "../components/Loader"


// const PostDetails = () => {

//   const postId=useParams().id
//   const [post,setPost]=useState({})
//   const {user}=useContext(UserContext)
//   const [comments,setComments]=useState([])
//   const [comment,setComment]=useState("")
//   const [loader,setLoader]=useState(false)
//   const navigate=useNavigate()
  

//   const fetchPost=async()=>{
//     try{
//       const res= await axios.get(URL+"/api/posts/"+postId)
//       // console.log(res.data)
//       setPost(res.data)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }

//   const handleDeletePost=async ()=>{

//     try{
//       const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
//       console.log(res.data)
//       navigate("/")

//     }
//     catch(err){
//       console.log(err)
//     }

//   }

//   useEffect(()=>{
//     fetchPost()

//   },[postId])

//   const fetchPostComments=async()=>{
//     setLoader(true)
//     try{
//       const res=await axios.get(URL+"/api/comments/post/"+postId)
//       setComments(res.data)
//       setLoader(false)

//     }
//     catch(err){
//       setLoader(true)
//       console.log(err)
//     }
//   }

//   useEffect(()=>{
//     fetchPostComments()

//   },[postId])

//   const postComment=async(e)=>{
//     e.preventDefault()
//     try{
//       const res=await axios.post(URL+"/api/comments/create",
//       {comment:comment,author:user.username,postId:postId,userId:user._id},
//       {withCredentials:true})
      
//       // fetchPostComments()
//       // setComment("")
//       window.location.reload(true)

//     }
//     catch(err){
//          console.log(err)
//     }

//   }


  
//   return (
//     <div>
//         <Navbar/>
//         {loader?<div className="h-[80vh] flex justify-center items-center w-full"><Loader/></div>:<div className="px-8 md:px-[200px] mt-8">
//         <div className="flex justify-between items-center">
//          <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
//          {user?._id===post?.userId && <div className="flex items-center justify-center space-x-2">
//             <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)} ><BiEdit/></p>
//             <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
//          </div>}
//         </div>
//         <div className="flex items-center justify-between mt-2 md:mt-4">
//         <p>@{post.username}</p>
//        <div className="flex space-x-2">
//        <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
//        <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
//        </div>
//         </div>
//         <img src={IF+post.photo} className="w-full  mx-auto mt-8" alt=""/>
//          <p className="mx-auto mt-8">{post.desc}</p>
//          <div className="flex items-center mt-8 space-x-4 font-semibold">
//           <p>Categories:</p>
//           <div className="flex justify-center items-center space-x-2">
//           {post.categories?.map((c,i)=>(
//             <>
//             <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
//             </>
            
//           ))}
            
//           </div>
//          </div>
//          <div className="flex flex-col mt-4">
//          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
//          {comments?.map((c)=>(
//           <Comment key={c._id} c={c} post={post} />
//          ))}
           
//          </div>
//          {/* write a comment */}
//          <div className="w-full flex flex-col mt-4 md:flex-row">
//           <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
//           <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
//          </div>
//         </div>}
//         <Footer/>
//     </div>
//   )
// }

// export default PostDetails



import { useNavigate, useParams } from "react-router-dom"
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Comment from "../components/Comment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import axios from "axios"
import { URL,IF } from "../url"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Loader from "../components/Loader"


const PostDetails = () => {
   

  const postId=useParams().id
  const [post,setPost]=useState({})
  const {user}=useContext(UserContext)
  const [comments,setComments]=useState([])
  const [comment,setComment]=useState("")
  const [loader,setLoader]=useState(false)
  const navigate=useNavigate()
  
  const [isLiked, setIsLiked] = useState(false);
  // Replace this with the actual post ID

  // const handleLike = async () => {
  //   try {
  //     await axios.put('/api/posts/like', { postId }, { withCredentials: true });
  //     setIsLiked(true);
  //   } catch (error) {
  //     console.error('Error liking post:', error);
  //   }
  // };

  // const handleUnlike = async () => {
  //   try {
  //     await axios.put('/api/posts/unlike', { postId }, { withCredentials: true });
  //     setIsLiked(false);
  //   } catch (error) {
  //     console.error('Error unliking post:', error);
  //   }
  // };
  const fetchPost=async()=>{
    try{
      const res= await axios.get(URL+"/api/posts/"+postId)
      // console.log(res.data)
      setPost(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  const handleDeletePost=async ()=>{

    try{
      const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
      console.log(res.data)
      navigate("/")

    }
    catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    fetchPost()

  },[postId])

  const fetchPostComments=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/comments/post/"+postId)
      setComments(res.data)
      setLoader(false)

    }
    catch(err){
      setLoader(true)
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPostComments()

  },[postId])

  const postComment=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(URL+"/api/comments/create",
      {comment:comment,author:user.username,postId:postId,userId:user._id},
      {withCredentials:true})
      
      // fetchPostComments()
      // setComment("")
      window.location.reload(true)

    }
    catch(err){
         console.log(err)
    }

  }

  const handleLike = async (postId) => {
    try {
      const res = await fetch(`${URL}/api/likes/${postId}`, {
        method: 'PUT',
      });
      if (res.ok) {
        const data = await res.json();
        setPost(
          post.map((p) =>
            p._id === postId
              ? {
                  ...p,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : p
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  
  const shareOnWhatsApp = () => {
        const shareUrl = `whatsapp://send?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`;
        window.open(shareUrl);
      };

      const shareOnTwitter = () => {
            const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`;
            window.open(shareUrl);
          };

          const shareOnFacebook = () => {
                const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
                window.open(shareUrl);
              };
  
  return (
    <div>
        <Navbar/>
        {loader?<div className="h-[80vh] flex justify-center items-center w-full"><Loader/></div>:<div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
         {user?._id===post?.userId && <div className="flex items-center justify-center space-x-2">
            <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)} ><BiEdit/></p>
            <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
         </div>}
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@{post.username}</p>
       <div className="flex space-x-2">
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
       </div>
        </div>
        <img src={IF+post.photo} className="w-full  mx-auto mt-8" alt=""/>
         <p className="mx-auto mt-8">{post.desc}</p>
         <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
          {post.categories?.map((c,i)=>(
            <>
            <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
            </>
            
          ))}
            
          </div>
         </div>
         <div className="flex flex-col mt-4">
         <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
         {comments?.map((c)=>(
          <Comment key={c._id} c={c} post={post} />
         ))}
           
         </div>
         {/* write a comment */}
         <div className="w-full flex flex-col mt-4 md:flex-row">
          <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
          <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
         </div>
         <div>
         {!isLiked ? (
  <button onClick={handleLike} className="bg-blue-500 text-black font-semibold px-4 py-2 rounded-md mt-4">
    <FaThumbsUp /> Like
  </button>
) : (
  {/* <button onClick={handleUnlike} className="bg-red-500 text-black font-semibold px-4 py-2 rounded-md mt-4">
    <FaThumbsDown/> Unlike
  </button> */}
)}

            
     
    
            <button className="bg-blue-500 text-white font-semibold mx-4 px-4 py-2 rounded-md">Follow</button>
          </div>
          
          <div className="mt-4 py-3">
            <button onClick = {shareOnWhatsApp} className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md mr-2">Share on WhatsApp</button>
            <button onClick={shareOnTwitter} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mr-2">Share on Twitter</button>
            <button onClick={shareOnFacebook} className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md">Share on Facebook</button>

          </div>
        </div>
          
        }
        <Footer/>
    </div>
  )
}

export default PostDetails


// import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
// import Comment from "../components/Comment"
// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
// import {BiEdit} from 'react-icons/bi'
// import {MdDelete} from 'react-icons/md'
// import axios from "axios"
// import { URL, IF } from "../url"
// import { useContext, useEffect, useState } from "react"
// import { UserContext } from "../context/UserContext"
// import Loader from "../components/Loader"

// const PostDetails = () => {
//   const [isLiked, setIsLiked] = useState(false);
//   const postId = useParams().id;
//   const { user } = useContext(UserContext);
//   const [post, setPost] = useState({});
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState("");
//   const [loader, setLoader] = useState(false);
//   const navigate = useNavigate();

//   // Fetch post details
//   const fetchPost = async () => {
//     try {
//       const res = await axios.get(URL+"/api/posts/"+postId);
//       setPost(res.data);
//     } catch(err) {
//       console.log(err);
//     }
//   };

//   // Handle post like
//   const handleLike = async () => {
//     try {
//       await axios.put('/like', { postId: post._id });
//       setIsLiked(true);
//     } catch (error) {
//       console.error('Error liking post:', error);
//     }
//   };

//   // Handle post unlike
//   const handleUnlike = async () => {
//     try {
//       await axios.put('/unlike', { postId: post._id });
//       setIsLiked(false);
//     } catch (error) {
//       console.error('Error unliking post:', error);
//     }
//   };

//   // Fetch post comments
//   const fetchPostComments = async () => {
//     setLoader(true);
//     try {
//       const res = await axios.get(URL+"/api/comments/post/"+postId);
//       setComments(res.data);
//       setLoader(false);
//     } catch(err) {
//       setLoader(true);
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchPost();
//     fetchPostComments();
//   }, [postId]);

//   // Handle posting comments
//   const postComment = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(URL+"/api/comments/create", {
//         comment: comment,
//         author: user.username,
//         postId: postId,
//         userId: user._id
//       }, { withCredentials: true });
//       window.location.reload(true);
//     } catch(err) {
//       console.log(err);
//     }
//   };

//   // Share post on WhatsApp
//   const shareOnWhatsApp = () => {
//     const shareUrl = `whatsapp://send?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`;
//     window.open(shareUrl);
//   };

//   // Share post on Twitter
//   const shareOnTwitter = () => {
//     const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`;
//     window.open(shareUrl);
//   };

//   // Share post on Facebook
//   const shareOnFacebook = () => {
//     const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
//     window.open(shareUrl);
//   };

//   return (
//     <div>
//       <Navbar/>
//       {loader ? (
//         <div className="h-[80vh] flex justify-center items-center w-full"><Loader/></div>
//       ) : (
//         <div className="px-8 md:px-[200px] mt-8">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
//             {user?._id===post?.userId && (
//               <div className="flex items-center justify-center space-x-2">
//                 <p className="cursor-pointer" onClick={() => navigate("/edit/"+postId)} ><BiEdit/></p>
//                 <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
//               </div>
//             )}
//           </div>
//           {/* Post content */}
//           <div className="flex items-center justify-between mt-2 md:mt-4">
//             <p>@{post.username}</p>
//             <div className="flex space-x-2">
//               <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
//               <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
//             </div>
//           </div>
//           <img src={IF + post.photo} className="w-full  mx-auto mt-8" alt=""/>
//           <p className="mx-auto mt-8">{post.desc}</p>
//           {/* Categories */}
//           <div className="flex items-center mt-8 space-x-4 font-semibold">
//             <p>Categories:</p>
//             <div className="flex justify-center items-center space-x-2">
//               {post.categories?.map((c, i) => (
//                 <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
//               ))}
//             </div>
//           </div>
//           {/* Comments */}
//           <div className="flex flex-col mt-4">
//             <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
//             {comments?.map((c) => (
//               <Comment key={c._id} c={c} post={post} />
//             ))}
//           </div>
//           {/* Write a comment */}
//           <div className="w-full flex flex-col mt-4 md:flex-row">
//             <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
//             <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
//           </div>
//           {/* Like/Unlike buttons */}
//           <div>
//             {!isLiked ? (
//               <button onClick={handleLike} className="bg-blue-500 text-black font-semibold px-4 py-2 rounded-md mt-4"><FaThumbsUp /> </button>
//             ) : (
//               <button onClick={handleUnlike} className="bg-red-500 text-black font-semibold px-4 py-2 rounded-md mt-4"><FaThumbsDown/></button>
//             )}
//           </div>
//           {/* Share buttons */}
//           <div className="mt-4">
//             <button onClick={shareOnWhatsApp} className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md mr-2">Share on WhatsApp</button>
//             <button onClick={shareOnTwitter} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mr-2">Share on Twitter</button>
//             <button onClick={shareOnFacebook} className="bg-facebook text-white font-semibold px-4 py-2 rounded-md">Share on Facebook</button>
//           </div>
//         </div>
//       )}
//       <Footer/>
//     </div>
//   );
// };

// export default PostDetails;
