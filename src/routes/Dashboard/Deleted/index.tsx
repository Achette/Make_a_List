import React from 'react'
import { ListsProps } from '../Lists'
import { SearchBar } from 'components'
import { getUser, useMedia } from 'hooks'
import { DeletedList } from 'components/DeletedList'
import { Box, Flex, Text, useToast } from '@chakra-ui/react'
import {
  deleteList,
  getAllDeleted,
  moveToRecycleBin,
} from 'services/list-services'

export const Deleted = () => {
  const { isMobileOrTablet } = useMedia()

  const user = getUser()
  const [lists, setLists] = React.useState<ListsProps[]>()

  const toast = useToast()

  function isDeleteDateExpired(deleteDate: string): boolean {
    const deleteDateObj = new Date(deleteDate)
    const currentDate = new Date()
    const differenceInMilliseconds =
      currentDate.getTime() - deleteDateObj.getTime()
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24)

    return differenceInDays > 7
  }

  const fetchDeletedList = React.useCallback(async () => {
    try {
      const response = await getAllDeleted()
      const list = response.data.list

      const newList = list?.filter(
        (item: { delete_at: string; id: string }) => {
          if (isDeleteDateExpired(item.delete_at)) {
            deleteList(item.id)
            return false
          }
          return true
        }
      )

      setLists(newList ?? [])
    } catch (e) {
      console.error(e)
    }
  }, [])

  React.useEffect(() => {
    fetchDeletedList()
  }, [])

  const restoreListById = async (id: string) => {
    try {
      await moveToRecycleBin(id, false)
      await fetchDeletedList()

      toast({
        description: `Lista restaurada com sucesso!`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    } catch (e: any) {
      const errorMessage =
        e.response?.data?.error ?? 'Ocorreu um erro desconhecido'
      toast({
        description: errorMessage,
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }

  return (
    <Box w="full" h="full">
      <SearchBar user={user ?? ''} />

      <Flex
        mt="1rem"
        maxH="calc(100% - 13vh)"
        h="100%"
        alignItems="center"
        justifyContent={lists?.length ? '' : 'center'}
        flexDir="column"
        gap="0.75rem"
        py="1.87rem"
        px={isMobileOrTablet ? '0' : '4rem'}
        overflow="auto"
      >
        <Text
          fontSize={isMobileOrTablet ? '0.75rem' : '1rem'}
          fontWeight={600}
          color="blue.900"
        >
          As listas adicionadas a lixeira serão permanentemente excluidas após 7
          dias
        </Text>

        {lists &&
          lists.map((item) => (
            <DeletedList
              key={item.id}
              bgColor={item.color}
              id={item.id}
              name={item.name}
              icon={item.icon}
              restore={restoreListById}
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
      </Flex>
    </Box>
  )
}
