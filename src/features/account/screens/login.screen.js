import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useContext} from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput } from "../components/account.styles";


export const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {onLogin, error} = useContext(AuthenticationContext)

    console.log(error);
    return (
        <AccountBackground>
        <AccountCover />
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
            {error && (<Spacer size="large">
                <Text variant="error">{error}</Text>
            </Spacer>)}
            <Spacer size="large">
            <AuthButton
                icon="lock-open-outline"
                onPress={() => onLogin(email,password)}
                mode="contained"
                >
                Login
            </AuthButton>
            </Spacer>
        </AccountContainer>
        
    </AccountBackground>
    )
}