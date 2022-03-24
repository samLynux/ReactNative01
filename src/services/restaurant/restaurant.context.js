import React, {useState, createContext, useEffect}   from "react"


export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({children}) => {
    return (
        <RestaurantContext.Provider value={{
            restaurants: [1,2,3,4,5]
        }}>
            {children}
        </RestaurantContext.Provider>
    )
}