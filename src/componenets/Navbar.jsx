import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-x-20 text-xl bg-gray-700 rounded-md p-3 mb-6 text-shadow-black text-thi'>
        <NavLink className={(e)=>e.isActive && "text-red-400"} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive && "text-red-400"} to="/about">About</NavLink>
        <NavLink className={(e)=>e.isActive && "text-red-400"} to="/recipes">Recipes</NavLink>
        <NavLink
  to="/createrecipes"
  className={({ isActive }) =>
    `py-3 px-2 rounded-md bg-gray-900 ${isActive ? "text-red-400" : ""}`
  }
>
  Create Recipes
</NavLink>

    </div>
  )
}

export default Navbar