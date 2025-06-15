import React, { useContext, useState } from 'react'
import {useForm} from 'react-hook-form'
import {nanoid} from 'nanoid'
import { recipeContext } from '../context/RecipeContext';

function Create() {
    const{ register, handleSubmit, reset} = useForm();

    // const [imageUrl, setimageUrl] = useState("")
    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("");
    // const [ingredients, setIngredients] = useState("");
    // const [instructions, setInstructions] =  useState("");

    // const [recipe, setRecipe] = useState({})

    const { data, setData } = useContext(recipeContext);

    const submitHandler = (recipeData)=>{
        recipeData.id=nanoid();
        // console.log(recipeData);
        // setRecipe(recipeData);

        // const copyData = [...data];
        // copyData.push(recipeData);
        // setData(copyData);

        setData([...data, recipeData])
        console.log(recipeData);

        // if(data){
        //     reset();
        // }

        reset();
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