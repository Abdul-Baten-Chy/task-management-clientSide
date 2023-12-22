/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import  { MyContextProvider } from "./MyContext";

const Private = ({children}) => {
    const {user, loading}=useContext(MyContextProvider)
    const location =useLocation()

    
if(loading){
        return <span className="loading loading-bars loading-lg "></span>
    }

    if(user){
        return children
        
    }else{
       return <Navigate state={location.pathname} to={'/signIn'} replace></Navigate>
    }
};

export default Private;