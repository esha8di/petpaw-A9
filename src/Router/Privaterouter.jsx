import React, { useContext } from 'react';
import { Contextapi } from '../Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router';

const Privaterouter = ({children}) => {
   const {user,loading}=useContext(Contextapi);
   

   const location=useLocation(null)
   console.log('location',location)

   if(loading && user){

    return <p>loading .........</p>
    
   }

   if(user){
    return children;
   }

   return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privaterouter;