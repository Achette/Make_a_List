import React from 'react'
import { useMedia } from 'hooks'
import {
    Flex,
    Icon,
    Link as LinkChakra,
    Text,
    VStack,
} from '@chakra-ui/react'
import { MdDeleteOutline } from 'react-icons/md'

export const DeleteGroupButton = () => {
    const { isMobileOrTablet } = useMedia()

    return (
        <Flex
            position="absolute"
            right={isMobileOrTablet ? 8 : 12}
            bottom={isMobileOrTablet ? 8 : 12}
            flexDir="column"
            overflow="hidden"
        >
            <LinkChakra
                title="Delete"
                order={3}
                _hover={{ textDecoration: 'none' }}
            >
                <VStack onClick={() => null}>
                    <Icon
                        as={MdDeleteOutline}
                        w="3rem"
                        h="3rem"
                        p="0.7rem"
                        bg="red.200"
                        color="red.600"
                        borderRadius="full"
                    />
                    <Text
                        color="red.600"
                        fontSize="0.75rem"
                        fontWeight={500}
                        mt="-0.35rem"
                    >
                        Deletar grupo
                    </Text>
                </VStack>
            </LinkChakra>
        </Flex>

    )
}