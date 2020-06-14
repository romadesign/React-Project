import React from 'react'
/*importando texto escritura */
import Typical from 'react-typical'
/*importando texto escritura */

/*importando imagenes */
import exerciseImg from '../imagenes/undraw_code_review_l1q9.svg' 
/*importando imagenes */

import './Seccion.css';

export const Seccion = () => {
    return (
        <div className="App-header">
            <div className="container">
    <div className="row banner  justify-content-center ">
    
    <div className=" col-12 text-center col-md-6 col-lg-6  col-xl-6">              
    <img src={exerciseImg} className="img"  alt="..."  />
    </div>

    
    <div className="col-12 col-md-6  col-lg-6 col-xl-6 ">
    <h1 className="text" > Aprende a <br /> programar con
        < Typical  
            steps={[
              'JavaScript', 2000, 
              'PHP', 2000
                  ]}
            loop={Infinity}
            wrapper="p"
        />
    </h1>
    </div>    
    </div>    
    </div>    
  </div>
    )
}
