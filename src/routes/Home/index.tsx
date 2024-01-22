import React from 'react'
import { useMedia } from 'hooks'
import { Link } from 'react-router-dom'
import { BenefitsSlider, Logo } from 'components'
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'

export const Home = () => {
  const { isDesktop, isMobile, isTablet } = useMedia()

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

        <Flex
          flexDir={isMobile ? 'column' : 'row'}
          maxW="20rem"
          w="full"
          gap="0.5rem"
        >
          <Link to="/account/signin">
            <Button
              w={isMobile ? 'full' : 40}
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
              w={isMobile ? 'full' : 40}
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
        </Flex>
        <Text
          color="gray.100"
          mt={isDesktop || isTablet ? '13.5rem' : '7.75rem'}
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
