import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
    return (
        <div className='flex item-center justify-center gap-x-10 text-sm mb-10'>
            <NavLink className={(e)=> e.isActive ? "text-red-300 bg-gray-900 p-3 rounded-2xl transition" : ""} to="/">
                Home
            </NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-300  bg-gray-900 p-3 rounded-2xl transition" : ""} to="/recipes">
                Recipes
            </NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-300  bg-gray-900 p-3 rounded-2xl transition": ""} to="/create">
                Create Recipe
            </NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-300  bg-gray-900 p-3 rounded-2xl transition": ""} to="/favourite">
                Favourite
            </NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-300  bg-gray-900 p-3 rounded-2xl transition" : ""} to="/about">
                About
            </NavLink>
        </div>
    )
}

export default Navbar