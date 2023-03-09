import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Cstock } from './Cstock'

import axios from 'axios'

const CdsList = () => {
  const [stock, setStock] = useState([])
  const [filtered, setFilter] = useState([])

  const [groupea, setGroupeA] = useState(10)
  const [groupeb, setGroupeB] = useState(200)
  const [groupec, setGroupeC] = useState(200)

  useEffect(() => {
    getCDS()

    console.log('this is running once')
  }, [])

  const stockMg = (e, index, opr) => {
    e.preventDefault()
    console.log(opr)

    let gname = e.target.name
    console.log(gname)
    let newArr = [...stock]
    const eltI = stock.findIndex((elt) => elt.id == index)

    console.log('index')
    console.log(eltI)

    if (opr == 'increase') {
      newArr[eltI] = {
        ...newArr[eltI],
        stock: {
          ...newArr[eltI].stock,
          [gname]: {
            quantite: Number(newArr[eltI].stock[gname].quantite) + 1,
          },
        },
      }
    } else if (opr == 'decrease') {
      newArr[eltI] = {
        ...newArr[eltI],
        stock: {
          ...newArr[eltI].stock,
          [gname]: {
            quantite: Number(newArr[eltI].stock[gname].quantite) - 1,
          },
        },
      }
    }

    console.log(newArr)

    setStock([...newArr])
  }

  const decrease = (e, index) => {
    e.preventDefault()
  }

  const getCDS = async () => {
    // const data = await axios.get(
    //   'https://api.npoint.io/21d771eb6ff6e4e0fbe3/cds'
    // )

    const data = await axios.get(
      'https://api.npoint.io/0d6d5d1458f063d3fed8/stock'
    )

    setStock(data.data)

    setFilter([...data.data])

    // console.log(stock)
  }

  const filter = (e) => {
    let selected = e.target.value
    console.log(selected)
    console.log(stock)

    const filteredData = stock.filter((elt) => {
      if (selected !== 'Partout') {
        return elt.province == selected
      } else {
        return elt
      }
    })
    setFilter(filteredData)
  }
  console.log('filtered')

  console.log(filtered)

  console.log('Stock')

  console.log(stock)
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

      <h1> Stock des dons de sang sur le territoire</h1>
      {filtered.length > 0 ? (
        stock.map((elt, index) => (
          <>
            <Cstock info={elt} add={stockMg}>
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
