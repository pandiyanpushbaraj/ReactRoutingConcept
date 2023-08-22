import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';

export const SignIn = () => {
  <style>
  </style>
  return (
   <div className='container-fluid d-flex align-items-center justify-content-center vh-100 shadow-lg p-3 mb-5 bg-dark'>
        
        <Card style={{ width: '28rem',border:"2px solid red" }} >
         
          <div className='d-flex'>
          <Card.Img variant="top" className='rounded mt-2  align-items-center shadow-lg p-1 ml-5' style={{width:"160px",border:"3px solid red"}} src="https://images.pexels.com/photos/4297503/pexels-photo-4297503.jpeg?cs=srgb&dl=pexels-prithivirajan-c-4297503.jpg&fm=jpg" />
           <h2 className='ml-5 mt-5 text-dark' >SIGNIN</h2>
          </div>
          <hr></hr>
            <Card.Body>
              <Card.Body>
                   
          <div className="container row">     
                  <TextField id="outlined-name-input" label="Name" type="text" autoComplete="current-password"  />     
          </div>
             <div className='container row mt-3'>
                  <TextField id="outlined-email-input" label="Email" type="email" autoComplete="current-password" />
             </div>
             <div className='container row mt-3'>
                  <TextField id="outlined-mobile-input" label="Mobile No" type="number" autoComplete="current-password" />
             </div>

         
              </Card.Body>
              <Button variant="primary text-center" style={{marginLeft:"28%"}}   >SIGNIN</Button>
            </Card.Body>
        </Card> 
       
   </div>
  )
}
