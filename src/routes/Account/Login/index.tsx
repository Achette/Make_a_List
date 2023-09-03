import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Flex, Heading, Input, Text, VStack } from '@chakra-ui/react'

export const Login = () => {
  return (
    <VStack>
      <Heading
        as="h2"
        color="white.400"
        w="14rem"
        textAlign="center"
        fontSize="2.125rem"
        fontWeight={700}
        lineHeight="2.5rem"
        letterSpacing="0.4px"
      >
        Entre na sua conta
      </Heading>

      <Input
        w="21.5rem"
        h="3rem"
        bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
        border="none"
        placeholder="E-mail"
        _placeholder={{ color: 'blue.900' }}
      />

      <Input
        w="21.5rem"
        h="3rem"
        bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
        border="none"
        placeholder="Senha"
        _placeholder={{ color: 'blue.900' }}
      />

      <Flex w="21.5rem" justifyContent={'flex-end'}>
        <Text
          m="0.75rem 0 1rem 0"
          textAlign="end"
          color="white.400"
          fontSize="0.875rem"
          fontWeight={400}
          lineHeight="1.375rem"
          letterSpacing="-0.41px"
        >
          <Link to="#">Esqueceu sua senha?</Link>
        </Text>
      </Flex>

      <Link to="#">
        <Button
          w="21.5rem"
          h="3rem"
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

      <Text
        m="1.5rem 0 7.75rem 0"
        textAlign="center"
        color="white.400"
        fontSize="md"
        fontWeight={400}
        lineHeight="1.375rem"
        letterSpacing="-0.41px"
      >
        Ainda não tem uma conta? <Link to="#">Cadastre-se</Link>
      </Text>
    </VStack>
  )
}
