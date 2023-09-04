import React, { useState } from 'react';

import "./pages.css"
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import c1 from '../Packeges/chennai1.png'
import Image from 'react-bootstrap/esm/Image'
import Button from 'react-bootstrap/Button';
import che from '../images/Chennai.jpeg'
import ra from '../images/r.jpeg';
import kanal from '../images/ko.jpeg';
import ooty from '../images/o.jpeg';
import mri from '../images/madurai.jpeg'
import kanya from '../images/Kanyakumari.jpeg'
import kum from '../images/Kumbakonam.jpeg'
import yar  from '../images/yarcaud.jpeg';
import the1 from '../images/thani1.jpeg';
import hok from '../images/Hogenakkal.jpeg';

 const Packages = () => {
  return (
    <div>
       
       <Chennai/>
       <Ramashwaram/>
      <Kodaikkanl/>
      <Madurai/>
      <Ooty/>
      <Kumbakonam/>
      < Yarcard/>
      <Theni/>
      <Hogenakkal/>
    
      
    </div>  
  )
}

// chennai
const Chennai = () =>
 {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
    return(
        <div>
           <div className="container-fluid mt-5 " id='chennai'>
               <div className="container">
                 <div className="row">
                    <div className="row">
                        <h1 className='text-center ' style={{fontWeighte:'bold',color:'blue'}}>Chennai Packages</h1>
                    </div>
                    <div className="row mt-5">
                    <div className="col-6">
                        <p style={{textAlign:'justify',textIndent:'60px',lineHeight:'35px'}}>
                         Chennai is the capital of Tamil Nadu, which is located on the Coromandel coast of the Bay of Bengal in southern India. Madras was the name given to Chennai in the past. The “Gateway to the South” is another nickname for the city. The city of Chennai is surrounded by three rivers and numerous lakes. This city offers a number of lovely museums that are a must-see for anyone planning a trip to Chennai. Also Chennai is home to one of India’s oldest medical centres. The city is home to more than a third of India’s automobile sector. Let’s read more about it.
                         The Chennai covers 476 km2 area of tamilnadu State.
                            The city Chennai is located at 6.7 m above the sea level.
                            Chennai is one of the highly populated city with population density of 26,553 peoples per square kilometre.
                        </p>
                    </div>
                    <div className="col-6">
                      <Image src={c1} style={{width:'500px',height:'350px'}}></Image>
                    </div>
                    </div>
                    {/* row1 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Chennai  To  Ramashwaram</h6>
                          </div>
                          <div className="card-body ">
                            {/* img */}
                           <Image src={ra } style={{width:'100%',height:'200px'}}/>
                            <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 20,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Chennai To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ramanathasamy Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Dr.Apj.Apdul Kalam Memorial</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Agni Thirtham</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pamban Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kunthukal Beach</li>
                                             </ul>


                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                      </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Chennai  To  Kodaikkaal</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={kanal } style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 10,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Chennai To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bryant Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Silver Cascade Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pillar Rocks, Kodaikanal</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bear Shola Falls, Kodaikana</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Coaker's Walk</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Chennai  To  Ooty</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={ooty} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Chennai To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pykra Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Emerald Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ooty Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Homseata</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                     
                     {/* row2 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}} >
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Chennai  To  Mathurai</h6>
                          </div>
                          <div className="card-body">
                              <Image src={mri} style={{width:'100%',height:'200px'}}/>
                              <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Chennai To Madurai Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Meenatchi Amman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Koodal Azhagar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>kanthi Ninaivu Arasatchiyagam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Aayiram kal Mandabam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Madural Busstant</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                          
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Chennai  To  kanyakumari</h6>
                          </div>
                          <div className="card-body">
                          <Image src={kanya} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 75,0000</h6></h6>


                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Chennai To Kanyakumari</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mathoor Hanging Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kanyakumari Beach</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bharat Mata Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Tsunami Monument.</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Our Lady of Ransom Church.</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Chennai  To  kumbakonam</h6>
                          </div>
                          <div className="card-body">
                          <Image src={kum} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 40,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Chennai To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Saravana Silks</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pramma Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Arul Migu Kasi Visuvanathar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Arulmigu Suriyanar Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>


                    {/* row3 */}
                    <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Chennai  To  Yarcard</h6>
                          </div>
                          <div className="card-body">
                          <Image src={yar} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Chennai To  Yarcard</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Sri Raja Rajeshwari Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pagoda Poin</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kottachedu Teak Forest</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Chennai  To  Theni</h6>
                          </div>
                          <div className="card-body">
                          <Image src={the1} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Chennai To  Theni</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mahamalai Hayway Moountain</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kumbakkarai Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Gowmariyamman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Surnan Fun Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kurangani</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Chennai  To Hogenakkal</h6>
                          </div>
                          <div className="card-body">
                          <Image src={hok} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 60,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Chennai To  Hogenakkal</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Hocgenakkal Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kishnagiri Dam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kavero River</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Melagira Hills</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Subramaniya Siva Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                   
                  </div>
                  </div>
                 
                 </div>
               </div>
            
       
    )
 }
 //  Ramashwaram

