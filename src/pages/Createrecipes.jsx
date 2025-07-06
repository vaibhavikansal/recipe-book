import { nanoid } from 'nanoid'
import 'react-toastify/dist/ReactToastify.css';
import React, { use, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/Recipecontext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Createrecipes = () => {
 
  const navigate=useNavigate();
  const {data,setdata}=useContext(recipecontext)
    const {register,handleSubmit,reset}=useForm()
    const SumbitHandler=(recipe)=>{
        recipe.id=nanoid();
        const copydata=[...data];
        copydata.push(recipe);
        setdata(copydata);
        toast.success("Yay!! Recipe created");
        reset();
        navigate("/recipes");

    }
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8">
    <form className='max-w-xl mx-auto' onSubmit={handleSubmit(SumbitHandler)}>
         <input className='border-b outline-0 text-xl block p-2' {...register("image")} type="url" placeholder='Enter Image URL' />
         
         <small className='text-red-500 text-xs mb-10'>This will be how error will be shown</small>
         
        <input className='border-b outline-0 text-xl block p-2' {...register("title")} type="text" placeholder='Recipe Title' />

        

 <textarea className='border-b outline-0 text-xl block p-2' {...register("description")}  placeholder='Description' />

          

           <textarea className='border-b outline-0 text-xl block p-2' {...register("ingredients")}  placeholder='Ingredients' />

          

           <textarea className='border-b outline-0 text-xl block p-2' {...register("instructions")}  placeholder='//write your magic ' />

         

          <select className='border-b outline-0 text-xl block p-2' {...register("category")} >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>

        <button className="bg-blue-200 text-black hover:bg-gray-400 px-4 py-2 rounded-md shadow block m-10">
  Save Recipe
</button>

    </form>
    </div>
  )
}

export default Createrecipes