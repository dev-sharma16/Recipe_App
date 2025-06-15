import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "../pages/Home"
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
function Mainroutes() {
    return (
        <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/recipes" element={<Recipes/>}/>
            <Route path = "/create" element={<Create/>}/>
            <Route path = "/about" element={<About/>}/>
        </Routes>
    )
}

export default Mainroutes