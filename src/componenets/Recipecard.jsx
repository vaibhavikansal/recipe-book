import React from 'react'
import { Link } from 'react-router-dom';

const Recipecard = (props) => {
    const {id,title,ingredients,description,instructions,category,image}=props.recipe;
  return (
    <Link to={`/recipes/detail/${id}`} className='block w-[23vw] rounded-2xl overflow-hidden p-2 hover:scale-101 duration-150'>
    <img className='w-full h-[20vh] object-cover rounded-4xl' src={image} alt="photo" />
    <h1 className='mt-2 font-black'>{title}</h1>
    <p className='text-sm'>{description.slice(0,100)}...{" "}<small className='text-gray-500'>Read more</small></p>
    </Link>
  )
}

export default Recipecard