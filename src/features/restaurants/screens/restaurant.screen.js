import React from "react";

import {  StatusBar, FlatList, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import styled from "styled-components/native"
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
    flex:1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(Searchbar)`
    padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding:16
    }
})``;



export const RestaurantScreen = () => {
    return (
        <>
            <SafeArea >
                <View >
                    <SearchContainer/> 
                </View>
                <RestaurantList
                    data={[{name:1}, {name:2}, {name:3}, 
                        {name:4}, {name:5}, {name:6}, 
                        {name:7}, {name:8}]}
                    renderItem={() => (
                        <Spacer position="bottom" size="large">
                        <RestaurantInfoCard/> 
                        </Spacer>
                        )}
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
  