import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import { ConnectBar } from '../../components'


export const AccessAccount = () => {
  return (
    <Box bg="linear-gradient(#27488FB2, #27488F)" h="100vh" w="100%">
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        Está é a página de acesso...
        <Outlet />
        <ConnectBar />
      </Flex>
    </Box>
  )
}
