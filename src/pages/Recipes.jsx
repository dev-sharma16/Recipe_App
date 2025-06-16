import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import { RecipeCard } from '../components/RecipeCard'

function Recipes() {
  const {data} = useContext(recipeContext)

  if(data.length <= 0) { 
      return(<div className=" w-full p-6 bg-gray-800 text-center "><h1 className='text-3xl'>No recipes Found..!</h1></div>)
  }

  return (
    <div className=" w-full p-6 bg-gray-800 flex flex-wrap justify-center items-start gap-6">
      {data.map((recipe) => (
        <RecipeCard key = {recipe.id} recipe = {recipe}/>
      ))}
    </div>
  )
}

export default Recipes
