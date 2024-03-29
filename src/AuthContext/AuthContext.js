import { createContext, useContext, useEffect, useState } from "react";
import  {checkAuth}  from "../apis/users/checkAuth";
import {useQuery} from "@tanstack/react-query"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const {isError, isLoading, data, isSuccess} = useQuery({
        queryFn: checkAuth, //Check if the user logs in or not
        queryKey: ["Khai"]
    })
    useEffect(() => {
        if (data?.status === true) {
          setIsAuthenticated(true);
        } else if(data?.status === false) {
          setIsAuthenticated(false);
          // Consider additional actions on authentication failure, e.g., redirecting to login.
        }
      });
      
    const login = () =>{setIsAuthenticated(true)}
    const logout = () =>{setIsAuthenticated(false)}

    return (
        //children can have access to the data inside the value
        <AuthContext.Provider value = {{isAuthenticated, isError, isLoading, data,isSuccess, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


//consume the data in the provider
export const useAuth = () => {
    return useContext(AuthContext) //what comes back contain all the data in the AuthContext
}