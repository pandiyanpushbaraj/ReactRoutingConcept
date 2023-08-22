import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
  return (
    <Carousel data-bs-theme="successs" className='bg-success'>
      <Carousel.Item class="sm-container">
        <img
          className="d-block w-100 mt-1 rounded" style={{height:"580px"}}
          src='https://static.wixstatic.com/media/216237_d4ba704ad1304291ac45f0f6e5d3f7bf~mv2.jpg/v1/fill/w_1094,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/334530899_253297670358609_4131125929072868467_n.jpg'
          alt="TAJ MAHAL"
        />
        <Carousel.Caption>
          <h5>Fitst slide</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block w-100 mt-1 " style={{height:"580px"}}
          src="https://static.wixstatic.com/media/216237_cbf234ca0b2342a3987e7e54d249327c~mv2.jpg/v1/crop/x_471,y_638,w_6407,h_4271/fill/w_1182,h_788,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Super%20Meteor%20650(8)%20(2).jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='text-danger  text-uppercase'>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/216237_712e5fefbb1a47169c20d90a7c3018ea~mv2.jpg/v1/fill/w_1089,h_363,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5.jpg"
          style={{height:"580px"}} alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}







