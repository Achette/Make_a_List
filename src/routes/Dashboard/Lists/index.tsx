import React from 'react'
import { useMedia } from 'hooks'
import { stringToIcon } from 'utils'
import { useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import { useDispatch } from 'react-redux'
import { IconType } from 'react-icons/lib'
import { getAll } from 'services/list-services'
import { Box, Flex, Text } from '@chakra-ui/react'
import { SearchBar, List, AddButton } from 'components'
import { fetchListas, getUserLists } from '../../../redux/reducers/lists'

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
  const dispatch = useDispatch<AppDispatch>()
  // const [lists, setLists] = React.useState<ListsProps[]>()

  const controller = new AbortController()

  const listas = useSelector(getUserLists)

  const fetchLists = React.useCallback(async () => {
    // getAll().then((res) => {
    //   setLists(res.data.list)
    // })
    dispatch(fetchListas())
  }, [])

  React.useEffect(() => {
    fetchLists()

    return () => controller.abort()
  }, [])

  return (
    <Box w="full" h="full">
      <SearchBar />
      <Flex
        mt="1rem"
        maxH="calc(100% - 13vh)"
        h="100%"
        alignItems="center"
        justifyContent={listas?.length ? '' : 'center'}
        flexDir="column"
        gap="0.75rem"
        py="1.87rem"
        px={isMobileOrTablet ? '0' : '4rem'}
        overflow="auto"
      >
        {listas &&
          listas.map((item) => (
            <List
              key={item.id}
              bgColor={item.color}
              icon={stringToIcon(item.icon) ?? undefined}
              name={item.name}
              shared={item.shared}
              id={item.id}
            />
          ))}

        {!listas?.length && (
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
