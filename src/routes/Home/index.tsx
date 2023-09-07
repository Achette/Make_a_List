import React from 'react'
import { useMedia } from '../../hooks'
import { Link } from 'react-router-dom'
import { Logo, BenefitsSlider } from '../../components'
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'

export const Home = () => {
  const { isDesktop } = useMedia()

  return (
    <Box
      bg="linear-gradient(#27488FB2, #27488F)"
      h="100vh"
      w="100%"
      overflowX="hidden"
    >
      <VStack p="7.5rem 0 0 0">
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
          <Link to="/account/signin">
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
          </Link>

          <Link to="/account">
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
          </Link>
        </HStack>
        <Text
          color="gray.100"
          mt={isDesktop ? '13.5rem' : '10.75rem'}
          mb="-1.75rem"
          fontSize="0.8125rem"
          fontWeight={500}
          lineHeight="1rem"
          letterSpacing="-0.081px"
        >
          Vantagens
        </Text>
      </VStack>
      <BenefitsSlider />
    </Box>
  )
}
