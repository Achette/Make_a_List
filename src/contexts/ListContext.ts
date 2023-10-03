import React, { SetStateAction } from 'react'

interface ListNameContextProps {
  listName: string
  setListName: React.Dispatch<SetStateAction<string>>
}

export const ListNameContext = React.createContext<ListNameContextProps>({
  listName: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setListName: () => {},
})
