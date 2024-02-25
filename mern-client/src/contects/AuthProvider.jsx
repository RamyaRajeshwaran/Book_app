import React, { useEffect, useState, createContext } from 'react';
import app from '../firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   
    const initializeAuth = () => {
        const auth = getAuth(app);
        const googleProvider = new GoogleAuthProvider();
        return { auth, googleProvider };
    };

    useEffect(() => {
        const { auth } = initializeAuth();

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        
        return () => {
            unsubscribe();
        };
    }, []); // Include auth in the dependency array

    const createUser = (email, password) => {
        setLoading(true);
        const { auth } = initializeAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginwithGoogle = () => {
        setLoading(true);
        const { auth, googleProvider } = initializeAuth();
        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password) => {
        setLoading(true);
        const { auth } = initializeAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        const { auth } = initializeAuth();
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
