import React from 'react'

 const Login = () => {
    return (
        <div className="formContainer">
        <div className="formWrapper">
            <span className="logo"> SanjayChat</span>
            <span className="title"> Login</span>
            <form >
                <input type="text" placeholder="Name"/> 
                <input type="email" placeholder="Email"/> 
                <button>Login</button>
            </form>
            <p>You don't have account? Register</p>
      </div>
    </div>
    )
}

export default Login;