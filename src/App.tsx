import React from 'react'
import { Home } from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
