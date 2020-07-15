import React, { useState} from 'react';
import './App.css';
import MobileHome from './pages/MobileHome'
import {
  
  Badge

} from 'reactstrap';

import Routes from './routes'





export default function App( ) {

  return (
    <div>
    <div className="app">


      

      <Routes />

      

      
    </div>

    <div className="mobile">

      <MobileHome />
      
    </div>
    </div>
    
    

  )
}