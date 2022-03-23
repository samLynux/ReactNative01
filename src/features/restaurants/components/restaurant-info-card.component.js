import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View,  Platform } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import styled from "styled-components/native"
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star"
import open from "../../../../assets/open"
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
    background-color:${props => props.theme.colors.bg.primary}
`;
  
const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color:${props => props.theme.colors.bg.primary};
`;
const Address = styled(Text)`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.caption};
    color: ${props => props.theme.colors.ui.primary};
`;

const Title = styled(Text)`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding:${props => props.theme.space[3]};
`;

const Rating = styled.View`
    flex-direction: row;
    padding-top:${props => props.theme.space[2]};
    padding-bottom:${props => props.theme.space[2]};
`;

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Open = styled(SvgXml)`
    flex-direction: row;
`

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
    } = restaurant;

    const ratingArray =Array.from(new Array(Math.floor(rating)));

    return (
        
        <>
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20}/>
                        ))} 
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporary && (
                            <Text variant="label" style={{color:"red"}}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large"/>
                        {isOpenNow && <Open xml={open} width={20} height={20}/>}
                        <Spacer position="left" size="large"/>
                            <Image style={{width:15, height:15 }} source={{uri: icon}}/>
                        
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
  
