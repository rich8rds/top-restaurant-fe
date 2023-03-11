import { message } from 'antd';
import { createContext, useCallback, useReducer, useState } from "react";
import { apiGet, apiPost } from "../api/axios";
import { notification } from '../notification/message';
import { reducer, field } from '../reducer/changePasswordReducer'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const[loginData, setLogiData] = useState({})
    const[signupData, setSignupData] = useState({})
    const[isLoading, setIsLoading] = useState(false)
    const[verifyMessage, setVerifyMessage] = useState([])
    const[messageApi, contextHolder] = message.useMessage()

    const[, dispatch] = useReducer(reducer, field)
    const[tokenValid, setTokenValid] = useState(false)

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


    // const UpdatePassword = () => {

    // }

    const ForgotPassword = useCallback((verifyPasswordTokenUrl) => {
        setIsLoading(true)
        apiGet(verifyPasswordTokenUrl)
        .then(res => {
            console.log(res)
            setIsLoading(false)
            const message = res.data.description
            notification(messageApi,'success', message) 
            setTokenValid(true)
        })
        .catch(err => {
            setIsLoading(false)
            console.log(err)
            let errMsg =  err.response.data.errorMessage
            if(errMsg === undefined)
                notification('error', "This link has expired!")
            else notification('error', errMsg)
            setTokenValid(false)
        })

        return () => {}
    }, [messageApi])

    const ChangePassword = (changePasswordUrl, formData) => {
        apiPost(changePasswordUrl, formData)
        .then(res => {
            console.log(res.data)
            notification('success', res.data.message)
        })
        .catch(err => {
            console.log(err)
                notification('error', "This link has expired!")
        })

        dispatch({type: "clear", value: ""})
    }

    // const ViewProfile = () => {

    // }

    // const EditProfile = () => {

    // }

    // const SocialLogin = () => {

    // }


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
            ForgotPassword,
            ChangePassword,
            verifyMessage,
            tokenValid,

        }}>
        { children }
        { contextHolder }
        </AuthContext.Provider>
    )
}