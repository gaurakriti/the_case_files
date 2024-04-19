


import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../context/UserContext"
import { ThemeProvider, ThemeContext ,ThemeSwitcher} from '../context/ThemeContext';
import axios from 'axios';
import Footer from '../components/Footer';
import HomePosts from '../components/HomePosts';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import Typewriter from './TypeWriter';
import '../App.css';
import {BsSearch} from 'react-icons/bs';
import { IF, URL } from "../url"


const Home = () => {
  const words = [
    "THE GAME IS ON.",
    "Alone is what I have, alone protects me...",
    "I'm not a PSYCHOPATH, I'm a high-functioning SOCIOPATH. Do your research",
  ];

  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      setPosts(res.data.slice(0, 3)); // Only take the first 3 posts
      setNoResults(res.data.length === 0);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

 

  return (
    <ThemeProvider>
    <div className={`theme-${theme}`}>
    
      <Navbar />
      
       
        <div>
          <div className="bg-[rgb(16,21,23)] text-center h-[400px] relative py-16 ">
            <h1 className="text-white ">Unlock The Mysteries</h1>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Uncover hidden clues, solve baffling mysteries, and unravel the enigma of the world's greatest detective. Join us on a thrilling journey into the heart of Sherlock's realm, where every twist and turn promises adventure and enlightenment. Start your investigation today
              </p>
            </div>
            {user && <a href="/write"> <button className="bg-black text-white border rounded border-black font-extrabold px-3 py-2">Start Writing</button></a>}
          </div>
          <div className="w-full h-[200px] flex justify-center items-center">
            <Typewriter words={words} />
          </div>
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800">
              Embark on a journey through the enigmatic world of Sherlock Holmes. Dive into the depths of mystery and intrigue with our curated collection of blogs, uncovering the untold tales and unraveling the secrets behind the legendary detective. Join us as we explore the mind of Sherlock Holmes, where every clue is a puzzle waiting to be solved. Let the adventure begin.
            </p>
          </div>
          <main className="container mx-auto my-12">
            <section className="text-center mb-12">
              <div className="mx-5 my-9 space-x-4">
                {!user && <a href="/register"><button className="bg-white text-black border rounded border-black font-extrabold px-3 py-2">Sign Up Now</button></a>}
              </div>
              <figure>
                <img src="./images/filter.jpg" className="my-[100px] m-auto hover:filter-none filter grayscale object-contain" />
              </figure>
            </section>
            <figure>
              <img src="./images/54.wp4418192.jpg" alt="Blog Image" className="mx-auto grayscale hover:grayscale-0 transition duration-300" />
            </figure>
          </main>
          <h1 className="text-center text-6xl mb-7 text-gray-600"> Trending Blogs </h1>
        </div>
        <main class="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
         {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
       posts.map((post)=>(
       
           <div key={post._id} className=" mb-4">
           <Link to={user?`/posts/post/${post._id}`:"/login"}>
           <HomePosts key={post._id} post={post}/>
           </Link>
           </div>
        
         )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
  
 </main>

      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