const Ramashwaram = () =>
{
 const [centredModal, setCentredModal] = useState(false);

 const toggleShow = () => setCentredModal(!centredModal);
   return(
       <div id="rameshwaram" >
          <div className="container-fluid mt-5">
              <div className="container">
                <div className="row">
                   <div className="row">
                       <h1 className='text-center ' style={{fontWeight:'bold',color:'blue'}}> Ramashwaram    </h1>
                   </div>
                   <div className="row mt-5">
                   <div className="col-6">
                       <p style={{textAlign:'justify',textIndent:'60px',lineHeight:'35px'}}>
                         Ramashwaram      is the capital of Tamil Nadu, which is located on the Coromandel coast of the Bay of Bengal in southern India. Madras was the name given to  Ramashwaram       in the past. The “Gateway to the South” is another nickname for the city. The city of  Ramashwaram      is surrounded by three rivers and numerous lakes. This city offers a number of lovely museums that are a must-see for anyone planning a trip to  Ramashwaram      . Also  Ramashwaram      is home to one of India’s oldest medical centres. The city is home to more than a third of India’s automobile sector. Let’s read more about it.
                        The  Ramashwaram      covers 476 km2 area of tamilnadu State.
                           The city  Ramashwaram      is located at 6.7 m above the sea level.
                            Ramashwaram     is one of the highly populated city with population density of 26,553 peoples per square kilometre.
                       </p>
                   </div>
                   <div className="col-6">
                     <Image src={ra} style={{width:'500px',height:'350px'}}></Image>
                   </div>
                   </div>
                   {/* row1 */}
                 <div className="row  container-fluid mt-4 ">           
                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Ramashwaram To Chennai</h6>
                         </div>
                         <div className="card-body ">
                           {/* img */}
                          <Image src={che } style={{width:'100%',height:'200px'}}/>
                           <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 20,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Ramashwaram  To Chennai Packages</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Ramanathasamy Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Dr.Apj.Apdul Kalam Memorial</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Agni Thirtham</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pamban Bridge</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kunthukal Beach</li>
                                            </ul>


                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                      </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Ramashwaram      To  Kodaikkaal</h6>
                         </div>
                         <div className="card-body">
                           {/* img */}
                         <Image src={kanal } style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 10,0000</h6></h6>

                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Ramashwaram      To Ramaswaram Packages</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Bryant Park</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Silver Cascade Falls</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pillar Rocks, Kodaikanal</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Bear Shola Falls, Kodaikana</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Coaker's Walk</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Ramashwaram      To  Ooty</h6>
                         </div>
                         <div className="card-body">
                           {/* img */}
                         <Image src={ooty} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Ramashwaram      To  Ooty</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pykra Lake</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Emerald Lake</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Ooty Lake</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Homseata</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>
                 </div>
                    
                    {/* row2 */}
                 <div className="row  container-fluid mt-4 ">           
                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}} >
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Ramashwaram      To  Mathurai</h6>
                         </div>
                         <div className="card-body">
                             <Image src={mri} style={{width:'100%',height:'200px'}}/>
                             <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
                   <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Ramashwaram      To Madurai Packages</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Meenatchi Amman Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Koodal Azhagar Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>kanthi Ninaivu Arasatchiyagam</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Aayiram kal Mandabam</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Madural Busstant</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                         
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center'style={{fontSize:'25px'}}>  Ramashwaram       To  kanyakumari</h6>
                         </div>
                         <div className="card-body">
                         <Image src={kanya} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 75,0000</h6></h6>


                         </div>
                         <div className="card-footer">
                         <>
                   <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Ramashwaram      To Kanyakumari</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Mathoor Hanging Bridge</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kanyakumari Beach</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Bharat Mata Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Tsunami Monument.</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Our Lady of Ransom Church.</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center'style={{fontSize:'25px'}}>  Ramashwaram       To  kumbakonam</h6>
                         </div>
                         <div className="card-body">
                         <Image src={kum} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 40,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Ramashwaram      To  Ooty</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Saravana Silks</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pramma Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Arul Migu Kasi Visuvanathar Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Arulmigu Suriyanar Temple</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>
                 </div>


                   {/* row3 */}
                   <div className="row  container-fluid mt-4 ">           
                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Ramashwaram      To  Yarcard</h6>
                         </div>
                         <div className="card-body">
                         <Image src={yar} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>

                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Ramashwaram      To  Yarcard</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Sri Raja Rajeshwari Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pagoda Poin</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kottachedu Teak Forest</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center'style={{fontSize:'25px'}}>  Ramashwaram       To  Theni</h6>
                         </div>
                         <div className="card-body">
                         <Image src={the1} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Ramashwaram      To  Theni</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Mahamalai Hayway Moountain</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kumbakkarai Falls</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Gowmariyamman Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Surnan Fun Park</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kurangani</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Ramashwaram      To Hogenakkal</h6>
                         </div>
                         <div className="card-body">
                         <Image src={hok} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 60,0000</h6></h6>

                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Ramashwaram      To  Hogenakkal</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Hocgenakkal Falls</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kishnagiri Dam</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kavero River</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Melagira Hills</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Subramaniya Siva Temple</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>
                 </div>
                  
                 </div>
                 </div>
                
                </div>
              </div>
           
      
   )
}

//  Ooty
const Ooty = () =>
{
 const [centredModal, setCentredModal] = useState(false);

 const toggleShow = () => setCentredModal(!centredModal);
   return(
       <div>
          <div className="container-fluid mt-5">
              <div className="container">
                <div className="row">
                   <div className="row">
                       <h1 className='text-center ' style={{fontWeight:'bold',color:'blue'}}>Ooty</h1>
                   </div>
                   <div className="row mt-5">
                   <div className="col-6">
                       <p style={{textAlign:'justify',textIndent:'60px',lineHeight:'35px'}}>
                        Ooty is the capital of Tamil Nadu, which is located on the Coromandel coast of the Bay of Bengal in southern India. Madras was the name given to Ooty in the past. The “Gateway to the South” is another nickname for the city. The city of Ooty is surrounded by three rivers and numerous lakes. This city offers a number of lovely museums that are a must-see for anyone planning a trip to Ooty. Also Ooty is home to one of India’s oldest medical centres. The city is home to more than a third of India’s automobile sector. Let’s read more about it.
                        The Ooty covers 476 km2 area of tamilnadu State.
                           The city Ooty is located at 6.7 m above the sea level.
                           Ooty is one of the highly populated city with population density of 26,553 peoples per square kilometre.
                       </p>
                   </div>
                   <div className="col-6">
                     <Image src={ooty} style={{width:'500px',height:'350px'}}></Image>
                   </div>
                   </div>
                   {/* row1 */}
                 <div className="row  container-fluid mt-4 ">           
                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}> Ooty  To  Ramashwaram</h6>
                         </div>
                         <div className="card-body ">
                           {/* img */}
                          <Image src={ra } style={{width:'100%',height:'200px'}}/>
                           <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 20,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '> Ooty To Ramaswaram Packages</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Ramanathasamy Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Dr.Apj.Apdul Kalam Memorial</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Agni Thirtham</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pamban Bridge</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kunthukal Beach</li>
                                            </ul>


                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                      </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}> Ooty  To  Kodaikkaal</h6>
                         </div>
                         <div className="card-body">
                           {/* img */}
                         <Image src={kanal } style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 10,0000</h6></h6>

                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '> Ooty To Ramaswaram Packages</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Bryant Park</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Silver Cascade Falls</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pillar Rocks, Kodaikanal</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Bear Shola Falls, Kodaikana</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Coaker's Walk</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}> Ooty  To  Chennai</h6>
                         </div>
                         <div className="card-body">
                           {/* img */}
                         <Image src={che} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '> Ooty To  Ooty</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pykra Lake</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Emerald Lake</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Ooty Lake</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Homseata</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>
                 </div>
                    
                    {/* row2 */}
                 <div className="row  container-fluid mt-4 ">           
                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}} >
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}> Ooty  To  Mathurai</h6>
                         </div>
                         <div className="card-body">
                             <Image src={mri} style={{width:'100%',height:'200px'}}/>
                             <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
                   <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '> Ooty To Madurai Packages</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Meenatchi Amman Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Koodal Azhagar Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>kanthi Ninaivu Arasatchiyagam</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Aayiram kal Mandabam</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Madural Busstant</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                         
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center'style={{fontSize:'25px'}}> Ooty  To  kanyakumari</h6>
                         </div>
                         <div className="card-body">
                         <Image src={kanya} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 75,0000</h6></h6>


                         </div>
                         <div className="card-footer">
                         <>
                   <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '> Ooty To Kanyakumari</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Mathoor Hanging Bridge</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kanyakumari Beach</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Bharat Mata Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Tsunami Monument.</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Our Lady of Ransom Church.</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center'style={{fontSize:'25px'}}> Ooty  To  kumbakonam</h6>
                         </div>
                         <div className="card-body">
                         <Image src={kum} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 40,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '> Ooty To  Ooty</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Saravana Silks</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pramma Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Arul Migu Kasi Visuvanathar Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Arulmigu Suriyanar Temple</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>
                 </div>


                   {/* row3 */}
                   <div className="row  container-fluid mt-4 ">           
                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}> Ooty  To  Yarcard</h6>
                         </div>
                         <div className="card-body">
                         <Image src={yar} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>

                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '> Ooty To  Yarcard</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Sri Raja Rajeshwari Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pagoda Poin</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kottachedu Teak Forest</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center'style={{fontSize:'25px'}}> Ooty  To  Theni</h6>
                         </div>
                         <div className="card-body">
                         <Image src={the1} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '> Ooty To  Theni</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Mahamalai Hayway Moountain</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kumbakkarai Falls</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Gowmariyamman Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Surnan Fun Park</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kurangani</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}> Ooty  To Hogenakkal</h6>
                         </div>
                         <div className="card-body">
                         <Image src={hok} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 60,0000</h6></h6>

                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '> Ooty To  Hogenakkal</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Hocgenakkal Falls</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kishnagiri Dam</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kavero River</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Melagira Hills</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Subramaniya Siva Temple</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>
                 </div>
                  
                 </div>
                 </div>
                
                </div>
              </div>
           
      
   )
}

