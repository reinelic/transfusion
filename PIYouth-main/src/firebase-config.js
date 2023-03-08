// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_AUTH_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_AUTHDOMAIN,
  projectId: process.env.REACT_FIREBASE_AUTH_APIKEY,
  storageBucket: process.env.REACT_FIREBASE_AUTH_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_AUTH_MESSAGINGSENDERID,
  appId: process.env.REACT_FIREBASE_AUTH_APPID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
