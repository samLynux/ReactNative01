import React, {createContext, useContext, useState, useEffect} from "react";
import { View } from "react-native";
import styled from "styled-components/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthenticationContext } from "../authentication/authentication.context";


export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({children}) =>{
    const {user} = useContext(AuthenticationContext)
    const [favorites, setFavorites] = useState([]);

    const saveFavorites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
        } catch(e){
            console.log("error storing",e);
        }
    }

    const loadFavorites = async (uid) => {
        
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`)
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
        if(user && user.uid){
            loadFavorites(user.uid)
        }
    },[user])

    useEffect(() => {
        if(user && user.uid){
            saveFavorites(favorites, user.uid)
        }
    },[favorites, user])


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