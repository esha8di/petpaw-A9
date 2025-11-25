import React, { useContext } from 'react';
import { Contextapi } from '../Authprovider/Authprovider';
import { Navigate } from 'react-router';

const Privaterouter = ({children}) => {
   const {user,loading}=useContext(Contextapi);

   if(loading){

    return <p>loading .........</p>
    
   }

   if(user){
    return children;
   }

   return <Navigate to='/login'></Navigate>
};

export default Privaterouter;