import React from 'react'

export const GroupS = () => {
  return (
    <>
      <h5>
        {' '}
        Nombre de poche groupe S A :{info.stock['groupe A']['quantite']}
        {info.stock['groupe A']['quantite'] < 100 && (
          <p className='text text-danger'>
            {' '}
            Stock en dessous de 100 poches tres bas !!
          </p>
        )}
        <button onClick={(e) => add(e, info.id, 'increase')} name='groupe A'>
          stocker <ArrowUp></ArrowUp>
        </button>
        <button onClick={(e) => add(e, info.id, 'decrease')} name='groupe A'>
          Destocker<ArrowDownCircle></ArrowDownCircle>
        </button>
      </h5>
    </>
  )
}
