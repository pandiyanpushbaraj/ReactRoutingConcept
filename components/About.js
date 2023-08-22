import React from 'react'
import Image from 'react-bootstrap/Image'
export const About = () => {
    
  return (
    <div className='bg-success mt-1 container-fluid p-2' style={{ height:"100%"}}>
        <div className='container'>
        <div className='row mt-1'> 
           <div className='col-lg-8 mt-1'>
             <h3 className='text-center' >THE EARLY YEARS</h3>
             <small className='fs-6' style={{color:"white"}}>
             When the first Royal Enfield motorcycle rolled out in 1901, it was the beginning of an endearing story that would turn into a legend by the turn of the century. Aptly christened - Made Like a Gun - the phrase epitomize the simple, resilient and dependable machines that have stood the test of time and terrain. 
             It continues to be one of the key inspirations for everything that Royal Enfield builds.
             </small>
           </div>
           <div className='col-lg-4 round col-md-center  hover-zoom'>
           <Image src='https://store.royalenfield.com/media/wysiwyg/The_early_years.jpg' style={{width:"300px",height:"180px"}}thumbnail rounded></Image>
           </div>
        </div>
        
        {/* Container 2 */}
        </div>
        <div className='container '>
        <div className='row mt-1'> 
       
           <div className='col-lg-8 mt-1'>
             <h3 className='text-center' >INSPIRED BY A MOTORCYCLING WAY OF LIFE</h3>
             <small className='fs-6' style={{color:"white"}}>
             When the first Royal Enfield motorcycle rolled out in 1901, it was the beginning of an endearing story that would turn into a legend by the turn of the century. Aptly christened - Made Like a Gun - the phrase epitomize the simple, resilient and dependable machines that have stood the test of time and terrain. 
             It continues to be one of the key inspirations for everything that Royal Enfield builds.
             </small>
           </div>
           <div className='col-lg-4 round hover-zoom '>
              <Image src='https://store.royalenfield.com/media/wysiwyg/Inspired_by_a_motorcycling_way_of_life.jpg' style={{width:"300px",height:"180px"}}thumbnail rounded></Image>
           </div>
          
        </div>
        </div>



           {/* container 3 */}
        <div className='container'>
        <div className='row mt-1'> 
           <div className='col-lg-8 mt-1'>
             <h3 className='text-center' >THE PURSUIT OF EXPLORATION</h3>
             <small className='fs-6' style={{color:"white"}}>
             The forty bravehearts who rode their Royal Enfields to Khardung-la for the first time in 1997, set off a culture of explorations. Since then, Royal Enfield motorcycles have been allies to many such epic trips. This active pursuit to ride to new places, in a simple and unhurried manner, 
             is what makes for Royal Enfield’s purpose of delivering pure motorcycling experience.
             </small>
           </div>
           <div className='col-lg-4 round  hover-zoom'>
           <Image src='https://store.royalenfield.com/media/wysiwyg/The_early_years.jpg'  style={{width:"300px",height:"180px"}}thumbnail rounded></Image>
           </div>
        </div>
        </div>
    </div>
  )
}
