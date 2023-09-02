import React from 'react'
import { Home, AccessAccount } from '../routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from '../routes/Account/Signin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<AccessAccount />}>
          <Route index element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
