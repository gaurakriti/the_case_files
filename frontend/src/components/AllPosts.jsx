import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'; // Ensure you have `react-icons` installed
import Navbar from '../components/Navbar'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed
import Loader from '../components/Loader'; // Adjust the import path as needed
import '../App.css'; // Ensure this path is correct for your styling

const useQuery = () => new URLSearchParams(useLocation().search);

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();
  const query = useQuery();
  const searchQuery = query.get('search');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoader(true);
      try {
        const response = await axios.get(`YOUR_API_ENDPOINT/posts${searchQuery ? `?search=${searchQuery}` : ''}`);
        setPosts(response.data);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    };

    fetchPosts();
  }, [searchQuery]);

  return (
    <div className="app-container" id = "allposts">

      <div className="content">
        <div className="flex justify-center items-center mt-4">
          <input 
            onChange={(e) => setPrompt(e.target.value)} 
            className="outline-none px-3 py-2 rounded-l-lg border border-r-0" 
            placeholder="Search a post" 
            type="text"
          />
          <p onClick={() => navigate(prompt ? `?search=${prompt}` : "/")} 
            className="cursor-pointer bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-lg border border-l-0 flex items-center justify-center">
            <BsSearch/>
          </p>
        </div>
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center"><Loader/></div>
        ) : posts.length ? (
          posts.map((post) => (
            <Link to={`/posts/post/${post._id}`} key={post._id}>
              <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <img src={post.imageUrl || './images/placeholder.jpg'} alt="Blog" className="w-full h-64 object-cover rounded-t-lg"/>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-700">{post.description}</p>
                    <a href="#" className="text-blue-500 hover:underline">Read More</a>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16">No posts available</h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllPosts;
