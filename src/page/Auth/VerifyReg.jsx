import { antIcon } from '../../util/Util'
import { useEffect, } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { Spin } from 'antd';
import { ArrowLeftOutlined,
        CheckCircleOutlined,
        CloseCircleOutlined
} from '@ant-design/icons'
import { useAuth } from '../../hooks/useAuth';


import './authpassword.scss';


const VerifyReg = () => {
    let navigate = useNavigate()
    const goBack = () => navigate(-1)
    const [queryParams] = useSearchParams() 
    const{ isLoading, verifyMessage, VerifyNewUser, ResendVerificationMail } = useAuth()

  useEffect(() => {
    const verificationUrl = `auth/verify-registration?${queryParams}`
    VerifyNewUser(verificationUrl)
  }, [queryParams, VerifyNewUser])

  const resendVerificationMail = (e) => {
    const newTokenUrl = `auth/resend-verification-token?${queryParams}`
    ResendVerificationMail(e, newTokenUrl)
  }


  return (
    <section className="verify-section">
    <div>
        {
            isLoading ? 
            <Spin indicator={antIcon} /> : 
           ( 
                <form className="container">
                    <div className="icon" onClick={goBack}> <ArrowLeftOutlined /></div>
                    <h2>Verify Registration</h2>
                    {
                        verifyMessage === 'Email Verified' ? 
                        <div className="response">
                            <CheckCircleOutlined style={{ fontSize: "200px", color: "#7b3aed"}} id="check-icon" />
                            <p>Token Verified!</p>  
                                { isLoading ?  <Spin indicator={antIcon} /> : 
                                    <Link to="/auth/signin" className="btn btn-large link">Click to Login</Link>
                                 }
                        </div>
                            : 
                        <div className="response">
                            <CloseCircleOutlined style={{ fontSize: "200px", color: "red"}} id="check-icon" />
                            <p style={{fontWeight: "bold"}}>Invalid or Expired Token!</p> 
                            
                            { isLoading ?  <Spin indicator={antIcon} />  :
                                <button className="btn btn-large" onClick={resendVerificationMail}>
                                    Click to Resend Verification Mail  
                                </button>
                            }
                        </div>
                    }
                </form>
            )
        }
    </div>
</section> 
  )
}

export default VerifyReg