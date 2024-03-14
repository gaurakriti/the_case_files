import axios from "axios"
import Footer from "../components/Footer"
import HomePosts from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { IF, URL } from "../url"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Loader from '../components/Loader'
import { UserContext } from "../context/UserContext"
 

const Home = () => {
  
  const {search}=useLocation()
  // console.log(search)
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  // console.log(user)

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
<header class="bg-[rgb(16,21,23)] text-center text-white py-20 relative">
        <h1 class="text-4xl mb-4">Blog with the best.</h1>
        <p class="mb-6">More bloggers and independent creators choose our platform than any other blogging tool.</p>
       
        <img src="./images/abc.jpg" alt="Featured Image" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-xl border-4 border-gray-300"/>
    </header>
<main class="container mx-auto my-12">
        <section class="text-center mb-12">
            <h2 class="text-2xl text-black mb-4">Simple, meet flexible.</h2>
            <p class="mb-8">Whatever you’re publishing. Whoever your audience is. Our platform makes it simple to get started and easy to expand as your audience grows.</p>
            <div class="space-x-4">
                <a href="#" class="bg-black text-white py-2 px-4 rounded font-bold">Start Writing</a>
                <a href="#" class="bg-white text-black py-2 px-4 rounded border border-black font-bold">Pick a design first</a>
            </div>
        </section>
        <figure>
            <img src="./images/54.wp4418192.jpg" alt="Blog Image" class="mx-auto grayscale hover:grayscale-0 transition duration-300"/>
        </figure>
    </main>
        {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
        posts.map((post)=>(
          <>
          <Link to={user?`/posts/post/${post._id}`:"/login"}>
          <HomePosts key={post._id} post={post}/>
          </Link>
          </>
          
        )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
    </div>

    
    <footer class="bg-black text-white text-center py-4">
        <p>© 2024 The Case Study Blog</p>
    </footer>
    </>
    
  )
}

export default Home