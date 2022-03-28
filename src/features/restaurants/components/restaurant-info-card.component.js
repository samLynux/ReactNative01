import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import styled from "styled-components/native"
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star"
import open from "../../../../assets/open"
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Address, Icon, Info, Open, Rating, RestaurantCard, RestaurantCardCover, Section, SectionEnd } from "./restaurant-info-card.styles";
import { Favorite } from "../../../components/favorites/favorite.components";




export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name ='some res', 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", 
        photos=[
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        ], 
        address='100 res street', 
        isOpenNow=true, 
        rating=4, 
        isClosedTemporary=true, 
        placeId
    } = restaurant;

    const ratingArray =Array.from(new Array(Math.floor(rating)));

    return (
        
        <>
        <RestaurantCard elevation={5}>
            <Favorite/>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20}/>
                        ))} 
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporary && (
                            <Text variant="error" >
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large"/>
                        {isOpenNow && <Open xml={open} width={20} height={20}/>}
                        <Spacer position="left" size="large"/>
                            <Icon style={{width:15, height:15 }} source={{uri: icon}}/>
                        
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
            
        </>
    )
}

// const styles = StyleSheet.create({
    
//     card : { backgroundColor:"white"},
//     cover: { padding: 20, backgroundColor:"white"},
//     title: { padding: 8},
//   });
  
