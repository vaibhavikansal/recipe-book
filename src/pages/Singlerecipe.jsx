import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/Recipecontext';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const Singlerecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit, reset } = useForm();
  
  const SumbitHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => r.id == params.id);
    const copydata = [...data];
    copydata[index] = { ...updatedRecipe, id: params.id };
    setdata(copydata);
    toast.success("Recipe updated successfully!");
    navigate("/recipes");
  };

  const deletehandler = () => {
    const filtereddata = data.filter((r) => r.id != params.id);
    setdata(filtereddata);
    toast.success("Recipe deleted successfully!");
    navigate("/recipes");
  };

  return recipe ? (
    <div className='w-full flex'>
      <div className='left w-1/2 p-2'>
        <h1 className='text-4xl font-bold mb-5'>{recipe.title}</h1>
        <img src={recipe.image} alt="image" className='w-[250px] h-[250px] object-cover rounded-xl mb-5'/>
        <p className='text-[20px]'>  <h5 className='font-semibold'>Description: </h5>{recipe.description}</p>
        <p className='text-[20px] flex mt-5'>  <h5 className='font-semibold'>Category:  </h5>{recipe.category}</p>
        <h2 className='text-xl font-semibold mt-6 mb-2'>Ingredients:</h2>
        <ul className='list-disc list-inside mb-4'>
          {Array.isArray(recipe.ingredients)
            ? recipe.ingredients.map((item, idx) => <li key={idx} className='text-[20px]'>{item}</li>)
            : <li className='text-[20px]'>{recipe.ingredients}</li>}
        </ul>
        <h2 className='text-xl font-semibold mt-6 mb-2'>Instructions:</h2>
        <ul className='list-disc list-inside mb-4'>
          {Array.isArray(recipe.instructions)
            ? recipe.instructions.map((item, idx) => <li key={idx} className='text-[20px]'>{item}</li>)
            : <li className='text-[20px]'>{recipe.instructions}</li>}
        </ul>
        <br/>
      </div>
      
      <div className='right w-1/2 p-2'>
        <form className='max-w-xl mx-auto' onSubmit={handleSubmit(SumbitHandler)}>
          <input className='border-b outline-0 text-xl block p-2' defaultValue={recipe.image} {...register("image")} type="url" placeholder='Enter Image URL' />
          
          <small className='text-red-500 text-xs mb-10'>This will be how error will be shown</small>
          
          <input className='border-b outline-0 text-xl block p-2' defaultValue={recipe.title} {...register("title")} type="text" placeholder='Recipe Title' />

          <textarea className='border-b outline-0 text-xl block p-2' defaultValue={recipe.description} {...register("description")}  placeholder='Description' />

          <textarea className='border-b outline-0 text-xl block p-2' defaultValue={recipe.ingredients} {...register("ingredients")}  placeholder='Ingredients' />

          <textarea className='border-b outline-0 text-xl block p-2' defaultValue={recipe.instructions} {...register("instructions")}  placeholder='//write your magic ' />

          <select className='border-b outline-0 text-xl block p-2' defaultValue={recipe.category} {...register("category")} >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>

          <button className="bg-blue-200 text-black hover:bg-gray-400 px-4 py-2 rounded-md shadow block m-10">
            Update Recipe
          </button>
          <button type="button" onClick={deletehandler} className="bg-red-900 text-black hover:bg-red-400 px-4 py-2 rounded-md shadow block m-10">
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div>Recipe not found</div>
  );
}

export default Singlerecipe