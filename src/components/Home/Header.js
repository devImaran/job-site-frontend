import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Header.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import './Home.css'

    const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
  
      <Navbar style={{backgroundColor : '#1a0038',padding:'25px'}} dark expand="md">
      <Container>
        <NavbarBrand href="/">JOB PORTOL</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  className="ml-auto" navbar >
            <NavItem >
              <NavLink id="nav_navigation" href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="nav_navigation" href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="nav_navigation" href="#contact">Contact US</NavLink>
            </NavItem>
          
          </Nav>
          
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
