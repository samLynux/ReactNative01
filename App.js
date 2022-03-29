import React from "react";


import { ThemeProvider } from 'styled-components';
import {theme} from "./src/Infrastructure/theme"
import {useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald"
import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato"

import { Navigation } from "./src/Infrastructure/navigation/index";

import firebase from 'firebase/compat';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";



const firebaseConfig = {
  apiKey: "AIzaSyBnm4CwiE7N3DWIpTGK7QZOLm0990IcHdA",
  authDomain: "mealstogo-f52b8.firebaseapp.com",
  projectId: "mealstogo-f52b8",
  storageBucket: "mealstogo-f52b8.appspot.com",
  messagingSenderId: "88325928414",
  appId: "1:88325928414:web:7359b5698639d500b8594f"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  // const [isAuth, setIsAuth] = useState(false)
  
  // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  // useEffect(() =>{ 
  //   setTimeout(() => {
  //   firebase.auth().signInWithEmailAndPassword("email@email.com", "test123")
  //     .then((user) => {
  //       setIsAuth(true)
  //     }).catch((e) => {
  //       console.log(e);
  //     })}, 2000)
  // },[])

 
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if(!oswaldLoaded || !latoLoaded){
    return null
  }

  

  
  return (
    <>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
                <Navigation/>
      </AuthenticationContextProvider>
    </ThemeProvider>
    </>
  );
}

