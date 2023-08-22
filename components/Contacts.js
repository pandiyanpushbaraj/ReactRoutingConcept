import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail} from "react-icons/md";
import TextField from '@mui/material/TextField';
import {Button,Image} from 'react-bootstrap';  
// countrry
const country = [
  {
    value: 'Afgnanithan',
    label: 'Afgnanithan',
  },
  {
    value: 'India',
    label: 'India',
  },
  {
    value: 'china',
    label: 'China',
  },
  {
    value: 'Bermuta',
    label: 'Bermuta',
  },
];

// state
const states = [
  {
    value: 'TamilNadu',
    label: 'TamilNadu',
  },
  {
    value: 'Sitrash',
    label: 'Sitrash',
  },
  {
    value: 'Hidd',
    label: 'Hidd',
  },
  {
    value: 'ISA',
    label: 'ISA',
  },
];
// city
const city = [
  {
    value: 'Chennai',
    label: 'Chennai',
  },
  {
    value: 'Koyambathur',
    label: 'Koyambathur',
  },
  {
    value: 'Thirunalvali',
    label: 'Thirunalvali',
  },
  {
    value: 'villupuram',
    label: 'villupuram',
  },
];
export const Contacts = () => {
  
  return (


    <div className='container-fluid  bg-success mt-1  p-3'> 
      <div className='container'>
        
           <h5 className="ml-3 mt-2">For Asistance On All Things Enfield, Contact Us Page: </h5>
           <div className='container d-flex'>
           <LuPhoneCall  className="ml-3 mt-2"  style={{fontSize:"40px", color:"white"}}></LuPhoneCall> 
           <h3 className='ml-5 mt-2 text-danger'> 1800 210 0007</h3>
           </div>
           <small  style={{color:"white",marginLeft:"80px"}}>(Customer Care & Roadside Assistance 24X7)</small>
           <div className='container d-flex'>
             <MdEmail  className="ml-3 mt-2"  style={{fontSize:"40px", color:"white"}}></MdEmail>
             <h3 className='ml-5 mt-2 text-danger'>support@royalenfield.com</h3>
           </div>
           <h4 className='ml-5 mt-1 '>Please Fill Your Details:</h4>
     
          <div className="container row">
             <div className='col-lg-4'>
                  <TextField id="outlined-name-input" label="Name" type="text" autoComplete="current-password"  />
             </div>
             <div className='col-lg-4'>
                  <TextField id="outlined-email-input" label="Email" type="email" autoComplete="current-password" />
             </div>
             <div className='col-lg-4'>
                  <TextField id="outlined-mobile-input" label="Mobile No" type="number" autoComplete="current-password" />
             </div>

          </div>

          {/* row 2 */}

          <div className="container row mt-4 ">
             <div className='col-lg-4'>
              {/* contry */}
                <TextField id="outlined-select-currency-native" style={{width:"210px"}}
                    select
                    label="Select Country"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                   
                  >
                    {country.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
               </TextField>
             </div>
             
             {/* states */}
            <div className='col-lg-4'>
               <div className='col-lg-4'>
                <TextField id="outlined-select-currency-native" style={{width:"210px",right:"15px"}} className='ml-0'
                    select
                    label="Select State"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                   
                  >
                    {states.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
               </TextField>
             </div>             
          </div>
             {/* city */}

             <div className='col-lg-4'>
               <div className='col-lg-4'>
                <TextField id="outlined-select-currency-native" style={{width:"210px",right:"15px"}} className='ml-0'
                    select
                    label="Select City"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                   
                  >
                    {city.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
               </TextField>
             </div>             
          </div>
             
          </div>

          {/* row 3 */}

           <div className=' container row'>
                <textarea name="postContent" placeholder='Enter Message' rows={4} cols={40} style={{width:"85%",border:"2px solid blue"}} className='mt-4 ml-3'/>   
          </div>
      </div> 
      <div className='container text-center'>
      <Button variant="contained text-white fs-5 bg-dark mt-2 " >Submit</Button>

      </div>
    </div>
  )
}
