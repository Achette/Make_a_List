import React from 'react'
import { useMedia } from 'hooks'
import { Link } from 'react-router-dom'
import { IconType } from 'react-icons/lib'
import {
  Avatar,
  AvatarGroup,
  Flex,
  HStack,
  Icon,
  Text,
  Link as LinkChakra,
} from '@chakra-ui/react'

type ListProps = {
  id: number
  icon?: IconType
  bgColor: string
  listName: string
  shared?: Array<string>
}

export const List = ({ id, icon, bgColor, listName, shared }: ListProps) => {
  const { isMobileOrTablet } = useMedia()

  return (
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
          <LinkChakra
            as={Link}
            to={`/lists/${id}`}
            _hover={{ color: 'blue.400', stroke: 'blue.400' }}
          >
            {listName}
          </LinkChakra>
        </Text>
      </Flex>

      {shared && (
        <Flex>
          {shared.map((item, index) => (
            <AvatarGroup key={index} ml="-0.4rem">
              <Avatar
                w={isMobileOrTablet ? '2rem' : '2.25rem'}
                h={isMobileOrTablet ? '2rem' : '2.25rem'}
                name={item}
                color="whiteAlpha.900"
                border="none"
                title={item}
              />
            </AvatarGroup>
          ))}
        </Flex>
      )}
    </HStack>
  )
}
