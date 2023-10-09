import React from 'react'
import { getUser, useMedia } from 'hooks'
import { Box, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import { AddButton, GridGroup, SearchBar } from 'components'
import { IconType } from 'react-icons/lib'
import { getAll } from 'services/group-services'
import { stringToIcon } from 'utils'

export type GroupsProps = {
    id: string
    name: string
    color: string
    icon: IconType | string
    created_by: { id: string; name: string; email: string }
    user_list: { id: string; name: string; email: string }[]
    purchase_list: { id: string; name: string; color: string; total: number; created_at: string; updated_at: string }[]
    created_at: string
    updated_at: string
}

export const Groups = () => {
    const { isMobileOrTablet } = useMedia()

    const [groups, setGroups] = React.useState<GroupsProps[]>()
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

            <SimpleGrid p={isMobileOrTablet ? '1rem' : '2rem'} columns={isMobileOrTablet ? 2 : 5} spacing={4}>
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
                    >
                        Sem Listas
                    </Text>
                )}
            </SimpleGrid>

            <AddButton />
        </Box>
    )
}