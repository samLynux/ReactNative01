import React, {useContext, useState} from "react";

import {    View, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors, Searchbar } from 'react-native-paper';

import styled from "styled-components/native"
import { FadeInView } from "../../../components/animations/fade.animations";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantList } from "../components/restaurant-list.styles";
import { Search } from "../components/search.component";







const Loading = styled(ActivityIndicator)`
    marginLeft: -25px;
`;

const LoadingContainer = styled(View)`
    position:absolute;
     top:50%;
    left:50%;

`;


export const RestaurantScreen = ({navigation}) => {
    const {isLoading, error, restaurants} = useContext(RestaurantContext)
    const {favorites} = useContext(FavoritesContext)
    const [isToggled, setIsToggled ] = useState(false)

    return (
        <>
            <SafeArea >
                
                {isLoading &&(
                    <LoadingContainer>
                        <Loading
                            size={50} 
                            animating={true}
                            color={Colors.blue300}
                        />
                    </LoadingContainer>
                )}
                <Search 
                    isFavToggled={isToggled} 
                    onFavToggle={() => setIsToggled(!isToggled)}/>
                {isToggled && 
                    <FavoritesBar 
                        favorites={favorites} 
                        onNavigate={navigation.navigate}/>}
                
                
                <RestaurantList
                    data={restaurants}
                    renderItem={({item}) => {
                        // console.log(item);
                        return (
                            <TouchableOpacity 
                                onPress={() => 
                                    navigation.navigate("RestaurantDetail",
                                         {restaurant: item,})}>
                                <Spacer position="bottom" size="large">
                                    <FadeInView>
                                        <RestaurantInfoCard restaurant={item}/> 
                                    </FadeInView>
                                </Spacer>
                            </TouchableOpacity>
                        )}}
                    keyExtractor={(item) => item.name}
                    
                />
               
                    
            </SafeArea>
        </>
    )
}

// const styles = StyleSheet.create({
//     container: {
//       flex:1, 
//       marginTop: StatusBar.currentHeight
//     },
//     search : {padding: 16, backgroundColor:"green"},
//     list: {flex:1, padding: 16, backgroundColor:"pink"}
//   });
  