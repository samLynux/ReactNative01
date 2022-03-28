import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native"
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-infro.component";




export const MapCallout = ({restaurant}) => {
   return(
        <CompactRestaurantInfo 
            restaurant={restaurant}
        
        
        />
    )
}