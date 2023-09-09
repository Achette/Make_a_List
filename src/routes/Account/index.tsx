import React from 'react'
import { ConnectBar } from 'components'
import { Outlet } from 'react-router-dom'
import { Box, Flex, Text } from '@chakra-ui/react'


export const AccessAccount = () => {
  return (
    <Box bg="linear-gradient(#27488FB2, #27488F)" h="100vh" w="100%">
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Outlet />

        <Text
          mb="1.25rem"
          textAlign="center"
          color="white.400"
          fontSize="md"
          fontWeight={400}
          lineHeight="1.25rem"
          letterSpacing="-0.24px"
        >
          ou entre com
        </Text>
        <ConnectBar />
      </Flex>
    </Box>
  )
}
