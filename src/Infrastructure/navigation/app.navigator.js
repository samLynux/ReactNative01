import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Ionicons} from "@expo/vector-icons"

import { Text } from "react-native";
import { RestaurantNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../utils/safe-area.component";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";
import { MapScreen } from "../../features/map/screens/map.screen";

const TAB_ICONS = {
    Restaurant: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  }

  


  const createScreenOptions = ({route}) => {
    const iconName = TAB_ICONS[route.name]
    return {
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: [
              {
                display: "flex"
              },
              null
            ],
          
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



export const AppNavigator = () => {
    return (
            <Tab.Navigator
              screenOptions={createScreenOptions}
              >
              <Tab.Screen name='Restaurant' component={RestaurantNavigator}/>
              <Tab.Screen name='Map' component={MapScreen}/>
              <Tab.Screen name='Settings' component={Settings}/>
            </Tab.Navigator>
    )
}