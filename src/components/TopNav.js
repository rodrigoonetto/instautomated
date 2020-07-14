import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Badge, Popover, PopoverHeader, PopoverBody, Button, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse} from 'reactstrap'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';

const TopNav = () => {
    
const toggle = () => setIsOpen(!isOpen);
const [isOpen, setIsOpen] = useState(false);

const [popoverOpen, setPopoverOpen] = useState(false);

const togglepopover = () => setPopoverOpen(!popoverOpen);

const logoutHandler = ()=>{

  localStorage.clear('user_id');
  localStorage.clear('user_name');

}

return(
  
<div>
  <Navbar color="light" light="md">
    
    <NavbarToggler onClick={toggle} />
    <NavbarBrand href="/">Instautomated!</NavbarBrand>
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" id="navrow" navbar>
      <NavItem>
        {(localStorage.getItem('user_id')?(<Link to="/welcome" ><Button outline color="secondary" id="navbutt" onClick={()=>{setIsOpen(false)}}><HomeIcon fontSize="small"/></Button></Link>):"")}
        </NavItem>
        <NavItem>
        {(localStorage.getItem('user_id')?(<Link to="/tools" ><Button outline color="secondary" id="navbutt" onClick={()=>{setIsOpen(false)}}>Tools</Button></Link>):"" )}
        </NavItem>
        <NavItem>
        {(localStorage.getItem('user_id')?(<Link to="/settings" ><Button outline color="secondary" id="navbutt" onClick={()=>{setIsOpen(false)}}><SettingsIcon fontSize="small"/>Settings</Button></Link>):"")}
        </NavItem>
        <NavItem>
        {(localStorage.getItem('user_id')?"":<Link to="/Register" ><Button outline color="secondary" id="navbutt" onClick={()=>{setIsOpen(false)}}>Register</Button></Link> )}
        </NavItem>
        <NavItem>
        {(localStorage.getItem('user_id')?"":<Link to="/login" ><Button outline color="secondary" id="navbutt" onClick={()=>{setIsOpen(false)}}><ExitToAppIcon fontSize="small"/>Login</Button></Link> )}
        </NavItem>
        <NavItem>
        {(localStorage.getItem('user_id')?(<Link to="/" ><Button outline color="danger" id="navbutt" onClick={()=>{setIsOpen(false); logoutHandler()}}>Logout</Button></Link>):"" )}
        </NavItem>
        <NavItem>
        <Button id="Popover1" type="button">
        <MailOutlineIcon fontSize="small"/>
        </Button>
        <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={togglepopover} >
            <PopoverHeader>Contact email:</PopoverHeader>
            <PopoverBody>rodrigo.onetto@outlook.com</PopoverBody>
        </Popover>
        </NavItem>
        {(localStorage.getItem('user_id'))?(<span id="userNameNavBar">Logged in user: {localStorage.getItem('user_name')}</span>):""}
        

      </Nav>
      

      

    </Collapse>
    </Navbar>
    </div>
 
 )}

export default TopNav;

















