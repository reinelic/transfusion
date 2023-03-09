import React, { useState } from 'react'
import { ArrowUp, ArrowDownCircle, axios } from 'react-bootstrap-icons'

export const Cstock = ({ info, add }) => {
  const [message, setMessage] = useState([])

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
          <div>
            {' '}
            Nombre de poche groupe S A :{' '}
            <span className='text-danger font-weight-bold'>
              {' '}
              {info.stock['groupe A']['quantite']}{' '}
            </span>
            <button
              onClick={(e) => add(e, info.id, 'increase')}
              name='groupe A'
              className='mx-2'
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
          </div>
          <div className='mt-2'>
            {' '}
            Nombre de poche groupe S B :{' '}
            <span className='text-danger font-weight-bold'>
              {' '}
              {info.stock['groupe B']['quantite']}
            </span>
            <button
              onClick={(e) => add(e, info.id, 'increase')}
              name='groupe B'
              className='mx-2'
            >
              stocker <ArrowUp></ArrowUp>
            </button>
            <button
              onClick={(e) => add(e, info.id, 'decrease')}
              name='groupe B'
            >
              Destocker<ArrowDownCircle></ArrowDownCircle>
            </button>
            {/* {info.stock['groupe B']['quantite'] < 100 && (
              <p className='text text-info'>
                {' '}
                Stock en dessous de 100 poches tres bas !!
              </p>
            )} */}
          </div>
          <div className='mt-2'>
            {' '}
            Nombre de poche groupe S C :{' '}
            <span className='text-danger font-weight-bold'>
              {info.stock['groupe C']['quantite']}{' '}
            </span>
            <button
              onClick={(e) => add(e, info.id, 'increase')}
              name='groupe C'
              className='mx-2'
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
          </div>
        </div>
      </div>
    </>
  )
}
