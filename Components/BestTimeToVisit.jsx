import React from 'react'
import Image from 'react-bootstrap/esm/Image'
import climate from '../TtoVimages/Climate.jpeg'
import img1 from '../TtoVimages/image.jpeg'
import img2 from '../TtoVimages/image1.jpeg'
import img3 from '../TtoVimages/image2.jpeg'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
// chennai
import che1 from '../TtoVimages/chennai1.jpeg';
import che2 from '../TtoVimages/chennai2.jpeg';
import che3 from '../TtoVimages/chennai3.jpeg';
// Ramaswaram
import ram1 from '../TtoVimages/rameshwaram1.jpeg';
import ram2 from '../TtoVimages/rameshwaram2.jpeg';
import ram3 from '../TtoVimages/rameshwaram3.jpeg';
//  kodaikkanal
import kod1 from '../TtoVimages/kodaikanal1.jpeg';
import kod2 from '../TtoVimages/kodaikanal2.jpeg';
import kod3 from '../TtoVimages/kodaikanal3.jpeg';
// ooty
import ooty1 from '../TtoVimages/ooty1.jpeg';
import ooty2 from '../TtoVimages/ooty2.jpeg';
import ooty3 from '../TtoVimages/ooty3.jpeg';


// kanyakumari

import kanya1 from '../TtoVimages/kanyakumari1.jpeg'; 
import kanya2 from '../TtoVimages/kanyakumari2.jpeg';
import kanya3 from '../TtoVimages/kanyakumari3.jpeg';

// Kumbakonam
import kumba1 from '../TtoVimages/kumbakonam1.jpeg'; 
import kumba2 from '../TtoVimages/kumbakonam2.jpeg';
import kumba3 from '../TtoVimages/kumbakonam3.jpeg';

// madurai
import maduai1 from '../TtoVimages/madurai1.jpeg'; 
import maduai2 from '../TtoVimages/madurai2.jpeg';
import maduai3 from '../TtoVimages/madurai3.jpeg';

