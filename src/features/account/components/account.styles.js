import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import {colors} from "../../../Infrastructure/theme/colors"

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg")
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.3)
`

export const AccountContainer = styled.View`
    padding: ${props => props.theme.space[4]}
    margin-top: ${props => props.theme.space[2]}
    background-color: rgba(255,255,255,0.7)
`

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary
})`
    padding: ${props => props.theme.space[2]}
`;

export const AuthInput = styled(TextInput)`
    width: 300px
`