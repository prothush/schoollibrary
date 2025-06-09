import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { toast } from 'react-toastify';


export const AuthContext= createContext()

const AuthProvider = ({children}) => {

    const [user, setUser]= useState("")
    const [loading, setLoading]= useState(true)
    const successMsg = (msg) => toast.success(msg);
    const errorMsg = (msg) => toast.error(msg);

    

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
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
        loginUser,
        createUser,
        updateUser,
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