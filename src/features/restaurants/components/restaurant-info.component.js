import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {  StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';

export const RestaurantInfo = ({restaurant = {}}) => {
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
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}}/>
            <Text style={styles.title}>{name}</Text>
        </Card>
            
        </>
    )
}

const styles = StyleSheet.create({
    
    card : { backgroundColor:"white"},
    cover: { padding: 20, backgroundColor:"white"},
    title: { padding: 8},
  });
  
