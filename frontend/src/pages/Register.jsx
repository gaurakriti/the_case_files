


// import { Link, useNavigate } from "react-router-dom"
// import Footer from "../components/Footer"
// import { useState } from "react"
// import axios from 'axios'
// import {URL} from '../url'


// const Register = () => {

//   const [username,setUsername]=useState("")
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const [error,setError]=useState(false)
//   const navigate=useNavigate()

//   const handleRegister=async ()=>{
//     try{
//       const res=await axios.post(URL+"/api/auth/register",{username,email,password})
//       console.log(res.data)
//       setUsername(res.data.username)
//       setEmail(res.data.email)
//       setPassword(res.data.password)
//       setError(false)
//       navigate("/login")
//     }
//     catch(err){
//       setError(true)
//       console.log(err)
//     }

//   }

  

//   return (
//     <>
//       <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
//     <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
//     <h3><Link to="/login">Login</Link></h3>
//     </div>
//     <div className="w-full flex justify-center items-center h-[80vh] ">
//        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
//          <h1 className="text-xl font-bold text-left">Create an account</h1>
//          <input onChange={(e)=>setUsername(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your username" />
//          <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" />
//          <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" />
//          <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Register</button>
//          {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
//          <div className="flex justify-center items-center space-x-3">
//           <p>Already have an account?</p>
//           <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
//          </div>
//        </div>
//     </div>
//     <Footer/>
//     </>
    
//   )
// }

// export default Register








import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
 import axios from 'axios'
 import {URL} from '../url'

const Register = () => {

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()
  
  const handleRegister=async ()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/register",{username,email,password})
      console.log(res.data)
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigate("/")
      
    }
    catch(err){
      setError(true)
      console.log(err)
    }

  }

  

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">THE CASE FILES.com</h1>
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
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" className="border border-gray-400 py-1 px-2" />
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
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 The Case Files. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Register;
