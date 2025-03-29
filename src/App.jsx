import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import LearnReducer from './pages/LearnReducer'
import Reducer2 from './pages/Reducer2'
import MixReducer from './pages/MixReducer'
import Trial from './pages/Trial'
import Trial2 from './pages/Trial2'

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <div className='h-[65px]'>
       <Navbar />
       </div>
        <Routes>
          <Route path='/' element={<Trial />} />
          <Route path='/home' element={<Trial2 />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/reducer' element={<LearnReducer />} />
          <Route path='/reducer2' element={<Reducer2 />} />
          <Route path='/mixReducer' element={<MixReducer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
