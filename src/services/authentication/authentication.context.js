import firebase from 'firebase/compat';
import React, {useState, createContext} from "react";
import { loginRequest } from './authentication.service';


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(null)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    // console.log(user);
    const onLogin = (email, password) => {
        setIsLoading(true)
        
        loginRequest(email, password)
            .then((u) => {
                setUser(u)
                setIsLoading(false)
            }).catch((e) => {
                setIsLoading(false)
                setError(e.toString())
            })
    }

    const onRegister = (email, password, repeatedPassword) => {
        if(password !== repeatedPassword){
            setError("error, password not match")
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                setUser(u)
                setIsLoading(false)
            }).catch((e) => {
                setIsLoading(false)
                setError(e.toString())
            })
    }


    return (
        <AuthenticationContext.Provider
            value={{
                isAuth: !!user,
                user, 
                isLoading,
                error,
                onLogin,
                onRegister
            }}>
            {children}
        </AuthenticationContext.Provider>
    )
}