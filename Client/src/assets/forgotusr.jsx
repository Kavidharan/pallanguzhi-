import React from 'react'
import './style/forgotuser.css'

const forgotusr = () => {
  return (
    <div className='forgotuser'>
        <form action="/api/forgot" method="post">
            <h1>Forgot Password</h1>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter Your Email'/>
            <button type="submit">Continue</button>
        </form>
    </div>
  )
}

export default forgotusr