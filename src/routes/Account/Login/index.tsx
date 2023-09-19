import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'

export type UserProps = {
  email: string
  password: string
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>()

  const onSubmit: SubmitHandler<UserProps> = async (data) => {
    console.log(data)
  }

  return (
    <VStack>
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
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
            {...register('email', { required: true })}
          />
          {errors.email && (
            <Flex w="full" mt="-0.3rem" justifyContent="flex-start">
              <Text fontSize="0.75rem" color="red.700">
                Este campo é obrigatório
              </Text>
            </Flex>
          )}

          <Input
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            placeholder="Senha"
            _placeholder={{ color: 'blue.900' }}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <Flex w="full" mt="-0.3rem" justifyContent="flex-start">
              <Text fontSize="0.75rem" color="red.700">
                Este campo é obrigatório
              </Text>
            </Flex>
          )}

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

          <Button
            w="21.5rem"
            h="3rem"
            borderRadius="0.625rem"
            color="blue.900"
            fontSize="md"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.41px"
            type="submit"
          >
            Entrar
          </Button>

          <Text
            m="1.5rem 0 7.75rem 0"
            textAlign="center"
            color="white.400"
            fontSize="md"
            fontWeight={400}
            lineHeight="1.375rem"
            letterSpacing="-0.41px"
          >
            Ainda não tem uma conta?{' '}
            <Link to="/account/signin">Cadastre-se</Link>
          </Text>
        </VStack>
      </FormControl>
    </VStack>
  )
}
