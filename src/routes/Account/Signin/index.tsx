import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Heading, Input, Text, VStack } from '@chakra-ui/react'

export const SignIn = () => {
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
        Crie uma nova conta
      </Heading>

      <Input
        w="21.5rem"
        h="3rem"
        bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
        border="none"
        color="whiteAlpha.900"
        placeholder="Nome"
        _placeholder={{ color: 'blue.900' }}
      />

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
        mb="0.75rem"
      />

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
          Criar Conta
        </Button>       
      </Link>

      <Text
          m="2.5rem 0 7.75rem 0"
          textAlign="center"
          color="white.400"
          fontSize="md"
          fontWeight={400}
          lineHeight="1.375rem"
          letterSpacing="-0.41px"
        >
          Já possui uma conta? <Link to="#">Entrar</Link>
        </Text>
    </VStack>
  )
}
