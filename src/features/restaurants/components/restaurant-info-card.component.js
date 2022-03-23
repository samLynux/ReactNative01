import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Platform } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import styled from "styled-components/native"

const RestaurantCard = styled(Card)`
    background-color:${props => props.theme.colors.bg.primary}
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color:${props => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
    font-family: ${props => props.theme.fonts.body};
    padding:16px;
    color: ${props => props.theme.colors.ui.primary};
`

export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name ='some res', 
        icon, 
        photos=[
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        ], 
        address='100 res street', 
        isOpenNow=true, 
        rating=4, 
        isClosedTemporary=false, 
    } = restaurant;
    return (
        <>
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Title>{name}</Title>
        </RestaurantCard>
            
        </>
    )
}

// const styles = StyleSheet.create({
    
//     card : { backgroundColor:"white"},
//     cover: { padding: 20, backgroundColor:"white"},
//     title: { padding: 8},
//   });
  
