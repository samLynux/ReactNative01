import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{headerShown: false,}}>
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantScreen}

            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={() => (<Text>detail</Text>)}

            />
        </RestaurantStack.Navigator>
    )
    }