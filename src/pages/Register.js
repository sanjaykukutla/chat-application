import React from 'react'
import Add from "../img/icons8-upload-48.png"
const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> SanjayChat</span>
                <span className="title"> Register</span>
                <form >
                    <input type="text" placeholder="Name"/> 
                    <input type="email" placeholder="Email"/> 
                    <input type="password" placeholder="Password"/> 
                    <input style={{display: "none"}} type="file" id="file"/> 
                    <label htmlFor="file"> 
                    <img src={Add} alt=""/>
                        <span>Add a avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You don't have account? Login</p>
          </div>
        </div>
    )
}

export default Register
