import { message } from 'antd';
import axios from 'axios'
import { createContext, useState } from "react";
import { notification } from '../notification/message';

export const UserContext = createContext()

const resetPasswordUrl = `/auth/forgot-password`

export const AuthProvider = ({ children }) => {
    const[loginData, setLogiData] = useState({})
    const[isLoading, setIsLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();

    const[email, setEmail] = useState('')
    const[errorMsg, setErrorMsg] = useState("Enter a valid email.")
    const[isEmailError, setIsEmailError] = useState(false)
    
    const sendEmailToGetResetToken = (e) => {
        e.preventDefault()
        if(!isEmailError) {
            setIsLoading(true)
            axios.post(resetPasswordUrl, {
                email: email 
            })
            .then(res => {
                setIsLoading(false)
                console.log(res.data)
                notification(messageApi, 'success', res.data)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
                notification(messageApi, 'error', err.response.data.errorMessage)
            })
            setEmail('')
        }else {
            setErrorMsg("You have to enter a valid email!")
        }
    }

    return(
        <UserContext.Provider value={{ loginData, setLogiData, 
            sendEmailToGetResetToken, 
            isLoading,
            errorMsg,
            isEmailError,
            setIsEmailError,
            setEmail,
            email,
        }}>
        { children }
        { contextHolder }
        </UserContext.Provider>
    )
}