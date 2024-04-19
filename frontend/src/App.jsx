
// import {Route, Routes} from 'react-router-dom'
// import Home from "./pages/Home"
// import AllPosts from "./pages/AllPosts"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import PostDetails from './pages/PostDetails'
// import CreatePost from './pages/CreatePost'
// import EditPost from './pages/EditPost'
// import Profile from './pages/Profile'
// import {  UserContextProvider } from './context/UserContext'
// import MyBlogs from './pages/MyBlogs'


// const App = () => {


  
//   return (
//       <UserContextProvider>
//       <Routes>
//       <Route exact path="/" element={<Home/>}/>
//       <Route exact path ="/allposts" element={<AllPosts/>}/>
//       {/* <Route exact path="/" element={<Home2/>}/> */}
//       <Route exact path="/login" element={<Login/>}/>
//       <Route exact path="/register" element={<Register/>}/>
//       <Route exact path="/write" element={<CreatePost/>}/>
//       <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
//       <Route exact path="/edit/:id" element={<EditPost/>}/>
//       <Route exact path="/myblogs/:id" element={<MyBlogs/>}/>
//       <Route exact path="/profile/:id" element={<Profile/>}/>
//       </Routes>
    
//       </UserContextProvider>
//   )
// }

// export default App


// import {Route, Routes} from 'react-router-dom'
// import Home from "./pages/Home"
// import AllPosts from "./pages/AllPosts"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import PostDetails from './pages/PostDetails'
// import CreatePost from './pages/CreatePost'
// import EditPost from './pages/EditPost'
// import Profile from './pages/Profile'
// import {  UserContextProvider } from './context/UserContext'
// import { ThemeProvider } from './context/ThemeContext'

// import MyBlogs from './pages/MyBlogs'


// const App = () => {


  
//   return (
//       <UserContextProvider>
//       <ThemeProvider>
//       <Routes>
//       <Route exact path="/" element={<Home/>}/>
//       <Route exact path ="/allposts" element={<AllPosts/>}/>
//       {/* <Route exact path="/" element={<Home2/>}/> */}
//       <Route exact path="/login" element={<Login/>}/>
//       <Route exact path="/register" element={<Register/>}/>
//       <Route exact path="/write" element={<CreatePost/>}/>
//       <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
//       <Route exact path="/edit/:id" element={<EditPost/>}/>
//       <Route exact path="/myblogs/:id" element={<MyBlogs/>}/>
//       <Route exact path="/profile/:id" element={<Profile/>}/>
//       </Routes>
//    </ThemeProvider>
//       </UserContextProvider>
//   )
// }

// export default App
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import AllPosts from "./pages/AllPosts"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import {  UserContextProvider } from './context/UserContext'
import { ThemeProvider } from './context/ThemeContext'
import {ThemeProviderAndSwitcher} from './context/ThemeContext';
import MyBlogs from './pages/MyBlogs'


const App = () => {
  return (
      <UserContextProvider>
      <ThemeProviderAndSwitcher>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path ="/allposts" element={<AllPosts/>}/>
      {/* <Route exact path="/" element={<Home2/>}/> */}
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/write" element={<CreatePost/>}/>
      <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
      <Route exact path="/edit/:id" element={<EditPost/>}/>
      <Route exact path="/myblogs/:id" element={<MyBlogs/>}/>
      <Route exact path="/profile/:id" element={<Profile/>}/>
      </Routes>
   </ThemeProviderAndSwitcher>
      </UserContextProvider>
  )
}

export default App