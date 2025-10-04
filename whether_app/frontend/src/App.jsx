import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/HomePage.jsx'
import Info from './pages/Info.jsx'


const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        < Route path='/Info' element={<Info />}/>
      </Routes>
    </div>
  )
}

export default App;