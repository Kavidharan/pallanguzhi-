import './style/login.css'
import google from './images/google.png'
import React, { useEffect } from 'react'
import ax from 'axios'

const Login = (props) => {

const connection = async () => {
  await ax.get(props.server+'/api')
  .then(res => console.log(res.data.mes))
  .catch(err => console.log(err))
};

const sendData = async (e) => {
  e.preventDefault();
  await ax.get(props.server+'/api/login',{
    body:{
      username : document.getElementById("Username").value,
      password : document.getElementById("Password").value
    }
  })
  .then(res => console.log(res))
  .catch(err => console.error('ERROR',err))
};
  
  useEffect(() => {
      connection();
  },[]);


  return (
    <div className='login'>
        <form>
          <h1>Login</h1>
          <label htmlFor="Username">Username</label>
          <input type="text" id='Username' placeholder="Enter Your Username" />
          <label htmlFor="Password">Password</label>
          <input type="password" id='Password' placeholder="Enter Your Password" />
          <div className="createAndforget">
            <a href="/create" className='create'>Create Account</a>
            <a href="/forgot" className='forgot'>Forgot Password?</a>
          </div>
        <button type="submit" onClick={(e) => sendData(e)}>LOGIN</button>
        </form>
        <button type="button" className='continueWithGoogle'><img src={google} />Continue with Google</button>
    </div>
  )
}

export default Login