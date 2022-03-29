import React, {useContext} from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Ionicons} from "@expo/vector-icons"

import { Text, Button } from "react-native";
import { RestaurantNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../utils/safe-area.component";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";
import { MapScreen } from "../../features/map/screens/map.screen";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurant/restaurant.context";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

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

  const Settings = () => {
    const {onLogout} = useContext(AuthenticationContext)
    return (
      <SafeArea>
        <Text>Settings</Text>
        <Button title="logout" onPress={(() => onLogout())}/>
      </SafeArea>
    )
};



export const AppNavigator = () => {
    return (
      
      <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              >
              <Tab.Screen name='Restaurant' component={RestaurantNavigator}/>
              <Tab.Screen name='Map' component={MapScreen}/>
              <Tab.Screen name='Settings' component={Settings}/>
            </Tab.Navigator>
            </RestaurantContextProvider>
          </LocationContextProvider> 
          <ExpoStatusBar style='auto'/>
        </FavoritesContextProvider>
    )
}