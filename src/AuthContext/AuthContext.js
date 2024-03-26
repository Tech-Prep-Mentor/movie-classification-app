import { createContext, useContext, useEffect, useState } from "react";
import  {checkAuth}  from "../apis/users/checkAuth";
import {useQuery} from "@tanstack/react-query"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const {isError, isLoading, data, isSuccess} = useQuery({
        queryFn: checkAuth,
        queryKey: ["Khai"]
    })
    useEffect(() => {
        // Update based on the presence and truthiness of data
        if (isSuccess && data.status) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [data, isSuccess])
    const login = () =>{setIsAuthenticated(true)}
    const logout = () =>{setIsAuthenticated(false)}

    return (
        <AuthContext.Provider value = {{isAuthenticated, isError, isLoading, isSuccess, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => {
    return useContext(AuthContext)
}