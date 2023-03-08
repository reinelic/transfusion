import { createContext, useState, useEffect } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth'

import { auth } from '../firebase-config'

export const UserContext = createContext()

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState()
  const [loadingData, setLoadingData] = useState(true)

  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd)

  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      console.log(auth)
      const result = await signInWithPopup(auth, provider)
      return result
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })
  }, [])

  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  })

  const toggleModals = (modal) => {
    if (modal === 'SignIn') {
      setModalState({
        signUpModal: false,
        signInModal: true,
      })
    }

    if (modal === 'SignUp') {
      setModalState({
        signUpModal: true,
        signInModal: false,
      })
    }

    if (modal === 'Close') {
      setModalState({
        signUpModal: false,
        signInModal: false,
      })
    }
  }

  return (
    <UserContext.Provider
      value={{
        modalState,
        toggleModals,
        signUp,
        currentUser,
        signIn,
        signInWithGoogle,
      }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}
