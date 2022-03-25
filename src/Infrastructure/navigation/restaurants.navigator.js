import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";



import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator 
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalPresentationIOS
                }}>
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantScreen}

            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}

            />
        </RestaurantStack.Navigator>
    )
    }