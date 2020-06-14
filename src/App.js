import React from 'react';
/*importando bootstrap */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
/*importando bootstrap */

import './App.css';
import { Navbar } from './components/Navbar';
import { Seccion } from './components/Seccion';
import { Seccion1 } from './components/Seccion1';
import { Comunity } from './components/Comunity';
import { Teacher } from './components/Teacher';


function App() {
  return (
    <>
    <Navbar />
    <Seccion /> 
    <Seccion1 />
    <Comunity />   
    <Teacher />
    </>
  );
}

export default App;
