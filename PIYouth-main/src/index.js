import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/userContext'
import './assets/css/style.css'
import App from './App'

const container = document.getElementById('root')
console.log(container)
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App tab='home' />)

// ReactDOM.render(
//   <BrowserRouter>
//    <UserContextProvider>
//         <App />
//    </UserContextProvider>

//   </BrowserRouter>

//  ,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
