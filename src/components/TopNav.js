import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import {Popover, PopoverHeader, PopoverBody, Button, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse} from 'reactstrap'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const TopNav = () => {
    
const toggle = () => setIsOpen(!isOpen);
const [isOpen, setIsOpen] = useState(false);

const [popoverOpen, setPopoverOpen] = useState(false);

  const togglepopover = () => setPopoverOpen(!popoverOpen);

return(
  
<div>
  <Navbar color="light" light="md">
    <NavbarBrand href="/">Instautomated!</NavbarBrand>
    
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" id="navrow" navbar>
        <NavItem>
        
        <Link to="/tools" ><Button outline color="secondary" id="navbutt">Tools</Button></Link>
        </NavItem>
        <NavItem>
        <Link to="/Register" ><Button outline color="secondary" id="navbutt">Register</Button></Link>
        </NavItem> 
        <NavItem>
        <Link to="/login" ><Button outline color="secondary" id="navbutt"><ExitToAppIcon fontSize="small"/>Login</Button></Link>
        </NavItem>
        <NavItem>
        <Button id="Popover1" type="button">
        <MailOutlineIcon fontSize="small"/>
        </Button>
        <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={togglepopover}>
            <PopoverHeader>Contact email:</PopoverHeader>
            <PopoverBody>rodrigo.onetto@outlook.com</PopoverBody>
        </Popover>
        </NavItem>

      </Nav>


    </Collapse>
    </Navbar>
    </div>
 
 )}

export default TopNav;


















