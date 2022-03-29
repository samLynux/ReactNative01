import styled from "styled-components/native";
import React, {useState, useContext} from "react";
import { Button } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../utils/safe-area.component";
import { Avatar, List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]}
`
const AvatarContainer = styled.View`
    align-items: center;
`

 export const SettingsScreen = ({navigation}) => {
    const {onLogout, user} = useContext(AuthenticationContext)
    return (
      <SafeArea>
          <AvatarContainer>
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD"/>
            <Spacer position="top" size="large">
              <Text variants="label">{user.email}</Text>
            </Spacer>
          </AvatarContainer>
          
          <List.Section>
              <SettingItem
                title="Favorites"
                description="View fav"
                left={(props) => (
                    <List.Icon {...props}
                        color="black" icon="heart"/>)}
                    onPress={() => navigation.navigate("Favorites")}
                
              />
              <SettingItem
                title="Logout"
                left={(props) => (
                    <List.Icon {...props}
                        color="black" icon="email"/>)}
                    onPress={onLogout}
                
              />

          </List.Section>
        
      </SafeArea>
    )
};

