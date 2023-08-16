import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact';
import About from './About';
import Blog from './Blog';
import Home from './Home';
function ReactRouter() {
  return (
    <>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
            </Routes>
        </BrowserRouter>
        
        
    </>
  )
}

export default ReactRouter