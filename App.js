import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Image from 'react-bootstrap/Image'

import {Nav, Navbar, Container,Button} from 'react-bootstrap';  
import "./App.css";


    // function Based Event
function App()
{

return (    
   <div>
        <Navbar bg="primary sticky-xl-top" expand="md">  
        <Container>  
          <Navbar.Brand href="#home"><h2>BEAUTYFULL IMAGE'S</h2></Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ml-auto">  
                  <a href="#home">  <Button class="btn-outline-success"> HOME</Button> </a>  
                  <a href="#currier"> <Button class="btn-outline-success"> CURRIER </Button> </a>   
                  <a href="#about"> <Button class="btn-outline-success"> ABOUT  </Button>  </a>   
                  <a href="#contact"> <Button  class="btn-outline-success"> CONTACT  </Button>  </a> 
            </Nav>  
          </Navbar.Collapse> 
        </Container>  
      </Navbar>
       < Home></Home>   
       < Currier></Currier>
       < About></About>
       < Contact></Contact>
    </div> 
    
     
);
}  

//  Home page
              function Home()
              {
                return(
                  <section id='home'  className='bg-success w-100 vh-100 container-fluid'>
                     <div className='row'>
                        <div className='col bg-dark vh-100'>
                          <h2 className='h-100 d-flex align-items-center justify-content-center' style={{fontWeight:'bolder',fontSize:'50px'}}>Welcome To Home Page</h2>
                        </div>

                        <div className='col bg-info vh-100'>
                          <div className='h-100 d-flex align-items-center justify-content-center  hover-zoom'>
                            <Image src='https://e0.pxfuel.com/wallpapers/163/906/desktop-wallpaper-beautiful-nature-with-girl-beautiful-girl-with-nature-and-moon-high-resolution-beautiful.jpg' className='w-75 h-75 rounded-circle '></Image>
                          </div>
                        </div>
                     </div>    
                  </section>
                )
              }
  // Currier page
              function Currier()
              {
                return(
                  <section id='currier'  className='bg-success w-100 vh-100 container-fluid'>
                   <div className='row'>
                    <div className='col bg-info vh-100'>
                       <div className='h-100 d-flex align-items-center justify-content-center hover-zoom'>
                         <Image src='https://wallpapers.com/images/featured/beautiful-3vau5vtfa3qn7k8v.jpg' className='w-75 h-75 rounded-circle  '></Image>
                       </div>
                     </div>
                     <div className='col bg-dark vh-100'>
                       <h2 className='h-100 d-flex align-items-center justify-content-center' style={{fontWeight:'bolder',fontSize:'50px'}}>Welcome  Curriar Page</h2>
                     </div>

                  </div>               
                 </section>
                )
              } 
                
  //  About page
              function About()
              {
                return(
                  <section id='about' className='w-100 vh-100 container-fluid ' >
                      {/* first Row */}
                        <div className='row h-50'>
                           <div className='col' style={{backgroundColor:'rgb(205, 133, 63)'}}>
                               <h2 className='h-100 d-flex align-items-center justify-content-center'> FIRST BOX</h2>
                           </div>
                          <div className='col' style={{backgroundColor:'rgb(123, 104, 238)'}}>
                              <h2 className='h-100 d-flex align-items-center justify-content-center'>SECONT BOX</h2>
                           </div>
                           <div className='col' style={{backgroundColor:'rgb(255, 182, 193)'}} >
                              <h2 className='h-100 d-flex align-items-center justify-content-center'>THIRD BOX</h2>
                           </div>                    
                       </div>
                       {/* secont row */}
                       <div className='row h-50 '>
                           <div className='col' style={{backgroundColor:'rgb(255, 182, 193)'}} >
                             <h2 className='h-100 d-flex align-items-center justify-content-center'>FOURTH BOX</h2>
                           </div>
                           <div className='col' style={{backgroundColor:'rgb(205, 133, 63)'}}>
                              <h2 className='h-100 d-flex align-items-center justify-content-center'>FIFTH BOX</h2>
                           </div>
                           <div className='col' style={{backgroundColor:'rgb(123, 104, 238)'}}>
                              <h2 className='h-100 d-flex align-items-center justify-content-center'>SIXTH BOX</h2>
                           </div>                    
                       </div>
                  </section>
                )
              }
  // contact
              function Contact()
                {
                  return(
                    <section id='contact' className='w-100 vh-100 container-fluid' >
                       <div className='row'>
                        <div className='col bg-danger vh-100'>
                          <h2 className='h-100 d-flex align-items-center justify-content-center'>Welcome To Contect Us Page</h2>
                        </div>
                        <div className='col bg-info vh-100 hover-zom vh-100 d-flex align-items-center justify-content-center'>
                          <Image src='https://c4.wallpaperflare.com/wallpaper/856/480/975/beautiful-flowers-wallpapers-for-desktop-background-1680-wallpaper-preview.jpg' className='w-75 h-75 rounded-circle  d-flex align-items-center justify-content-center'></Image>
                        </div>
                     </div>
                    </section>
                  )
                }


export default App;
