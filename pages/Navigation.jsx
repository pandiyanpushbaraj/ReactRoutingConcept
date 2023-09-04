import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import {Link} from 'react-router-dom';
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#C5C6D0", borderBottom:"3.5px Solid gray"}} className='sticky-lg-top' >
        <Container>
            <Navbar.Brand href="#home" style={{color:"white", fontSize:"1.5rem", fontWeight:"600"}}>TAMILNADU TOURISM</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className='nav-item'>
               
                    <Nav.Link  as={Link} to="Home"  style={{color:"white"}}>Home</Nav.Link>

                    <Nav.Link  as={Link} to="Placetovisit"  style={{color:"white"}}>Place To Visit</Nav.Link>

                    <Nav.Link as={Link} to="BestTimeToVisit" style={{color:"white"}}>Best Time To Visit</Nav.Link>
                    <Nav.Link as={Link} to="Packages" style={{color:"white"}}>Packages</Nav.Link>
                   <Nav.Link as={Link} to='Food' style={{color:"white"}}>Food</Nav.Link>                                      
                </Nav>
               
               

            </Navbar.Collapse>
        </Container>
       
    </Navbar>
    
  )
}

export default Navigation