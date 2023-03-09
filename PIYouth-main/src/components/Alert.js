import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './Alert.css'

export const Alert = () => {
  const navigate = useNavigate()
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)

    const test = await axios.post('http://localhost:5000/alert', data)
    navigate('/private/alerts')
  }

  return (
    <div className='alert-form'>
      <form onSubmit={handleSubmit(onSubmit)} className='sign-up-form'>
        <div className='mb-3'>
          <label className='form-label' htmlFor='SignInEmail'>
            Nom de l'hopital
          </label>
          <input
            className='form-control'
            {...register('hopital', {
              required: true,
            })}
            aria-invalid={errors.hopital ? 'true' : 'false'}
          />
          {errors.email && <> {errors.email.message} </>}
        </div>

        <div className='mb-3'>
          <label className='form-label' htmlFor='alert'>
            Alerte
          </label>
          <textarea
            rows='4'
            cols='50'
            type='text'
            className='form-control'
            {...register('alert', {
              required: false,
            })}
          />
        </div>

        <button className='btn btn-primary'> Envoi alerte </button>
      </form>
    </div>
  )
}
