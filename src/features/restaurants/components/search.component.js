import React, {useContext, useEffect, useState} from "react";
import {Searchbar } from 'react-native-paper';
import styled from "styled-components/native"
import {  LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[3]};
`;

export const Search = ({isFavToggled, onFavToggle}) => {
    const {keyword, search} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword)
    
    useEffect(() => {
        setSearchKeyword(keyword)
    },[keyword])

    return (
        <>
        <SearchContainer>
            <Searchbar
                icon={isFavToggled ? "heart" : "heart-outline"}
                onIconPress={onFavToggle}
                placeholder="Seach location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={(text) => {
                   
                    setSearchKeyword(text);
                }}/>
        </SearchContainer>
        </>
    )
}