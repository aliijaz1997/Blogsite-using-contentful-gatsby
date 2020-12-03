import firebase from "gatsby-plugin-firebase";
import React, {createContext, useEffect, useState} from "react"


export const AuthContext = createContext({});

const AuthProvider = ({child}) => {
    const [user, setUser] = useState<any>(null)
    const [isLoggedin, setisLoggedin] = useState<boolean>()
    useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setUser(user))
    setisLoggedin(true)
    }, [])
    
return <AuthContext.Provider  value = {{user, setUser, isLoggedin, setisLoggedin}} >{child}</AuthContext.Provider>
}

export default AuthProvider;