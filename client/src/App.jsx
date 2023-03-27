import React from 'react'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import {logo } from './assets'
import {Home, CreatePost} from './pages'

const App = () => {
  return (
    <BrowserRouter>
   <header id="header" className="w-full flex justify-between items-center 
     sm:px-8 px-4 py-4 border-b border-b-[white]">
<Link to="/">
  
  <img src={logo} alt="logo"  className="w-15 h-20 object-contain" id="img" />
  
  </Link>
  <Link to="/create-post"
className="font-bold border bg-[crimson] text-white px-6 py-4 rounded-md">Generate Images

</Link>
    </header>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#0c0c0df8] min-h-[calc(100vh-73px)]'>
    <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/create-post" element={<CreatePost />}/>
    </Routes>
   </main>
    </BrowserRouter>
    
  )
}

export default App