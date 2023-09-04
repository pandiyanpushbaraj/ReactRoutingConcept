import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Navigation from './pages/Navigation';
// import Carousel from './pages/Carousels';
// import Places from './pages/Places';    

 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import "./App.css";
 import  Placetovisit from './Components/Placetovisit';
 import Food from './Components/Food';
import  Home  from './Components/Home';
import BestTimeToVisit from './Components/BestTimeToVisit';
import  Packages from './Components/Packages';
    // function Based Event
    function App() {
    return(
            <>
           
                <BrowserRouter>
                   <Navigation />
                    <Routes>
                      <Route path="/Home" element={<Home/>} />
                       <Route path="/Placetovisit" element={<Placetovisit/>} />
                       <Route path="/BestTimeToVisit" element={<BestTimeToVisit/>}/>
                       <Route path='/Food' element ={<Food/>}/>
                       <Route path='/Packages' element={<Packages/>}/>
                    </Routes>
                </BrowserRouter>

              
            </>
    )
}
    


export default App
