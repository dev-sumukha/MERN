import React from 'react'
import { useState } from 'react'
import { Navigate, NavLink, redirect } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')

  const loginUser = async(e)=>{
    e.preventDefault();

    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })

    const data = res.json(); //converting the data to JSON

    if(res.status === 400 || !data){
      window.alert('invalid credentials');
    } else {
      window.alert("login success");
    }
  }
  return (
    <>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form className='register-form' id='register-form' method='POST'>

                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input type="email" name='email' id='email' autoComplete='off' placeholder='your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                  <label htmlFor="password">password</label>
                  <input type="password" name='password' id='password' autoComplete='off' placeholder='your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="form-group form-button">
                  <input type="submit" name='signin' id='signin' className='form-submit' value="Log In" onClick={loginUser}/>
                </div>
              </form>

            
              <div className="signin-image">
                <NavLink to='/signup' className='signup-image-link'>Create Account</NavLink>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Login