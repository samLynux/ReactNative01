import React, {useContext} from "react";
import { View, Text } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from '@react-navigation/native';


export const Navigation = () => {
     
     const {isAuth} = useContext(AuthenticationContext)
     return (
          <NavigationContainer>
               {isAuth 
                    ? ( <AppNavigator/>)
                    : <AccountNavigator/>}   
          </NavigationContainer>
     ) 
}