import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { toast } from 'react-toastify';


export const AuthContext= createContext()

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();

    const [user, setUser]= useState("")
    const [loading, setLoading]= useState(true)
    const successMsg = (msg) => toast.success(msg);
    const errorMsg = (msg) => toast.error(msg);

    const googleSignIn= ()=>{
        return signInWithPopup(auth, provider)
    }

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser= (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const userLogout= ()=>{
        return signOut(auth)
    }



    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, ((currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        }))
        return ()=>{
            unsubscribe()
        }
    },[])




    const userInfo={
        user,
        setUser,
        loading,
        loginUser,
        createUser,
        updateUser,
        userLogout,
        googleSignIn,
        successMsg,
        errorMsg
    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;