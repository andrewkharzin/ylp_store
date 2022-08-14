import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'


export const UserContext = createContext({
    curentUser: null,
    setCurrentUser: () => null

});

export const UserProvider = ({ children }) => {

    const [curentUser, setCurrentUser] = useState(null);
    const value = { curentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe  = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
        });
        return unsubscribe
    }, [])
    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}

