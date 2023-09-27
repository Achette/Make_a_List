import React from 'react'
import { UserApi } from 'services/auth-services'
import { Link, useNavigate } from 'react-router-dom'
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
  confirm_password: string
}

export const SignIn = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserProps>()

  const onSubmit: SubmitHandler<NewUserProps> = async (data) => {
    try {
      const response = await UserApi.newUser(data)

      if (response.success) navigate('/account')
    } catch (e) {
      console.error(e)
    }
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
          <Text
            fontSize="0.75rem"
            color="white.400"
            mt="-0.3rem"
            visibility={errors.name ? 'visible' : 'hidden'}
          >
            Nome é obrigatório
          </Text>

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
          <Text
            fontSize="0.75rem"
            color="white.400"
            mt="-0.3rem"
            visibility={errors.email ? 'visible' : 'hidden'}
          >
            E-mail é obrigatório
          </Text>

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
          <Text
            fontSize="0.75rem"
            color="white.400"
            mt="-0.3rem"
            visibility={errors.password ? 'visible' : 'hidden'}
          >
            Senha é obrigatório
          </Text>

          <Input
            type="password"
            id="confirm_password"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            placeholder="Confirme sua senha"
            _placeholder={{ color: 'blue.900' }}
            {...register('confirm_password', { required: true })}
          />
          <Text
            fontSize="0.75rem"
            color="white.400"
            mt="-0.3rem"
            visibility={errors.confirm_password ? 'visible' : 'hidden'}
          >
            Confirmação de senha é obrigatório
          </Text>

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