// yarcard
import yar1 from '../TtoVimages/yercaud1.jpeg'; 
import yar2 from '../TtoVimages/yercaud2.jpeg';
import yar3 from '../TtoVimages/yercaud3.jpeg';
// thani
import thani1 from '../TtoVimages/theni1.jpeg'; 
import thani2 from '../TtoVimages/theni2.jpeg';
import thani3 from '../TtoVimages/theni3.jpeg';
// Hollanilal
import hok1 from '../TtoVimages/hogenakkal1.jpeg'; 
import hok2 from '../TtoVimages/hogenakkal2.jpeg';
import hok3 from '../TtoVimages/hogenakkal3.jpeg';
// ofcanvas
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


 const BestTimeToVisit = () => {
  
  return (
   <div>
     <Btovtittle/>
     <Climateimg/>
     <Btvcontent/>
     <Starthead/>
     <Chennai/>
     <Ramashwaram />
     < Kodaikanal/>
     <Ooty/>
     <Kanyakumari/>
      <Kumbakonam/>
      <Madurai/>
       <Yarcard/>
       < Thani/>
     <Hogenakkal/>
   </div>
   
  )
}
// best time to visit tittle
      const Btovtittle = () => {
          return (
          <div className='containerfluid'>
              <div className="container ">
                 <div className="row">
                  <div className="col mt-5">
                 <p className='fs-4'>TAMILNADU TOURISM</p>
                  <p className='h1 fs-4'> Best Time To Visit</p>
                  </div> </div>

              </div>
          </div>
          )
        } 

        
        // bttov image and attantative
        const Climateimg = () =>{

          return(
          
              <div className="container">
                      <div className="row">
                      <div className="col">
                  <Image src={climate}></Image>
                  <p className='d-flex justify-content-center'>Best Time To Visit</p>
                </div>


                <div className="col">
                <h4 className='text-center' style={{bottom:'10px'}}>More about Best Time to Travels to Tamilnadu</h4>

                <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Tamil Nadu in summer (March -May)</Accordion.Header>
                        <Accordion.Body>
                          <p style={{alignItems:'justify',fontSize:'15px',textIndent:'50px'}}>
                            This season begins in March and lasts until May. The temperatures are high, ranging between 35°C and 40°C and so is the humidity especially in the coastal regions. Sightseeing during this time is not very convenient because of the improper temperature. The season, however, is visited to witness the festival of Chithirai held in the Madurai temple in the month of March-April. Puthandu, another important festival that marks the Tamil New year falls in mid-April and Mahamahan Festival is celebrated in March (celebrated once in 12 years). If visiting during summer, it is a good idea to visit the attractions on higher attitudes. Hill stations like kanya, Kodaikanal and Yelagiri hills are the best where the temperature is pleasant and has scenic views that tourists can witness.
                          </p>
                          <Image src={img1} style={{width:'500px'}}></Image>
                        </Accordion.Body>
                        
                      </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Tamil Nadu in monsoon (June - September)</Accordion.Header>
                          <Accordion.Body>
                          <p style={{alignItems:'justify',fontSize:'15px',textIndent:'50px'}}>
                            This southern state sees monsoon two times a year - once between June to September and the retreating monsoon in November and December. The temperature is slightly less than what it is in the summer season. It ranges between 25°C and 30°C. The rains often occur in long spells and the humidity during this time is high especially in coastal regions. Some of the hilly areas see massive rainfall and venturing out during this time around is not a great idea. The Eastern seaboard of Tamil Nadu sometimes experiences cyclones during the late monsoon, making it an unsafe place to visit.
                          </p>
                          <Image src={img2} style={{width:'500px'}}></Image>
                          </Accordion.Body>
                          
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Tamil Nadu in winter (October - February)</Accordion.Header>
                          <Accordion.Body>
                          <p style={{alignItems:'justify',fontSize:'15px',textIndent:'50px'}}>
                            Winter in Tamil Nadu begins in October and lasts until February. November and December have intermittent rainfall because of the retreating monsoon, but otherwise, the temperature remains between 10°C and 15°C. The humidity is low, and it is the best climate for sightseeing and touring the cities. Most of the tourist attractions are bustling with activities during this season. The beaches call the beach lovers, and adventure seekers for bathing in the sun, swimming and water sports as the temperature remains moderate all through the day.
                          </p>
                          <Image src={img3} style={{width:'500px'}}></Image>
                          </Accordion.Body>
                        </Accordion.Item>
          </Accordion> 
                </div>
                      </div>
              </div>
          )
        }

        // best time visit Content

        const Btvcontent = () =>
          {
            return(
              <div className='container-fluid'>
                <div className="container">
                  <p style={{textIndent:'50px',textAlign:'justify',width:'90%'}}>
                    The best time to visit Tamil Nadu is during the winter season, i.e., from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu, Summer, however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.
                  </p>
                </div>
              </div>
            )
          } 
        
        // Start Heading

      const Starthead = () =>
        {
            return(
              <div className='container-fluid mt-5'>
                  <div className="container  d-flex justify-content-center flex-column">
                    <h4 >TAMILNADU TOURISM</h4>
                    <small style={{fontWeight:'bold'}}>Best Time TO Visit</small>
                  </div>
                </div>   
            )
        } 

      // Chennai

      const Chennai = () =>
       {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return(
       
       <div className='container-fluid'>
         <div className="container vh-100">
           <div className="row">
              <div className="col-6">
                <h3>01.Chennai</h3>
                <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
                <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
                  October to February during the winters and the pre-monsoons season is the best time to visit Chennai. This time of the year is considered as the best time to explore the metropolitan city as summers are scorching and monsoons bring torrential downpours and cyclones. Its geographical location on the beautiful coastline mostly keeps the city's weather hot and humid.
                </p>
                <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
                    Chennai is one of the cities that has successfully blended the modern, traditional and sides with ease. The city welcomes everyone who wants to seek a soulful and spiritual connection but also those who love shopping for sarees and enjoy good food. There is no conundrum in Chennai when you visit. It's all about the moment, whether you decide to take a stroll down Marina Beach.
                </p>    
              </div>
              <div className="col-6">
                <Card style={{border:'1px solid gray',backgroundColor:'white'}}>
                    <Card.Header style={{display:'inline-block'}} >
                    <CloseButton  style={{float:'right',marginTop:'20px'}}/>
                      <h3 className='text-center' style={{fontWeight:'bold'}}>More About Best Time To Travel To </h3>
                      <h3 className=' text-center' style={{fontWeight:'bold'}}>Chennai</h3 >
                      </Card.Header>
                    <Card.Body>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-4">
                            <Image src={che1}  style={{width:'100%',height:'250px'}}></Image> 
                            <div className='text-center'>Chennai <br /> India <br /> Source </div>
                          </div>
                          <div className="col-4">
                            <Image src={che2}  style={{width:'100%',height:'250px'}}></Image> 
                            <div className='text-center'>Chennai <br />Kadapara <br /> Source</div>
                          </div>
                          <div className="col-4">
                            <Image src={che3}  style={{width:'100%',height:'250px'}}></Image> 
                            <div className='text-center'>Chennai <br /> Bearch <br />Source</div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
                      <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
                    </Card.Footer>
                </Card>
              </div>
                    <div>
                        <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='text-center'><h3>Best Time To Visit In Chennai</h3></Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            <p style={{fontWeight:'bold'}}>Chennai in Winters (November - February)</p>
                            <p style={{textIndent:'60px',textAlign:'justify'}}>
                               Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22°C. Its proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent. Kapaleeshwarar temple, Government Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organized in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when there.
                            </p>

                            <p style={{fontWeight:'bold'}}>Chennai in Summers (March - June)</p>
                            <p style={{textIndent:'60px',textAlign:'justify'}}>
                               Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travelers. In case one must visit Chennai, they may want to plan a trip                             </p>
                            <p style={{fontWeight:'bold'}}>Chennai in Monsoons (July-September)</p>
                            <p style={{textIndent:'60px',textAlign:'justify'}}>
                               Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22°C. Its proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent. Kapaleeshwarar temple, Government Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organized in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when there.
                            </p>
                          </Offcanvas.Body>
                        </Offcanvas>
                    </div>
           </div>
         </div>
       </div>
        )
       }

      //  Ramashwaram - 2
    
      const Ramashwaram = () =>
       {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return(
       
       <div className='container-fluid'>
         <div className="container vh-100">
          
           <div className="row mt-5">
           <h3>02.Ramashwaram</h3>

              <div className="col-6">
                <Card style={{border:'1px solid gray',backgroundColor:'white'}} className='mt-5'>
                    <Card.Header style={{display:'inline-block'}} >
                    <CloseButton  style={{float:'right',marginTop:'20px'}}/>
                      <h3 className='text-center' style={{fontWeight:'bold'}}>More About Best Time To Travel To </h3>
                      <h3  className='text-center' style={{fontWeight:'bold'}}>Ramshwaram </h3>
                      </Card.Header>
                    <Card.Body>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-4">
                            <Image src={ram1}  style={{width:'100%',height:'250px'}}></Image> 
                            <div className='text-center' > Railway <br /> Bridge <br /> Source</div>
                          </div>
                          <div className="col-4">
                            <Image src={ram2}  style={{width:'100%',height:'250px'}}></Image> 
                            <div className='text-center'>Lighthouse <br />Source</div>
                          </div>
                          <div className="col-4">
                            <Image src={ram3}  style={{width:'100%',height:'250px'}}></Image> 
                            <div className='text-center'>Pilgrims <br /> Temple <br /> Source</div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
                      <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
                    </Card.Footer>
                </Card>
              </div>
              <div className="col-6">
                <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
                <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
                  The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. This makes Rameshwaram a destination which can be visited all year round. Winters (November to February) are cool and temperature comes down to 17 degrees Celsius. This is the most pleasant season for sightseeing and visiting neighborhoods. The Monsoons (July to September) are humid with average rainfalls, but the scenic view of the coastal region during these months is enjoyable.
                </p>
                <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
                    Dotted with temples along the seashore and located on a beautiful island, rumor has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrim’s flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time.
                </p>    
                
              </div>
                    <div>
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='text-center'><h3>Best Time To Visit In Chennai</h3></Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            <p style={{fontWeight:'bold'}}>
                              Rameshwaram in Winter ( February-March)
                            </p>
                            <p style={{textIndent:'60px',textAlign:'justify'}}>
                               Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30-degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.
                            </p>

                            <p style={{fontWeight:'bold'}}>
                               Rameshwaram in Winter (December- February)
                            </p>
                            <p style={{textIndent:'60px',textAlign:'justify'}}>
                              Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30-degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.
                            </p>
                            <p style={{fontWeight:'bold'}}>
                               Rameshwaram in Winter (December- February)
                            </p>
                            <p style={{textIndent:'60px',textAlign:'justify'}}>
                               Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22°C. Its proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent. Kapaleeshwarar temple, Government Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organized in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when there.
                            </p>
                          </Offcanvas.Body>
                        </Offcanvas>
                    </div>
           </div>
         </div>
       </div>
        )
       }

    



    // Kodaikkanal - 3
  
    const Kodaikanal = () =>
    {
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
   
     return(
    
    <div className='container-fluid'>
      <div className="container vh-100 mt-5">
        <div className="row">
           <div className="col-6">
             <h3>03.Kodaikanal</h3>
             <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
             <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
               The best time to visit Kodaikanal is from October to June, however, the weather remains a bit chilly during December and January. Ideal for a vacation in each season, Kodaikanal is the most colorful in summers and most picturesque in monsoons. If your trip consists of an itinerary that includes a lot of sights to see, then summer is the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.
             </p>
             <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
                Kodaikanal is lovingly referred to as The Princess of Hill stations. And boy, does it take this title seriously! Built around an exotic star shaped lake, the region exudes ethereal charm like that of fairy tales. The best time to visit Kodaikanal is from October - June, however, the weather remains a bit chilly during December and January.
             </p>    
           </div>
           <div className="col-6">
             <Card style={{border:'1px solid gray',backgroundColor:'white'}}>
                 <Card.Header style={{display:'inline-block'}} >
                   <CloseButton  style={{float:'right',marginTop:'20px'}}/>
                   <h3 className='text-center' style={{fontWeight:'bold'}}>More About Best Time To Travel To </h3>
                   <h3 className="text-center" style={{fontWeight:'bold'}}> Kodaikanal</h3>
                   </Card.Header>
                 <Card.Body>
                   <div className="container-fluid">
                     <div className="row">
                       <div className="col-4">
                         <Image src={kod1}  style={{width:'100%',height:'250px'}}></Image> 
                         <div className='text-center'>Upper <br/> Lake <br/> Source </div>
                       </div> 
                       <div className="col-4">
                         <Image src={kod2}  style={{width:'100%',height:'250px'}}></Image> 
                         <div className='text-center'>Kodaikkanal <br/> Lake <br/> Source</div>
                       </div>
                       <div className="col-4">
                         <Image src={kod3}  style={{width:'100%',height:'250px'}}></Image> 
                         <div className='text-center'>Pillar <br/> Rocks <br/> Source</div>
                       </div>
                     </div>
                   </div>
                 </Card.Body>
                 <Card.Footer>
                   <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
                   <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
                 </Card.Footer>
             </Card>
           </div>
                 <div>
                     <Offcanvas show={show} onHide={handleClose}>
                       <Offcanvas.Header closeButton>
                         <Offcanvas.Title className='text-center'><h3>Best Time To Visit In Kodaikkanal</h3></Offcanvas.Title>
                       </Offcanvas.Header>
                       <Offcanvas.Body>
                         <p style={{fontWeight:'bold'}}>Kodaikanal in Summer (March-June)</p>
                         <p style={{textIndent:'60px',textAlign:'justify'}}>
                         Summers (March to June) in Kodaikanal is Ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.
                         </p>

                         <p style={{fontWeight:'bold'}}>Kodaikanal in Monsoon (June-September)</p>
                         <p style={{textIndent:'60px',textAlign:'justify'}}>
                           Summers (March to June) in Kodaikanal is ideal with comfortable 20-degree Celsius to 32-degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.
                         </p>
                         <p style={{fontWeight:'bold'}}>Chennai in Monsoons (July-September)</p>
                         <p style={{textIndent:'60px',textAlign:'justify'}}>
                            With a temperature that rarely falls below 8-degree Celsius, winter in Kodaikanal (between December and February) is the best time to enjoy various treks and attend the famous Pongal festival celebrated during January.
                         </p>
                       </Offcanvas.Body>
                     </Offcanvas>
                 </div>
        </div>
      </div>
    </div>
     )
    }

   //  Ooty  - 4
 
   const Ooty = () =>
    {
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
   
     return(
    
    <div className='container-fluid'>
      <div className="container vh-100">
        <div className="row">
        <h3 className='mt-5'>04.Ooty</h3>
           <div className="col-6 mt-5">
             <Card style={{border:'1px solid gray',backgroundColor:'white'}}>
                 <Card.Header style={{display:'inline-block'}} >
                  <CloseButton  style={{float:'right',marginTop:'20px'}}/>
                   <h3 className='text-center' style={{fontWeight:'bold'}}>More About Best Time To Travel To </h3>
                   <h3 className='text-center' style={{fontWeight:'bold'}}>Ooty</h3>
                   </Card.Header>
                 <Card.Body>
                   <div className="container-fluid">
                     <div className="row"> 
                       <div className="col-4">
                         <Image src={ooty1}  style={{width:'100%',height:'250px'}}></Image> 
                         <div className='text-center'>Mountain <br/> Railway<br/> Source</div>
                       </div>
                       <div className="col-4">
                         <Image src={ooty2}  style={{width:'100%',height:'250px'}}></Image> 
                         <div  className='text-center'>Ooty <br/> Lake  <br/> Source</div>
                       </div>
                       <div className="col-4">
                         <Image src={ooty3}  style={{width:'100%',height:'250px'}}></Image> 
                         <div  className='text-center'>Trekking <br/> Ooty <br/> Source</div>
                       </div>
                     </div>
                   </div>
                 </Card.Body>
                 <Card.Footer>
                   <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
                   <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
                 </Card.Footer>
             </Card>
           </div>
           <div className="col-6">
             <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
             <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
             The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant, and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.
            </p>
             <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
               The poised and elegant 'Queen of Hill Stations welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums, and libraries brand the plains with stories.
             </p>    
             
           </div>
                 <div>
                     <Offcanvas show={show} onHide={handleClose} placement='end'>
                       <Offcanvas.Header closeButton>
                         <Offcanvas.Title className='text-center'><h3>Best Time To Visit In Chennai</h3></Offcanvas.Title>
                       </Offcanvas.Header>
                       <Offcanvas.Body>
                         <p style={{fontWeight:'bold'}}>
                         Ooty in Summer (March- June)
                         </p>
                         <p style={{textIndent:'60px',textAlign:'justify'}}>
                           Ooty experiences an average temperature that ranges between 23-degree Celsius and 31-degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing.
                         </p>

                         <p style={{fontWeight:'bold'}}>
                            Ooty in Winter (October March)
                         </p>
                         <p style={{textIndent:'60px',textAlign:'justify'}}>
                            With temperatures that stay below 15-degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris.
                         </p>
                         <p style={{fontWeight:'bold'}}>
                         Ooty in Monsoon (July-September)
                         </p>
                         <p style={{textIndent:'60px',textAlign:'justify'}}>
                         People who love rainfall and green grass beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time, nevertheless.
                         </p>
                       </Offcanvas.Body>
                     </Offcanvas>
                 </div>
        </div>
      </div>
    </div>
     )
    }

