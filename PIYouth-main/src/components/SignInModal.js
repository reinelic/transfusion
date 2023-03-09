import React, { useContext, useRef, useState, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { validateArgCount } from '@firebase/util'
import { Google } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

import { auth } from '../firebase-config'

const SignInModal = () => {
  const { modalState, toggleModals, signIn, signInWithGoogle } =
    useContext(UserContext)
  const [validation, setValidation] = useState('')

  const navigate = useNavigate()

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const signInWithG = async () => {
    const result = await signInWithGoogle()
    console.log('result', result)
    navigate('/private/private-home')
    toggleModals('Close')
  }
  const onSubmit = async (data) => {
    try {
      console.log(data.email, data.password)
      const cred = await signIn(data.email, data.password)
      console.log(cred)
      setValidation('')
      navigate('/private/private-home')

      toggleModals('Close')
    } catch (error) {
      console.log(error.code)
      setValidation('Email or password incorrect!')
    }
  }

  return (
    <>
      {modalState.signInModal && (
        <div className='position-fixed top-0 vw-100 vh-100 signinmodal'>
          <div className='w-100 h-100 bg-danger p-20 d-flex justify-content-around align-items-center border-info'>
            <div className='form-info w-50 h-100 align-middle fs-2 p-4 fw-bold text-accent'>
              Bienvenue sur le plateforme de gestion du stock de sang
            </div>

            {/* <div className="position-absolute top-50 start-50 translate-middle "> */}
            <div className='form w-50 h-100 p-5 text-light'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title'> Login</h5>
                    <button
                      className='btn-close '
                      onClick={() => {
                        toggleModals('Close')
                        setValidation('')
                      }}
                    ></button>
                  </div>

                  <div className='modal-body'>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className='sign-up-form'
                    >
                      <div className='mb-3'>
                        <label className='form-label' htmlFor='SignInEmail'>
                          Email Address
                        </label>
                        <input
                          className='form-control'
                          {...register('email', {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email',
                            },
                          })}
                          aria-invalid={errors.email ? 'true' : 'false'}
                        />
                        {errors.email && <> {errors.email.message} </>}
                      </div>

                      <div className='mb-3'>
                        <label className='form-label' htmlFor='SignInPwd'>
                          Password
                        </label>
                        <input
                          type='password'
                          className='form-control'
                          {...register('password', {
                            required: true,
                          })}
                        />

                        {errors.password && <p> Please enter a password</p>}
                      </div>

                      <button className='btn btn-primary'>Sign In </button>
                    </form>
                    <div>
                      <p>{validation}</p>{' '}
                      <p>
                        {' '}
                        New user ?{' '}
                        <span
                          onClick={() => {
                            toggleModals('SignUp')
                          }}
                          className='text-accent '
                        >
                          {' '}
                          Click here{' '}
                        </span>
                        {' or '}
                      </p>{' '}
                      <button
                        className='btn btn-secondary mt-2'
                        onClick={() => {
                          signInWithG()
                        }}
                      >
                        {' '}
                        Sign In with Google <Google size={24} ml={4} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SignInModal
