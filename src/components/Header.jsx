import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '/Users/user/Desktop/Projects/mcdweb/src/img/mcd-logo-white.png'
import '../components/header.css'

const Header = () => {
  return (
    <div >
          <div className="App">
        <Navbar bg="dark" fixed="top">
        
          <Container>
            
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100%"
                height="100%"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Nav className="ms-auto">
              
              <Nav.Link className="current" href="#Home">Home</Nav.Link>
              <Nav.Link  href="#Services">Services</Nav.Link>
              <Nav.Link  href="#Team">Team</Nav.Link>
              <Nav.Link  href="#About">About</Nav.Link>
              <Nav.Link  href="#Contact">Contact</Nav.Link>
            </Nav>
            
          </Container>
        </Navbar>
      </div>
      
    </div>
  )
}

export default Header