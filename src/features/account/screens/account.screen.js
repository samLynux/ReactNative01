import { createStackNavigator } from "@react-navigation/stack";
import React, {useContext} from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountContainer, AccountCover, AnimationWrapper, AuthButton, Title } from "../components/account.styles";


import AnimatedLottieView from "lottie-react-native";

export const AccountScreen = ({navigation}) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <AnimatedLottieView
                    key="animation"    
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/watermelon.json")}
                />
            </AnimationWrapper>
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    onPress={() => navigation.navigate("Login")}
                    mode="contained"
                    >
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="email"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                        >
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
}