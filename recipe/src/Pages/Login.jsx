import React from 'react'
import '../styles/Login.css'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted...")
    }

    return (
        <div className="login-page">
            <h5>Login Here..</h5>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='email'>
                    <input 
                        type="email" 
                        name="email" 
                        className='form-control' 
                        placeholder='Your e-mail address' 
                        id="email" 
                    />
                </div>
                <div className="password mt-3">
                    <input 
                        type="password" 
                        name="password" 
                        className='form-control' 
                        placeholder='Your Password' 
                        id="password" 
                    />
                </div>
                <button className='btn btn-danger login-btn mt-3'>Subscribe</button>
            </form>
        </div>
    )
}

export default Login