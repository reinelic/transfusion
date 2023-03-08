import React, { useState } from 'react'
import { ArrowUp, ArrowDownCircle, axios } from 'react-bootstrap-icons'

export const Cstock = ({ info, add }) => {
  const [message, setMessage] = useState([])

  const isAlert = []

  const sendAlert = async () => {}

  return (
    <>
      <div className='card mb-3'>
        <div className='card-header bg-accent text-primary-200'>
          CDS de transfusion sanguine -
        </div>
        <div className='card-body text-primary-100'>
          <h5 className='card-title '>
            Nom du CTS:{info['Lieu de stockage']}{' '}
          </h5>
          <p className='card-text'></p>
          <h5>Province:{info.province} </h5>
          <h5>
            {' '}
            Nombre de poche groupe S A :{info.stock['groupe A']['quantite']}
            <button
              onClick={(e) => add(e, info.id, 'increase')}
              name='groupe A'
            >
              stocker <ArrowUp></ArrowUp>
            </button>
            <button
              onClick={(e) => add(e, info.id, 'decrease')}
              name='groupe A'
            >
              Destocker<ArrowDownCircle></ArrowDownCircle>
            </button>
            {info.stock['groupe A']['quantite'] < 100 && (
              <p className='text text-info'>
                {' '}
                Stock en dessous de 100 poches tres bas !!
              </p>
            )}
          </h5>
          <h5>
            {' '}
            Nombre de poche groupe S B :{info.stock['groupe B']['quantite']}
            <button
              onClick={(e) => add(e, info.id, 'increase')}
              name='groupe B'
            >
              stocker <ArrowUp></ArrowUp>
            </button>
            <button
              onClick={(e) => add(e, info.id, 'decrease')}
              name='groupe B'
            >
              Destocker<ArrowDownCircle></ArrowDownCircle>
            </button>
            {info.stock['groupe B']['quantite'] < 100 && (
              <p className='text text-info'>
                {' '}
                Stock en dessous de 100 poches tres bas !!
              </p>
            )}
          </h5>
          <h5>
            {' '}
            Nombre de poche groupe S C :{info.stock['groupe C']['quantite']}
            <button
              onClick={(e) => add(e, info.id, 'increase')}
              name='groupe C'
            >
              stocker <ArrowUp></ArrowUp>
            </button>
            <button
              onClick={(e) => add(e, info.id, 'decrease')}
              name='groupe C'
            >
              Destocker<ArrowDownCircle></ArrowDownCircle>
            </button>
            {info.stock['groupe C']['quantite'] < 100 && (
              <p className='text text-info'>
                {' '}
                Stock en dessous de 100 poches tres bas !!
              </p>
            )}
          </h5>
        </div>
      </div>
    </>
  )
}
