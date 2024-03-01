import React, { SetStateAction } from 'react'

interface LoadingContextProps {
    isLoading: boolean
    setIsLoading: React.Dispatch<SetStateAction<boolean>>
}

type LoadingProviderProps = {
  children: React.ReactNode
}

export const LoadingContext = React.createContext<LoadingContextProps>(
  {} as LoadingContextProps
)

export function LoadingProvider({ children }: LoadingProviderProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)


  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () =>
  React.useContext<LoadingContextProps>(LoadingContext)
