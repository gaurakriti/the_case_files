import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"


const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const {setUser}=useContext(UserContext)
    const navigate=useNavigate()
  
    const handleLogin=async()=>{
      try{
        const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
        // console.log(res.data)
        setUser(res.data)
        navigate("/")
  
      }
      catch(err){
        setError(true)
        console.log(err)
  
      }
  
    }

    return (
        <>
            {/* Navbar */}
            <nav className="bg-black shadow-md" id = "login">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <h1 className="text-2xl font-bold text-white">THE CASE FILES.com</h1>
                    <div>
                        <ul className="flex space-x-4">
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><Link to="/about" className="text-white">About</Link></li>
                            <li><Link to="/contact" className="text-white">Contact</Link></li>
                            <li><button><Link to="/register" className="text-white rounded border p-2 italic">Sign Up</Link></button></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Content Section */}
            <div className="container mx-auto my-8 h-[445px]">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold">LOG IN TO THE CASE FILES.com</h1>
                    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mt-6">
                        <h2 className="text-2xl font-bold mb-4">Log in</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <input type="text" placeholder="Username or Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mt-6">
                        <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Log in</button>
                        {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer class="bg-gray-900 text-white py-4">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 The Case Files. All rights reserved.</p>
        </div>
    </footer>
        </>
    );
};

export default Login;


