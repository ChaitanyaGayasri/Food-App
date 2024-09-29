// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceHolder from './pages/PlaceHolder/PlaceHolder'
import './index.css'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'

const App = () => {
  const [LoginUp,setLoginUp] = useState(false)
  return (
    <>
      {LoginUp ? <LoginPopUp setLoginUp={ setLoginUp} />: <></>}
    <div className="app">
        <Navbar setLoginUp={setLoginUp} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/placeholder' element={<PlaceHolder/>} />
      </Routes>
    </div>
      <Footer />
      </>
  )
}

export default App