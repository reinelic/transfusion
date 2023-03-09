import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { MethodeDetails } from './components/MethodeDetails'
import Navbar from './components/Navbar'
import Private from './pages/Private/Private'
import PrivateHome from './pages/Private/PrivateHome/PrivateHome'
import SignUpModal from './components/SignUpModal'
import SignInModal from './components/SignInModal'
import CdsList from './components/CdsList'
import CdsDetails from './components/CdsDetails'
import { Rendezvs } from './components/Rendezvs'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/userContext'
import './App.css'
import { AddCds } from './components/AddCds'
import { Alert } from './components/Alert'
import { Allalerts } from './components/Allalerts'

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <SignUpModal />
        <SignInModal />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/cds/:id' element={<CdsDetails />}></Route>

          <Route path='/rendez' element={<Rendezvs />}></Route>

          <Route path='/cdsList' element={<CdsList />}></Route>

          <Route path='/:id' element={<MethodeDetails />}></Route>

          <Route path='/private' element={<Private />}>
            <Route path='/private/private-home' element={<PrivateHome />} />
            <Route path='cdsList' element={<CdsList />}></Route>
            <Route path='alerts' element={<Allalerts />}></Route>
            <Route path='Alert' element={<Alert />}></Route>
          </Route>
        </Routes>

        {/* <footer className="position-relative text-center bottom-0  p-2 text-info bg-danger mt-2"> Pathfinder Burundi
    
    </footer> */}
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
