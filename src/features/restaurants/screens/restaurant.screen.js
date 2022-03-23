import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {  StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native"
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
    flex:1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(Searchbar)`
    padding: 16px;
`;

const RestaurantListContainer = styled.View`
    flex:1;
    padding: 16px; 
    background-color:blue

`;


export const RestaurantScreen = () => {
    return (
        <>
            <SafeArea >
                <View >
                    <SearchContainer/> 
                </View>
                <RestaurantListContainer >
                    <RestaurantInfoCard/>
                </RestaurantListContainer>
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
  