// kanyakumari - 5
const Kanyakumari = () =>
{
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return(

<div className='container-fluid'>
  <div className="container vh-100">
    <div className="row mt-5">
       <div className="col-6">
         <h3>05.Kanyakumari</h3>
         <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
          The months from October until February are considered the best time to visit Kanyakumari, as the weather remains calm and pleasant. Although this coastal region is a bit humid, this is the best time to try out some adventurous water sports, going on sightseeing and outings, undertaking beach activities and savoring the spectacular sunset views. With the beginning of winters in November, Kanyakumari also hosts many festivals during this month, for instance the Cape Festival.
         </p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
           Kanyakumari is the southernmost tip of India. As Kanyakumari is close to the seas, the expanse experiences a tropical coastal climate. There are not many variations in the seasons, as there is an overall humidity and seasonal rain during the year.
         </p>    
       </div>
       <div className="col-6">
         <Card style={{border:'1px solid gray',backgroundColor:'white'}}>
             <Card.Header style={{display:'inline-block'}} >
             <CloseButton  style={{float:'right',marginTop:'20px'}}/>
               <h3 className='text-center' style={{fontWeight:'bold'}}>More About Best Time To Travel To  </h3>
               <h3 className="text-center" style={{fontWeight:'bold'}}>Kanyakumari</h3>
               </Card.Header>
             <Card.Body>
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-4">
                     <Image src={kanya1}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Landscape <br/> Source </div>
                   </div>
                   <div className="col-4">
                     <Image src={kanya2}  style={{width:'100%',height:'250px'}}></Image> 
                     <div  className='text-center'>Sea <br/> Source</div>
                   </div>
                   <div className="col-4">
                     <Image src={kanya3}  style={{width:'100%',height:'250px'}}></Image> 
                     <div  className='text-center'>Coast <br/>  Source</div>
                   </div>
                 </div>
               </div>
             </Card.Body>
             <Card.Footer>
               <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
               <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
             </Card.Footer>
         </Card>
       </div>
             <div>
                 <Offcanvas show={show} onHide={handleClose}>
                   <Offcanvas.Header closeButton>
                     <Offcanvas.Title className='text-center'><h3>Best Time To Visit In Kanyakumari</h3></Offcanvas.Title>
                   </Offcanvas.Header>
                   <Offcanvas.Body>
                     <p style={{fontWeight:'bold'}}>Kanyakumari in Winters (October to March)
</p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                     Kanyakumari experiences moderate weather during summers with temperatures ranging from 22 degrees to 35 degrees Celsius. During this period the weather is humid; however, the climatic conditions are apt for visiting the various attractions of the place including Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from this, the various beach activities are open throughout summer, so tourists can indulge in outdoor visits, sea bathing and surfing. Although early summers are an ideal time to visit Kanyakumari, the month of April gets considerably hot which is why this month is not preferred for travel. However, the place gets vacant with less crowd and cheaper accommodation - a perfect time for budget travelers.
                     </p>

                     <p style={{fontWeight:'bold'}}>Kanyakumari in Summers (April to June)</p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                        Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travelers. In case one must visit Chennai, they may want to plan a trip                             </p>
                     <p style={{fontWeight:'bold'}}>Kanyakumari in Monsoons (July to September)</p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                       Monsoons in Kanyakumari starts in June which helps in tremendously lowering the temperature. However, the level of humidity keeps rising making it difficult to travel around. If you're a pluviophile, then the month of August is best recommended as the atmosphere is pleasant with a slight drizzle that enhances the beauty of this coast. Apart from its humidity, this is a good time to visit during monsoons. The frequent showers put a hold on sightseeing which affects the footfall in Kanyakumari in September; however, the Cape Festival takes place in October, and by this time tourists from around India visit Kanyakumari.
                     </p>
                   </Offcanvas.Body>
                 </Offcanvas>
             </div>
    </div>
  </div>
</div>
 )
}

