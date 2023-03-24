import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
// import {Link} from 'react'
import './Header.css'
import Home from '../Home/Home';
import About from '../About/About';
function Header() {
  return (
    <div className='header'>
        <>
        <Navbar bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:'30px',letterSpacing:'2px',lineHeight:'1',fontWeight:'400',color: '#7a6960'}}>Ninestars</Navbar.Brand>
          <Nav className="mb-3">
            <Nav.Link href="#home"><Link to="/" style={{textDecoration:'none',color:'black'}}>Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link spy={true} to={About} style={{textDecoration:'none',color:'black'}} activeClass='activeClass'> About Us</Link></Nav.Link>
            {/* <Nav.Link href="#pricing" style={{color:'black'}}>Faq</Nav.Link> */}
            <Nav.Link href="#pricing" style={{color:'black'}}>Services</Nav.Link>
            <Nav.Link href="#portfolio" style={{color:'black'}}>Portfolio</Nav.Link>
            <Nav.Link href="#features" style={{color:'black'}}>Team</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{color:'black'}}>Drop Down</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" style={{color:'black'}}>Contact</Nav.Link>
            <Button className='button'> Get Started</Button>
          </Nav>
        </Container>
      </Navbar>
        </>
        <>
        {/* <Home/> */}
      {/* <h1>hii</h1> */}
      </>

    </div>
  )
}

export default Header
