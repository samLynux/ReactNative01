import styled from "styled-components/native";
import React, { useContext, useState} from "react";
import { TouchableOpacity } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../utils/safe-area.component";
import { Avatar, List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect } from "@react-navigation/native";


const SettingItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]}
`
const AvatarContainer = styled.View`
    align-items: center;
`

 export const SettingsScreen = ({navigation}) => {
    const {onLogout, user} = useContext(AuthenticationContext)
    const [photo, setPhoto] = useState(null)

    
    const getProfilePicture = async (curUser) => {
      const photoUri = await AsyncStorage.getItem(`${curUser.uid}-photo`)
      setPhoto(photoUri)
    }
    
    useFocusEffect(
      React.useCallback(() => {
        // console.log(user.uid);
        getProfilePicture(user)
      }, [user])
    )

    return (
      <SafeArea>
          <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
              {!photo &&
              <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD"/>
              }
              {photo &&
              <Avatar.Image 
                size={180} 
                source={{uri: photo}}
                backgroundColor="#2182BD"/>
              }
            </TouchableOpacity>
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
                    onPress={() => navigation.navigate("Favourites")}
                
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