// Madurai
const  Madurai = () =>
{
 const [centredModal, setCentredModal] = useState(false);

 const toggleShow = () => setCentredModal(!centredModal);
   return(
       <section id="">
          <div className="container-fluid mt-5">
              <div className="container" id='madurai'>
                <div className="row">
                   <div className="row">
                       <h1 className='text-center ' style={{fontWeight:'bold',color:'blue'}}> Madurai</h1>
                   </div>
                   <div className="row mt-5">
                   <div className="col-6">
                       <p style={{textAlign:'justify',textIndent:'60px',lineHeight:'35px'}}>
                         Madurai is the capital of Tamil Nadu, which is located on the Coromandel coast of the Bay of Bengal in southern India. Madras was the name given to  Madurai in the past. The “Gateway to the South” is another nickname for the city. The city of  Madurai is surrounded by three rivers and numerous lakes. This city offers a number of lovely museums that are a must-see for anyone planning a trip to  Madurai. Also  Madurai is home to one of India’s oldest medical centres. The city is home to more than a third of India’s automobile sector. Let’s read more about it.
                        The  Madurai covers 476 km2 area of tamilnadu State.
                           The city  Madurai is located at 6.7 m above the sea level.
                            Madurai is one of the highly populated city with population density of 26,553 peoples per square kilometre.
                       </p>
                   </div>
                   <div className="col-6">
                     <Image src={mri} style={{width:'500px',height:'350px'}}></Image>
                   </div>
                   </div>
                   {/* row1 */}
                 <div className="row  container-fluid mt-4 ">           
                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Madurai  To  Ramashwaram</h6>
                         </div>
                         <div className="card-body ">
                           {/* img */}
                          <Image src={mri } style={{width:'100%',height:'200px'}}/>
                           <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 20,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Madurai To Ramaswaram Packages</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Ramanathasamy Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Dr.Apj.Apdul Kalam Memorial</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Agni Thirtham</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pamban Bridge</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kunthukal Beach</li>
                                            </ul>


                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                      </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Madurai  To  Kodaikkaal</h6>
                         </div>
                         <div className="card-body">
                           {/* img */}
                         <Image src={kanal } style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 10,0000</h6></h6>

                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Madurai To Ramaswaram Packages</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Bryant Park</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Silver Cascade Falls</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pillar Rocks, Kodaikanal</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Bear Shola Falls, Kodaikana</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Coaker's Walk</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Madurai  To  Ooty</h6>
                         </div>
                         <div className="card-body">
                           {/* img */}
                         <Image src={ooty} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Madurai To  Ooty</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pykra Lake</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Emerald Lake</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Ooty Lake</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Homseata</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>
                 </div>
                    
                    {/* row2 */}
                 <div className="row  container-fluid mt-4 ">           
                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}} >
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Madurai  To  Chennai</h6>
                         </div>
                         <div className="card-body">
                             <Image src={che} style={{width:'100%',height:'200px'}}/>
                             <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
                   <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Madurai To Madurai Packages</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Meenatchi Amman Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Koodal Azhagar Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>kanthi Ninaivu Arasatchiyagam</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Aayiram kal Mandabam</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Madural Busstant</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                         
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center'style={{fontSize:'25px'}}>  Madurai  To  kanyakumari</h6>
                         </div>
                         <div className="card-body">
                         <Image src={kanya} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 75,0000</h6></h6>


                         </div>
                         <div className="card-footer">
                         <>
                   <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Madurai To Kanyakumari</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Mathoor Hanging Bridge</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kanyakumari Beach</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Bharat Mata Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Tsunami Monument.</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Our Lady of Ransom Church.</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center'style={{fontSize:'25px'}}>  Madurai  To  kumbakonam</h6>
                         </div>
                         <div className="card-body">
                         <Image src={kum} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 40,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Madurai To  Ooty</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Saravana Silks</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pramma Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Arul Migu Kasi Visuvanathar Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Arulmigu Suriyanar Temple</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>
                 </div>


                   {/* row3 */}
                   <div className="row  container-fluid mt-4 ">           
                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Madurai  To  Yarcard</h6>
                         </div>
                         <div className="card-body">
                         <Image src={yar} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>

                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Madurai To  Yarcard</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Sri Raja Rajeshwari Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Pagoda Poin</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kottachedu Teak Forest</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center'style={{fontSize:'25px'}}>  Madurai  To  Theni</h6>
                         </div>
                         <div className="card-body">
                         <Image src={the1} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>
                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Madurai To  Theni</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Mahamalai Hayway Moountain</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kumbakkarai Falls</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Gowmariyamman Temple</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Surnan Fun Park</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kurangani</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>

                     <div className="col">
                        <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                         <div className="card-title mt-4"> 
                          <h6 className='text-center' style={{fontSize:'25px'}}>  Madurai  To Hogenakkal</h6>
                         </div>
                         <div className="card-body">
                         <Image src={hok} style={{width:'100%',height:'200px'}}/>
                         <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 60,0000</h6></h6>

                         </div>
                         <div className="card-footer">
                         <>
     <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                   <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                     <MDBModalDialog centered>
                                       <MDBModalContent>
                                         <MDBModalHeader className='bg-secondary' >
                                           <MDBModalTitle ><h4 className='ml-3 '>  Madurai To  Hogenakkal</h4> </MDBModalTitle>
                                           <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                         </MDBModalHeader>
                                         <MDBModalBody>
                                           <h4>Places</h4>
                                            <ul>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Hocgenakkal Falls</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kishnagiri Dam</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Kavero River</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Melagira Hills</li>
                                             <li style={{listStyleType:'none',cursor:'pointer'}}>Subramaniya Siva Temple</li>
                                            </ul>
                                         </MDBModalBody>
                                         <MDBModalFooter>
                                           <MDBBtn color='danger' onClick={toggleShow}>
                                             Close
                                           </MDBBtn>
                                           <MDBBtn>Chouse Place</MDBBtn>
                                         </MDBModalFooter>
                                       </MDBModalContent>
                                     </MDBModalDialog>
                                   </MDBModal>
   </>                     </div>
                        </div>
                     </div>
                 </div>
                  
                 </div>
                 </div>
                
                </div>
              </section>
           
      
   )
}

