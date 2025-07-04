import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { recipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import {nanoid} from 'nanoid'
import { toast } from 'react-toastify';


function Details() {
    const { data, setData } = useContext(recipeContext);
    const params = useParams();
    console.log(data, params.id);

    const recipe = data.find((recipe)=> params.id == recipe.id);
    console.log(recipe);
    
    const{ register, handleSubmit, reset} = useForm({defaultValues : {
        image: recipe?.image,
        title: recipe?.title,
        description: recipe?.description,
        category: recipe?.category,
        ingredients:recipe?.ingredients,
        instructions:recipe?.instruction,
    }});
    const navigate = useNavigate();

    const updateHandler = (recipeData)=>{
        const index = data.findIndex((recipe)=> params.id == recipe.id);
        // console.log(index);
        const copyData = [...data];
        copyData[index] = {...copyData[index],...recipeData};
        setData(copyData);
        localStorage.setItem("recipes",JSON.stringify(copyData));
        toast.success("Recipe Updated..!")
        // navigate("/recipes");
    }
    const [favroite, setFav] = useState(JSON.parse(localStorage.getItem("fav")) || []);
    
    const DeleteHandler = () => {
        const filterdata = data.filter((r) => r.id != params.id);
        setData(filterdata);
        localStorage.setItem("recipes",JSON.stringify(filterdata));

        const filterFav = favroite.filter((f)=> f.id!= recipe?.id);
        setFav(filterFav);
        localStorage.setItem("fav",JSON.stringify(filterFav));

        toast.success("Recipe Deleted..!")
        navigate("/recipes");
    }

    const FavHandler = () =>{
        const copyFav = [...favroite];
        copyFav.push(recipe);
        setFav(copyFav);
        localStorage.setItem("fav", JSON.stringify(copyFav));
    }

    const UnFavHandler = () =>{
        const filterFav = favroite.filter((f)=> f.id!= recipe?.id);
        setFav(filterFav);
        localStorage.setItem("fav", JSON.stringify(filterFav));
    }

    useEffect(()=>{
        console.log("Details page is mounted");
        return ()=>{
            console.log("Details page is ummounted");
        }
    },[favroite])

    return (
        <div className='w-full flex'>
            <div className="relative left w-1/2 p-2">
                {favroite.find((f)=> f.id == recipe?.id) 
                    ? <i onClick={UnFavHandler} className="right-[8%] absolute text-4xl text-red-500 ri-poker-hearts-fill"></i>
                    : <i onClick={FavHandler} className="right-[8%] absolute text-4xl text-red-500 ri-poker-hearts-line"></i>
                }
                <h1 className="text-4xl font-black">{recipe?.title}</h1>
                <img className='h-[65vh] mt-10' src={recipe?.image} alt="" />
            </div>

            <form  onSubmit = {handleSubmit(updateHandler)} className='flex flex-col w-[50%] text-lg align-center justify-center p-2 '>
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
                    <option value="Wekend Specials">Wekend Specials</option>
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
                <div className='flex w-100 gap-5 align-middle justify-center'>
                    <button className='bg-gray-900 px-4 py-1 rounded-2xl mt-5  block '>Update Recipe</button>
                    <button
                        onClick={DeleteHandler}
                        className='bg-red-900 px-4 py-1 rounded-2xl mt-5  block '
                    >
                        Delete Recipe
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Details