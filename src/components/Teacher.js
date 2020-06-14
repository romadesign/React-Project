import React from 'react'
import "./Teacher.css"


/*importando imagenes */
import exerciseImg from '../img/angular.png'

import exerciseImg1 from '../img/angular.png'
import exerciseImg2 from '../img/angular.png'
/*importando imagenes */



export const Teacher = () => {
    return (
        <div className="container">
        <div className="ancho">
            
        <h2>Elije tu curso</h2>
        <div className="row">
          <div className="space col-12 col-sm-6 col-md-4">
          <div className="card">
          <img src={exerciseImg} className="cursos"  alt="..."  />
             <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
           </div>
          </div>

          <div className="space col-12 col-sm-6 col-md-4">
          <div className="card">
          <img src={exerciseImg1} className="cursos"  alt="..."  />
             <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
           </div>
          </div>

          <div className="space col-12 col-sm-6 col-md-4">
          <div className="card">
          <img src={exerciseImg1} className="cursos"  alt="..."  />
             <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
           </div>
          </div>


          </div>
          </div>
          </div>
        
    )
}
