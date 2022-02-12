import React,  { useState, useEffect } from 'react';

import './App.css';
import LandingPage from './LandingPage';
import MainPage from './MainPage';

function App() {
  
  const [landing, setLanding] = useState(true);
  const isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;

  return (
    <div className="App">
      {landing ?
      <div >
        <LandingPage isMobile={isMobile} enter={()=>{setLanding(false)}} seenInside={landing}/>
      </div>
        : <MainPage isMobile={isMobile} backToLanding={()=>setLanding(true)}/>
      }
    </div>
  );
}

export default App;
