import '../styles/login.css';
import React, { useState} from "react";
import { apiPost } from '../api/axios';
import { ToastContainer } from 'react-toastify';
import { notifyError, notifyWarning } from '../notification/Toastify';
import LoadingSpin from "react-loading-spin";
import { WiStars } from 'react-icons/wi'
import { Link, } from 'react-router-dom';

const loginState = {
    email: '',
    password: '',

    isEmailValid: false,
    isPasswordValid: false,

    isEmailEmpty:true,
    isPasswordEmpty:true
 }

const Login =()=> {
    const signupLink = "/auth/signup"
    const[regFormData, setRegFormData] = useState(loginState)
    const[isLoading, setIsLoading] = useState(false)
    // const navigate = useNavigate();
    
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/

    const handleLoginData = (e, type) => {
    const value = e.target.value
    switch(type) {
        case "email":
            if(value.length === 0)return setRegFormData({...regFormData, email: value ,isEmailValid:true,isEmailEmpty:true})
            if(value.match(regex))
            return setRegFormData({ ...regFormData, email: value, isEmailValid: true, isEmailEmpty: false })
            return setRegFormData({ ...regFormData, email: value, isEmailValid: false, isEmailEmpty: false })

        case "password":
            if(value.length === 0) return setRegFormData({ ...regFormData, password: value, isPasswordValid :true, isPasswordEmpty: true })
            if(value.length > 7)
            return setRegFormData({ ...regFormData, password: value, isPasswordValid: true, isPasswordEmpty: false })
            return setRegFormData({ ...regFormData, password: value, isPasswordValid: false, isPasswordEmpty : false })

        default: return regFormData
    }

 }

    const { email, password, isEmailEmpty, isEmailValid, isPasswordEmpty,isPasswordValid } = regFormData
    const allFieldsValid = isEmailValid  && !isEmailEmpty && isPasswordValid && !isPasswordEmpty

 const handleClick=(e)=> {
    e.preventDefault();
    setIsLoading(true)
    apiPost("auth/login", {
        email: email,
        password: password,
    })
    .then(res => {
        console.log(res)
        const data = res.data
        setRegFormData(loginState)
        setIsLoading(false)
        if(res.data.code === -1) notifyWarning(data.description)
        // else navigate("/welcome", { state: firstName });
    })
    .catch(err => {
        console.log(err)
        setRegFormData(loginState)
        setIsLoading(false)
        notifyError("Registration Failed!")
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
                    <h1 className='heading'>Sign In</h1>
                    <p>Create an account to enjoy our benefits <span id="icon-wistars"><WiStars/> </span></p>
                    <button className="transparent-btn btn-signup">
                        <img src ='https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png' 
                            alt='google-img'/> Sign up with Google</button>
                </div>
                <div className="div-option">
                    <div className="VI"></div> Or <div className="VI"></div>
                </div>
            <form action = "post"  className="register-form" onSubmit={handleClick} > 
            
            <label htmlFor ="email " className="register-form">Email 
                <input type ="text" value={email} onChange={(e)=> handleLoginData(e, "email")} 
                    name="email" 
                    className={ isEmailEmpty ? "register-input" : isEmailValid ? "register-input input-valid" : "register-input input-error"} 
                    placeholder="Name@example.com" />
                   { isEmailValid || (!isEmailEmpty && <p className="register-sentence">Email does not match the required format</p>)}
            </label>
            <label htmlFor ="password " className="register-form label-pass">Password
            <Link to={"/auth/forgot-password"} className="fpass-link">Forgot Password?</Link>
                <input type ="text" value={password} onChange={(e)=> handleLoginData(e, "password")}
                    name="password" 
                    className={isPasswordEmpty ? "register-input" : isPasswordValid? "register-input input-valid" : "register-input input-error"} 
                    placeholder="password123@" />
                    {isPasswordValid || (!isPasswordEmpty && <p className="register-sentence">Password length should be greater than seven</p>)}
            </label>
            <button type="submit" className={ allFieldsValid ? "opaque-btn btn-signup" : "opaque-btn btn-signup disable-btn"}>
                { isLoading ? <LoadingSpin size="40px" color="white" numberOfRotationsInAnimation={3}/> : "Sign In" } 
            </button>
            </form>
            <div className="sign-in-link">
                <p>Not Already a member? <Link to={signupLink}>Sign Up</Link></p>

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
export default Login;