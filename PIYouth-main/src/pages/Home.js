import React from 'react'
import { useState, useEffect, useContext } from 'react'
import './home.css'
import Cds from '../components/Cds'
import axios from 'axios'
import Methodes from '../components/Methodes'
import { Activites } from '../components/Activites'
import { Link } from 'react-router-dom'
import { Hospital } from 'react-bootstrap-icons'
import { UserContext } from '../context/userContext'

const Home = () => {
  const [cds, setCds] = useState([])

  const { toggleModals, currentUser } = useContext(UserContext)

  useEffect(() => {
    getCDS()
  }, [])

  const getCDS = async () => {
    const data = await axios.get('https://api.npoint.io/21d771eb6ff6e4e0fbe3')

    console.log('This are the cds')

    console.log(data.data.cds)

    setCds(data.data.cds)
  }

  return (
    <>
      <div className='container-fluid wrapper'>
        <div className=' row home  flex '>
          <div className=' col-md-7 home_info'>
            <h1 className='home_info--titl e fw-bold fs-primary-heading text-primary-200'>
              <span class='text-accent-heading '> Donner du sang</span> <br />
              C'est sauver une vie
            </h1>

            <div className='home_info--body text-primary-200 fs-section'>
              Plateforme de gestion de stock des dons de sang
            </div>

            <div className='home_info--action d-flex'>
              <div
                className=' action_a bg-button box-shadow'
                onClick={() => {
                  console.log('clicking here ...')
                  toggleModals('SignUp')
                }}
              >
                Accedez a la plateforme{' '}
              </div>

              <div className='action_b'>
                <Link to='/cdsList'>
                  <span className='mr-2'> CNTS</span> <Hospital size={48} />
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-5 home__img'></div>
        </div>
      </div>
    </>
  )
}
export default Home
