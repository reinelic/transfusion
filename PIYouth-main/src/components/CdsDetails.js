import React, { useEffect, useState } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { Link, useParams } from 'react-router-dom'
import './cds.css'
import axios from 'axios'

const CdsDetails = () => {
  const { id } = useParams()

  const [method, setMethod] = useState('')

  useEffect(() => {
    getCDSDetails()
  }, [])

  const getCDSDetails = async () => {
    const data = await axios.get(`http://localhost:3000/cds?id=${id}`)

    setMethod(data.data[0])

    console.log(data.data)
  }

  console.log(method)

  return (
    <div className='container text-light  mt-2'>
      <div>
        {' '}
        <a href='/' className='text-light'>
          Retour
        </a>
      </div>

      <div className='row mb-3'>
        <h4> La methode de contraception - {method.methode} </h4>

        <div className='col-md-4  text-light mt-2'>
          <img src={`${method.image}`} className='img-fluid img' alt='' />
        </div>

        <div className='col-md-8  text-light mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nisi
          vel itaque eligendi tempore, nostrum cum temporibus laboriosam ab
          laudantium exercitationem omnis sequi officia fuga nesciunt optio eos
          quibusdam, autem obcaecati quisquam doloribus minima? Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Illum libero modi enim
          et aut ex perspiciatis soluta sequi iste! Obcaecati fugiat tenetur
          magnam adipisci pariatur, voluptatibus, eligendi magni debitis, et
          autem nesciunt temporibus quae repudiandae quia veniam maxime? Sint
          numquam architecto illo natus enim.Explicabo excepturi iste pariatur
          quo aut.
        </div>
      </div>

      {/* <div className='row bg-white text-dark mt-2  p-3'>
        <h2> Statistiques d'utilisations </h2>
        <div className='col'>Tranches d'ages etc...</div>
      </div> */}

      <div className='row bg-white text-dark   p-3'>
        <h2> Mode d'emploi </h2>
        <div className='col'>Video</div>
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
       


      </div> */}
    </div>
  )
}

export default CdsDetails
