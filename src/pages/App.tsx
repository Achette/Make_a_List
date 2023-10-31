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
  NewList,
  NewPassword,
  Groups,
  GroupDetail,
  Deleted,
  NewGroup,
  AboutMe,
  Settings,
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
            <Route path="new-password" element={<NewPassword />} />
          </Route>
          <Route path="/lists" element={<Dashboard />}>
            <Route index element={<Lists />} />
            <Route path="/lists/:id" element={<ListDetail />} />
            <Route path="/lists/new-list" element={<NewList />} />
          </Route>
          <Route path="/groups" element={<Dashboard />}>
            <Route index element={<Groups />} />
            <Route path="/groups/:id" element={<GroupDetail />} />
            <Route path="/groups/new-group" element={<NewGroup />} />
          </Route>
          <Route path="/deleted" element={<Dashboard />}>
            <Route index element={<Deleted />} />
          </Route>
          <Route path="/about-me" element={<Dashboard />}>
            <Route index element={<AboutMe />} />
          </Route>
          <Route path="/settings" element={<Dashboard />}>
            <Route index element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SidebarContext.Provider>
  )
}

export default App
