import React from 'react'
//  navigation
        import Carousel from 'react-bootstrap/Carousel';
        import Image from 'react-bootstrap/Image';
        import c1 from '../images/banner1.jpg'
        import c2 from '../images/pic1.jpeg'
        import c3 from '../images/pic2.jpeg'
        import c4 from '../images/pic3.jpeg'
        import c5 from '../images/pic4.jpeg'
// Places
        import Nav from 'react-bootstrap/Nav';
        import "./pages.css"
// chennai
        // import Image from 'react-bootstrap/Image';
        import Button from 'react-bootstrap/Button';
        import Card from 'react-bootstrap/Card';
        import chennai1 from '../images/Chennai.jpeg'
        import che2 from '../images/chennai1.jpeg';
        import che3 from '../images/chennai2.jpeg';
        import che4 from '../images/chennai3.jpeg';
        import che5 from '../images/chennai4.jpeg';
// Ramashwaram
        import ra from '../images/r.jpeg';
        import ra1 from '../images/r1.jpeg';
        import ra2 from '../images/r2.jpeg';
        import ra3 from '../images/r3.jpeg';
        import ra4 from '../images/r4.jpeg';
// Kodaikkanal 
        import kanal1 from '../images/ko.jpeg';
        import kanal2 from '../images/ko1.jpeg';
        import kanal3 from '../images/ko2.jpeg';
        import kanal4 from '../images/ko3.jpeg';
        import kanal5 from '../images/ko4.jpeg';

// Ooty
        import ooty from '../images/o.jpeg';
        import ooty1 from '../images/o1.jpeg';
        import ooty2 from '../images/o2.jpeg';
        import ooty3 from '../images/o3.jpeg';
        import ooty4 from '../images/o4.jpeg';

// Madurai
        import mri from '../images/madurai.jpeg'
        import mri1 from '../images/madurai1.jpeg'
        import mri2 from '../images/madurai2.jpeg'
        import mri3 from '../images/madurai3.jpeg'
        import mri4 from '../images/madurai4.jpeg'

// Kanyakumari
        import kanya from '../images/Kanyakumari.jpeg'
        import kanya1 from '../images/kanyakumari1.jpeg'
        import kanya2 from '../images/kanyakumari12.jpeg'
        import kanya3 from '../images/kanyakumari3.jpeg'
        import kanya4 from '../images/kanyakumari4.jpeg'
// Kumbakonam
        import kum from '../images/Kumbakonam.jpeg'
        import kum1 from '../images/Kumbakonam1.jpeg';
        import kum2 from '../images/Kumbakonam2.jpeg';
        import kum3 from '../images/Kumbakonam3.jpeg';
        import kum4 from '../images/Kumbakonam4.jpeg';

// Yercaud
        import yar  from '../images/yarcaud.jpeg';
        import yar1  from '../images/yercaud1.jpeg';
        import yar2 from '../images/yercaud2.jpeg';
        import yar3  from '../images/yercaud3.jpeg';
        import yar4  from '../images/yercaud4.jpeg';
// Theni
        import the1 from '../images/thani1.jpeg';
        import the2 from '../images/thani2.jpeg';
        import the3 from '../images/thani3.jpeg';
        import the4 from '../images/thani1.jpeg';
