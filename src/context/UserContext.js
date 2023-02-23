import { createContext, useState } from "react";


export const UserContext = createContext()


export const UserProvider = ({ children }) => {
    const[loginData, setLogiData] = useState({})

    return(
        <UserContext.Provider value={{ loginData, setLogiData }}>
        { children }
        </UserContext.Provider>
    )
}