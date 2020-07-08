import React, { useState} from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge

} from 'reactstrap';

import Routes from './routes'





export default function App( ) {

  return (
    
    <div className="app">


      

      <Routes />

      

      <footer>
      <Badge color="secondary" pill>Created by Rodrigo Onetto</Badge> 
      </footer>

      
    </div>
    

  )
}