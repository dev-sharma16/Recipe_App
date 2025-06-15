import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'

function Recipes() {
  const {data} = useContext(recipeContext)

  return (
    <div className=" w-full p-6 bg-gray-800 flex flex-wrap justify-center items-start gap-6">
      {data.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white w-72 rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover bg-gray-200"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recipes
