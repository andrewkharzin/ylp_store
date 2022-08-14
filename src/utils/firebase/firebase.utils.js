// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth, 
         signInWithRedirect, 
         sigInWithPopup, 
         GoogleAuthProvider,
         signInWithPopup,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
         } from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDyBRvozCdqcNFv_Jc54opoB2I7mgu87l8",
  authDomain: "ylpstore-db.firebaseapp.com",
  projectId: "ylpstore-db",
  storageBucket: "ylpstore-db.appspot.com",
  messagingSenderId: "832246021226",
  appId: "1:832246021226:web:727d5edc224f81370f9e13",
  measurementId: "G-020EJEBMTQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
// const analytics = getAnalytics(app);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
   if (!userAuth) return; 
   const userDocRef = doc(db, 'users', userAuth.uid);

   console.log(userDocRef)

   const userShanshot = await getDoc(userDocRef)
//    console.log(userShanshot)
//    console.log(userShanshot.exists())


   if(!userShanshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });

    } catch(error) {
        console.log('error create the user', error.message)
    }

    return userDocRef;

   }
   //if user data does not exist
   //

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
