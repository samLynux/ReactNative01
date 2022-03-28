import { createStackNavigator } from "@react-navigation/stack";
import React, {useContext} from "react";
import { View, Text } from "react-native";


const Stack = createStackNavigator();
export const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={() => (
                <View><Text>account</Text></View>
            )}/>
            <Stack.Screen name="Login" component={() => (
                <View><Text>login screen</Text></View>
            )}/>
        </Stack.Navigator>
    )
}