import {createContext} from "react";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

firebase.initializeApp({
    apiKey: "AIzaSyACCoYmMk69Q5CDGHPzSMCUiebgaxDgL7Y",
    authDomain: "product-aggregator-db18d.firebaseapp.com",
    projectId: "product-aggregator-db18d",
    storageBucket: "product-aggregator-db18d.appspot.com",
    messagingSenderId: "45621538744",
    appId: "1:45621538744:web:7e9ca8a44d5a47ee8b294d",
});

export const Context = createContext(null)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const firebaseApp = firebase