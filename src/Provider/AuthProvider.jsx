import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
const googleProvider = new GoogleAuthProvider;

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const LogOut = ()=>{
        return signOut(auth);
    };

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);

};

 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        };
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        LogOut,
        signIn,
        loading,
        setLoading,
        googleSignIn,
    };
    return (<AuthContext value={authData}>{children}</AuthContext>);
};

export default AuthProvider;