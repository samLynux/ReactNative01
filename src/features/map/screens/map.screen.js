import React, {useState} from "react";
import { ScrollView } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native"
import { MapSearch } from "../components/search.components";


const Map = styled(MapView)`
    height: 100%;
    width: 100%
`
export const MapScreen = () => (
    <>
        <MapSearch/>
        <Map/>
    </>
)
