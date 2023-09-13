import React, { useState } from 'react'
import "../styles/Signup.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3080/register", {name, email, password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))

    }
  return (
    <div className='constainer1'>
        <div className="container2">
            <h2>Register</h2> 
            <form onSubmit={handleSubmit}>
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
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail (e.target.value)}

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
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type='submit' className='button'>
                    Register
                </button>
                <p>
                    Already have an account ?
                </p>
                </form>
                <Link to="/login" className='button1'>
                    Login
                </Link>
            
        </div>
    </div>
  )
}

export default Signup