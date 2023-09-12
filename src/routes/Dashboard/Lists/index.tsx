import React from 'react'
import { useMedia } from 'hooks'
import { Link } from 'react-router-dom'
import { AddButton, SearchBar, List, ListProps } from 'components'
import { Box, Flex, Text, Link as LinkChakra } from '@chakra-ui/react'
import { listMock } from 'mock/listmock' // será removido quando conectado ao backend

export const Lists = () => {
  const { isMobile } = useMedia()

  const [lists, setLists] = React.useState<ListProps[]>([])

  React.useEffect(() => {
    setLists(listMock)
  }, [])

  return (
    <Box w="full" h="full">
      <SearchBar />
      <Flex
        h="calc(100% - 3.5rem)"
        alignItems="center"
        justifyContent={lists.length ? '' : 'center'}
        flexDir="column"
        gap="0.75rem"
        py="1.87rem"
        px={isMobile ? '0' : '4rem'}
      >
        {lists &&
          lists.map((item) => (
            <LinkChakra key={item.id} as={Link} w="full">
              <List
                bgColor={item.bgColor}
                icon={item.icon}
                listName={item.listName}
                shared={item.shared}
              />
            </LinkChakra>
          ))}
        {!lists.length && (
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
