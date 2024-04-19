
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { ThemeProvider,ThemeContext } from '../context/ThemeContext';
import { URL } from '../url';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImCross } from 'react-icons/im';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
  const {theme} = useContext(ThemeContext)
  console.log(file);
  const navigate = useNavigate();

  // Example predefined categories
  const predefinedCategories = ["Category1", "Category2", "Category3"];

  const deleteCategory = (index) => {
    setCats(cats.filter((_, i) => i !== index));
  };

  const addCategory = () => {
    if (cat && !cats.includes(cat)) {
      setCats(prevCats => [...prevCats, cat]);
      setCat("");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append("name", filename);
      formData.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post(`${URL}/api/upload`, formData);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post(`${URL}/api/posts/create`, newPost, { withCredentials: true });
      navigate("/posts/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider>
    
    <div>
      <Navbar />
      <div className="bg-[url('./images/bg10.jpg')] " >
      <div className={`theme-${theme}`}>
        <h1 className='font-bold md:text-2xl text-xl'>Create a post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input
            type="text"
            placeholder='Enter post title'
            className='px-4 py-2 outline-none'
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            className='px-4'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <select
            className='px-4 py-2 outline-none'
            value={cat}
            onChange={(e) => setCat(e.target.value)}>
            <option value="">Select Category</option>
            {predefinedCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          <button type="button" onClick={addCategory} className='bg-black text-white px-4 py-2 font-semibold'>
            Add Category
          </button>
          <div className='flex flex-wrap'>
            {cats.map((c, i) => (
              <div key={i} className='flex items-center mr-2 mb-2 bg-gray-200 px-2 py-1 rounded-md'>
                <span>{c}</span>
                <ImCross className='ml-2 cursor-pointer' onClick={() => deleteCategory(i)} />
              </div>
            ))}
          </div>
          <textarea
            className='px-4 py-2 outline-none'
            rows="4"
            placeholder='Enter post description'
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleCreate}
            className="px-3 py-3 text-white bg-black rounded-md font-semibold w-50%">
            Upload Blog
          </button>
        </form>
      </div>
      <Footer />
    </div>
    </div>
    </ThemeProvider>
  );
};

export default CreatePost;
