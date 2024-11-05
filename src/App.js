import React from 'react'
import AllData from './pages/AllData'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Details from './pages/Details'
import Edit from './pages/Edit'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllData/>}/>
          <Route path='/view/product/:id' element={<Details/>}/>
          <Route path='/edit/product/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App