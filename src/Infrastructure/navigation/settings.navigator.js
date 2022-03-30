import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React, {useEffect} from "react";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import { FavouritesScreen } from "../../features/settings/screens/favorurites.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({route, navigation}) => {
    return (
        <SettingsStack.Navigator 
            screenOptions={{
                headerShown: "screen",
                CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS
                }}>
            <SettingsStack.Screen
                options={{
                    header: () => null
                }}
                name="Setting"
                component={SettingsScreen}

            />
             <SettingsStack.Screen
                name="Favourites"
                component={FavouritesScreen}

            />
            <SettingsStack.Screen
                name="Camera"
                component={CameraScreen}

            />
        </SettingsStack.Navigator>
    )
    }