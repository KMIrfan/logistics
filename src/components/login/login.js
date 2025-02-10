import React from 'react'
import './login.css'
import loginImage from '../../assets/images/sigin.png'
import logo from '../../assets/images/logo-white-bg.png'

const Login = () => {
  return (
    <div className="login-body">
        <div className="login-container">
            <div className="login-form">
                <img src={logo} alt="Illustration" width="100%"/>

                <h5 className="text-center">Sign in</h5>
                <form>
                    <input type="text" className="form-control" placeholder="User name" required/>
                    <input type="password" className="form-control" placeholder="Password" required/>
                    <button type="submit" className="btn common-btn w-100">Sign in</button>
                </form>
            </div>
            <div className="login-image">
                <img src={loginImage} alt="Illustration" width="100%"/>
            </div>
        </div>
    </div>
  )
}

export default Login