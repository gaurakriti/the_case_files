
import { Link, useNavigate } from "react-router-dom"
import { useState , useContext} from "react"
 import axios from 'axios'
 import {URL} from '../url'
import Footer from "../components/Footer"
import { ThemeProvider, ThemeContext } from '../context/ThemeContext';
import "../App.css"
const Register = () => {

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const { theme } = useContext(ThemeContext);
  const navigate=useNavigate()
  
  const handleRegister=async ()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/register",{username,email,password})
      console.log(res.data)
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setUsername("");
      setEmail("");
      setPassword("");
      setError(false)
     
      navigate("/")
      
    }
    catch(err){
      setError(true)
      console.log(err)
    }

  }

  

  return (
    <ThemeProvider>
     
    <div className="bg-gray-100">
    <div className={`theme-${theme}`}>
      {/* Navbar */}
      <nav className="bg-black text-white p-4">
       
       <div className="container mx-auto flex justify-between items-center">
          <Link to = "/"><h1 className="text-2xl font-bold">THE CASE FILES.com</h1></Link>
          <div>
            <button><Link to="/login" className="text-blue-500 italic p-3 drop-shadow">Already have an account?</Link></button>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="container mx-auto my-8">
        <div className="main-section flex flex-col items-center">
          <div className="flex h-64 rounded-xl mx-auto shadow-lg overflow-hidden">
            {/* Left section */}
            <div className="ml-16 mt-12">
              <pre className="text-3xl mb-3 ml-8 text-black font-semibold w-1/2 text-center">    WELCOME TO
              THE CASE FILES.com</pre>
              <div>
                <p className="text-black text-center ml-8 w-1/2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere culpa esse iste possimus magni numquam voluptate,
                  ex ipsa beatae illo?</p>
              </div>
            </div>
          </div>

          <div className="py-16 md:pl-20 md:pr-20">
            <h1 className="text-3xl mb-4">Register</h1>
            <p className="mb-4">Create your account for free</p>
            <form action="#" className="max-w-md mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username" className="border border-gray-400 py-1 px-2" />
                <br></br>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" className="border border-gray-400 py-1 px-2" />
                <br></br>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="border border-gray-400 py-1 px-2" />
              </div>
            
              <div className="my-5">
                <button onClick={handleRegister} className="w-full md:w-1/3 bg-[#117AC9] text-white border rounded py-3 text-center">Register Now</button>
                {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Register;
