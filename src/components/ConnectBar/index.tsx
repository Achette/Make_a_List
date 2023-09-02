import React from 'react'

import { Button, Divider, Flex, Icon, Image } from '@chakra-ui/react'
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'

export const ConnectBar = () => {
  return (
    <Flex
      w="21.5rem"
      borderRadius="0.625rem"
      bg="linear-gradient(0deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.18) 100%);"
      backdropFilter="blur(24.293127059936523px);"
      justifyContent="space-evenly"
    >
      <Button
        w="100%"
        bg="transparent"
        colorScheme='whiteAlpha'
        fontSize="1rem"
        fontWeight={400}
        lineHeight="1.375rem"
        letterSpacing="-0.41px"
        borderRadius=" 0.625rem 0 0 0.625rem"
      >
        <Icon as={FaGoogle} w="1.5rem" h="1.5rem" mr="0.25rem" />
        Google
      </Button>
      <Divider orientation="vertical" />
      <Button
        w="100%"
        bg="transparent"        
        colorScheme='whiteAlpha'
        fontSize="1rem"
        fontWeight={400}
        lineHeight="1.375rem"
        letterSpacing="-0.41px"
        borderRadius="0 0.625rem 0.625rem 0"
      >
        <Icon as={FaFacebookSquare} w="1.5rem" h="1.5rem" mr="0.25rem" />
        Facebook
      </Button>
    </Flex>
  )
}
