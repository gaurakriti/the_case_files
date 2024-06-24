// import { useContext } from "react"
// import { UserContext } from "../context/UserContext"
// import axios from "axios"
// import { URL } from "../url"
// import { Link, useNavigate } from "react-router-dom"


// const Menu = () => {
// const {user}=useContext(UserContext)
// const {setUser}=useContext(UserContext)
// const navigate=useNavigate()

// const handleLogout=async()=>{
//   try{
//     const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
//     // console.log(res)
//     setUser(null)
//     navigate("/")

//   }
//   catch(err){
//     console.log(err)
//   }
// }
//   return (
//     <div className="bg-black w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
//     <div class="logo   hover:cursor-pointer  "><Link to="/"   class="flex"><img src="./images/logonew.jpg" alt="" class="h-[50px] object-fill w-[50px] ml-6 mt-2"/> <h2 class="text-white mt-2">THE CASE FILES</h2></Link></div>
//     {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/login">Login</Link></h3>}
//     {!user &&<h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/register">Register</Link></h3>}
//     {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={"/profile/"+user._id}>Dashboard</Link></h3>}
//     {user &&<h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/write">Write</Link></h3>}
//     {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={"/myblogs/"+user._id}>My blogs</Link></h3>}
//     {user &&<h3 onClick={handleLogout} className="text-white text-sm hover:text-gray-500 cursor-pointer">Logout</h3>}

//     </div>
//   )
// }

// export default Menu

import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(true); // State to control menu visibility
  const menuRef = useRef(null); // Ref for the menu

  const handleLogout = async () => {
    try {
      await axios.get(`${URL}/api/auth/logout`, { withCredentials: true });
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Hook to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return menuOpen ? (
    <div
      ref={menuRef}
      className="bg-gray-800 w-56 z-10 flex flex-col items-start absolute top-16 right-6 md:right-32 rounded-md p-4 space-y-4 shadow-lg"
    >
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-500 text-gray-900 font-bold">
            221B
          </div>

          <h2 className="text-white ml-2 text-lg font-semibold">THE CASE FILES</h2>
        </Link>
      </div>
      {!user && (
        <>
          <Link to="/login" className="text-white text-sm hover:text-gray-400 cursor-pointer">
            Login
          </Link>
          <Link to="/register" className="text-white text-sm hover:text-gray-400 cursor-pointer">
            Register
          </Link>
        </>
      )}
      {user && (
        <>
          <Link to={`/profile/${user._id}`} className="text-white text-sm hover:text-gray-400 cursor-pointer">
            Dashboard
          </Link>
          <Link to="/write" className="text-white text-sm hover:text-gray-400 cursor-pointer">
            Write
          </Link>
          <Link to={`/myblogs/${user._id}`} className="text-white text-sm hover:text-gray-400 cursor-pointer">
            My blogs
          </Link>
          <div onClick={handleLogout} className="text-white text-sm hover:text-gray-400 cursor-pointer">
            Logout
          </div>
        </>
      )}
    </div>
  ) : null;
};

export default Menu;
