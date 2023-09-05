import React from 'react'
import { Home, AccessAccount, Login, SignIn, Dashboard } from '../routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AccessAccount />}>
          <Route index element={<Login />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
