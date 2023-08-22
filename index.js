 import React from 'react';
 import ReactDOM  from 'react-dom'
  import { BrowserRouter } from 'react-router-dom'
 import './index.css';
 import App from './App';

//  mdb
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
 

 ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
   document.getElementById('root')
 );


 
  
 
