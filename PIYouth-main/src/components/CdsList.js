import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Cstock } from './Cstock'

import axios from 'axios'

const CdsList = () => {
  const [filtered, setFilter] = useState([])

  const [stock, setStock] = useState()

  const [groupea, setGroupeA] = useState(10)
  const [groupeb, setGroupeB] = useState(200)
  const [groupec, setGroupeC] = useState(200)

  useEffect(() => {
    getCDS()

    console.log('this is running once')
  }, [])

  const increase = (e, index) => {
    e.preventDefault()

    console.log('test')
    let gname = e.target.name
    let newArr = [...stock]
    const eltI = stock.findIndex((elt) => elt.id === index)

    console.log('index')
    console.log(eltI)

    newArr[eltI] = {
      ...newArr[eltI],
      stock: {
        ...newArr[eltI].stock,
        [gname]: {
          quantite: Number(newArr[eltI].stock[gname].quantite) + 1,
        },
      },
    }
    console.log(newArr)

    setStock([...newArry])

    setFilter([...stock])
  }

  console.log(stock)
  const decrease = (e, index) => {
    e.preventDefault()

    console.log('test')
    let gname = e.target.name
    let newArr = [...stock]
    const eltI = stock.findIndex((elt) => elt.id == index)

    newArr[eltI] = {
      ...newArr[eltI],
      stock: {
        ...newArr[eltI].stock,
        [gname]: {
          quantite: Number(newArr[eltI].stock[gname].quantite) - 1,
        },
      },
    }
    console.log(newArr)

    setStock([...newArr])

    setFilter([...stock])
  }

  const getCDS = async () => {
    // const data = await axios.get(
    //   'https://api.npoint.io/21d771eb6ff6e4e0fbe3/cds'
    // )

    const data = await axios.get(
      'https://api.npoint.io/0d6d5d1458f063d3fed8/stock'
    )

    setStock(data.data)

    // console.log(stock)

    setFilter(data.data)
  }

  const filter = (e) => {
    let selected = e.target.value
    console.log(selected)
    const filteredData = stock.filter((elt) => {
      if (selected !== 'Partout') {
        return elt.Location == selected
      } else {
        return elt
      }
    })

    setFilter(filteredData)
  }

  return (
    <div className='container  mt-2 '>
      <div className='filtre'>
        <label htmlFor='' className='h5 text-primary-100 diplay-2'>
          {' '}
          <i className='bi bi-hospital-fill'></i> Selectionner une region pour
          acceder aux informations liees au stock :{' '}
        </label>
        <select name='location' id='' className='' onChange={(e) => filter(e)}>
          <option value='Partout'> Partout</option>
          <option value='Bujumbura'> Bujumbura</option>
          <option value='Muyinga'> Muyinga</option>
          <option value='Mwaro'> Mwaro</option>
          <option value='Muramvya'> Muramvya</option>e
        </select>
      </div>
      <hr className='text-info font-bold'></hr>

      <h1> Stock des dons de sang sur le territoire burundais</h1>
      {filtered.length > 0 ? (
        filtered.map((elt, index) => (
          <>
            <Cstock info={elt} add={increase} remove={decrease}>
              {' '}
            </Cstock>
          </>
        ))
      ) : (
        <h5 className='text-light'> </h5>
      )}
    </div>
  )
}

export default CdsList