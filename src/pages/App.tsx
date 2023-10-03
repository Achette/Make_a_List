import React from 'react'
import { SidebarContext, ListNameContext } from 'contexts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Home,
  AccessAccount,
  Login,
  SignIn,
  Dashboard,
  Lists,
  ListDetail,
  NewList,
  NewPassword,
} from 'routes'

function App() {
  const [collapse, setCollapse] = React.useState<boolean>(false)
  const [listName, setListName] = React.useState<string>('')

  return (
    <ListNameContext.Provider value={{ listName, setListName }}>
      <SidebarContext.Provider value={{ collapse, setCollapse }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<AccessAccount />}>
              <Route index element={<Login />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="new-password" element={<NewPassword />} />
            </Route>
            <Route path="/lists" element={<Dashboard />}>
              <Route index element={<Lists />} />
              <Route path="/lists/:id" element={<ListDetail />} />
              <Route path="/lists/new-list" element={<NewList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SidebarContext.Provider>
    </ListNameContext.Provider>
  )
}

export default App
