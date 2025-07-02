import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/Recipecontext'

const Createrecipes = () => {
  const {data,setdata}=useContext(recipecontext)
    const {register,handleSubmit,reset}=useForm()
    const SumbitHandler=(recipe)=>{
        recipe.id=nanoid();
        const copydata=[...data];
        copydata.push(recipe);
        setdata(copydata);
        reset()

    }
  return (
    <div className="h-screen w-screen overflow-auto p-4">
    <form className='max-w-xl mx-auto' onSubmit={handleSubmit(SumbitHandler)}>
         <input className='border-b outline-0 text-xl block p-2' {...register("image")} type="url" placeholder='Enter Image URL' />
         
         <small className='text-red-500 text-xs mb-10'>This will be how error will be shown</small>
         
        <input className='border-b outline-0 text-xl block p-2' {...register("title")} type="text" placeholder='Recipe Title' />

        

 <textarea className='border-b outline-0 text-xl block p-2' {...register("description")}  placeholder='Description' />

          

           <textarea className='border-b outline-0 text-xl block p-2' {...register("ingredients")}  placeholder='Ingredients' />

          

           <textarea className='border-b outline-0 text-xl block p-2' {...register("instructions")}  placeholder='//write your magic ' />

         

          <select className='border-b outline-0 text-xl block p-2' {...register("category")} >
            <option value="cat-1">Category 1</option>
            <option value="cat-2">Category 2</option>
            <option value="cat-3">Category 3</option>
          </select>

        <button className="bg-blue-200 text-black hover:bg-gray-400 px-4 py-2 rounded-md shadow block m-10">
  Save Recipe
</button>

    </form>
    </div>
  )
}

export default Createrecipes