// Kodaikkanl
const Kodaikkanl = () =>
{
const [centredModal, setCentredModal] = useState(false);

const toggleShow = () => setCentredModal(!centredModal);
  return(
      <div>
         <div className="container-fluid mt-5">
             <div className="container">
               <div className="row">
                  <div className="row">
                      <h1 className='text-center ' style={{fontWeight:'bold',color:'blue'}}>Kodaikkanl</h1>
                  </div>
                  <div className="row mt-5">
                  <div className="col-6">
                      <p style={{textAlign:'justify',textIndent:'60px',lineHeight:'35px'}}>
                       Kodaikkanl is the capital of Tamil Nadu, which is located on the Coromandel coast of the Bay of Bengal in southern India. Madras was the name given to Kodaikkanl in the past. The “Gateway to the South” is another nickname for the city. The city of Kodaikkanl is surrounded by three rivers and numerous lakes. This city offers a number of lovely museums that are a must-see for anyone planning a trip to Kodaikkanl. Also Kodaikkanl is home to one of India’s oldest medical centres. The city is home to more than a third of India’s automobile sector. Let’s read more about it.
                       The Kodaikkanl covers 476 km2 area of tamilnadu State.
                          The city Kodaikkanl is located at 6.7 m above the sea level.
                          Kodaikkanl is one of the highly populated city with population density of 26,553 peoples per square kilometre.
                      </p>
                  </div>
                  <div className="col-6">
                    <Image src={kanal} style={{width:'500px',height:'350px'}}></Image>
                  </div>
                  </div>
                  {/* row1 */}
                <div className="row  container-fluid mt-4 ">           
                    <div className="col">
                       <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                        <div className="card-title mt-4"> 
                         <h6 className='text-center' style={{fontSize:'25px'}}> Kodaikkanl  To  Ramashwaram</h6>
                        </div>
                        <div className="card-body ">
                          {/* img */}
                         <Image src={kanal } style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 20,0000</h6></h6>
                        </div>
                        <div className="card-footer">
                        <>
    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                  <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                    <MDBModalDialog centered>
                                      <MDBModalContent>
                                        <MDBModalHeader className='bg-secondary' >
                                          <MDBModalTitle ><h4 className='ml-3 '> Kodaikkanl To Ramaswaram Packages</h4> </MDBModalTitle>
                                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                          <h4>Places</h4>
                                           <ul>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Ramanathasamy Temple</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Dr.Apj.Apdul Kalam Memorial</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Agni Thirtham</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Pamban Bridge</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Kunthukal Beach</li>
                                           </ul>


                                        </MDBModalBody>
                                        <MDBModalFooter>
                                          <MDBBtn color='danger' onClick={toggleShow}>
                                            Close
                                          </MDBBtn>
                                          <MDBBtn>Chouse Place</MDBBtn>
                                        </MDBModalFooter>
                                      </MDBModalContent>
                                    </MDBModalDialog>
                                  </MDBModal>
  </>                      </div>
                       </div>
                    </div>

                    <div className="col">
                       <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                        <div className="card-title mt-4"> 
                         <h6 className='text-center' style={{fontSize:'25px'}}> Kodaikkanl  To  Chennai</h6>
                        </div>
                        <div className="card-body">
                          {/* img */}
                        <Image src={che } style={{width:'100%',height:'200px'}}/>
                        <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 10,0000</h6></h6>

                        </div>
                        <div className="card-footer">
                        <>
    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                  <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                    <MDBModalDialog centered>
                                      <MDBModalContent>
                                        <MDBModalHeader className='bg-secondary' >
                                          <MDBModalTitle ><h4 className='ml-3 '> Kodaikkanl To Ramaswaram Packages</h4> </MDBModalTitle>
                                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                          <h4>Places</h4>
                                           <ul>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Bryant Park</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Silver Cascade Falls</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Pillar Rocks, Kodaikanal</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Bear Shola Falls, Kodaikana</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Coaker's Walk</li>
                                           </ul>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                          <MDBBtn color='danger' onClick={toggleShow}>
                                            Close
                                          </MDBBtn>
                                          <MDBBtn>Chouse Place</MDBBtn>
                                        </MDBModalFooter>
                                      </MDBModalContent>
                                    </MDBModalDialog>
                                  </MDBModal>
  </>                     </div>
                       </div>
                    </div>

                    <div className="col">
                       <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                        <div className="card-title mt-4"> 
                         <h6 className='text-center' style={{fontSize:'25px'}}> Kodaikkanl  To  Ooty</h6>
                        </div>
                        <div className="card-body">
                          {/* img */}
                        <Image src={ooty} style={{width:'100%',height:'200px'}}/>
                        <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                        </div>
                        <div className="card-footer">
                        <>
    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                  <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                    <MDBModalDialog centered>
                                      <MDBModalContent>
                                        <MDBModalHeader className='bg-secondary' >
                                          <MDBModalTitle ><h4 className='ml-3 '> Kodaikkanl To  Ooty</h4> </MDBModalTitle>
                                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                          <h4>Places</h4>
                                           <ul>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Pykra Lake</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Emerald Lake</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Ooty Lake</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Homseata</li>
                                           </ul>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                          <MDBBtn color='danger' onClick={toggleShow}>
                                            Close
                                          </MDBBtn>
                                          <MDBBtn>Chouse Place</MDBBtn>
                                        </MDBModalFooter>
                                      </MDBModalContent>
                                    </MDBModalDialog>
                                  </MDBModal>
  </>                     </div>
                       </div>
                    </div>
                </div>
                   
                   {/* row2 */}
                <div className="row  container-fluid mt-4 ">           
                    <div className="col">
                       <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}} >
                        <div className="card-title mt-4"> 
                         <h6 className='text-center' style={{fontSize:'25px'}}> Kodaikkanl  To  Mathurai</h6>
                        </div>
                        <div className="card-body">
                            <Image src={mri} style={{width:'100%',height:'200px'}}/>
                            <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                        </div>
                        <div className="card-footer">
                        <>
                  <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                  <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                    <MDBModalDialog centered>
                                      <MDBModalContent>
                                        <MDBModalHeader className='bg-secondary' >
                                          <MDBModalTitle ><h4 className='ml-3 '> Kodaikkanl ToKodaikkanl Packages</h4> </MDBModalTitle>
                                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                          <h4>Places</h4>
                                           <ul>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Meenatchi Amman Temple</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Koodal Azhagar Temple</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>kanthi Ninaivu Arasatchiyagam</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Aayiram kal Mandabam</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Madural Busstant</li>
                                           </ul>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                          <MDBBtn color='danger' onClick={toggleShow}>
                                            Close
                                          </MDBBtn>
                                          <MDBBtn>Chouse Place</MDBBtn>
                                        </MDBModalFooter>
                                      </MDBModalContent>
                                    </MDBModalDialog>
                                  </MDBModal>
  </>                     </div>
                        
                       </div>
                    </div>

                    <div className="col">
                       <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                        <div className="card-title mt-4"> 
                         <h6 className='text-center'style={{fontSize:'25px'}}> Kodaikkanl  To  kanyakumari</h6>
                        </div>
                        <div className="card-body">
                        <Image src={kanya} style={{width:'100%',height:'200px'}}/>
                        <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 75,0000</h6></h6>


                        </div>
                        <div className="card-footer">
                        <>
                  <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                  <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                    <MDBModalDialog centered>
                                      <MDBModalContent>
                                        <MDBModalHeader className='bg-secondary' >
                                          <MDBModalTitle ><h4 className='ml-3 '> Kodaikkanl To Kanyakumari</h4> </MDBModalTitle>
                                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                          <h4>Places</h4>
                                           <ul>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Mathoor Hanging Bridge</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Kanyakumari Beach</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Bharat Mata Temple</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Tsunami Monument.</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Our Lady of Ransom Church.</li>
                                           </ul>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                          <MDBBtn color='danger' onClick={toggleShow}>
                                            Close
                                          </MDBBtn>
                                          <MDBBtn>Chouse Place</MDBBtn>
                                        </MDBModalFooter>
                                      </MDBModalContent>
                                    </MDBModalDialog>
                                  </MDBModal>
  </>                     </div>
                       </div>
                    </div>

                    <div className="col">
                       <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                        <div className="card-title mt-4"> 
                         <h6 className='text-center'style={{fontSize:'25px'}}> Kodaikkanl  To  kumbakonam</h6>
                        </div>
                        <div className="card-body">
                        <Image src={kum} style={{width:'100%',height:'200px'}}/>
                        <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 40,0000</h6></h6>
                        </div>
                        <div className="card-footer">
                        <>
    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                  <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                    <MDBModalDialog centered>
                                      <MDBModalContent>
                                        <MDBModalHeader className='bg-secondary' >
                                          <MDBModalTitle ><h4 className='ml-3 '> Kodaikkanl To  Ooty</h4> </MDBModalTitle>
                                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                          <h4>Places</h4>
                                           <ul>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Saravana Silks</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Pramma Temple</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Arul Migu Kasi Visuvanathar Temple</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Arulmigu Suriyanar Temple</li>
                                           </ul>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                          <MDBBtn color='danger' onClick={toggleShow}>
                                            Close
                                          </MDBBtn>
                                          <MDBBtn>Chouse Place</MDBBtn>
                                        </MDBModalFooter>
                                      </MDBModalContent>
                                    </MDBModalDialog>
                                  </MDBModal>
  </>                     </div>
                       </div>
                    </div>
                </div>


                  {/* row3 */}
                  <div className="row  container-fluid mt-4 ">           
                    <div className="col">
                       <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                        <div className="card-title mt-4"> 
                         <h6 className='text-center' style={{fontSize:'25px'}}> Kodaikkanl  To  Yarcard</h6>
                        </div>
                        <div className="card-body">
                        <Image src={yar} style={{width:'100%',height:'200px'}}/>
                        <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>

                        </div>
                        <div className="card-footer">
                        <>
    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                  <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                    <MDBModalDialog centered>
                                      <MDBModalContent>
                                        <MDBModalHeader className='bg-secondary' >
                                          <MDBModalTitle ><h4 className='ml-3 '> Kodaikkanl To  Yarcard</h4> </MDBModalTitle>
                                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                          <h4>Places</h4>
                                           <ul>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Sri Raja Rajeshwari Temple</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Pagoda Poin</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Kottachedu Teak Forest</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                           </ul>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                          <MDBBtn color='danger' onClick={toggleShow}>
                                            Close
                                          </MDBBtn>
                                          <MDBBtn>Chouse Place</MDBBtn>
                                        </MDBModalFooter>
                                      </MDBModalContent>
                                    </MDBModalDialog>
                                  </MDBModal>
  </>                     </div>
                       </div>
                    </div>

                    <div className="col">
                       <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                        <div className="card-title mt-4"> 
                         <h6 className='text-center'style={{fontSize:'25px'}}> Kodaikkanl  To  Theni</h6>
                        </div>
                        <div className="card-body">
                        <Image src={the1} style={{width:'100%',height:'200px'}}/>
                        <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>
                        </div>
                        <div className="card-footer">
                        <>
    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                  <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                    <MDBModalDialog centered>
                                      <MDBModalContent>
                                        <MDBModalHeader className='bg-secondary' >
                                          <MDBModalTitle ><h4 className='ml-3 '> Kodaikkanl To  Theni</h4> </MDBModalTitle>
                                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                          <h4>Places</h4>
                                           <ul>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Mahamalai Hayway Moountain</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Kumbakkarai Falls</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Gowmariyamman Temple</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Surnan Fun Park</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Kurangani</li>
                                           </ul>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                          <MDBBtn color='danger' onClick={toggleShow}>
                                            Close
                                          </MDBBtn>
                                          <MDBBtn>Chouse Place</MDBBtn>
                                        </MDBModalFooter>
                                      </MDBModalContent>
                                    </MDBModalDialog>
                                  </MDBModal>
  </>                     </div>
                       </div>
                    </div>

                    <div className="col">
                       <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                        <div className="card-title mt-4"> 
                         <h6 className='text-center' style={{fontSize:'25px'}}> Kodaikkanl  To Hogenakkal</h6>
                        </div>
                        <div className="card-body">
                        <Image src={hok} style={{width:'100%',height:'200px'}}/>
                        <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 60,0000</h6></h6>

                        </div>
                        <div className="card-footer">
                        <>
    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                  <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                    <MDBModalDialog centered>
                                      <MDBModalContent>
                                        <MDBModalHeader className='bg-secondary' >
                                          <MDBModalTitle ><h4 className='ml-3 '> Kodaikkanl To  Hogenakkal</h4> </MDBModalTitle>
                                          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                          <h4>Places</h4>
                                           <ul>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Hocgenakkal Falls</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Kishnagiri Dam</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Kavero River</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Melagira Hills</li>
                                            <li style={{listStyleType:'none',cursor:'pointer'}}>Subramaniya Siva Temple</li>
                                           </ul>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                          <MDBBtn color='danger' onClick={toggleShow}>
                                            Close
                                          </MDBBtn>
                                          <MDBBtn>Chouse Place</MDBBtn>
                                        </MDBModalFooter>
                                      </MDBModalContent>
                                    </MDBModalDialog>
                                  </MDBModal>
  </>                     </div>
                       </div>
                    </div>
                </div>
                 
                </div>
                </div>
               
               </div>
             </div>
          
     
  )
}

