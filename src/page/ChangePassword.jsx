import '../styles/authpassword.scss'
import { useEffect, useReducer, } from 'react'
import { useSearchParams } from 'react-router-dom'
import { reducer, field } from '../reducer/changePasswordReducer'

import { ArrowLeftOutlined, 
    EyeOutlined,
    CloseCircleOutlined,
    EyeInvisibleOutlined,
} from '@ant-design/icons'

import { antIcon } from '../util/Util'
import { Spin } from 'antd';
import { useAuth } from '../hooks/useAuth'


const ChangePassword = () => {
    const[queryParams] = useSearchParams()
    const{ isLoading, ForgotPassword, ChangePassword, tokenValid } = useAuth()

    const[state, dispatch] = useReducer(reducer, field)

    const checkPasswordMatch = state.passwordMatchError ? "form-input input-error" : "form-input success"
    const confirmPasswordInfoText = state.passwordMatchError ? 'Passwords do not match.' : ''
    const iconVisibilityToggle = state.iconVisible ? <EyeOutlined /> :  <EyeInvisibleOutlined /> 
    const icon2VisibilityToggle = state.icon2Visible ? <EyeOutlined /> :  <EyeInvisibleOutlined /> 

    const changeVisibility = () => dispatch({ type: 'iconVisibility', value: !state.iconVisible })
    const changeVisibility2 = () => dispatch({ type: 'icon2Visibility', value: !state.icon2Visible })
    const getConfirmPassword = e => dispatch({ type: "confirmPassword", value: e.target.value})
    const getPassword = e => dispatch({ type: "password", value: e.target.value})
    
    useEffect(() => {
        const verifyPasswordTokenUrl = `/auth/verify-password-token?${queryParams}`
        ForgotPassword(verifyPasswordTokenUrl)
    }, [queryParams, ForgotPassword])

    const changePassword = (e) => {
        e.preventDefault()
        const changePasswordUrl = `/auth/change-password?${queryParams}`
        ChangePassword(changePasswordUrl, {
            password: state.password,
            confirmPassword: state.confirmPassword
        })
    }

 
  return (
    <section className="reset-password">
        { !tokenValid ? (
            <form className="container" onSubmit={changePassword}>
                <div className="icon"> <ArrowLeftOutlined /></div>
                <h2>Create New Password</h2>
                <p> Your new password must be different from your current password.</p>
                <div className="input">
                    <label htmlFor="password-input" className="mini-head">Password</label>
                    <input id="password-input" className={checkPasswordMatch}
                        type={ state.iconVisible ? "text" : "password" } 
                        placeholder="Password"
                        value={state.password}
                        onChange={getPassword}
                    />
                    <div id="icon-see1" onClick={ changeVisibility } >
                        { iconVisibilityToggle }
                    </div>
                    <p className="info">
                        Password must be at leat 8 characters with one uppercase letter and one symbol.
                    </p>
                </div>

                <div className="input">
                    <label htmlFor="confirm-password" className="mini-head">Confirm Password</label>
                    <input id="confirm-password" className={checkPasswordMatch}
                        type={ state.icon2Visible ? "text" : "password" } 
                        placeholder="Confirm password"
                        value={state.confirmPassword}
                        onChange={getConfirmPassword}
                    />
                    <div id="icon-see2" onClick={ changeVisibility2 }>
                        { icon2VisibilityToggle }
                    </div>
                    <p className='red-info'>{confirmPasswordInfoText}</p>
                </div>

                { isLoading ?  
                    <Spin indicator={antIcon} />  :
                    <button className="btn btn-large" >Change Password</button>
                }
            </form> ) : (
                <div className="change-password-section">
                    <div className="container">
                        <h3 style={{fontSize: "30px"}}> Token Expired! </h3>
                        {/* <div className="input"> */}
                            <CloseCircleOutlined style={{ fontSize: "200px", color: "red"}} id="check-icon" />
                            <p style={{fontWeight: "bold"}}>Invalid or Expired Token!</p> 
                        {/* </div> */}
                    </div>
                </div>
            )
        }
    </section>
  )
}

export default ChangePassword