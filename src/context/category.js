import React, { useState } from "react";

const CategoryContext = React.createContext()

function CategoryProvider({children}) {
    const [selectedCategory, setSelectedCategory] = useState('All')
    console.log(selectedCategory)
    return <CategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>{children} </CategoryContext.Provider>
}

export {CategoryContext, CategoryProvider}