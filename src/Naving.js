import React from 'react'

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
function Naving() {
  return (
    
    <div>
       <Navbar bg="dark" variant="dark"  >
       
          <Navbar.Brand>KinsWork</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
       
      </Navbar>
    </div>
  )
}
export default Naving