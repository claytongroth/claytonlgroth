import React,  { useState, useEffect } from 'react';

import './App.css';
import LandingPage from './LandingPage';
import MainPage from './MainPage';

function App() {
  const [landing, setLanding] = useState(true);

  return (
    <div className="App">
      {landing ?
        <LandingPage enter={()=>setLanding(false)} seenInside={landing}/>
        : <MainPage backToLanding={()=>setLanding(true)}/>
      }
    </div>
  );
}

export default App;
