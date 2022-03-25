import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Ionicons} from "@expo/vector-icons"

import { Text } from "react-native";
import { RestaurantNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../utils/safe-area.component";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";

const TAB_ICONS = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  }

  


  const createScreenOptions = ({route}) => {
    const iconName = TAB_ICONS[route.name]
    return {
        headerShown: false,
      tabBarIcon: ({size, color}) =>(
        <Ionicons name={iconName} size={size} color={color} />
      )
    }
  }
 


const Tab = createBottomTabNavigator();

  const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );

  const Map = () => (
    <Text>Map</Text>
  );


export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name='Restaurants' component={RestaurantNavigator}/>
              <Tab.Screen name='Map' component={Map}/>
              <Tab.Screen name='Settings' component={Settings}/>
            </Tab.Navigator>
          </NavigationContainer>
    )
}