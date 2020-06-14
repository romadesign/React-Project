import React from 'react'
import "./Seccion1.css"


/*importando imagenes */
import exerciseImg from '../imagenes/undraw_completing_6bhr.svg'

import exerciseImg1 from '../imagenes/undraw_press_play_bx2d.svg'

import exerciseImg2 from '../imagenes/undraw_mobile_login_ikmv.svg' 
/*importando imagenes */


export const Seccion1 = () => {
    return (
        <div className="service">
        <div className="container">
            <h2 className="title">Nuestro nuevo metodo <br /> te puede ayudar bastante</h2>
            <p className="subtitle">Nuestra manera de enseñar a nuestros alumnos es con 100% practicas </p>
            <div className="row">
              <div className="col-md-4">
                <div className="service-box text-center">
                <img src={exerciseImg}   alt="..."  />
                  <h6>Primero registrate</h6>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <i className="fa fa-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box active-service text-center">
                <img src={exerciseImg1}   alt="..."  />
                  <h6>Ingresa desde tu portatil</h6>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <i className="fa fa-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box text-center">
                <img src={exerciseImg2}   alt="..."  />
                  <h6>Puedes descargar los cursos</h6>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <i className="fa fa-arrow-right"></i>
                </div>
              </div>  
            </div>
        </div>
    </div>
    );
}
