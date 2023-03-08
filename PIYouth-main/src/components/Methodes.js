import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Methodes = () => {
  const [methodes, setMethodes] = useState([])

  const getMethodes = async () => {
    // const methodesList  = await axios.get('http://localhost:3004/methodes');
    const methodesList = await axios.get(
      'https://api.npoint.io/21d771eb6ff6e4e0fbe3'
    )
    console.log('this is the api')
    console.log(methodesList)
    setMethodes(methodesList.data.methodes)
  }

  useEffect(() => {
    getMethodes()
  }, [])

  const firstRow = methodes.filter((method) => {
    return method.id < 4
  })
  const secondRow = methodes.filter((method) => method.id > 3)

  const firstMethodes = firstRow.map((method) => (
    <>
      <Link to={`/${method.id}`}>
        <div key={method.id} className='moyen text-center '>
          <img src={method.methodeUrl} className='icone methodIcon ' alt='' />
          <div>{method.methodeName}</div>
        </div>
      </Link>
    </>
  ))

  const secondMethodes = secondRow.map((method) => (
    <>
      <Link to={`/${method.id}`}>
        {' '}
        <div key={method.id} className='moyen text-center pt-'>
          <img src={method.methodeUrl} className='icone methodIcon' alt='' />
          <div className=''>{method.methodeName}</div>
        </div>
      </Link>
    </>
  ))

  console.log(firstRow)

  return (
    <>
      <div className='text-dark text-muted bg-body-primary col-md-5 p-4'>
        <div className='first d-flex '>{firstMethodes}</div>

        <div className='second d-flex  '>{secondMethodes}</div>
      </div>
    </>
  )
}

export default Methodes
