import React, { useContext, useState } from 'react'
import {useForm} from 'react-hook-form'
import {nanoid} from 'nanoid'
import { recipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Create() {
    const{ register, handleSubmit, reset} = useForm();

    const { data, setData } = useContext(recipeContext);
    const navigate = useNavigate()

    const submitHandler = (recipeData)=>{
        recipeData.id=nanoid();
        setData([...data, recipeData]);  
        toast.success("New recipe created..!")

        console.log(recipeData);
        reset();
        navigate("/recipes");
    }

    return (
        <div className='flex align-center justify-center'>
            <form  onSubmit = {handleSubmit(submitHandler)} className='flex flex-col w-[50%] text-lg align-center justify-center '>
                <input
                    className='block border-b outline-0 p-2'
                    {...register("image")}
                    type='url'
                    placeholder='Enter image url'
                />
                <input
                    className='block border-b outline-0 p-2'
                    {...register("title")}
                    type='text'
                    placeholder='Recipe Title'
                />
                <textarea
                    className='block border-b outline-0 p-2'
                    {...register("description")}
                    placeholder='Recipe Description'
                />
                <select
                    className='block border-b outline-0 p-2 bg-gray-800'
                    {...register("category")}
                >
                    <option value="" >Select Category</option>
                    <option value="highProtien">High Protien</option>
                    <option value="shakes">Shakes</option>
                    <option value="wekendSpecials">Wekend Specials</option>
                    <option value="quickMeals">Quick Meals</option>
                </select>
                <textarea
                    className='block border-b outline-0 p-2'
                    {...register("ingredients")}
                    placeholder='Recipe Ingredients'
                />
                <textarea
                    className='block border-b outline-0 p-2'
                    {...register("instructions")}
                    placeholder='Recipe Making instructions'
                />
                <button className='bg-gray-900 px-4 py-1 rounded-2xl mt-5  block '>Save Recipe</button>
            </form>
        </div>
    )
}

export default Create