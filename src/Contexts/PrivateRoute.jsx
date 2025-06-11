import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} =use(AuthContext)
    const location= useLocation()
    console.log(location)
    
    if(loading){
        return
    }

    if(user){
        return children
    }

    return <Navigate to="/auth/login" state={location.pathname}></Navigate>

    
};

export default PrivateRoute;