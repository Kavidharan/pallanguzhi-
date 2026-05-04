import React from 'react'
import './style/home.css';
import { Link } from 'react-router-dom';

const play = () => {
  return (
    <div className='play'>
        <button><Link to="/single-play">Single Play</Link></button>
        <button><Link to="/play-with-AI">Play with AI</Link></button>
        <button><Link to="/play-with-friends">Play With Friends</Link></button>
    </div>
  )
}

export default play