import React from 'react'
import { Logo, MySlider } from '../../components'
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import { useMedia } from '../../hooks/useMedia'

export const Home = () => {

  const { isDesktop } = useMedia()

  return (
    <Box
      bg="linear-gradient(#27488FB2, #27488F)"
      h="100vh"
      w="100%"
      overflowX="hidden"
    >
      <VStack p="8rem 0" mb={isDesktop ? '8rem' : '2.5rem'}>
        <Logo />

        <Text
          color="gray.100"
          fontSize="md"
          fontWeight={500}
          lineHeight="1.25rem"
          letterSpacing="-0.24px"
          mb="1.5rem"
        >
          O jeito fácil de compartilhar listas
        </Text>

        <HStack>
          <Button
            w={40}
            borderRadius="0.625rem"
            color="blue.900"
            fontSize="md"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.41px"
          >
            Criar Conta
          </Button>
          <Button
            w={40}
            borderRadius="0.625rem"
            color="blue.900"
            fontSize="md"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.41px"
          >
            Entrar
          </Button>
        </HStack>
      </VStack>
      <MySlider />
    </Box>
  )
}