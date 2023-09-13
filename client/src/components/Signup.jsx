import React from 'react'
import "../styles/Signup.css"

const Signup = () => {
  return (
    <div className='constainer1'>
        <div className="container2">
            <h2>Register</h2>
            <form>
                <div className='container3'>
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input 
                    type="text"
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='email'
                    className='container-form' 
                    />
                </div>
                <div className='container3'>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input 
                    type="text"
                    placeholder='Enter Email'
                    autoComplete='off'
                    name='email'
                    className='container-form' 
                    />
                </div>
                <div className='container3'>
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input 
                    type="password"
                    placeholder='Enter Password'
                    autoComplete='off'
                    name='password'
                    className='container-form' 
                    />
                </div>
                <button type='submit' className='button'>
                    Register
                </button>
                <p>
                    Already have an account ?
                </p>
                </form>
                <button className='button1'>
                    Login
                </button>
            
        </div>
    </div>
  )
}

export default Signup