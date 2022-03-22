import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {  StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const RestaurantInfo = ({restaurant = {}}) => {
    const {
        name ='some res', 
        icon, 
        photos=['https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg'], 
        address='100 res street', 
        isOpenNow=true, 
        rating=4, 
        isClosedTemporary=false, 
    } = restaurant;
    return (
        <>
            <Text>{name}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1, 
      marginTop: StatusBar.currentHeight
    },
    search : {padding: 16, backgroundColor:"green"},
    list: {flex:1, padding: 16, backgroundColor:"blue"}
  });
  
