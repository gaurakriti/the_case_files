

import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"
import { ThemeProvider, ThemeContext } from '../context/ThemeContext';
import "../App.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const { theme } = useContext(ThemeContext);

    const handleLogin = async () => {
        try {
            const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true })
            setUser(res.data)
            setEmail("");
            setPassword("");
            navigate("/")

        } catch (err) {
            setError(true)
            console.log(err)
        }
    }

    return (
        <ThemeProvider>
        <div className={`theme-${theme}`}>
            {/* Navbar */}
            
            <nav className="bg-black shadow-md" id="login">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <Link to="/"> <h1 className="text-2xl font-bold text-white">THE CASE FILES.com</h1></Link>
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
                    <div className="bg-white rounded-lg shadow-md p-9 max-w-lg mt-6 ">
                        <h2 className="text-2xl font-bold mb-4">Log in</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <input type="text" placeholder="Username or Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mt-6">
                            <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Log in</button>
                            {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
                        </div>
                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </ThemeProvider>
    );
};

export default Login;


