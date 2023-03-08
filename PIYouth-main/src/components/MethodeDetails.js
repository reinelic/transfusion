import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const MethodeDetails = () => {
  const params = useParams()
  console.log('params')
  console.log(params)

  const [method, setMethod] = useState({})

  const getMethod = async () => {
    let nMethod = await axios.get(
      `https://api.npoint.io/21d771eb6ff6e4e0fbe3/methodes/${params.id}`
    )
    console.log('Methode data')

    console.log(nMethod.data)
    setMethod(nMethod.data)
  }

  useEffect(() => {
    getMethod()
  }, [])

  return (
    <>
      <div className='container text-primary-200 bg-body-primary mt-2'>
        <div>
          {' '}
          <Link to='/' className=''>
            Retour
          </Link>
        </div>

        <div className='row bg-primary-300 text-primary-200 p-2 mb-3'>
          <h4> La methode de contraception - {method.methodeName} </h4>

          <div className='col-md-4 mt-2'>
            <img className='img-fluid img' src={method.methodeUrl} />
          </div>

          <div className='col-md-8  text-primary-200 mt-2 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nisi
            vel itaque eligendi tempore, nostrum cum temporibus laboriosam ab
            laudantium exercitationem omnis sequi officia fuga nesciunt optio
            eos quibusdam, autem obcaecati quisquam doloribus minima? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Illum libero
            modi enim et aut ex perspiciatis soluta sequi iste! Obcaecati fugiat
            tenetur magnam adipisci pariatur, voluptatibus, eligendi magni
            debitis, et autem nesciunt temporibus quae repudiandae quia veniam
            maxime? Sint numquam architecto illo natus enim.Explicabo excepturi
            iste pariatur quo aut.
          </div>
        </div>

        {/* <div className="row bg-white text-dark mt-2  p-3">
        <h2> Statistiques d'utilisations     </h2>
        <div className="col">

          Tranches d'ages etc...
        </div>


      </div> */}

        <div className='row  text-primary-200 mt-2  p-3'>
          <h2> Mode d'emploi </h2>
          <div className='col d-flex justify-content-center'>
            <iframe
              width='900'
              height='500'
              src={method.video}
              title='YouTube video player'
              frameborder='0'
            ></iframe>
            {/* <iframe width='420' height='315' src={method.video}></iframe> */}
          </div>
        </div>

        {/* <div className="row bg-white text-dark mt-6  p-3">
        <h2> Prendre Rendez-vous    </h2>
        <div className="col-md-6">
        <label htmlFor="cds"> Choisir Provinces</label>
          <select name="" id="">
            <option value="Bujumbura">Bujumbura</option>
            <option value="Bururi">Bururi</option>
            <option value="Kirundo">Kirundo</option>
            <option value="Muyinga">Muyinga</option>
            <option value="Gitega">Gitega</option>

          </select>


          
        </div>
        <div className="col-md-6">
         
         MaP
          
        </div>


      </div> */}
      </div>
    </>
  )
}
