import { createStackNavigator } from "@react-navigation/stack";
import React, {useContext} from "react";
import { View, Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountCover, AuthButton } from "../components/account.styles";


export const RegisterScreen = () => {
    return (
        <AccountBackground>
            <AccountCover/>
            
        </AccountBackground>
    )
} 