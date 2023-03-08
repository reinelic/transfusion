import React from 'react'

export const Cstock = ({ info, add, remove }) => {
  return (
    <>
      <div className='card mb-3'>
        <div className='card-header bg-accent text-primary-200'>
          CDS Amis des jeunes -
        </div>
        <div className='card-body text-primary-100'>
          <h5 className='card-title '>Nom du CDS: </h5>
          <p className='card-text'>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <h5>CDS Location: </h5>
          <h5> Contacter a :</h5>
          <h5> Heure d'ouverture :</h5>
        </div>
      </div>
    </>
  )
}
