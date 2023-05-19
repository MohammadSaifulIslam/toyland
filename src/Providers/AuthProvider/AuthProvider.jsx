import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile, } from "firebase/auth";
import { createContext, useState } from 'react';
import app from "../../firebase/firebase_config";



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const[loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();


    const user = "Saiful"
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const authInfo = {
        loading,
        user,
        createUser,
        loginUser,
        updateUser,
        loginWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;