// Kumbakonam-6
const Kumbakonam = () =>
{
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return(

<div className='container-fluid'>
  <div className="container vh-100">
    <div className="row">
    <h3 className='mt-5'>06.Kumbakonam</h3>
       <div className="col-6 mt-5">
         <Card style={{border:'1px solid gray',backgroundColor:'white'}}>
             <Card.Header style={{display:'inline-block'}} >
                <CloseButton  style={{float:'right',marginTop:'20px'}}/>
                <h3 className='text-center' style={{fontWeight:'bold'}}>More About Best Time To Travel To  </h3>
                <h3 className="text-center" style={{fontWeight:'bold'}}>Kumbakonam</h3>
               </Card.Header>
             <Card.Body>
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-4">
                     <Image src={ kumba1}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Dawn <br/> Source</div>
                   </div>
                   <div className="col-4">
                     <Image src={ kumba2}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Steemit <br/> Source</div>
                   </div>
                   <div className="col-4">
                     <Image src={ kumba3}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Holydham <br/>Source</div>
                   </div>
                 </div>
               </div>
             </Card.Body>
             <Card.Footer>
               <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
               <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
             </Card.Footer>
         </Card>
       </div>
       <div className="col-6">
         <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
         Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable times to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.
         </p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
         Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable times to pay a visit.
         </p>    
         
       </div>
             <div>
                 <Offcanvas show={show} onHide={handleClose} placement='end'>
                   <Offcanvas.Header closeButton>
                     <Offcanvas.Title className='text-center'><h3>Best Time To Visit In Chennai</h3></Offcanvas.Title>
                   </Offcanvas.Header>
                   <Offcanvas.Body>
                     <p style={{fontWeight:'bold'}}>
                     Kumbakonam in Winter (October-February)
                     </p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                       The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celsius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celsius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months.
                     </p>

                     <p style={{fontWeight:'bold'}}>
                     Kumbakonam in Monsoon (June August)
                     </p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                       The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall, this season can also be preferred by tourists to pay a visit to Kumbakonam.
                     </p>
                     <p style={{fontWeight:'bold'}}>
                     Kumbakonam in Summer (March - May)
                     </p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                        Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celsius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions.
                     </p>
                   </Offcanvas.Body>
                 </Offcanvas>
             </div>
    </div>
  </div>
</div>
 )
}

