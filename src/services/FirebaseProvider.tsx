import React from "react";
import firebase from "gatsby-plugin-firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDM7VpbgykCjVab_3oimEzGu5BzmE03HOQ",
    authDomain: "blog-site-a3d9d.firebaseapp.com",
    databaseURL: "https://blog-site-a3d9d.firebaseio.com",
    projectId: "blog-site-a3d9d",
    storageBucket: "blog-site-a3d9d.appspot.com",
    messagingSenderId: "486164789431",
    appId: "1:486164789431:web:4943eb6b840c1c217ff532"
};
// firebase.initializeApp(firebaseConfig);
// ////////////////////////////
let firebaseInstance;
export const getFirebase = (firebase) => {
    if (firebaseInstance) {
        return firebaseInstance;
    }

    firebase.initializeApp(firebaseConfig);
    firebaseInstance = firebase;

    return firebase;
};
console.log("here");
export interface FirebaseContextData {
    isInitialized: boolean;
    firebase: typeof firebase;
    authToken: string | null;
    setAuthToken: (authToken: string) => void;
}

export const FirebaseContext = React.createContext<FirebaseContextData>({
    authToken: null,
    firebase,
    isInitialized: false,
    setAuthToken: () => { },
});
// The provider that will store the logic for manipulating the firebase instance and variables.
export const FirebaseProvider: React.FC = ({ children }) => {
    const [isInitialized, setIsInitialized] = React.useState(false);

    // If we have a window and the authToken already exists in localstorage then initialize the authToken value otherwise null.
    const [authToken, setAuthToken] = React.useState<
        FirebaseContextData["authToken"]
    >(
        typeof window === "object" ? window.localStorage.getItem("authToken") : null
    );
    // If firebase has not been initialized then initialize it.
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        setIsInitialized(true);
        console.log("initalize", isInitialized);
    }
    // A method for setting the authToken in state and local storage.
    const onSetAuthToken = (token: string) => {
        setAuthToken(token);
        localStorage.setItem("authToken", token);
    };
    // If we have the window object and there is no authToken then try to get the authToken from local storage.
    React.useEffect(() => {
        if (typeof window === "object" && !authToken) {
            const token = window.localStorage.getItem("authToken");
            if (token) {
                onSetAuthToken(token);
            }
        }
    }, [authToken]);
    return (
        <FirebaseContext.Provider
            value={{
                authToken,
                firebase,
                isInitialized,
                setAuthToken: onSetAuthToken,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};