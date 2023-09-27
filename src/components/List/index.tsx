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
  IconButton,
  Tooltip,
  Link as LinkChakra,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

type ListProps = {
  id: number
  icon?: IconType
  bgColor: string
  listName: string
  shared?: Array<string>
}

export const List = ({ id, icon, bgColor, listName, shared }: ListProps) => {
  const { isMobile } = useMedia()

  return (
    <LinkChakra
      w="full"
      h={isMobile ? '3rem' : '4.25rem'}
      as={Link}
      to={`/lists/${id}`}
      _hover={{ color: 'blue.400', stroke: 'blue.400' }}
    >
      <HStack
        w="full"
        h={isMobile ? '3rem' : '4.25rem'}
        bg="gray.100"
        borderRadius="62.5rem"
        p={isMobile ? '1rem' : '2rem'}
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Flex
            h={isMobile ? '1.8rem' : '2.5rem'}
            w={isMobile ? '1.8rem' : '2.5rem'}
            bg={bgColor}
            p=".75rem"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={icon}
              h={isMobile ? '1.15rem' : '1.5rem'}
              w={isMobile ? '1.15rem' : '1.5rem'}
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
            {listName}

          </Text>
        </Flex>

        {shared && (
          <Flex align="start" style={{ position: "relative", height: '30px', width: '130px', }}>
            {shared.slice(0, 5).map((item, index) => (
              <Avatar
                key={index}
                w={isMobile ? '2rem' : '2.25rem'}
                h={isMobile ? '2rem' : '2.25rem'}
                name={item}
                color="whiteAlpha.900"
                border="none"
                title={item}
                style={{
                  position: "absolute",
                  right: `${index * 22}px`,
                  zIndex: index,
                }}
              />
            ))}
          </Flex>

        )}
      </HStack>
    </LinkChakra>

  )
}
