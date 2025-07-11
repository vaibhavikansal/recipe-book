import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Recipes from '../Recipes'
import About from '../About'
import Createrecipes from '../Createrecipes'
import Singlerecipe from '../Singlerecipe'
import Fav from '../Fav'


const Mainroutes = () => {
 
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/recipes" element={<Recipes/>} />
     <Route path="/recipes/detail/:id" element={<Singlerecipe/>} />
    <Route path="/createrecipes" element={<Createrecipes/>} />
    <Route path="/fav" element={<Fav/>} />
  </Routes>
}

export default Mainroutes