// Hogenakkal
        import hok from '../images/Hogenakkal.jpeg';
        import hok1 from '../images/hogenakkal1.jpeg';
        import hok2 from '../images/hogenakkal2.jpeg';
        import hok3 from '../images/hogenakkal3.jpeg';
        import hok4 from '../images/hogenakkal4.jpeg';


 const Home = () => {
  return (
    <div>
                <Carasoles></Carasoles>
                <Places />
                <Chennai />
                <Ramashwaram></Ramashwaram>
                <Kodaikkanal />
                <Ooty></Ooty>
                <Kanyakumari></Kanyakumari>
                <Kumbakonam></Kumbakonam>
                <Madurai></Madurai>
                <Yercaud></Yercaud>
                <Theni ></Theni>
                <Hogenakkal ></Hogenakkal> 
    </div>
  )
}
 //   carasole
        class Carasoles extends React.Component
        {
        render()
        {
            return (
                <div className='body'>
                <Carousel data-bs-theme="dark">
                {/* slide1 */}
            <Carousel.Item>
            <Image
                className="d-block w-100"
                src={c1} style={{height:'600px'}}></Image>
            </Carousel.Item>

            {/* slide2 */}

            <Carousel.Item>
            <Image
                className="d-block w-100"
                src={c2} style={{height:'600px'}}
            />
            </Carousel.Item>

            {/* Slide 3 */}

            <Carousel.Item>
            <Image
                className="d-block w-100"
                src={c3}     style={{height:'600px'}}
                
            />
            </Carousel.Item>

            {/* Slide 4 */}

            <Carousel.Item>
            <Image
                className="d-block w-100"
                src={c4}    style={{height:'600px'}}
                
            />
            </Carousel.Item>

            {/* Slide 5 */}

            <Carousel.Item>
            <Image
                className="d-block w-100"
                src={c5}   style={{height:'600px'}}
                
            />
            </Carousel.Item>
        </Carousel>
        </div>
        )
        }
        }
// Places
        class Places extends React.Component
        {
        render()
        {
        return (
            <div className='places body'>
        <h4>Tourist Places To Tamil Nadu</h4>
        <h4>Here Are The Top Places To Visit In Tamil Nadu In 2023</h4>

        <Nav defaultActiveKey="/home" className='place-nav row mt-5'>
            <Nav.Item as='ul' className='place-ul col'>
                <Nav.Item as="li" >
                    <Nav.Link href="#chennai" className="place-link"><h5>Chennai</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" >
                    <Nav.Link href="#rameshwaram" className="place-link"><h5>Rameshwaram</h5></Nav.Link>
                </Nav.Item>
            </Nav.Item>
            <Nav.Item as='ul' className='place-ul col'>
                <Nav.Item as="li" >
                    <Nav.Link href="#kodaikanal" className="place-link"><h5>Kodaikanal</h5></Nav.Link>
                </Nav.Item> 
                <Nav.Item as="li" > 
                    <Nav.Link href="#ooty" className="place-link"><h5>Ooty</h5></Nav.Link>
                </Nav.Item> 
            </Nav.Item>
            <Nav.Item as='ul' className='place-ul col'>
                <Nav.Item as="li">
                    <Nav.Link href="#madurai" className="place-link"><h5>Madurai</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" >
                    <Nav.Link href="#kanyakumari" className="place-link"><h5>Kanyakumari</h5></Nav.Link>
                </Nav.Item>
            </Nav.Item>            
            <Nav.Item as='ul' className='place-ul col'>
                <Nav.Item as="li" >
                    <Nav.Link href="#kumbakonam" className="place-link"><h5>Kumbakonam</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" >
                    <Nav.Link href="#yercaud" className="place-link"><h5>Yercaud</h5></Nav.Link>
                </Nav.Item>
            </Nav.Item>            
            <Nav.Item as='ul' className='place-ul col'>
                <Nav.Item as="li" >
                    <Nav.Link href="#theni" className="place-link"><h5>Theni</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" >
                        <Nav.Link href="#hogenakkal" className="place-link"><h5>Hogenakkal</h5></Nav.Link>
                </Nav.Item>
            </Nav.Item>            
        </Nav>
    </div>
        )
        }
        }

