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


export default function App( {history} ) {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div className="app">
      <header>
      <nav>
        <Navbar color="light" light="md">
          <NavbarBrand href="/">Instautomated!</NavbarBrand>
          
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/tools">Tools</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
            </NavItem>

            </Nav>


          </Collapse>
        </Navbar>
      </nav>
      </header>

      <main>

        <Routes />

      </main>

      <footer>
      <Badge color="secondary" pill>Created by Rodrigo Onetto</Badge> 
      </footer>

      
    </div>
    

  )
}