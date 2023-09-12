import React, { SetStateAction } from 'react'

interface SidebarContextProps {
  collapse: boolean
  setCollapse: React.Dispatch<SetStateAction<boolean>>
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  collapse: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCollapse: () => {},
})