// Chennai
            const Chennai = () => {
                return (
                
                <section id="chennai" className='container-fluid ml-5'>
                    <div className="container row ml-5">
                    <h3> 01.Chennai </h3>
                    </div>
                    <div className="container row ml-5">
                        <div className="col">
                        <Image className=' w-100' src={chennai1}></Image>
                        </div>
                
            
                        <div className='col'>
                            <h6 style={{fontWeight:'bold'}}>"The Detroit Of India"</h6>
            
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            "Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of the south', is one among the four metropolitan siblings of India, 
                            having a rich cultural history which it perfectly balances with its metropolis lifestyle.",
                            </p>
            
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            "Amid its chaos of traffic and sweltering humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering 
                            skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed."
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in chennai</h5>
            
                    <div className="container row  mt-4 ml-5">
                    <div className='card col'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top" src={che2} />
                        <Card.Body>
                        <Card.Title>Marina Beach</Card.Title>
                        <Card.Text>
                        <p> Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={che3}/>
                        <Card.Body>
                        <Card.Title>MGR Film City</Card.Title>
                        <Card.Text>
                        <p>"Having been established in the year 1994, a considerably new structure, the MGR Film city is managed..."</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top" src={che4} />
                        <Card.Body>
                        <Card.Title>Marundeeswarar Temple</Card.Title>
                        <Card.Text>
                            <p>The magnificent <p style={{textIndent:'2px'}}></p> Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={che5} />
                        <Card.Body>
                        <Card.Title>Breezy Beach</Card.Title>
                        <Card.Text>
                        <p>Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
            
                </section>
                )
            }

//Ramashwaram 
            const Ramashwaram = () => {
                return (
                
                <section id="rameshwaram" className='container-fluid ml-5'>
                    <div className="container row ml-5">
                    <h3> 02.Ramashwaram </h3>
                    </div>
                    <div className="container row ml-5 ">
                        <div className="col">
                        <Image className=' w-100' src={ra}></Image>
                        </div>
                        <div className='col'>
                            <h6 style={{fontWeight:'bold'}}>"The Bridge on the Indian Ocean"</h6>
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            "Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka.",
                            </p>
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            "Renowned for its magnificent prakaras with massive sculptured pillars on either side, The Ramanathaswamy Temple houses the longest corridor in the world. Agniteertham is famous for its sacred waters and Pilgrims perform poojas in honour of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameshwaram has the first sea bridge connecting the town of Mandapam with Pamban Island, and Rameswaram."
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in Ramashwaram</h5>
            
                    <div className="container row  mt-4 ml-5">
                    <div className='card col'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top"  src={ra1}/>
                        <Card.Body>
                        <Card.Title> Dhanushkodi Temple</Card.Title>
                        <Card.Text>
                        <p> Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top"  src={ra2}/>
                        <Card.Body>
                        <Card.Title>Lakshmana Temple</Card.Title>
                        <Card.Text>
                        <p>Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top"  src={ra3}/>
                        <Card.Body>
                        <Card.Title>Rameshwaram Temple</Card.Title>
                        <Card.Text>
                            <p>A perfect blend of mind- boggling architecture and spiritual significance. Rameshwaram Temple, also....</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top"  src={ra4} style={{width:"270px"}}/>
                        <Card.Body>
                        <Card.Title>Villoondi Tirtham</Card.Title>
                        <Card.Text>
                        <p>Villoondi Tirtham is a beach which is also a sacred natural water body and a favourite amongst tourists...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
            
                </section>
                )
            }
// Kodaikkanal 
            const Kodaikkanal = () => {
                return (
                
                <section id="kodaikanal" className='container-fluid ml-5'>
                    <div className="container row">
                    <h3 className='ml-5'> 03.Kodaikkanal </h3>
                    </div>
                    <div className="container row ">
                        <div className="col ml-5">
                        <Image className=' w-100' src={kanal1}></Image>
                        </div>
                        <div className='col ml-5'>
                            < h6 style={{fontWeight:'bold'}}>"The Princess of Hill Stations"</h6>
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for 
                            a perfect getaway. Kodaikanal means 'the gift of the forests'.
                            </p>
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life, and this hill station lets you sit back and connect with nature as you head out on biking or trekking 
                            trails or take a stroll through the vast forests surrounding the town.
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in Kodaikkanal</h5>
            {/* card1 */}
                    <div className="container row  mt-4">
                    <div className='card col ml-5'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top" src={kanal2}  />
                        <Card.Body>
                        <Card.Title>Green Valley View</Card.Title>
                        <Card.Text>
                        <p>Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep... </p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 2 */}
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={kanal3}  />
                        <Card.Body>
                        <Card.Title>Kodai Lake</Card.Title>
                        <Card.Text>
                            <p>Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top" src={kanal4} />
                        <Card.Body>
                        <Card.Title>Bear Shola Falls</Card.Title>
                        <Card.Text className='rounded'>
                            <p>Located at a mere distance of 2 kilometres 
                            <br />from the Kodaikanal Lake, the Bear Shola Falls is a popular...</p>
                            
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={kanal5} />
                        <Card.Body>
                        <Card.Title>Pillar Rocks</Card.Title>
                        <Card.Text>
                        <p>Situated in the 'Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic....</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
            
                </section>
                )
            }
