import React, {createContext, useState, useEffect} from "react";
import { View } from "react-native";
import styled from "styled-components/native"
import AsyncStorage from "@react-native-async-storage/async-storage"


export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({children}) =>{
    const [favorites, setFavorites] = useState([]);

    const saveFavorites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favourites", jsonValue)
        } catch(e){
            console.log("error storing",e);
        }
    }

    const loadFavorites = async () => {
        
        try {
            const value = await AsyncStorage.getItem("@favourites")
            if(value !== null){
                setFavorites(JSON.parse(value))
            }
        } catch(e){
            console.log("error loading",e);
        }
    }

    


    const add = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    }
    const remove = (restaurant) => {
        const newFavorites = favorites.filter((x) => 
            x.placeId !== restaurant.placeId)
        setFavorites( newFavorites)
    }

    

    useEffect(() => {
        loadFavorites()
    },[])

    useEffect(() => {
        saveFavorites(favorites)
    },[favorites])


    return (
        <FavoritesContext.Provider value={{
            favorites, 
            addToFavorites: add, 
            removeFromFavorites: remove
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}