// Madurai -7
const Madurai  = () =>
{
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return(

<div className='container-fluid'>
  <div className="container vh-100">
    <div className="row mt-5">
       <div className="col-6">
         <h3>07.Madurai</h3>
         <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
         October to March is the best time to visit Madurai, with a hot and dry climate for most of the year, Madurai is best visited during the winter season. The town is known for its ancient temples and other architectural and religious masterpieces and receives a generous crowd of people throughout the year. Madurai is the most fascinating and welcoming during the months between October and March which coincides with its winter season.
         </p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
         Madurai is one of the oldest culturally vibrant cities of India. Its historical places and temples have a steady flow of tourists from all around the world.
         </p>    
       </div>
       <div className="col-6">
         <Card style={{border:'1px solid gray',backgroundColor:'white'}}>
             <Card.Header style={{display:'inline-block'}} >
             <CloseButton  style={{float:'right',marginTop:'20px'}}/>
               <h3 className='text-center' style={{fontWeight:'bold'}}>More About Best Time To Travel To  </h3>
               <h3 className="text-center" style={{fontWeight:'bold'}}>Madurai</h3>
               </Card.Header>
             <Card.Body>
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-4">
                     <Image src={maduai1}  style={{width:'100%',height:'250px'}}></Image> 
                       <div className="text-center">Meenatchi <br/> Amman <br/>Source</div>
                   </div>
                   <div className="col-4">
                     <Image src={maduai2}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className="text-center">Madurai <br/> Garden<br/>Source</div>
                   </div>
                   <div className="col-4">
                     <Image src={maduai3}  style={{width:'100% ',height:'250px'}}></Image> 
                     <div className="text-center">Murugan  <br/> Temple <br/>Source</div>

                   </div>
                 </div>
               </div>
             </Card.Body>
             <Card.Footer>
               <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
               <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
             </Card.Footer>
         </Card>
       </div>
             <div>
                 <Offcanvas show={show} onHide={handleClose}>
                   <Offcanvas.Header closeButton>
                     <Offcanvas.Title className='text-center'><h3>Best Time To Visit In Madurai</h3></Offcanvas.Title>
                   </Offcanvas.Header>
                   <Offcanvas.Body>
                     <p style={{fontWeight:'bold'}}>Madurai in Winter (December-February)</p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                        Many locals look forward to the winter season in Madurai due to the relief it brings from the summers. The season lasts from December to February. The temperature during the winter months ranges from 20 degree Celsius to 29 degrees Celsius. The season is characterized by moderately cool temperatures which make travelling around the city a pleasant experience for all individuals. Pongal, a widely celebrated festival is regarded as extremely special in Madurai. The festival lasts for three days and comprises of praying for a good harvest by locals and farmers alike. Other religious festivals are also celebrated with great vigour. However, hotel prices may climb up as this is the peak tourist season.
                     </p>

                     <p style={{fontWeight:'bold'}}>Madurai in Monsoon (June-August)</p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                       Monsoon season in Madurai lasts from June to August. Although the monsoon season continues for a smaller amount of time, the south-west monsoon winds bring in a large amount of rainfall which is extremely heavy. This rainfall also makes the weather gloomy but still makes the city beautiful as the nature around Madurai mainly benefits from this rain. This is the perfect time to visit Madurai for people who love greenery surroundings.
                     </p>
                     <p style={{fontWeight:'bold'}}>Madurai in Summer (March-July)</p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                        The summer season in Madurai lasts from March to May. The temperatures during this season range from 24 degree Celsius to 34 degrees Celsius. This means that the weather in Madurai during these months is uncharacteristically hot. It is also dry which makes the heat more noticeable and discourages travelers to visit. The summer season is, therefore, an offseason for Madurai, and the crowds are comparatively less as well.
                     </p>
                   </Offcanvas.Body>
                 </Offcanvas>
             </div>
    </div>
  </div>
</div>
 )
}
// Yarcard -8
const Yarcard= () =>
{
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return(

<div className='container-fluid'>
  <div className="container vh-100">
    <div className="row">
    <h3 className='mt-5'>08.Yarcard</h3>
       <div className="col-6 mt-5">
         <Card style={{border:'1px solid gray',backgroundColor:'white'}}>
             <Card.Header style={{display:'inline-block'}} >
               <p className='fs-5' style={{fontWeight:'bold'}}>More About Best Time To Travel To Yarcard <CloseButton  style={{float:'right'}}/></p>
               </Card.Header>
             <Card.Body>
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-4">
                     <Image src={yar1}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Easemytrip<br/>  Source</div>
                   </div>
                   <div className="col-4">
                     <Image src={yar2}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Oyorooma <br/> Source</div>
                   </div>
                   <div className="col-4">
                     <Image src={yar3}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Hiveminer <br/> Source</div>
                   </div>
                 </div>
               </div>
             </Card.Body>
             <Card.Footer>
               <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
               <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
             </Card.Footer>
         </Card>
       </div>
       <div className="col-6">
         <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
         October to June is the best time to visit Yercaud because the weather is dry and cool. However, Yercaud offers breathtaking views and a tranquil ambience throughout the year. During the month of May, a seven-day Summer Festival is conducted which includes flower shows, dog shows, boating races, and village fairs. Monsoons (July- September) could be avoided as rains might hamper your sightseeing plans, but the rains make this place extra beautiful, and you might not want to miss that either.
         </p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
         Yercaud celebrates seasonal festivals that are in tune with the changing climatic conditions and showcase the nativity and culture of the hill town. If you are planning a weekend getaway or a long vacation, choose the best of the seasons so you can enjoy your trip to the finest. The best period to visit Yercaud is from October to June, when the weather is at its best.

         </p>    
         
       </div>
             <div>
                 <Offcanvas show={show} onHide={handleClose} placement='end'>
                   <Offcanvas.Header closeButton>
                     <Offcanvas.Title className='text-center'><h3>Best Time To Visit In YarCard</h3></Offcanvas.Title>
                   </Offcanvas.Header>
                   <Offcanvas.Body>
                     <p style={{fontWeight:'bold'}}>
                     Yercaud in Summer (March-June)                     </p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                     With temperatures that hardly move out of the range between 24-degree Celsius and 28-degree Celsius, Yercaud experiences mild summers during March to June. The best places to visit during this season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm, and Lady’s Seat. Apart from these attractions, one festival which allures tourists from every nook of the world is the Yercaud Summer Festival. Held in May, it is an annual festival which keeps everyone on their toes until its arrival. Usually taking place for five days, the enrapturing summer event is as grand as it gets! From sophisticated folk dances to bewitching musical concerts, from captivating cultural competitions to horse riding tournaments, this event is a treasure trove of a smorgasbord of wonderful activities.
                     </p>

                     <p style={{fontWeight:'bold'}}>
                     Yercaud in Winter (November- February)
                     </p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                     Yercaud experiences a delightful climate from October to February. The average temperature which stays between a pleasant 10 degree Celsius and 15-degree Celsius is ideal for leisurely nature walks as well as adventure activities. Do not miss out on the Bear's Cave, Pagoda Paint, Shevaray Temple, and Anna Park, if you plan to visit this beautiful place during winter.
                     </p>
                     <p style={{fontWeight:'bold'}}>
                     Yercaud in Monsoon (July-September)
                     </p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                       Yercaud experiences a hot and humid monsoon with temperatures that range between 20-degree Celsius and 25 degree Celsius from June to September. At this time, the coffee plantations look ethereal after being washed by the rain. The Botanical Garden, Raja Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of the places you should visit during this time.
                     </p>
                   </Offcanvas.Body>
                 </Offcanvas>
             </div>
    </div>
  </div>
</div>
 )
}
// Theni   -9
const Thani  = () =>
{
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return(

<div className='container-fluid'>
  <div className="container vh-100">
    <div className="row">
       <div className="col-6">
         <h3>09.Theni</h3>
         <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
         To spend your vacation in the lap of nature in south India, no place would be better than the town of Cardamom Theni. The best season to visit Theni is winter when the weather remains all pleasant and favorable for tourism. On the other hand, summer remains hot, and monsoon receives a heavy rainfall which makes the two seasons not suitable for touring.
         </p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
         Theni is known for having a salubrious climate throughout the year. The average temperature ranges between 15 degrees Celsius to 40 degrees Celsius. The best monk to visit are from the month of December to February since the weather is pleasant and allows you to indulge in several outdoor activities.
         </p>    
       </div> 
       <div className="col-6">
         <Card style={{border:'1px solid gray',backgroundColor:'white'}}>
             <Card.Header style={{display:'inline-block'}} >
             <CloseButton  style={{float:'right',marginTop:'20px'}}/>
               <h3 className='text-center' style={{fontWeight:'bold'}}>More About Best Time To Travel To  </h3>
               <h3 className="text-center" style={{fontWeight:'bold'}}>Theni</h3>
               </Card.Header>
             <Card.Body>
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-4">
                     <Image src={ thani1}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className="text-center">Suruli <br/>Source </div>
                   </div>
                   <div className="col-4">
                     <Image src={ thani2}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className="text-center">Meghamalai <br/> Source</div>

                   </div>
                   <div className="col-4">
                     <Image src={ thani3}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className="text-center">Mullai <br/> Perriyar <br/> Source</div>

                   </div>
                 </div>
               </div>
             </Card.Body>
             <Card.Footer>
               <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
               <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
             </Card.Footer>
         </Card>
       </div>
             <div>
                 <Offcanvas show={show} onHide={handleClose}>
                   <Offcanvas.Header closeButton>
                     <Offcanvas.Title className='text-center'><h3>Best Time To Visit In Theani</h3></Offcanvas.Title>
                   </Offcanvas.Header>
                   <Offcanvas.Body>
                     <p style={{fontWeight:'bold'}}>Theni in Summer</p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                     The summer season in Theni starts from the month of March and continues till May. The months are generally hot and not favorable to visit Theni. Temperature during these months’ ranges between 24°C and 42°C.
                      </p>

                     <p style={{fontWeight:'bold'}}>Theni in Winter</p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                     Monsoon in Theni strikes in the month of June and lasts until September. The town experiences a heavy rainfall during this time that fills the town with zest. Despite being at peak of its beauty, the town of Theni is not best to visit during monsoon.
                     </p>
                     <p style={{fontWeight:'bold'}}>Theni in Monsoon</p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                     December marks the beginning of winter season in Theni which ends in the month of February. The temperature during these months varies from 22°C to 32°C, and thus, the town witnesses a pleasant weather and make the season best to visit Theni                     </p>
                   </Offcanvas.Body>
                 </Offcanvas>
             </div>
    </div>
  </div>
</div>
 )
}
// Hollanilal -10
const Hogenakkal = () =>
{
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return(

<div className='container-fluid'>
  <div className="container vh-100">
    <div className="row">
    <h3 className='mt-5'>10.Hogenakkal </h3>
       <div className="col-6 mt-5">
         <Card style={{border:'1px solid gray',backgroundColor:'white'}}>
             <Card.Header style={{display:'inline-block'}} >
               <p className='fs-5' style={{fontWeight:'bold'}}>More About Best Time To Travel To Hogenakkal <CloseButton  style={{float:'right'}}/></p>
               </Card.Header>
             <Card.Body>
               <div className="container-fluid">
                 <div className="row">
                   <div className="col-4">
                     <Image src={hok1}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Winter Source</div>
                   </div>
                   <div className="col-4">
                     <Image src={hok2}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Monsoon Source</div>
                   </div>
                   <div className="col-4">
                     <Image src={hok3}  style={{width:'100%',height:'250px'}}></Image> 
                     <div className='text-center'>Dry Source</div>
                   </div>
                 </div>
               </div>
             </Card.Body>
             <Card.Footer>
               <Button variant='primary' style={{float:'right'}} onClick={handleShow}>Save Changes</Button>
               <Button variant='dark' style={{marginLeft:'260px'}}>Close</Button>
             </Card.Footer>
         </Card>
       </div>
       <div className="col-6">
         <p className='mt-5' style={{fontWeight:'bold'}}> What is the best time to visit:</p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6'>     
         He best time to visit Hogenakkal is during the winter from October - February to relax and unwind near the waterfalls. Winters in Hogenakkal is pleasant with moderate weather throughout the day. Whereas the summers are warm and sunny with temperatures ranging from 23 - 34-degree Celsius. Despite summers being an off season, a dip in the Hogenakkal lake is rejuvenating for all. Monsoon on the other hand has a pleasant weather with temperatures ranging from 13 to 20-degree Celsius, making it an ideal time to enjoy its spectacular beauty.
         </p>
         <p style={{textIndent:'210px',textAlign:'justify'}} className='fs-6 mt-4'> 
         Hogenakkal Falls, located on the border of Tamil Nadu and Karnataka, is one of the most scenic places to visit in the region. The waterfall is known as Hogenakkal, or "Smoky Rocks", because of the unique arrangement of the gigantic, carbonated rocks that surround it. The sight of River Kaveri splitting into multiple small streams and cascading from different heights ranging from 15 feet to 66 feet will leave you mesmerized! Hogenakkal Waterfall is like the popular.

        </p>    
         
       </div>
             <div>
                 <Offcanvas show={show} onHide={handleClose} placement='end'>
                   <Offcanvas.Header closeButton>
                     <Offcanvas.Title className='text-center'><h3>Best Time To Visit In Chennai</h3></Offcanvas.Title>
                   </Offcanvas.Header>
                   <Offcanvas.Body>
                     <p style={{fontWeight:'bold'}}>
                     Hogenakkal in Winter (November - February)
                     </p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                     Watch the glory of nature take over Hogenakkal, as the south-west monsoon showers the region with about 150 mm of rainfall between these months. Hogenakkal is a sight to behold in the rain, as the Kaveri comes alive and usually floods her banks. While adventure enthusiasts and adrenaline junkies’ throng Hogenakkal in the monsoon, it is not recommended for tourists as the currents are too strong to swim in. Boating is not allowed either, or there is no standard means of transportation to reach the waterfalls. It is best to avoid the river, as the water flow may be too heavy. Further downhill, you can go rafting if you prefer, although discretion is advised. The waterfalls are a sight to behold, as they live up to their name of the 'Smoking Rocks - the sultry mist as the water strikes the rocks covers the base in a myriad of colors. Rainbows adorn the falls, and the scene is postcard perfect.
                     </p>

                     <p style={{fontWeight:'bold'}}>
                     Hogenakkal in Monsoon (July-September)
                     </p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                        Hogenakkal Waterfall is a popular destination attraction among nature lovers, adventure seekers, trekkers, and shutterbugs. If you are planning a trip to this waterfall, here is some information about Hogenakkal Falls timings, location, activities, parking fee and more.
                     </p>
                     <p style={{fontWeight:'bold'}}>
                     Hogenakkal in Summer (March-June)
                     </p>
                     <p style={{textIndent:'60px',textAlign:'justify'}}>
                     The Indian Peninsula lies in the tropics and is known for its sweltering summer heat. Temperatures soar to a maximum of 35°C in April, which is the hottest month of the year here. The water flow is minimal, and there are few waterfalls to reckon during these summer months. Most small waterfalls dry up. The rock facades are magnificent, though. The jagged rocks and steep gorges make for picture-perfect views and have been featured in many films as well.                     </p>
                   </Offcanvas.Body>
                 </Offcanvas>
             </div>
    </div>
  </div>
</div>
 )
}
 export default BestTimeToVisit