// Kumbakonam
const  Kumbakonam = () =>
 {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
    return(
        <div>
           <div className="container-fluid mt-5">
               <div className="container">
                 <div className="row">
                    <div className="row">
                        <h1 className='text-center ' style={{fontWeighte:'bold',color:'blue'}}> Kumbakonam</h1>
                    </div>
                    <div className="row mt-5">
                    <div className="col-6">
                        <p style={{textAlign:'justify',textIndent:'60px',lineHeight:'35px'}}>
                          Kumbakonam is the capital of Tamil Nadu, which is located on the Coromandel coast of the Bay of Bengal in southern India. Madras was the name given to  Kumbakonam in the past. The “Gateway to the South” is another nickname for the city. The city of  Kumbakonam is surrounded by three rivers and numerous lakes. This city offers a number of lovely museums that are a must-see for anyone planning a trip to  Kumbakonam. Also  Kumbakonam is home to one of India’s oldest medical centres. The city is home to more than a third of India’s automobile sector. Let’s read more about it.
                         The  Kumbakonam covers 476 km2 area of tamilnadu State.
                            The city  Kumbakonam is located at 6.7 m above the sea level.
                             Kumbakonam is one of the highly populated city with population density of 26,553 peoples per square kilometre.
                        </p>
                    </div>
                    <div className="col-6">
                      <Image src={kum} style={{width:'500px',height:'350px'}}></Image>
                    </div>
                    </div>
                    {/* row1 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'20px'}}>  Kumbakonam  To  Ramashwaram</h6>
                          </div>
                          <div className="card-body ">
                            {/* img */}
                           <Image src={ra } style={{width:'100%',height:'200px'}}/>
                            <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 20,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '>  Kumbakonam To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ramanathasamy Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Dr.Apj.Apdul Kalam Memorial</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Agni Thirtham</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pamban Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kunthukal Beach</li>
                                             </ul>


                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                      </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}>  Kumbakonam  To  Kodaikkaal</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={kum } style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 10,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '>  Kumbakonam To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bryant Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Silver Cascade Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pillar Rocks, Kodaikanal</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bear Shola Falls, Kodaikana</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Coaker's Walk</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}>  Kumbakonam  To  Ooty</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={ooty} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '>  Kumbakonam To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pykra Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Emerald Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ooty Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Homseata</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                     
                     {/* row2 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}} >
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}>  Kumbakonam  To  Mathurai</h6>
                          </div>
                          <div className="card-body">
                              <Image src={mri} style={{width:'100%',height:'200px'}}/>
                              <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '>  Kumbakonam To Madurai Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Meenatchi Amman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Koodal Azhagar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>kanthi Ninaivu Arasatchiyagam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Aayiram kal Mandabam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Madural Busstant</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                          
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}>  Kumbakonam  To  kanyakumari</h6>
                          </div>
                          <div className="card-body">
                          <Image src={kanya} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 75,0000</h6></h6>


                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Kumbakonam To Chennai</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mathoor Hanging Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kanyakumari Beach</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bharat Mata Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Tsunami Monument.</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Our Lady of Ransom Church.</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}>  Kumbakonam  To  Chennai</h6>
                          </div>
                          <div className="card-body">
                          <Image src={che} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 40,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '>  Kumbakonam To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Saravana Silks</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pramma Temple</li>
                                              <li style={ {listStyleType:'none',cursor:'pointer'}}>Arul Migu Kasi Visuvanathar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Arulmigu Suriyanar Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>


                    {/* row3 */}
                    <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}>  Kumbakonam  To  Yarcard</h6>
                          </div>
                          <div className="card-body">
                          <Image src={yar} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '>  Kumbakonam To  Yarcard</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Sri Raja Rajeshwari Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pagoda Poin</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kottachedu Teak Forest</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}>  Kumbakonam  To  Theni</h6>
                          </div>
                          <div className="card-body">
                          <Image src={the1} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '>  Kumbakonam To  Theni</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mahamalai Hayway Moountain</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kumbakkarai Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Gowmariyamman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Surnan Fun Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kurangani</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}>  Kumbakonam  To Hogenakkal</h6>
                          </div>
                          <div className="card-body">
                          <Image src={hok} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 60,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '>  Kumbakonam To  Hogenakkal</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Hocgenakkal Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kishnagiri Dam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kavero River</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Melagira Hills</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Subramaniya Siva Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                   
                  </div>
                  </div>
                 
                 </div>
               </div>
            
       
    )
 }
