import React from "react";

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {theme} from "./src/Infrastructure/theme"
import {useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald"
import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato"
import { RestaurantContextProvider } from "./src/services/restaurant/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/Infrastructure/navigation/index";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";


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

  

  
  return (
    <>
    <ThemeProvider theme={theme}>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
              <Navigation/>
          </RestaurantContextProvider>
        </LocationContextProvider>
        <ExpoStatusBar style='auto'/>
      </FavoritesContextProvider>
    </ThemeProvider>
    </>
  );
}

