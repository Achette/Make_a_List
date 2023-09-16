import React from 'react'
import { useMedia } from 'hooks'
import { IconType } from 'react-icons/lib'
import { Box, Flex, Text } from '@chakra-ui/react'
import { SearchBar, List, AddButton } from 'components'

import { listMock } from 'mock/listmock' // será removido quando conectado ao backend

export type ListsProps = {
  id: number
  productLists: {
    id: number
    icon: IconType
    name: string
    bgColor: string
    total: number
    concluded: boolean
    delete: boolean
    products: {
      category: string
      products: {
        id: number
        productName: string
        place: string
        price: number
        quantity: number
      }[]
    }[]
    shared: string[]
  }[]
}

export const Lists = () => {
  const { isMobile } = useMedia()

  const [lists, setLists] = React.useState<ListsProps>()

  React.useEffect(() => {
    setLists(listMock)
  }, [])

  return (
    <Box w="full" h="full">
      <SearchBar />
      <Flex
        h="calc(100% - 3.5rem)"
        alignItems="center"
        justifyContent={lists?.productLists.length ? '' : 'center'}
        flexDir="column"
        gap="0.75rem"
        py="1.87rem"
        px={isMobile ? '0' : '4rem'}
      >
        {lists &&
          lists.productLists.map((item, index) => (
            <List
              key={index}
              bgColor={item.bgColor}
              icon={item.icon}
              listName={item.name}
              shared={item.shared}
              id={item.id - 1}
            />
          ))}

        {!lists?.productLists.length && (
          <Text
            fontSize={isMobile ? '0.75rem' : '1rem'}
            fontWeight={500}
            color="blue.50"
          >
            Sem Listas
          </Text>
        )}
        <AddButton />
      </Flex>
    </Box>
  )
}
