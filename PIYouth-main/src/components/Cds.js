import React from 'react';
import cds  from '../img/cds.jpeg';
import { Link } from 'react-router-dom';

const Cds = ({data}) => {



  console.log('Mounting ...');
  return (

    <div>


      <div className="card  shadow-none bg-primary text-light " >
          <img className="card-img-top"  alt="Card image cap"   src={`${data.image}`}/>
          <div className="card-body">
            <h5 className="card-title">{data.methode}</h5>
            <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Methode de contraception {data.id} <span >  <Link to={`cds/${data.id}`} >Voir plus </Link></span></li>
         
          </ul>
          <div className="card-body">
           
            
          </div>
</div>


    </div>
  )
}

export default Cds