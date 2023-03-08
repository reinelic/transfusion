import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const SignUpModal = () => {
  const { modalState, toggleModals, signUp } = useContext(UserContext)
  const [validation, setValidation] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const navigate = useNavigate()

  const handleForm = async (e) => {
    e.preventDefault()
    setValidation(' ')

    if (password.length < 6 || password2.length < 6) {
      console.log('Password not long enough')

      setValidation('6 characteres minimum')
      return
    } else if (password !== password2) {
      setValidation('Password do not match')
      return
    }

    try {
      const cred = await signUp(email, password)
      console.log(cred)

      setValidation('')

      navigate('/private/private-home')
      toggleModals('Close')
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setValidation('Email format invalid')
      }
      if (error.code === 'auth/email-already-in-use') {
        setValidation('Email already used')
      }
    }
  }

  return (
    <>
      {modalState.signUpModal && (
        <div className='position-fixed top-0 vw-100 vh-100 signinmodal'>
          <div className='w-100 h-100 bg-danger  bg-danger p-20 d-flex justify-content-around align-items-center border-info '>
            <div className='form-info w-50 h-100 align-middle fs-2 p-4'>
              Inscrivez-vous pour acceder <br></br>A toutes les informations
              liees a la contraception
            </div>

            <div className='form w-50 h-100 p-5 text-light'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title'> Sign Up</h5>
                    <button
                      className='btn-close'
                      onClick={() => {
                        toggleModals('Close')
                        setValidation('')
                      }}
                    ></button>
                  </div>

                  <div className='modal-body'>
                    <form onSubmit={handleForm} className='sign-up-form'>
                      <div className='mb-3'>
                        <label className='form-label' htmlFor='SignUpEmail'>
                          Email Address
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type='email'
                          name='email'
                          className='form-control'
                          id='SignUpEmail'
                          required
                        />
                      </div>

                      <div className='mb-3'>
                        <label className='form-label' htmlFor='SignUpPwd'>
                          Password
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type='password'
                          name='pwd'
                          className='form-control'
                          id='SignUpPassword'
                          required
                        />
                      </div>

                      <div className='mb-3'>
                        <label className='form-label' htmlFor='RepeatPwd'>
                          Repeat Password
                        </label>
                        <input
                          value={password2}
                          onChange={(e) => setPassword2(e.target.value)}
                          type='password'
                          name='pwd'
                          className='form-control'
                          id='SignUpPassword'
                          required
                        />
                      </div>

                      <h4 className='text-danger '>{validation}</h4>

                      <button className='btn btn-primary'>Submit</button>
                    </form>
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

export default SignUpModal
