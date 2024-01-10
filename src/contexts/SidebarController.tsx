import React, { SetStateAction } from 'react'

interface SidebarContextProps {
  collapse: boolean
  setCollapse: React.Dispatch<SetStateAction<boolean>>
}

type SidebarProviderProps = {
  children: React.ReactNode
}

export const SidebarContext = React.createContext<SidebarContextProps>(
  {} as SidebarContextProps
)

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [collapse, setCollapse] = React.useState<boolean>(false)

  return (
    <SidebarContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarCollapse = () => {
  const context = React.useContext<SidebarContextProps>(SidebarContext)
  return context
}
