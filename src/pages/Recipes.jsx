import React, { useContext } from 'react'
import { recipecontext} from "../context/Recipecontext"
import Recipecard from '../componenets/Recipecard';

const Recipes = () => {
  const {data}=useContext(recipecontext);

  const renderrecipes=data.map((recipe)=>(
    <Recipecard key={recipe.id} recipe={recipe}/>
  ))
  return (
    <div className="p-8 flex flex-wrap overflow-auto min-h-60  gap-[20px]">{data.length > 0 ? renderrecipes:"No recipe found"}</div>
  )
}

export default Recipes