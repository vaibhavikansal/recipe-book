import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-20 text-xl bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 mb-8 shadow-lg">
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition-all duration-200 font-semibold ${isActive ? "bg-white/20 text-blue-300 shadow" : "text-white hover:bg-white/10"}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition-all duration-200 font-semibold ${isActive ? "bg-white/20 text-blue-300 shadow" : "text-white hover:bg-white/10"}`
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition-all duration-200 font-semibold ${isActive ? "bg-white/20 text-blue-300 shadow" : "text-white hover:bg-white/10"}`
        }
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        to="/createrecipes"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition-all duration-200 font-semibold ${isActive ? "bg-white/20 text-blue-300 shadow" : "text-white hover:bg-white/10"}`
        }
      >
        Create Recipes
      </NavLink>
    </div>
  )
}

export default Navbar