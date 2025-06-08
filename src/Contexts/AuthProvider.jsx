import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext= createContext()

const AuthProvider = ({children}) => {

    

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }




    const userInfo={
        createUser,
    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;