// Ooty
            const Ooty = () => {
                return (
                
                <section id="ooty" className='container-fluid ml-5'>
                    <div className="container row ml-5">
                    <h3> 04.Ooty </h3>
                    </div>
                    <div className="container row ml-5">
                        <div className="col">
                        <Image className=' w-100' src={ooty}></Image>
                        </div>
                        <div className='col'>
                            <h6 style={{fontWeight:'bold'}}>"Queen of the Nilgiris"</h6>
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East
                            India Company, the Queen of the hills is a picturesque getaway.
                            </p>
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls,
                            winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in Ooty</h5>
            
                    <div className="container row  mt-4 ml-5">
                    <div className='card col'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top" src={ooty1} />
                        <Card.Body>
                        <Card.Title>Nilgiri Mountain Railway</Card.Title>
                        <Card.Text>
                        <p> Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={ooty2} />
                        <Card.Body>
                        <Card.Title>Emerald Lake</Card.Title>
                        <Card.Text>
                        <p>Ooty Botanical Gardens lie on the <br /> lower slopes of the Doddabetta peak, the Government Botanical...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top" src={ooty3}/>
                        <Card.Body>
                        <Card.Title>Emerald Lake</Card.Title>
                        <Card.Text>
                            <p>Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={ooty4} style={{height:"168px"}}/>
                        <Card.Body>
                        <Card.Title>Breezy Beach</Card.Title>
                        <Card.Text>
                        <p>Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The tip...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
            
                </section>
                )
            }
 // Kanyakumari
            const Kanyakumari = () => {
                return (
                
                <section id="kanyakumari" className='container-fluid ml-5'>
                    <div className="container row ml-5">
                    <h3> 05.Kanyakumari </h3>
                    </div>
                    <div className="container row ml-5">
                        <div className="col">
                        <Image className=' w-100' src={kanya}></Image>
                        </div>
                        <div className='col'>
                            <h6 style={{fontWeight:'bold'}}>"Cape Comorin or The Land's End"</h6>
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state 
                            of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.
                            </p>
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower. The town has a mountainous terrain with 
                            elevated patches of hills. coconut trees and lined with paddy fields
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in chennai</h5>
            
                    <div className="container row  mt-4 ml-5">
                    <div className='card col'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top" src={kanya1} />
                        <Card.Body>
                        <Card.Title>Kanyakumari Beach</Card.Title>
                        <Card.Text>
                        <p> Located in the southernmost part of India, Kanyakumari beach with its beautiful hue- changing beaches</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={kanya2} />
                        <Card.Body>
                        <Card.Title> Vivekananda Memorial</Card.Title>
                        <Card.Text>
                        <p>The magnificent Vivekananda Rock Memorial is  small island off Kanyakumari. It has the picturesque..."</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top" src={kanya3} />
                        <Card.Body>
                        <Card.Title>Thiruvalluvar Status</Card.Title>
                        <Card.Text>
                            <p>Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself....</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={kanya4}  />
                        <Card.Body>
                        <Card.Title>Thirparappu Falls</Card.Title>
                        <Card.Text>
                        <p>Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
            
                </section>
                )
            }
