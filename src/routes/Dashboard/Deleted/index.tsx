import React from 'react'
import { Box, Flex, HStack, Icon, Text, list, useToast } from '@chakra-ui/react'
import { List, SearchBar } from 'components'
import { getUser, useMedia } from 'hooks'
import { stringToIcon } from 'utils'
import { IconType } from 'react-icons/lib'
import { deleteList, getAllDeleted, updateDeleteList } from 'services/list-services'

export type DeleteListsProps = {
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

export const Deleted = () => {
    const { isMobileOrTablet } = useMedia()

    const user = getUser()
    const [lists, setLists] = React.useState<DeleteListsProps[]>()

    const toast = useToast()

    function isDeleteDateExpired(deleteDate: string): boolean {
        const deleteDateObj = new Date(deleteDate);
        const currentDate = new Date();
        const differenceInMilliseconds = currentDate.getTime() - deleteDateObj.getTime();
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

        return differenceInDays > 7;
    }

    const fetchDeletedList = React.useCallback(async () => {
        try {
            const response = await getAllDeleted()
            const list = response.data.list

            const newList = list.filter((item: { delete_at: string; id: string }) => {
                if (isDeleteDateExpired(item.delete_at)) {
                    deleteList(item.id);
                    return false; // Remove o item da lista
                }
                return true; // Mantém o item na lista
            });

            setLists(newList)
        } catch (e) {
            console.error(e)
        }
    }, [setLists])

    React.useEffect(() => {
        fetchDeletedList()
    }, [])

    const restoreListById = async (id: string) => {
        try {
            await updateDeleteList(id, false)
            await fetchDeletedList()
        } catch (e: unknown) {
            const errorMessage = (e as any).response?.data?.error || 'Ocorreu um erro desconhecido';
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
                    As listas adicionadas a lixeira serão permanentemente excluidas após 7 dias
                </Text>

                {lists &&
                    lists.map((item) => (
                        <HStack
                            key={item.id}
                            w="full"
                            h={isMobileOrTablet ? '3rem' : '4.25rem'}
                            bg="gray.100"
                            borderRadius="62.5rem"
                            p={isMobileOrTablet ? '1rem' : '2rem'}
                            justifyContent="space-between"
                            cursor="pointer"
                            onClick={() => restoreListById(item.id)}
                        >
                            <Flex alignItems="center">
                                <Flex
                                    h={isMobileOrTablet ? '1.8rem' : '2.5rem'}
                                    w={isMobileOrTablet ? '1.8rem' : '2.5rem'}
                                    bg={item.color}
                                    p=".75rem"
                                    borderRadius="full"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Icon
                                        as={stringToIcon(item.icon) ?? undefined}
                                        h={isMobileOrTablet ? '1.15rem' : '1.5rem'}
                                        w={isMobileOrTablet ? '1.15rem' : '1.5rem'}
                                        color="whiteAlpha.900"
                                    />
                                </Flex>
                                <Text
                                    fontSize="1.0625rem"
                                    fontWeight={500}
                                    lineHeight="1.375rem"
                                    letterSpacing="-0.02563rem"
                                    color="blue.900"
                                    ml="0.75rem"
                                >
                                    {item.name}
                                </Text>
                            </Flex>
                        </HStack>
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