//  Yarcard
const Yarcard = () =>
 {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
    return(
        <div>
           <div className="container-fluid mt-5">
               <div className="container">
                 <div className="row">
                    <div className="row">
                        <h1 className='text-center ' style={{fontWeighte:'bold',color:'blue'}}>Yarcard</h1>
                    </div>
                    <div className="row mt-5">
                    <div className="col-6">
                        <p style={{textAlign:'justify',textIndent:'60px',lineHeight:'35px'}}>
                         Yarcard is the capital of Tamil Nadu, which is located on the Coromandel coast of the Bay of Bengal in southern India. Madras was the name given to Yarcard in the past. The “Gateway to the South” is another nickname for the city. The city of Yarcard is surrounded by three rivers and numerous lakes. This city offers a number of lovely museums that are a must-see for anyone planning a trip to Yarcard. Also Yarcard is home to one of India’s oldest medical centres. The city is home to more than a third of India’s automobile sector. Let’s read more about it.
                         The Yarcard covers 476 km2 area of tamilnadu State.
                            The city Yarcard is located at 6.7 m above the sea level.
                            Yarcard is one of the highly populated city with population density of 26,553 peoples per square kilometre.
                        </p>
                    </div>
                    <div className="col-6">
                      <Image src={yar} style={{width:'500px',height:'350px'}}></Image>
                    </div>
                    </div>
                    {/* row1 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Yarcard  To  Ramashwaram</h6>
                          </div>
                          <div className="card-body ">
                            {/* img */}
                           <Image src={ra } style={{width:'100%',height:'200px'}}/>
                            <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 20,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Yarcard To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ramanathasamy Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Dr.Apj.Apdul Kalam Memorial</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Agni Thirtham</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pamban Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kunthukal Beach</li>
                                             </ul>


                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                      </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Yarcard  To  Kodaikkaal</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={kanal } style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 10,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Yarcard To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bryant Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Silver Cascade Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pillar Rocks, Kodaikanal</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bear Shola Falls, Kodaikana</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Coaker's Walk</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Yarcard  To  Ooty</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={ooty} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Yarcard To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pykra Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Emerald Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ooty Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Homseata</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                     
                     {/* row2 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}} >
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Yarcard  To  Mathurai</h6>
                          </div>
                          <div className="card-body">
                              <Image src={mri} style={{width:'100%',height:'200px'}}/>
                              <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Yarcard To Madurai Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Meenatchi Amman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Koodal Azhagar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>kanthi Ninaivu Arasatchiyagam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Aayiram kal Mandabam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Madural Busstant</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                          
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Yarcard  To  kanyakumari</h6>
                          </div>
                          <div className="card-body">
                          <Image src={kanya} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 75,0000</h6></h6>


                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Yarcard To Kanyakumari</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mathoor Hanging Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kanyakumari Beach</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bharat Mata Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Tsunami Monument.</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Our Lady of Ransom Church.</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Yarcard  To  kumbakonam</h6>
                          </div>
                          <div className="card-body">
                          <Image src={kum} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 40,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Yarcard To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Saravana Silks</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pramma Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Arul Migu Kasi Visuvanathar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Arulmigu Suriyanar Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>


                    {/* row3 */}
                    <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Yarcard  To Chennai</h6>
                          </div>
                          <div className="card-body">
                          <Image src={che} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Yarcard To  Yarcard</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Sri Raja Rajeshwari Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pagoda Poin</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kottachedu Teak Forest</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Yarcard  To  Theni</h6>
                          </div>
                          <div className="card-body">
                          <Image src={the1} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Yarcard To  Theni</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mahamalai Hayway Moountain</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kumbakkarai Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Gowmariyamman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Surnan Fun Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kurangani</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Yarcard  To Hogenakkal</h6>
                          </div>
                          <div className="card-body">
                          <Image src={hok} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 60,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Yarcard To  Hogenakkal</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Hocgenakkal Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kishnagiri Dam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kavero River</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Melagira Hills</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Subramaniya Siva Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                   
                  </div>
                  </div>
                 
                 </div>
               </div>
            
       
    )
 }