// Kumbakonam
            const Kumbakonam = () => {
                return (
                
                <section id="kumbakonam" className='container-fluid ml-5'>
                    <div className="container row ml-5">
                    <h3> 06.Kumbakonam </h3>
                    </div>
                    <div className="container row ml-5">
                        <div className="col">
                        <Image className=' w-100' src={kum}></Image>
                        </div>
                        <div className='col'>
                            <h6 style={{fontWeight:'bold'}}>"The Cambridge of India"</h6>
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu
                            . The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism
                            </p>
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes. The town is one of the oldest in Indian 
                            history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes.
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in Kumbakonam</h5>
            
                    <div className="container row  mt-4 ml-5">
                    <div className='card col'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top" src={kum1} />
                        <Card.Body>
                        <Card.Title>Sarangapani Temple</Card.Title>
                        <Card.Text>
                        <p> Sarangapani Temple, an ancient temple dedicated to Lord Vishnu is located in the town of Kumbakonam...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={kum2} />
                        <Card.Body>
                        <Card.Title>Nageswaran Temple</Card.Title>
                        <Card.Text>
                        <p>Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top" src={kum3} />
                        <Card.Body>
                        <Card.Title>Adi Kumbeswara Temple</Card.Title>
                        <Card.Text>
                            <p>Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={kum4} />
                        <Card.Body>
                        <Card.Title>Airavateswara Temple</Card.Title>
                        <Card.Text>
                        <p>Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
            
                </section>
                )
            }
// Madurai
            const Madurai = () => {
                return (
                
                <section id="madura" className='container-fluid ml-5'>
                    <div className="container row ml-5">
                    <h3> 07.Madurai </h3>
                    </div>
                    <div className="container row ml-5">
                        <div className="col">
                        <Image className=' w-100' src={mri}></Image>
                        </div>
                        <div className='col'>
                            <h6 style={{fontWeight:'bold'}}>"The Lotus City"</h6>
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus City' as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, 
                            dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.
                            </p>
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples
                            dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With bustling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in Madurai</h5>
            
                    <div className="container row  mt-4 ml-5">
                    <div className='card col'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top" src={mri1} />
                        <Card.Body>
                        <Card.Title>Vaigai Dam</Card.Title>
                        <Card.Text>
                        <p> Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Theni.....</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={mri2} style={{height:"184px"}} />
                        <Card.Body>
                        <Card.Title>Meghamalai</Card.Title>
                        <Card.Text>
                        <p>Often known as the 'High Wavy Mountains', Meghamalai is a petit yet beautiful place located in the and Madurai is a city</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top" src={mri3} />
                        <Card.Body>
                        <Card.Title>Samanar Hills</Card.Title>
                        <Card.Text>
                            <p>Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={mri4} style={{height:"205px"}}/>
                        <Card.Body>
                        <Card.Title>Thirumalai Nayakar</Card.Title>
                        <Card.Text>
                        <p>Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
                </section>
                )
            }


// Yercaud
            const Yercaud= () => {
                return (
                
                <section id="yercaud" className='container-fluid ml-5'>
                    <div className="container row ml-5">
                    <h3> 08.Yercaud </h3>
                    </div>
                    <div className="container row ml-5">
                        <div className="col">
                        <Image className=' w-100' src={yar}></Image>
                        </div>
                        <div className='col'>
                            <h6 style={{fontWeight:'bold'}}>"The Land of Seven Forests."</h6>
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor', this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known 
                            for its vast expanses of coffee plantations and great weather.
                            </p>
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Yercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in chennai</h5>
            
                    <div className="container row  mt-4 ml-5">
                    <div className='card col'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top" src={yar1} />
                        <Card.Body>
                        <Card.Title>Pagoda Point</Card.Title>
                        <Card.Text>
                        <p> Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={yar2}/>
                        <Card.Body>
                        <Card.Title>Botanical Garden</Card.Title>
                        <Card.Text>
                        <p>"Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various..."</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top"src={yar3} />
                        <Card.Body>
                        <Card.Title>Emerald Lakee</Card.Title>
                        <Card.Text>
                            <p>The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top"src={yar4} />
                        <Card.Body>
                        <Card.Title>Lady's Seat</Card.Title>
                        <Card.Text>
                        <p>Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
            
                </section>
                )
            }
