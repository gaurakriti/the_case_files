// import axios from "axios"
// import Footer from "../components/Footer"
// import HomePosts from "../components/HomePosts"
// import Navbar from "../components/Navbar"
// import { useNavigate } from "react-router-dom"
// import {BsSearch} from 'react-icons/bs'
// import { IF, URL } from "../url"
// import { useContext, useEffect, useState } from "react"
// import { Link, useLocation } from "react-router-dom"
// import Loader from '../components/Loader'
// import { UserContext } from "../context/UserContext"
// import '../App.css'
 

// const Home = () => {
  
//   const {search}=useLocation()
//   // console.log(search)
//   const [posts,setPosts]=useState([])
//   const [noResults,setNoResults]=useState(false)
//   const [loader,setLoader]=useState(false)
//   const {user}=useContext(UserContext)
//   const [prompt,setPrompt]=useState("")
//   const navigate=useNavigate()


//   const fetchPosts=async()=>{
//     setLoader(true)
//     try{
//       const res=await axios.get(URL+"/api/posts/"+search)
//       // console.log(res.data)
//       setPosts(res.data)
//       if(res.data.length===0){
//         setNoResults(true)
//       }
//       else{
//         setNoResults(false)
//       }
//       setLoader(false)
      
//     }
//     catch(err){
//       console.log(err)
//       setLoader(true)
//     }
//   }

//   useEffect(()=>{
//     fetchPosts()

//   },[search])



//   return (
    
//     <>
//     <Navbar/>
// <div >
// <div class="bg-[rgb(16,21,23)] text-center h-[400px] relative py-16 ">
//         <h1 class="text-white ">Unlock The Mysteries</h1>
//         <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
//             <p class=" text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
//                 Uncover hidden clues, solve baffling mysteries, and unravel the enigma of the world's greatest detective. Join us on a thrilling journey into the heart of Sherlock's realm, where every twist and turn promises adventure and enlightenment. Start your investigation today
//             </p>
//           </div>
          
//              <button class="bg-white text-black border rounded border-black font-extrabold px-3 py-2">
//                 <a href="signUp.html">Start a blog</a></button>
             
//             </div>






// <main class="container mx-auto my-12">

//         <section class="text-center mb-12">
//         <div class="mx-5 my-9 space-x-4">
//               <a href="edit.html"/> <a href="edit.html"> <button class="bg-black text-white border rounded border-black font-extrabold px-3 py-2">Start Writing</button></a>
//                 <a href="signUp.html"><button class="bg-white text-black border rounded border-black font-extrabold px-3 py-2">Sign Up Now</button></a>
//              </div>
//              <figure>
//                 <img src="./images/filter.jpg"   class="my-[100px] m-auto hover:filter-none filter grayscale object-contain"/>
//              </figure>
            
//         </section>
//         <figure>
//             <img src="./images/54.wp4418192.jpg" alt="Blog Image" class="mx-auto grayscale hover:grayscale-0 transition duration-300"/>
//         </figure>
        
          
//     </main>

    
//     <div className="flex justify-center items-center mt-4">
//     <input 
//         onChange={(e) => setPrompt(e.target.value)} 
//         className="outline-none px-3 py-2 rounded-l-lg border border-r-0" 
//         placeholder="Search a post" 
//         type="text"
//     />
//     <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))} 
//        className="cursor-pointer bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-lg border border-l-0 flex items-center justify-center">
//         <BsSearch/>
//     </p>
// </div>
      
//         {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
//         posts.map((post)=>(
//           <>
//           <Link to={user?`/posts/post/${post._id}`:"/login"}>
//           <HomePosts key={post._id} post={post}/>
//           </Link>
//           </>
          
//         )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
//     </div>

    
//     <Footer/>
//     </>
    
//   )
// }

// export default Home

import axios from "axios"
import Footer from "../components/Footer"
import HomePosts from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import { IF, URL } from "../url"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Loader from '../components/Loader'
import { UserContext } from "../context/UserContext"
import '../App.css'
 

const Home = () => {
  
  const {search}=useLocation()
  // console.log(search)
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  const [prompt,setPrompt]=useState("")
  const navigate=useNavigate()


  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/posts/"+search)
      // Here, modify the line where you set the posts to only include the first 3
      setPosts(res.data.slice(0, 3)) // Only take the first 3 posts
      if(res.data.length === 0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
    }
    catch(err){
      console.log(err)
      setLoader(true)
    }
  }
  

  useEffect(()=>{
    fetchPosts()

  },[search])



  return (
    
    <>
    <Navbar/>
<div >
<div class="bg-[rgb(16,21,23)] text-center h-[400px] relative py-16 ">
        <h1 class="text-white ">Unlock The Mysteries</h1>
        <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <p class=" text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Uncover hidden clues, solve baffling mysteries, and unravel the enigma of the world's greatest detective. Join us on a thrilling journey into the heart of Sherlock's realm, where every twist and turn promises adventure and enlightenment. Start your investigation today
            </p>
          </div>
          
             <button class="bg-white text-black border rounded border-black font-extrabold px-3 py-2">
                <a href="signUp.html">Start a blog</a></button>
             
            </div>






<main class="container mx-auto my-12">

        <section class="text-center mb-12">
        <div class="mx-5 my-9 space-x-4">
              <a href="edit.html"/> <a href="edit.html"> <button class="bg-black text-white border rounded border-black font-extrabold px-3 py-2">Start Writing</button></a>
                <a href="signUp.html"><button class="bg-white text-black border rounded border-black font-extrabold px-3 py-2">Sign Up Now</button></a>
             </div>
             <figure>
                <img src="./images/filter.jpg"   class="my-[100px] m-auto hover:filter-none filter grayscale object-contain"/>
             </figure>
            
        </section>
        <figure>
            <img src="./images/54.wp4418192.jpg" alt="Blog Image" class="mx-auto grayscale hover:grayscale-0 transition duration-300"/>
        </figure>
        
          
    </main>

    
    <div className="flex justify-center items-center mt-4">
    <input 
        onChange={(e) => setPrompt(e.target.value)} 
        className="outline-none px-3 py-2 rounded-l-lg border border-r-0" 
        placeholder="Search a post" 
        type="text"
    />
    <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))} 
       className="cursor-pointer bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-lg border border-l-0 flex items-center justify-center">
        <BsSearch/>
    </p>
</div>
      
        {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
        posts.map((post)=>(
          <>
          <Link to={user?`/posts/post/${post._id}`:"/login"}>
          <HomePosts key={post._id} post={post}/>
          </Link>
          </>
          
        )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
    </div>

    
    <Footer/>
    </>
    
  )
}

export default Home

