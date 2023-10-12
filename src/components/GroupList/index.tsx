import React from 'react'
import { useMedia } from 'hooks'
import { IconType } from 'react-icons/lib'
import { MdDeleteOutline } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { removeList } from 'services/group-services'
import {
  Avatar,
  Flex,
  HStack,
  Icon,
  Text,
  Link as LinkChakra,
  VStack,
  useToast,
} from '@chakra-ui/react'

export type GroupListProps = {
  idList: string
  icon?: IconType
  bgColor: string
  name: string
  shared?: { id: string; name: string; email: string }[]
  fetchList: () => Promise<void>
}

export const GroupList = ({ idList, icon, bgColor, name, shared, fetchList }: GroupListProps) => {
  const { isMobileOrTablet } = useMedia()
  const toast = useToast()
  const { id } = useParams()

  const unlinkGroupById = async () => {
    try {
      await removeList(id, idList)
      fetchList()
    } catch (e: unknown) {
      const errorMessage = (e as any).response?.data?.error ?? 'Ocorreu um erro desconhecido';
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
    <Flex w="full" alignItems="center" justifyContent="center">
      <LinkChakra
        w={isMobileOrTablet ? '83%' : 'full'}
        h={isMobileOrTablet ? '3rem' : '4.25rem'}
        paddingRight='0.5rem'
        as={Link}
        to={`/lists/${idList}`}
        _hover={{ color: 'blue.400', stroke: 'blue.400' }}
      >
        <HStack
          w="full"
          h={isMobileOrTablet ? '3rem' : '4.25rem'}
          bg="gray.100"
          borderRadius="62.5rem"
          p={isMobileOrTablet ? '1rem' : '2rem'}
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Flex
              h={isMobileOrTablet ? '1.8rem' : '2.5rem'}
              w={isMobileOrTablet ? '1.8rem' : '2.5rem'}
              bg={bgColor}
              p=".75rem"
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={icon}
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
              {name}
            </Text>
          </Flex>

          {shared && (
            <Flex align="start" position="relative" h="1.875rem" w="8.125rem">
              {shared.slice(0, 5).map((item, index) => (
                <Avatar
                  key={item.id}
                  w={isMobileOrTablet ? '2rem' : '2.25rem'}
                  h={isMobileOrTablet ? '2rem' : '2.25rem'}
                  name={item.name}
                  color="whiteAlpha.900"
                  border="none"
                  title={item.name}
                  position="absolute"
                  right={`${index * 1.375}rem`}
                  zIndex={0}
                />
              ))}
            </Flex>
          )}
        </HStack>
      </LinkChakra>

      <VStack cursor='pointer' onClick={() => unlinkGroupById()}>
        <Icon
          as={MdDeleteOutline}
          w={isMobileOrTablet ? '2.8rem' :'3rem'}
          h={isMobileOrTablet ? '2.8rem' :'3rem'}
          p="0.7rem"
          bg="red.200"
          color="red.600"
          borderRadius="full"
          title="Remover lista do grupo"
        />
      </VStack>
    </Flex>
  )
}
