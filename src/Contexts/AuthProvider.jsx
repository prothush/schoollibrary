import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext= createContext()

const AuthProvider = ({children}) => {

    const [user, setUser]= useState("")
    const [loading, setLoading]= useState(true)

    

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser= (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
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
        createUser,
        updateUser,
    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;