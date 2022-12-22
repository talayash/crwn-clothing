import {createContext, useState} from 'react';

// Actual Value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// User Provider
export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}