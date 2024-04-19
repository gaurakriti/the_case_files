// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { BsSearch } from 'react-icons/bs'; // Ensure you have `react-icons` installed
// import Navbar from '../components/Navbar'; // Adjust the import path as needed
// import Footer from '../components/Footer'; // Adjust the import path as needed
// import Loader from '../components/Loader'; // Adjust the import path as needed
// import '../App.css'; // Ensure this path is correct for your styling
// import HomePosts from "../components/HomePosts"
// import { IF, URL } from "../url"
// import { useContext} from "react"
// import { UserContext } from "../context/UserContext"
// import '../App.css'

// const useQuery = () => new URLSearchParams(useLocation().search);

// const AllPosts = () => {
//   const {search}=useLocation()
//   // console.log(search)
//   const [posts,setPosts]=useState([])
//   const [noResults,setNoResults]=useState(false)
//   const [loader,setLoader]=useState(false)
//   const {user}=useContext(UserContext)
//   const [prompt,setPrompt]=useState("")
//   const navigate=useNavigate()


//      const fetchPosts=async()=>{
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
    
//     <div>
//     <Navbar/>
//       <div className="content">
//         <div className="flex justify-center items-center mt-4">
//           <input 
//             onChange={(e) => setPrompt(e.target.value)} 
//             className="outline-none px-3 py-2 rounded-l-lg border border-r-0" 
//             placeholder="Search a post" 
//             type="text"
//           />
//           <p onClick={() => navigate(prompt ? `?search=${prompt}` : "/allposts")} 
//             className="cursor-pointer bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-lg border border-l-0 flex items-center justify-center">
//             <BsSearch/>
//           </p>
//         </div>
//         {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
//         posts.map((post)=>(
//           <>
//           <Link to={user?`/posts/post/${post._id}`:"/login"}>
//           <HomePosts key={post._id} post={post}/>
//           </Link>
//           </>
          
//         )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
    

    
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default AllPosts;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { BsSearch } from 'react-icons/bs'; // Ensure you have `react-icons` installed
// import Navbar from '../components/Navbar'; // Adjust the import path as needed
// import Footer from '../components/Footer'; // Adjust the import path as needed
// import Loader from '../components/Loader'; // Adjust the import path as needed
// import { useContext} from "react"
// import { UserContext } from "../context/UserContext"
// import '../App.css'
// import { IF, URL } from "../url"






// const AllPosts = () => {
//   const {search}=useLocation()
//   // console.log(search)
//   const [posts,setPosts]=useState([])
//   const [noResults,setNoResults]=useState(false)
//   const [loader,setLoader]=useState(false)
//   const {user}=useContext(UserContext)
//   const [prompt,setPrompt]=useState("")
//   const navigate=useNavigate()


//      const fetchPosts=async()=>{
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
    
//     <div>
//     <Navbar/>
//     {path==="/" && <div className="flex justify-center items-center space-x-0">
//     <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch/></p>
//     <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text"/>
//     </div>}

//     <div className="px-8 md:px-[200px] min-h-[80vh]">
//         {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
//         posts.map((post)=>(
//           <>
//           <Link to={user?`/posts/post/${post._id}`:"/login"}>
//           <HomePosts key={post._id} post={post}/>
//           </Link>
//           </>
          
//         )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
//     </div>
//       <Footer />
//     </div>
//   );
// };

// export default AllPosts;




import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from '../context/ThemeContext';
import { BsSearch } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import HomePosts from '../components/HomePosts'; // Make sure this path is correct
import { UserContext } from "../context/UserContext";
import '../App.css';
import { URL } from "../url";

const AllPosts = () => {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);
  const [prompt, setPrompt] = useState("");
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + location.search);
      setPosts(res.data);
      setNoResults(res.data.length === 0);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false); // It should be false here to stop loading on error
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [location.search]);

  return (
    <ThemeProvider>
    <div className={`theme-${theme}`}>
    <div>
      <Navbar/>
      <div className="flex justify-center items-center space-x-0">
        <input onChange={(e) => setPrompt(e.target.value)} className="outline-none px-3" placeholder="Search a post" type="text"/>
        <p onClick={() => navigate(prompt ? "?search=" + prompt : "/")} className="cursor-pointer">
          <BsSearch/>
        </p>
      </div>
      <header class="header-container m-10">
            <h1 class="header-title m-2 text-5xl  font-bold text-center"> Sherlock Holmes Blogs</h1>
           
        </header>
      <div className="px-8 md:px-[200px] min-h-[80vh]">
      <main class="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader/>
          </div>
        ) : !noResults ? (
          posts.map((post) => (
            <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
              <HomePosts post={post}/>
            </Link>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16">No posts available</h3>
        )}
        </main>
      </div>
      <Footer/>
    </div>
    </div>
    </ThemeProvider>
  );
};

export default AllPosts;

