import React, { useContext } from 'react'
import { recipecontext} from "../context/Recipecontext"

const Recipes = () => {
  const {data}=useContext(recipecontext);

  const renderrecipes=data.map((recipe)=>(
  <div key={recipe.id}>
    <h1>{recipe.title}</h1>
  </div>))
  return (
    <div>{renderrecipes}</div>
  )
}

export default Recipes