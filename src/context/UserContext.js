import { message } from 'antd';
import { createContext, useState } from "react";
import { apiGet } from "../api/axios";
import { notification } from '../notification/message';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const[loginData, setLogiData] = useState({})
    const[signupData, setSignupData] = useState({})
    const[isLoading, setIsLoading] = useState(false)
    const[verifyMessage, setVerifyMessage] = useState([])
    const[messageApi, contextHolder] = message.useMessage()

    const VerifyNewUser = async(verificationUrl) => {
        await apiGet((verificationUrl))
        .then(res => {
            console.log(res.data)
            setVerifyMessage(res.data)
        }).catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }

    const ResendVerificationMail = (e, newTokenUrl) => {
        e.preventDefault()
        setIsLoading(true)
        apiGet(newTokenUrl)
        .then(res => {
            console.log(res.data)
            setIsLoading(false)
            notification(messageApi,'success', res.data.description)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
            notification(messageApi, 'error', err.response.data.description)
        })
    }


    return(
        <AuthContext.Provider value={{ 
            loginData, setLogiData,
            signupData, setSignupData,
            isLoading, setIsLoading,
            VerifyNewUser, ResendVerificationMail,
            verifyMessage,


        }}>
        { children }
        { contextHolder }
        </AuthContext.Provider>
    )
}