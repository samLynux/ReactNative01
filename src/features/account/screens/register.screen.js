import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useContext} from "react";
import { View, Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, Title } from "../components/account.styles";


export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const {onRegister, error} = useContext(AuthenticationContext)


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
                <Spacer size="large">
                    <AuthInput
                        label="Repeat Password"
                        value={passwordRepeat}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPasswordRepeat(p)}
                    />
                </Spacer>
                {error && (<ErrorContainer size="large">
                    <Text variant="error">{error}</Text>
                </ErrorContainer>)}
                <Spacer size="large">
                <AuthButton
                    icon="email"
                    onPress={() => onRegister(email,password, passwordRepeat)}
                    mode="contained"
                    >
                    Register
                </AuthButton>
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