// Theni
            const Theni = () => {
                return (
                
                <section id="theni" className='container-fluid ml-5'>
                    <div className="container row ml-5">
                    <h3> 09.Theni </h3>
                    </div>
                    <div className="container row ml-5">
                        <div className="col">
                        <Image className=' w-100' src={the3}></Image>
                        </div>
                        <div className='col'>
                            <h6 style={{fontWeight:'bold'}}>"A little hamlet in Tamil Nadu"</h6>
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            "Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests 
                            hence filled with unparalleled greenery."
                            </p>
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            "There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year. The vibrant local markets of Theni are shoppers' paradise. The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli 
                            Falls and the Kumbakarai Falls are the crown jewels of Theni.
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in Theni</h5>
            
                    <div className="container row  mt-4 ml-5">
                    <div className='card col'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top" src={the1} />
                        <Card.Body>
                        <Card.Title>Chinna Suruli Falls</Card.Title>
                        <Card.Text>
                        <p> Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={the2} />
                        <Card.Body>
                        <Card.Title> Kumbakarai_Falls</Card.Title>
                        <Card.Text>
                        <p>"Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that...x"</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top" src={the3} />
                        <Card.Body>
                        <Card.Title>Meghamalai</Card.Title>
                        <Card.Text>
                            <p>Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise..</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={the4} />
                        <Card.Body>
                        <Card.Title>Suruli Falls</Card.Title>
                        <Card.Text>
                        <p>Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of....</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
            
                </section>
                )
            }
// Hogenakkal
            const Hogenakkal = () => {
                return (
                
                <section id="hogenakkal" className='container-fluid ml-5'>
                    <div className="container row ml-5">
                    <h3> 10.Hogenakkal </h3>
                    </div>
                    <div className="container row ml-5">
                        <div className="col">
                        <Image className=' w-100' src={hok}></Image>
                        </div>
                        <div className='col'>
                            <h6 style={{fontWeight:'bold'}}>"The one that will take your breath away"</h6>
                            <p style={{textIndent:'50px' ,fontSize:'15px'}}>
                            Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by l
                            ocals make it a perfect one day trip or a weekend getaway from Bangalore.
                            </p>
                            <p className='mt-1' style={{textIndent:'50px' ,fontSize:'15px'}}>
                            ometimes referred to as the 'Niagara Falls of India', it is also known for the medicinal baths. Also known at Marikottayam, Hoge actually means smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink.
                            Weekends can be crowded. Keep all these points in mind before visiting.
                            </p>
                        </div>
                    </div>
                <section>
                <h5 className='text-center mt-5'>Must Visit place in chennai</h5>
            
                    <div className="container row  mt-4 ml-5">
                    <div className='card col'>
                    <Card style={{ width: '16rem' , border:"1px solid gray" }}>
                        <Card.Img variant="top" src={hok1} />
                        <Card.Body>
                        <Card.Title>Theerthamalai Temple</Card.Title>
                        <Card.Text>
                        <p>Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the....</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={hok2} />
                        <Card.Body>
                        <Card.Title>Hogenakkal Falls</Card.Title>
                        <Card.Text>
                        <p>"Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of..."</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '17rem', border:"1px solid gray" }}>
            
                        <Card.Img variant="top" src={hok3} />
                        <Card.Body>
                        <Card.Title>Pennagram Village</Card.Title>
                        <Card.Text>
                            <p>The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every....</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className='card col'>
                    <Card style={{ width: '16rem', border:"1px solid gray" }}>
                        <Card.Img variant="top" src={hok4} />
                        <Card.Body>
                        <Card.Title>Mettur Dam</Card.Title>
                        <Card.Text>
                        <p>Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built..</p>
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                    </div>
                
                </section>
            
                </section>
                )
            }
export default Home