import React from 'react'
import { RecipeCard } from '../components/RecipeCard';

function Fav() {
    const favroite = JSON.parse(localStorage.getItem("fav")) || [];   

    if(favroite.length <= 0) { 
        return(<div className=" w-full p-6 bg-gray-800 text-center "><h1 className='text-3xl'>No favroite recipes Found..!</h1></div>)
    } 

    return (
        <div className=" w-full p-6 bg-gray-800 flex flex-wrap justify-center items-start gap-6">
            {favroite.map((recipe) => (
                <RecipeCard key = {recipe.id} recipe = {recipe}/>
            ))}
        </div>
    )
}

export default Fav