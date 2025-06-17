import React from 'react'
import { Link } from 'react-router';

export const RecipeCard = (props) => {
    const {id, image, title, category, description} = props.recipe;
    return (
        <Link
            to={`/recipes/details/${id}`}
            className="bg-white w-72 rounded-xl shadow-lg overflow-hidden hover:scale-102 transition duration-75"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover bg-gray-200"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <h4 className="text-lg font-semibold text-gray-800">{category}</h4>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </Link>
    )
}
