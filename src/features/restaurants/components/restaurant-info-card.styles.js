import styled from "styled-components/native"
import { StyleSheet,  Image, View,  Platform } from 'react-native';
import { Text } from "../../../components/typography/text.component";
import { Card, Searchbar } from 'react-native-paper';
import { SvgXml } from "react-native-svg";

export const RestaurantCard = styled(Card)`
    background-color:${props => props.theme.colors.bg.primary}
    margin-bottom: ${props => props.theme.space[3]};
`;
  
export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color:${props => props.theme.colors.bg.primary};
`;
export const Address = styled(Text)`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.caption};
    color: ${props => props.theme.colors.ui.primary};
`;



export const Info = styled.View`
    padding:${props => props.theme.space[3]};
`;

export const Rating = styled.View`
    flex-direction: row;
    padding-top:${props => props.theme.space[2]};
    padding-bottom:${props => props.theme.space[2]};
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Icon = styled.Image`
    width: 15px;
    height: 15px;
`;

export const Open = styled(SvgXml)`
    flex-direction: row;
`