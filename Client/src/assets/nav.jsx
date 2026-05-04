import React from 'react';
import './style/nav.css';
import { Link, Router } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
        <h1><a href="/">Pallanguzhi</a></h1>
        <div className='nav-right'>
        <button className='login-btn'>
            <a href="/login">Login</a>
        </button>
        <div className="userprofile">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user profile" className='userprofile-img' />  
        </div>
        </div>
    </div>
  )
}

export default Nav
