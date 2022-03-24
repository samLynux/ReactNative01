import React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {theme} from "./src/Infrastructure/theme"
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';
import {useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald"
import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from "./src/utils/safe-area.component";


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if(!oswaldLoaded || !latoLoaded){
    return null
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

  return (
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Restaurants' component={RestaurantScreen}/>
          <Tab.Screen name='Map' component={Map}/>
          <Tab.Screen name='Settings' component={Settings}/>
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style='auto'/>
    </ThemeProvider>
    </>
  );
}

