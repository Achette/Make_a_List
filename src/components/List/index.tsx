import React from 'react'
import { useMedia } from 'hooks'
import { IconType } from 'react-icons/lib'
import {
  Avatar,
  AvatarGroup,
  Flex,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react'

export type ListProps = {
  id?: number
  icon: IconType
  bgColor: string
  listName: string
  shared?: Array<string>
}

export const List = ({ icon, bgColor, listName, shared }: ListProps) => {
  const { isMobile } = useMedia()
  
  return (
    <HStack
      w="full"
      h="4.25rem"
      bg="gray.100"
      borderRadius="62.5rem"
      p={isMobile ? '1rem' : '2rem'}
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Flex
          h="2.5rem"
          w="2.5rem"
          bg={bgColor}
          p=".75rem"
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={icon} h="1.5rem" w="1.5rem" color="whiteAlpha.900" />
        </Flex>
        <Text
          fontSize="1.0625rem"
          fontWeight={500}
          lineHeight="1.375rem"
          letterSpacing="-0.02563rem"
          color="blue.900"
          ml="0.75rem"
        >
          {listName}
        </Text>
      </Flex>

      {shared && (
        <Flex>
          {shared.map((item, index) => (
            <AvatarGroup key={index} ml="-0.35rem">
              <Avatar
                w="2.25rem"
                h="2.25rem"
                name={item}
                color="whiteAlpha.900"
                border="none"
              />
            </AvatarGroup>
          ))}
        </Flex>
      )}
    </HStack>
  )
}
