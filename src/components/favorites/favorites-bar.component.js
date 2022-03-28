import React, {useContext} from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native"
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-infro.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";


const FavoritesWrapper = styled.View`
    padding: 10px;
`

export const FavoritesBar = ({favorites, onNavigate}) => {
    
    if(!favorites.length){
        return null
    }
    return (
        <FavoritesWrapper>
            <Spacer position="left" size="large">
                <Text variant="caption">Favorites</Text>
            </Spacer>
            <ScrollView horizontal
                showsVerticalScrollIndicator={false}>
                {favorites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <Spacer key={key} position="left" size="medium">
                            <TouchableOpacity 
                                onPress={() => 
                                    onNavigate("RestaurantDetail",{restaurant})}>
                                <CompactRestaurantInfo restaurant={restaurant}/>
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavoritesWrapper>
    )
}