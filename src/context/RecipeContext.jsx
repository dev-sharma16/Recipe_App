import React, { createContext, useContext, useEffect, useState } from "react";

export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
    
    const [data, setData] = useState([
        // {
            //     id: 1,
            //     title: "Classic Margherita Pizza",
            //     description: "a cheese pizza",
            //     ingredients: [
            //         "Pizza dough",
            //         "Tomato sauce",
            //         "Fresh mozzarella cheese",
            //         "Fresh basil leaves",
            //         "Olive oil",
            //         "Salt and pepper to taste",
            //     ],
            //     instructions: [
            //         "Preheat the oven to 475°F (245°C).",
            //         "Roll out the pizza dough and spread tomato sauce evenly.",
            //         "Top with slices of fresh mozzarella and fresh basil leaves.",
            //         "Drizzle with olive oil and season with salt and pepper.",
            //         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            //         "Slice and serve hot.",
            //     ],
            //     image: "https://cdn.dummyjson.com/recipe-images/1.webp",
            //     category: ["Wekend Specials"],
        // },
    ]);
    // console.log(data);

    useEffect(()=>{
        const recipeData = JSON.parse(localStorage.getItem("recipes") || []);
        setData(recipeData)
    },[])

    return (
        <recipeContext.Provider value={{ data, setData }}>
            {children}
        </recipeContext.Provider>
    );
};

export default RecipeContext;
