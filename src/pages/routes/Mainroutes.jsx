import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Recipes from '../Recipes'
import About from '../About'
import Createrecipes from '../Createrecipes'


const Mainroutes = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/recipes" element={<Recipes/>} />
    <Route path="/createrecipes" element={<Createrecipes/>} />
  </Routes>
}

export default Mainroutes