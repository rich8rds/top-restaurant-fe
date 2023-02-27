import { message } from 'antd';
import { createContext, useCallback, useState } from "react";
import { apiGet } from "../api/axios";
import { notification } from '../notification/message';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const[loginData, setLogiData] = useState({})
    const[signupData, setSignupData] = useState({})
    const[isLoading, setIsLoading] = useState(false)
    const[verifyMessage, setVerifyMessage] = useState([])
    const[messageApi, contextHolder] = message.useMessage()

    const VerifyNewUser = useCallback((verificationUrl) => {
         apiGet((verificationUrl))
        .then(res => {
            const message = res.data.description
            notification(messageApi,'success', message)
            setVerifyMessage(message)
        }).catch(err => {
            notification(messageApi, 'error', err.response.data.description)
            setIsLoading(false)
        })
    }, [messageApi])

    const ResendVerificationMail = (e, newTokenUrl) => {
        e.preventDefault()
        setIsLoading(true)
        apiGet(newTokenUrl)
        .then(res => {
            console.log(res.data)
            setIsLoading(false)
            notification(messageApi,'success', "Link sent. Access your mail to get verified!")
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
            notification(messageApi, 'error', err.response.data.description)
        })
    }


    return(
        <AuthContext.Provider value={{ 
            loginData, 
            setLogiData,
            signupData, 
            setSignupData,
            isLoading, 
            setIsLoading,
            VerifyNewUser, 
            ResendVerificationMail,
            verifyMessage,
        }}>
        { children }
        { contextHolder }
        </AuthContext.Provider>
    )
}