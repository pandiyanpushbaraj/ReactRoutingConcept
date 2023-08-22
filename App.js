import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container,Button} from 'react-bootstrap';  
// import Image from 'react-bootstrap/Image'

import { Link } from 'react-router-dom';

import {Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { SignIn } from './components/SignIn';
    // function Based Event
function App()
{

return (    
   <div>
        <Navbar bg="primary sticky-xl-top" expand="md">  
        <Container>  
          <Navbar.Brand href="#home">SIMPLE LANDING PAGE</Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ml-auto">  
                   <Link  to="/Home"><Button class="btn-outline-success"> HOME</Button></Link>
                   <Link to="/About" ><Button class="btn-outline-success"> ABOUT  </Button></Link>  
                   <Link  to="/Contacts"><Button class="btn-outline-success"> CONTECT </Button></Link>
                   <Link to='/SignIn'><Button class="btn-outline-success"> SIGNIN </Button></Link>
            </Nav>  
          </Navbar.Collapse> 
        </Container>  
      </Navbar> 
           <Routes>
                <Route path='/' element={<Home/>}/>  
                <Route path='/Home' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contacts' element={<Contacts/>}/>
                <Route path='/SignIn' element={<SignIn/>}/>
         </Routes>
    </div> 
 
);
}  
   


export default App;
