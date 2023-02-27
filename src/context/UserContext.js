// import { message } from 'antd';
// import axios from 'axios'
import { createContext, useState } from "react";
// import { notification } from '../notification/message';

export const UserContext = createContext()

export const AuthProvider = ({ children }) => {
    const[loginData, setLogiData] = useState({})
    return(
        <UserContext.Provider value={{ loginData, setLogiData, 
        }}>
        { children }
        {/* { contextHolder } */}
        </UserContext.Provider>
    )
}