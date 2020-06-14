import React from 'react'
import './Comunity.css';

/*importando bootstrap */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
/*importando bootstrap */


/*importando imagenes */
import exerciseImg from '../imagenes/comunidad1.svg' 
/*importando imagenes */


export const Comunity = () => {
    return (
        <div className="feacture">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
          <img src={exerciseImg} className="img"  alt="..."  />          </div>
          <div className="col-md-6">
            <h2>Unete a esta gran comunidad y a la nueva forma de aprender</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum a vitae voluptas aliquid, explicabo mollitia molestiae facilis fuga aperiam suscipit</p>
            <a href="">SABER MAS</a>
          </div>
        </div>
      </div>
        </div>
    )
}
