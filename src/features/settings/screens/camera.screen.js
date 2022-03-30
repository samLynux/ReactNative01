import styled from "styled-components/native";
import React, {useRef, useState, useEffect, useContext} from "react";
import { View, TouchableOpacity } from "react-native";
import {Camera} from "expo-camera"
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`

const PictureTake = styled(TouchableOpacity)`
    width: 100%;
    height: 100%;
`

export const CameraScreen = ({navigation}) => {
    
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef();
    const {user} = useContext(AuthenticationContext)

    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    const snap = async() => {
        if(cameraRef){
            // console.log("xxxxxxxxxx");
            const photo = await cameraRef.current.takePictureAsync();
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
            navigation.goBack();
        }
    }


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
            })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
      <ProfileCamera
        ref={camera => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        >
        <PictureTake  onPress={snap}></PictureTake>
      </ProfileCamera>
    )
};

