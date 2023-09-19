import React from 'react'
import { Link } from 'react-router-dom'
import { UserApi } from 'services/auth-services'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'

export type NewUserProps = {
  name: string
  email: string
  password: string
}

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserProps>()

  const onSubmit: SubmitHandler<NewUserProps> = async (data) => {
    UserApi.newUser(data)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e))
  }

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

      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack alignItems="flex-start">
          <Input
            type="text"
            id="name"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            color="whiteAlpha.900"
            placeholder="Nome"
            _placeholder={{ color: 'blue.900' }}
            {...register('name', { required: true })}
          />
          {errors.name && (
            <Text fontSize="0.75rem" color="red.700" mt="-0.3rem">
              Este campo é obrigatório
            </Text>
          )}

          <Input
            type="email"
            id="email"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border={'none'}
            placeholder="E-mail"
            _placeholder={{ color: 'blue.900' }}
            {...register('email', { required: true })}
          />
          {errors.email && (
            <Text fontSize="0.75rem" color="red.700" mt="-0.3rem">
              Este campo é obrigatório
            </Text>
          )}

          <Input
            type="password"
            id="password"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            placeholder="Senha"
            _placeholder={{ color: 'blue.900' }}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <Text fontSize="0.75rem" color="red.700" mt="-0.3rem">
              Este campo é obrigatório
            </Text>
          )}

          <Button
            w="21.5rem"
            h="3rem"
            mt="0.75rem"
            borderRadius="0.625rem"
            color="blue.900"
            fontSize="md"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.41px"
            type="submit"
          >
            Criar Conta
          </Button>
        </VStack>
      </FormControl>

      <Text
        m="2.5rem 0 7.75rem 0"
        textAlign="center"
        color="white.400"
        fontSize="md"
        fontWeight={400}
        lineHeight="1.375rem"
        letterSpacing="-0.41px"
      >
        Já possui uma conta? <Link to="/account">Entrar</Link>
      </Text>
    </VStack>
  )
}
