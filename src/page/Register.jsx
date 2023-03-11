import '../styles/register.css';
import React, { useState} from "react";
import { apiPost } from '../api/axios';
import { ToastContainer } from 'react-toastify';
import { notifyError, notifySuccess, notifyWarning } from '../notification/Toastify';
import LoadingSpin from "react-loading-spin";
import { WiStars } from 'react-icons/wi'
import { Link } from 'react-router-dom';
import { regex } from '../util/Util';

const loginState = {
    firstName: '',
    lastName:'',
    email: '',
    phoneNumber: '',
    password: '',

    isFirstNameValid: false,
    isLastNameValid:false,
    isEmailValid: false,
    isPhoneNumberValid: false,
    isPasswordValid: false,

    isFirstNameEmpty: true,
    isLastNameEmpty:true,
    isEmailEmpty:true,
    isPhoneNumberEmpty: true,
    isPasswordEmpty:true
 }

const Register =()=> {
    const loginLink = "/auth/login"
    const[regFormData, setRegFormData] = useState(loginState)
    const[isLoading, setIsLoading] = useState(false)
    const handleRegFormData = (e, type) => {
    const value = e.target.value
    switch(type) {
        case "firstName":
            if(value.length === 0) return setRegFormData({ ...regFormData, firstName: value, isFirstNameValid: true, isFirstNameEmpty: true })
            if(value.length > 1)
                return setRegFormData({ ...regFormData, firstName: value, isFirstNameValid: true, isFirstNameEmpty: false })
            return setRegFormData({ ...regFormData, firstName: value, isFirstNameValid: false, isFirstNameEmpty: false })

        case "lastName":
                if(value.length === 0) return setRegFormData({ ...regFormData, lastName: value, isLastNameValid: true, isLastNameEmpty: true })
                if(value.length > 1)
                    return setRegFormData({ ...regFormData, lastName: value, isLastNameValid: true, isLastNameEmpty: false })
                return setRegFormData({ ...regFormData, lastName: value, isLastNameValid: false, isLastNameEmpty: false })

        case "email":
            if(value.length === 0)return setRegFormData({...regFormData, email: value ,isEmailValid:true,isEmailEmpty:true})
            if(value.match(regex))
            return setRegFormData({ ...regFormData, email: value, isEmailValid: true, isEmailEmpty: false })
            return setRegFormData({ ...regFormData, email: value, isEmailValid: false, isEmailEmpty: false })
        case "phoneNumber":
            if(value.length === 0)return setRegFormData({...regFormData, phoneNumber: value ,isPhoneNumberValid:true, isPhoneNumberEmpty:true})
            if(value.length ===11)
            return setRegFormData({ ...regFormData, phoneNumber: value, isPhoneNumberValid: true, isPhoneNumberEmpty: false })
            return setRegFormData({ ...regFormData, phoneNumber: value, isPhoneNumberValid: false, isPhoneNumberEmpty: false })

        case "password":
            if(value.length === 0) return setRegFormData({ ...regFormData, password: value, isPasswordValid :true, isPasswordEmpty: true })
            if(value.length > 7)
            return setRegFormData({ ...regFormData, password: value, isPasswordValid: true, isPasswordEmpty: false })
            return setRegFormData({ ...regFormData, password: value, isPasswordValid: false, isPasswordEmpty : false })

        default: return regFormData
    }

 }

    const { 
        firstName , lastName, email, phoneNumber,
        password, isEmailEmpty, isEmailValid, isPhoneNumberEmpty, 
        isPhoneNumberValid,isPasswordEmpty,isPasswordValid,isFirstNameValid,
        isFirstNameEmpty,isLastNameEmpty,isLastNameValid,
    } = regFormData


    const allFieldsValid = isFirstNameValid && !isFirstNameEmpty 
                        && isLastNameValid && !isLastNameEmpty 
                        && isEmailValid && !isEmailEmpty 
                        && isPhoneNumberValid && !isPhoneNumberEmpty 
                        && isPasswordValid && !isPasswordEmpty

 const handleClick=(e)=> {
    e.preventDefault();
    setIsLoading(true)
    apiPost("auth/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
    })
    .then(res => {
        console.log(res)
        const data = res.data
        setRegFormData(loginState)
        setIsLoading(false)

        if(res.data.code === -1) notifyWarning(data.description)
        notifySuccess("Successful: \n" + data.description)
    })
    .catch(err => {
        const error = err.response.data
        console.log(err)
        setRegFormData(loginState)
        setIsLoading(false)
        notifyError(error.description)
    })
 }
    
 return(
       <section className="register-section">
        <div className="left-register-div">

            <div className="left-form-div">
                <div className="top">
                    <div className="small-register-logo"/>
                </div>
 
                <div className="title">
                    <h1 className='heading'>Sign Up</h1>
                    <p>Create an account to enjoy our benefits <span id="icon-wistars"><WiStars/> </span></p>
                    <button className="transparent-btn btn-signup">
                        <img src ='https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png' 
                            alt='google-img'/> Sign up with Google</button>
                </div>
                <div className="div-option">
                    <div className="VI"></div> Or <div className="VI"></div>
                </div>
            <form action = "post"  className="register-form" onSubmit={handleClick} > 
            <label htmlFor ="firstName"className="register-form">First Name
                <input type ="text" value = {firstName} onChange={(e)=> handleRegFormData(e, "firstName")} 
                    name="full name" 
                    className={ isFirstNameEmpty ? "register-input" : isFirstNameValid ? "register-input input-valid" : "register-input input-error"} 
                    placeholder="John" />
                    { isFirstNameValid || (!isFirstNameEmpty && <p className="register-sentence">Only names above two characters are required</p>)}
            </label>
            <label htmlFor ="LastName" className="register-form">Last Name 
                <input type ="text" value = {lastName} onChange={(e)=> handleRegFormData(e, "lastName")} 
                    name="full name" 
                    className={ isLastNameEmpty ? "register-input" : isLastNameValid ? "register-input input-valid" : "register-input input-error"} 
                    placeholder="Doe" />
                    { isLastNameValid || (!isLastNameEmpty && <p className="register-sentence">Only names above two characters are required</p>)}
            </label>
            <label htmlFor ="email " className="register-form">Email 
                <input type ="text" value={email} onChange={(e)=> handleRegFormData(e, "email")} 
                    name="email" 
                    className={ isEmailEmpty ? "register-input" : isEmailValid ? "register-input input-valid" : "register-input input-error"} 
                    placeholder="Name@example.com" />
                   { isEmailValid || (!isEmailEmpty && <p className="register-sentence">Email does not match the required format</p>)}
            </label>
            <label htmlFor ="phone Number " className="register-form">Phone Number
                <input type ="tel"  value={phoneNumber} onChange={(e)=> handleRegFormData(e, "phoneNumber")}
                    name="phone Number" 
                    className={isPhoneNumberEmpty ? "register-input" : isPhoneNumberValid ? "register-input input-valid" : "register-input input-error"} 
                    placeholder="08039476277" />
                    {isPhoneNumberValid || (!isPhoneNumberEmpty && <p className="register-sentence">Input the complete phoneNumber</p>)}
            </label>
        
            <label htmlFor ="password " className="register-form">Password
                <input type ="text" value={password} onChange={(e)=> handleRegFormData(e, "password")}
                    name="password" 
                    className={isPasswordEmpty ? "register-input" : isPasswordValid? "register-input input-valid" : "register-input input-error"} 
                    placeholder="password123@" />
                    {isPasswordValid || (!isPasswordEmpty && <p className="register-sentence">Password length should be greater than seven</p>)}
            </label>
            <button type="submit" className={ allFieldsValid ? "opaque-btn btn-signup" : "opaque-btn btn-signup disable-btn"}>
                { isLoading ? <LoadingSpin size="40px" color="white" numberOfRotationsInAnimation={3}/> : "Sign Up" } 
            </button>
            </form>
            <div className="sign-in-link">
                <p>Already a member? <Link to={loginLink}>Sign In</Link></p>

            </div>
            </div>
        </div>

        <div className="right-register-div">
            <div className="info-header">
                <div className="register-text">
                    <h3>It takes 20 years to build a reputation 
                        and five minutes<br/> to ruin it, 
                        if you think about that, you'll do things 
                        <br/>differently."</h3>
                        </div>
                <div className="quote-owner-details">
                <h5 className="quote-owner-h4">-Boluwatife</h5>
                <p className="quote-office-p">Founder,Pay-Buddy</p>
                </div>
            </div>

            <div className="right-div-design">     
            <div className="rectangle-1">   
            <div className="rectangle-2">
                <ToastContainer />
             </div>
            </div>
            </div>
        </div>

     
       </section>

      );
}
export default Register;