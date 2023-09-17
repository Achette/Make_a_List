import React from 'react'
import { SidebarContext } from 'contexts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Home,
  AccessAccount,
  Login,
  SignIn,
  Dashboard,
  Lists,
  ListDetail,
  NewList
} from 'routes'

function App() {
  const [collapse, setCollapse] = React.useState<boolean>(false)

  return (
    <SidebarContext.Provider value={{ collapse, setCollapse }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<AccessAccount />}>
            <Route index element={<Login />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
          <Route path="/lists" element={<Dashboard />}>
            <Route index element={<Lists />} />
            <Route path="/lists/:id" element={<ListDetail />} />
          </Route>
          <Route path="/new-list" element={<NewList />} />
        </Routes>
      </BrowserRouter>
    </SidebarContext.Provider>
  )
}

export default App