//  Theni 
const Theni = () =>
 {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
    return(
        <div>
           <div className="container-fluid mt-5">
               <div className="container">
                 <div className="row">
                    <div className="row">
                        <h1 className='text-center ' style={{fontWeighte:'bold',color:'blue'}}>Theni</h1>
                    </div>
                    <div className="row mt-5">
                    <div className="col-6">
                        <p style={{textAlign:'justify',textIndent:'60px',lineHeight:'35px'}}>
                         Theni is the capital of Tamil Nadu, which is located on the Coromandel coast of the Bay of Bengal in southern India. Madras was the name given to Theni in the past. The “Gateway to the South” is another nickname for the city. The city of Theni is surrounded by three rivers and numerous lakes. This city offers a number of lovely museums that are a must-see for anyone planning a trip to Theni. Also Theni is home to one of India’s oldest medical centres. The city is home to more than a third of India’s automobile sector. Let’s read more about it.
                         The Theni covers 476 km2 area of tamilnadu State.
                            The city Theni is located at 6.7 m above the sea level.
                            Theni is one of the highly populated city with population density of 26,553 peoples per square kilometre.
                        </p>
                    </div>
                    <div className="col-6">
                      <Image src={the1} style={{width:'500px',height:'350px'}}></Image>
                    </div>
                    </div>
                    {/* row1 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Theni  To  Ramashwaram</h6>
                          </div>
                          <div className="card-body ">
                            {/* img */}
                           <Image src={ra } style={{width:'100%',height:'200px'}}/>
                            <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 20,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Theni To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ramanathasamy Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Dr.Apj.Apdul Kalam Memorial</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Agni Thirtham</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pamban Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kunthukal Beach</li>
                                             </ul>


                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                      </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Theni  To  Kodaikkaal</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={kanal } style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 10,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Theni To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bryant Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Silver Cascade Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pillar Rocks, Kodaikanal</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bear Shola Falls, Kodaikana</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Coaker's Walk</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Theni  To  Ooty</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={ooty} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Theni To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pykra Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Emerald Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ooty Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Homseata</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                     
                     {/* row2 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}} >
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Theni  To  Mathurai</h6>
                          </div>
                          <div className="card-body">
                              <Image src={mri} style={{width:'100%',height:'200px'}}/>
                              <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Theni To Madurai Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Meenatchi Amman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Koodal Azhagar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>kanthi Ninaivu Arasatchiyagam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Aayiram kal Mandabam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Madural Busstant</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                          
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Theni  To  kanyakumari</h6>
                          </div>
                          <div className="card-body">
                          <Image src={kanya} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 75,0000</h6></h6>


                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Theni To Kanyakumari</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mathoor Hanging Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kanyakumari Beach</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bharat Mata Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Tsunami Monument.</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Our Lady of Ransom Church.</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Theni  To  kumbakonam</h6>
                          </div>
                          <div className="card-body">
                          <Image src={kum} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 40,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Theni To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Saravana Silks</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pramma Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Arul Migu Kasi Visuvanathar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Arulmigu Suriyanar Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>


                    {/* row3 */}
                    <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Theni  To  Chennai</h6>
                          </div>
                          <div className="card-body">
                          <Image src={che} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Theni To  Theni</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Sri Raja Rajeshwari Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pagoda Poin</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kottachedu Teak Forest</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Theni  To  Theni</h6>
                          </div>
                          <div className="card-body">
                          <Image src={the1} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Theni To  Theni</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mahamalai Hayway Moountain</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kumbakkarai Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Gowmariyamman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Surnan Fun Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kurangani</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Theni  To Hogenakkal</h6>
                          </div>
                          <div className="card-body">
                          <Image src={hok} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 60,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Theni To  Hogenakkal</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Hocgenakkal Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kishnagiri Dam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kavero River</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Melagira Hills</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Subramaniya Siva Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                   
                  </div>
                  </div>
                 
                 </div>
               </div>
            
       
    )
 }
