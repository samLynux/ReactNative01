import styled from "styled-components/native";
import React, {useState, useContext} from "react";
import { Button } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { SafeArea } from "../../../utils/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
`



 export const FavouritesScreen = ({navigation}) => {
    const {favorites} = useContext(FavoritesContext)
    
    return favorites.length ? (

      <SafeArea >
            <RestaurantList
                    data={favorites}
                    renderItem={({item}) => {
                        // console.log(item);
                        return (
                            <TouchableOpacity 
                                onPress={() => 
                                    navigation.navigate("RestaurantDetail",
                                         {restaurant: item,})}>
                                <Spacer position="bottom" size="large">
                                    <RestaurantInfoCard restaurant={item}/> 
                                </Spacer>
                            </TouchableOpacity>
                        )}}
                    keyExtractor={(item) => item.name}
                    
                />
        </SafeArea>
    ) : 
    ( 
        <NoFavouritesArea >
            <Text center>No Favourites</Text>
        </NoFavouritesArea>
    )
};

