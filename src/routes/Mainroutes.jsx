import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "../pages/Home"
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import Details from '../pages/Details'
import PageNotFound from '../pages/PageNotFound'
import Fav from "../pages/Fav"
function Mainroutes() {
    return (
        <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/recipes" element={<Recipes/>}/>
            <Route path = "/recipes/details/:id" element={<Details/>}/>
            <Route path = "/create" element={<Create/>}/>
            <Route path = "/favourite" element={<Fav/>}/>
            <Route path = "/about" element={<About/>}/>
            <Route path = "*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Mainroutes