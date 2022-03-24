import React, {useEffect, createContext, useState} from "react";

import { ActivityIndicator, Colors, Searchbar } from 'react-native-paper';
import { locationRequest, locationTransform } from "./location.service";


export const LocationContext = createContext()

export const LocationContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState("antwerp")
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    const onSearch = (searchKeyword) => {
        console.log(searchKeyword.toLowerCase() );
        setIsLoading(true)
        setKeyword(searchKeyword)
        locationRequest(searchKeyword)
            .then(locationTransform)
            .then(result => {
                setIsLoading(false);
                setLocation(result);
                console.log(result);
            }).catch(err => {
                setIsLoading(false);
                setError(err);
            })
    }
    useEffect(() => {
         onSearch(keyword)
    }, [])


    return(
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword
            }}>
            {children}
        </LocationContext.Provider>
    )
}