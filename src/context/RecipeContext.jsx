import React, { createContext, useContext, useState } from 'react'

export const recipeContext = createContext();

const RecipeContext= ({children}) => {

    const [data, setData] = useState([]);
    console.log(data);
    
    
    return (
        <recipeContext.Provider value={{data, setData}}>
            {children}
        </recipeContext.Provider>
    )
}

export default RecipeContext