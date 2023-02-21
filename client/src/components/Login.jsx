import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

  return (
    <>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form className='register-form' id='register-form'>

                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input type="email" name='email' id='email' autoComplete='off' placeholder='your email'/>
                </div>

                <div className="form-group">
                  <label htmlFor="password">password</label>
                  <input type="password" name='password' id='password' autoComplete='off' placeholder='your password'/>
                </div>

                <div className="form-group form-button">
                  <input type="submit" name='signin' id='signin' className='form-submit' value="register"/>
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