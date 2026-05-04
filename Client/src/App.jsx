import './App.css';
import {BrowserRouter as Router, Routes, Route, useFetcher} from 'react-router-dom';
import Home from './assets/home';
import Nav from './assets/nav';
import SinglePlay from './assets/single-play';
import Login from './assets/login';
import Createuser from './assets/createuser';
import Forgotusr from './assets/forgotusr';
import { use } from 'react';
import { useEffect } from 'react';

const server = import.meta.env.VITE_SERVER_API_URL;


function App() {
  return (
    <div className="App">
    <Nav />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-play' element={<SinglePlay />} />
        <Route path='/login' element={<Login server = {server}/>} />
        <Route path='/create' element={<Createuser />} />
        <Route path='/forgot' element={<Forgotusr />} />
        {/* <Route path='/play-with-friends' element={<PlayWithFriends />} /> */}
      </Routes>
    </Router>
    </div>
  )
}

export default App
