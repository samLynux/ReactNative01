import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React, {useEffect} from "react";
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
                name="Settings"
                component={SettingsScreen}

            />
             <SettingsStack.Screen
                name="Favourites"
                component={() => null}

            />
        </SettingsStack.Navigator>
    )
    }