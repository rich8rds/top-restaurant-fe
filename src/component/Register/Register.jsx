import { useState } from 'react'
import './register.css'

import { handleFormData } from './handleLoginData'

const Register = () => {

    const[regFormData, setRegFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        bvn: '',
        password: '',
        isFullNameValid: false,
        isEmailValid: false,
        isphoneNumberValid: false,
        isFullNameEmpty: true,
        isEmailEmpty: true,
        isPhoneNumberEmpty: true, 
        isBvnEmpty: true
    })

    const { 
        fullName, 
        email, 
        phoneNumber, 
        bvn, 
        password, 
        isFullNameValid, 
        isFullNameEmpty,
        isEmailEmpty,
        isEmailValid,

    } = regFormData
    let allInputsValid = isFullNameValid && !isFullNameEmpty

    const handleSignup = (e) => {
        e.preventDefault()
        alert("Clicked")
        // sendFormDataToBackend
    }

    return (
        <section className="register-section">
            <div className="left-register-div">
                <div className='left-reg-div-sec'>
                    <span className="register-logo"> .
                        <div className="small-register-logo"></div>
                    </span>

                    <div className="title">
                        <h1 className="header-h1">Sign up</h1>
                        <p className="header-text">Create an account to enjoy our benefits**</p>
                        <button className="transparent-btn btn"> 
                        <img src='https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png' alt='google-img'/>
                        Sign up with Google</button>
                    </div>

                    <div className="div-option">
                        <div className="vl"></div> Or <div className='vl'></div>
                    </div>

                    <form action="post" className='register-form' onSubmit={ handleSignup }>
                        <label htmlFor="fullName" className="form-label"> Full Name
                            <input type="text" 
                                name="fullName" 
                                onChange={(e) => handleFormData(e, "fullName", regFormData, setRegFormData)}
                                value={fullName} 
                                className={ isFullNameEmpty ? " " : isFullNameValid ? "input-valid" : "input-error"} 
                                placeholder="John Doe"/>
                                <p className=  { isFullNameEmpty ? "remove-error" : isFullNameValid ? "remove-error" : 'error-text'}>
                                Name length must be greater than 2 characters.
                                </p>
                        </label>

                        <label htmlFor="email" className="form-label"> Email
                            <input type="email" 
                                name="email" 
                                onChange={(e) => handleFormData(e, "email", regFormData, setRegFormData)}
                                value={email} 
                                className={ isEmailEmpty ? " " : isEmailValid ? "input-valid" : "input-error"} 
                                placeholder="Name@example.com"/>
                                { isEmailValid || (!isEmailEmpty && <p className='error-text'>Name length must be greater than 2 characters.</p>)}
                        </label>

                        <label htmlFor="phoneNumber" className="form-label"> Phone Number
                            <input type="tel" 
                                name="phoneNumber" 
                                onChange={(e) => handleFormData(e, "phoneNumber", regFormData, setRegFormData)}
                                value={phoneNumber} 
                                className="register-input" 
                                placeholder="08130984756"/>
                                <p className=  { isFullNameEmpty ? "remove-error" : isFullNameValid ? "remove-error" : 'error-text'}>
                                Name length must be greater than 2 characters.
                                </p>
                        </label>

                        <label htmlFor="bvn" className="form-label"> Bvn
                            <input type="text" 
                                name="bvn"
                                onChange={(e) => handleFormData(e, "bvn", regFormData, setRegFormData)}
                                value={bvn} 
                                className="register-input" 
                                placeholder="2256182399"/>
                                <p className=  { isFullNameEmpty ? "remove-error" : isFullNameValid ? "remove-error" : 'error-text'}>
                                Name length must be greater than 2 characters.
                                </p>
                        </label>

                        <label htmlFor="password" className="form-label">Password
                            <input name="password" 
                                type="password" 
                                onChange={(e) => handleFormData(e, "password", regFormData, setRegFormData)}
                                value={password} 
                                className="register-input" 
                                placeholder="Password@123"/>
                                <p className=  { isFullNameEmpty ? "remove-error" : isFullNameValid ? "remove-error" : 'error-text'}>
                                Name length must be greater than 2 characters.
                                </p>
                        </label>
                        
                        <button className={ allInputsValid ? "opaque-btn btn" : "btn btn-disabled"}>Sign Up</button>

                    </form>
                    <div className="sign-in-link">
                        <p>Already a member? <a href="ioi">Sign in</a></p>
                    </div>
                </div>
            </div>

            <div className="right-register-div">
                <div className="right-register-text">
                    <h3>"It takes 20 years to build a reputation and 
                        five minutes to ruin it. If you think about that, 
                        you'll do things differently."</h3>

                    <div className="quote-owner-details">
                        <h4 className='quote-owner-h4'>- Boluwatife</h4>
                        <p className='quote-office-p'>Founder, Pay-Body</p>
                    </div>
                </div>
                <div className="right-div-design">
                    <div className="rectangle-1">
                        <div className="rectangle-2">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register