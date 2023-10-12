import React from 'react'
import { stringToIcon } from 'utils'
import { ListsProps } from '../Lists'
import { getUser, useMedia } from 'hooks'
import { getAll } from 'services/group-services'
import { AddButton, GridGroup, SearchBar } from 'components'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'

export const Groups = () => {
  const { isMobileOrTablet } = useMedia()

  const [groups, setGroups] = React.useState<ListsProps[]>()
  const controller = new AbortController()

  const user = getUser()

  React.useEffect(() => {
    getAll().then((res) => {
      setGroups(res.data.group)
    })

    return () => controller.abort()
  }, [])

  return (
    <Box w="full" h="full">
      <SearchBar user={user ?? ''} />

      <Flex mt="1rem" maxH="calc(100% - 13vh)" h="auto" overflow="auto">
        <SimpleGrid
          p={isMobileOrTablet ? '1rem' : '2rem'}
          columns={isMobileOrTablet ? 2 : 5}
          spacing={4}
          w="full"
          h="full"
          overflow="auto"
        >
          {groups &&
            groups.map((item) => (
              <GridGroup
                key={item.id}
                bgColor={item.color}
                icon={stringToIcon(item.icon) ?? undefined}
                name={item.name}
                id={item.id}
              />
            ))}

          {!groups?.length && (
            <Text
              fontSize={isMobileOrTablet ? '0.75rem' : '1rem'}
              fontWeight={500}
              color="blue.50"
              position="absolute"
              top="50%"
              left="43vw"
            >
              Sem grupos
            </Text>
          )}
        </SimpleGrid>
      </Flex>

      <AddButton />
    </Box>
  )
}
