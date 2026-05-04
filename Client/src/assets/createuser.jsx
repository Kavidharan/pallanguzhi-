import React from 'react'
import './style/createuser.css'

const createuser = () => {
  return (
    <div className='createuser'>
        <form action="/api/cteate" method="post">
            <h1>Create Accont</h1>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder='Enter Youre Name' />
            <label htmlFor="username">User Name</label>
            <input type="text" id='username'  placeholder='Enter Your User Name'/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  placeholder='Enter Your Password'/>
            <label htmlFor="confomPassword">Confom Password</label>
            <input type="password" id="confomPassword"  placeholder='Re Enter Your Password '/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  placeholder='Enter Your Email'/>
            <div className="button">
                <button type="reset" className='clear'>Clear</button>
                <button type="submit" className='create'>Cerate</button>
            </div>
        </form>
    </div>
  )
}

export default createuser