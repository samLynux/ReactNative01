import React, {useContext} from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native"
import { FavoritesContext } from "../../services/favorites/favorites.context";
import {AntDesign} from "@expo/vector-icons"

const FavoriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 9;
`


export const Favorite = () => {
    const {favorites, addTofavorites, removeFromFavorites} = useContext(FavoritesContext)
    return (
        <FavoriteButton>
            <AntDesign 
                name="heart"
                size={24}
                color="red"
            />
        </FavoriteButton>
    )
}