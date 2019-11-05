import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './Navbar';


const Main = () => {
   return (
       <BrowserRouter>
        <>
        <Navbar />
        <p>Hello World</p>
        </>
       </BrowserRouter>
   ) 
}

export default Main;