// Hogganical
 const Hogenakkal = () =>
 {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
    return(
        <div>
           <div className="container-fluid mt-5">
               <div className="container">

                 <div className="row">
                    <div className="row">
                        <h1 className='text-center ' style={{fontWeighte:'bold',color:'blue'}}>Hogenakkal</h1>
                    </div>
                    <div className="row mt-5">
                    <div className="col-6">
                        <p style={{textAlign:'justify',textIndent:'60px',lineHeight:'35px'}}>
                         Hogenakkal is the capital of Tamil Nadu, which is located on the Coromandel coast of the Bay of Bengal in southern India. Madras was the name given to Hogenakkal in the past. The “Gateway to the South” is another nickname for the city. The city of Hogenakkal is surrounded by three rivers and numerous lakes. This city offers a number of lovely museums that are a must-see for anyone planning a trip to Hogenakkal. Also Hogenakkal is home to one of India’s oldest medical centres. The city is home to more than a third of India’s automobile sector. Let’s read more about it.
                         The Hogenakkal covers 476 km2 area of tamilnadu State.
                            The city Hogenakkal is located at 6.7 m above the sea level.
                            Hogenakkal is one of the highly populated city with population density of 26,553 peoples per square kilometre.
                        </p>
                    </div>
                    <div className="col-6">
                      <Image src={hok} style={{width:'500px',height:'350px'}}></Image>
                    </div>
                    </div>
                    {/* row1 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Hogganical  To  Ramashwaram</h6>
                          </div>
                          <div className="card-body ">
                            {/* img */}
                           <Image src={ra } style={{width:'100%',height:'200px'}}/>
                            <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 20,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Hogganical To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ramanathasamy Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Dr.Apj.Apdul Kalam Memorial</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Agni Thirtham</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pamban Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kunthukal Beach</li>
                                             </ul>


                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                      </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Hogganical  To  Kodaikkaal</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={kanal } style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 10,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Hogganical To Ramaswaram Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bryant Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Silver Cascade Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pillar Rocks, Kodaikanal</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bear Shola Falls, Kodaikana</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Coaker's Walk</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Hogganical  To  Ooty</h6>
                          </div>
                          <div className="card-body">
                            {/* img */}
                          <Image src={ooty} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Hogganical To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pykra Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Emerald Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Ooty Lake</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Homseata</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                     
                     {/* row2 */}
                  <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}} >
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Hogganical  To  Mathurai</h6>
                          </div>
                          <div className="card-body">
                              <Image src={mri} style={{width:'100%',height:'200px'}}/>
                              <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 15,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Hogganical To Madurai Packages</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Meenatchi Amman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Koodal Azhagar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>kanthi Ninaivu Arasatchiyagam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Aayiram kal Mandabam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Madural Busstant</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                          
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Hogganical  To  kanyakumari</h6>
                          </div>
                          <div className="card-body">
                          <Image src={kanya} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 75,0000</h6></h6>


                          </div>
                          <div className="card-footer">
                          <>
                    <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Hogganical To Kanyakumari</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mathoor Hanging Bridge</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kanyakumari Beach</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Bharat Mata Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Tsunami Monument.</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Our Lady of Ransom Church.</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Hogganical  To  kumbakonam</h6>
                          </div>
                          <div className="card-body">
                          <Image src={kum} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 40,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Hogganical To  Ooty</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Saravana Silks</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pramma Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Arul Migu Kasi Visuvanathar Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Nilgiri Mountain Railway</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Arulmigu Suriyanar Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>


                    {/* row3 */}
                    <div className="row  container-fluid mt-4 ">           
                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Hogganical  To  Yarcard</h6>
                          </div>
                          <div className="card-body">
                          <Image src={yar} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Hogganical To  Yarcard</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Sri Raja Rajeshwari Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Pagoda Poin</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kottachedu Teak Forest</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kiliyur waterfall</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center'style={{fontSize:'25px'}}> Hogganical  To  Theni</h6>
                          </div>
                          <div className="card-body">
                          <Image src={the1} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 30,0000</h6></h6>
                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Hogganical To  Theni</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Mahamalai Hayway Moountain</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kumbakkarai Falls</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Gowmariyamman Temple</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Surnan Fun Park</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Kurangani</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>

                      <div className="col">
                         <div className="card bg-info" style={{boxShadow:'1px 1px 15px 5px black'}}>
                          <div className="card-title mt-4"> 
                           <h6 className='text-center' style={{fontSize:'25px'}}> Hogganical  To  Chennai</h6>
                          </div>
                          <div className="card-body">
                          <Image src={hok} style={{width:'100%',height:'200px'}}/>
                          <h6 style={{color:'black',display:'flex',flexDirection:'row'}} className='mt-4 text-center'>Travaling Prize<h6 style={{textIndent:'30px'}}><i class="fa fa-inr"></i> 60,0000</h6></h6>

                          </div>
                          <div className="card-footer">
                          <>
      <MDBBtn onClick={toggleShow}  style={{marginLeft:'28%'}}>More Details</MDBBtn>

                                    <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                      <MDBModalDialog centered>
                                        <MDBModalContent>
                                          <MDBModalHeader className='bg-secondary' >
                                            <MDBModalTitle ><h4 className='ml-3 '> Hogganical To Chennai</h4> </MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                            <h4>Places</h4>
                                             <ul>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Hookanicl Gadan</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>manappara Dam</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>River planent </li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>hoganical areas</li>
                                              <li style={{listStyleType:'none',cursor:'pointer'}}>Sivan Temple Temple</li>
                                             </ul>
                                          </MDBModalBody>
                                          <MDBModalFooter>
                                            <MDBBtn color='danger' onClick={toggleShow}>
                                              Close
                                            </MDBBtn>
                                            <MDBBtn>Chouse Place</MDBBtn>
                                          </MDBModalFooter>
                                        </MDBModalContent>
                                      </MDBModalDialog>
                                    </MDBModal>
    </>                     </div>
                         </div>
                      </div>
                  </div>
                    <br /><br /><br />
                  </div>
                  </div>
                  
                 </div>
                 
               </div>

             
            
       
    )
 }


//   Chenni    Ramaswaram kodaikkanal ooty madurai kanyakumari kumbakonam Theni Theni  hogenakkal
export default Packages;