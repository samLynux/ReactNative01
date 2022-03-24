import React, {useContext} from "react";

import {  StatusBar, FlatList, Text, View, SafeAreaView, Platform } from 'react-native';
import { ActivityIndicator, Colors, Searchbar } from 'react-native-paper';

import styled from "styled-components/native"
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";



const SearchContainer = styled(Searchbar)`
    padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding:16
    }
})``;

const Loading = styled(ActivityIndicator)`
    marginLeft: -25px;
`;

const LoadingContainer = styled(View)`
    position:absolute;
     top:50%;
    left:50%;

`;


export const RestaurantScreen = () => {
    const {isLoading, error, restaurants} = useContext(RestaurantContext)
    

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
                <View >
                    <SearchContainer/> 
                </View>
                <RestaurantList
                    data={restaurants}
                    renderItem={({item}) => {
                        // console.log(item);
                        return (
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item}/> 
                        </Spacer>
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
  