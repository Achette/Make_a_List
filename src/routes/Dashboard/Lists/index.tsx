import React from 'react'
import { useMedia } from 'hooks'
import { stringToIcon } from 'utils'
import { IconType } from 'react-icons/lib'
import { getAll } from 'services/list-services'
import { Box, Flex, Text } from '@chakra-ui/react'
import { SearchBar, List, AddButton } from 'components'

export type ListsProps = {
  id: string
  color: string
  icon: IconType | string
  created_at: string
  created_by: { id: string; name: string; email: string }
  name: string
  shared: { id: string; name: string; email: string }[]
  total: number
  updated_at: string
}

export const Lists = () => {
  const { isMobileOrTablet } = useMedia()

  const [lists, setLists] = React.useState<ListsProps[]>()

  React.useEffect(() => {
    //setLists(listMock)
    getAll().then((res) => {
      setLists(res.data.list)
    })
  }, [])

  return (
    <Box w="full" h="full">
      <SearchBar />
      <Flex
        h="calc(100% - 3.5rem)"
        alignItems="center"
        justifyContent={lists?.length ? '' : 'center'}
        flexDir="column"
        gap="0.75rem"
        py="1.87rem"
        px={isMobileOrTablet ? '0' : '4rem'}
      >
        {lists &&
          lists.map((item) => (
            <List
              key={item.id}
              bgColor={item.color}
              icon={stringToIcon(item.icon) ?? undefined}
              name={item.name}
              shared={item.shared}
              id={item.id}
            />
          ))}

        {!lists?.length && (
          <Text
            fontSize={isMobileOrTablet ? '0.75rem' : '1rem'}
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
