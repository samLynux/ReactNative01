import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useContext} from "react";
import { View } from "react-native";
import { ActivityIndicator, Colors, TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, Title } from "../components/account.styles";


export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {onLogin,isLoading, error} = useContext(AuthenticationContext)

    // console.log(error);
    return (
        <AccountBackground>
        <AccountCover />
        <Title>Meals To Go</Title>
        <AccountContainer>
            <AuthInput
                label="E-mail"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(u) => setEmail(u)}
            />
            <Spacer size="large">
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
            </Spacer>
            {error && (<ErrorContainer size="large">
                <Text variant="error">{error}</Text>
            </ErrorContainer>)}
            <Spacer size="large">
            {!isLoading ?
                (<AuthButton
                    icon="lock-open-outline"
                    onPress={() => onLogin(email,password)}
                    mode="contained"
                    >
                    Login
                </AuthButton>)
                : <ActivityIndicator animating={true} color={Colors.blue300}/>
                }
            </Spacer>
            
        </AccountContainer>
        <Spacer size="large">
            <AuthButton
                onPress={() => navigation.goBack()}
                mode="contained"
                >
                Back
            </AuthButton>
            </Spacer>
    </AccountBackground>
    )
}