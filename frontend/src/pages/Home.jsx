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
      // console.log(res.data)
      setPosts(res.data)
      if(res.data.length===0){
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
<div className="px-2 md:px-[200px] min-h-[80vh]">
{/* <header class="bg-[rgb(16,21,23)] text-center text-white py-20 relative">
        <h1 class="text-4xl mb-4">Blog with the best.</h1>
        <p class="mb-6">More bloggers and independent creators choose our platform than any other blogging tool.</p>
       
        <img src="./images/abc.jpg" alt="Featured Image" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-xl border-4 border-gray-300"/>
    </header> */}

    <header class="bg-[rgb(16,21,23)] text-center text-white py-32 relative">
    <h1 class="text-4xl mb-4">Blog with the best.</h1>
    <p class="mb-6">More bloggers and independent creators choose our platform than any other blogging tool.</p>
   
    <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-40">
        <img src="./images/abc.jpg" alt="Featured Image" class="w-full h-full rounded-xl border-4 border-gray-300"/>
    </div>
</header>


<main class="container mx-auto my-12">
        <section class="text-center mb-12">
            <h2 class="text-2xl text-black mb-4">Simple, meet flexible.</h2>
            <p class="mb-8">Whatever you’re publishing. Whoever your audience is. Our platform makes it simple to get started and easy to expand as your audience grows.</p>
            <div class="space-x-4">
            {!user && <Link to="/login"  class="bg-black text-white py-2 px-4 rounded font-bold" >Start Writing</Link>}
                <a href="#" class="bg-white text-black py-2 px-4 rounded border border-black font-bold">Pick a design first</a>
            </div>
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

// {/* <header class="bg-[rgb(16,21,23)] text-center text-white py-20 relative">
//         <h1 class="text-4xl mb-4">Blog with the best.</h1>
//         <p class="mb-6">More bloggers and independent creators choose our platform than any other blogging tool.</p>
       
//         <img src="./images/abc.jpg" alt="Featured Image" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-xl border-4 border-gray-300"/>
//     </header> */}
// <header>
//     <div class="bg-[rgb(16,21,23)] text-center h-[400px] relative py-16 ">
//         <h1 class="text-white ">Unlock The Mysteries</h1>
//         <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
//             <p class=" text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
//                 Uncover hidden clues, solve baffling mysteries, and unravel the enigma of the world's greatest detective. Join us on a thrilling journey into the heart of Sherlock's realm, where every twist and turn promises adventure and enlightenment. Start your investigation today
//             </p>
//           </div>
          
//              <button class="bg-white text-black border rounded border-black font-extrabold px-3 py-2">
//                 <a href="/register">Start a blog</a></button>
//              <img src="./images/fronte.jpg " class="absolute items-center scale-1 "/> 
//             </div>
//         <div class="h-[80px] mt-[15px] text-center">
//         <div class=" w-full h-[200px] flex justify-center items-center">
//             <h1 id="typewriter" class="text-4xl font-bold "></h1>
//         </div>
//         <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
//     <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800">
//         Embark on a journey through the enigmatic world of Sherlock Holmes. Dive into the depths of mystery and intrigue with our curated collection of blogs, uncovering the untold tales and unraveling the secrets behind the legendary detective. Join us as we explore the mind of Sherlock Holmes, where every clue is a puzzle waiting to be solved. Let the adventure begin
//     </p>
//   </div>
  
//              <div class="mx-5 my-9 space-x-4">
//               {user && <a href="/write"> <a href="/register"> <button class="bg-black text-white border rounded border-black font-extrabold px-3 py-2">Start Writing</button></a></a>}
//                 {!user && <a href="/register"><button class="bg-white text-black border rounded border-black font-extrabold px-3 py-2">Sign Up Now</button></a>}
//              </div>
//              <figure>
//                 <img src="./images/filter.jpg"   class="my-[100px] m-auto hover:filter-none filter grayscale object-contain"/>
//              </figure> 
// </header>

// <main class="container mx-auto my-9">
       
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

//   <footer>
//     <Footer/>
//   </footer>
//     </>
    
//   )
// }

// export default Home

