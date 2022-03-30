import styled from "styled-components/native";
import React, {useRef, useState, useEffect} from "react";
import { View, TouchableOpacity } from "react-native";
import {Camera} from "expo-camera"
import { Text } from "../../../components/typography/text.component";

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`

const PictureTake = styled(TouchableOpacity)`
    width: 100%;
    height: 100%;
`

 export const CameraScreen = ({navigation}) => {
    const cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    const snap = async() => {
        if(cameraRef){
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
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

