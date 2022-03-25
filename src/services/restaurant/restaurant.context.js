import React, {useState, useContext, createContext, useEffect}   from "react"
import { LocationContext } from "../location/location.context"
import { restaurantRequest, restaurantTransform } from "./restaurant.service"


export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {location} = useContext(LocationContext)
    
    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);


        setTimeout(() => {
            restaurantRequest(loc)
                .then(restaurantTransform)
                .then((results) => {
                    setIsLoading(false)
                    setRestaurants(results);
                }).catch(err => {
                    setIsLoading(false)
                    setError(err);
                })
        }, 2000);
    }

    useEffect(() => {
        if(location){
            const locationString = `${location.lat},${location.lng}`
            // console.log(locationString);
            retrieveRestaurants(locationString);
        }
    },[location]) 

    return (
        <RestaurantContext.Provider value={{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantContext.Provider>
    )
}