import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
export const recipecontext= createContext(null);
const Recipecontext = (props) => {
    
     const [data, setdata] = useState([]);
     useEffect(()=>{
      setdata(JSON.parse(localStorage.getItem("recipes"))||[]);
     },[])
  return <recipecontext.Provider value={{data,setdata}}>
   {props.children}
  </recipecontext.Provider>
}

export default Recipecontext

