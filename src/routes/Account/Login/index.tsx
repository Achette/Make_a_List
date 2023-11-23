import React from 'react'
import { useMedia } from 'hooks'
import * as accessTokenRepository from 'hooks'
import { UserApi } from 'services/auth-services'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
  Link as LinkChakra,
  useToast,
} from '@chakra-ui/react'

export type UserProps = {
  email: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const { isMobileOrTablet } = useMedia()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>()

  const onSubmit: SubmitHandler<UserProps> = async (data) => {
    try {
      const response = await UserApi.login(data)
      accessTokenRepository.saveToken(response.token)
      accessTokenRepository.saveUser(response.user.name)
      accessTokenRepository.saveUserId(response.user.id)
      toast({
        description: `Bem-vindo ${response.user.name}!`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })

      navigate('/lists')
    } catch (e: unknown) {
      const errorMessage = (e as any).response?.data?.error ?? 'E-mail ou senha incorretos!';
      toast({
        description: errorMessage,
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
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
            id="name"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            placeholder="E-mail"
            type="email"
            color="white.400"
            _placeholder={{ color: 'blue.900' }}
            {...register('email', { required: true })}
          />

          <Box w="full">
            <Text
              fontSize="0.75rem"
              color="white.400"
              mt="-0.3rem"
              visibility={errors.email ? 'visible' : 'hidden'}
            >
              E-mail é obrigatório
            </Text>
          </Box>

          <Input
            id="password"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            placeholder="Senha"
            type="password"
            color="white.400"
            _placeholder={{ color: 'blue.900' }}
            {...register('password', { required: true })}
          />
          <Box w="full">
            <Text
              fontSize="0.75rem"
              color="white.400"
              mt="-0.3rem"
              visibility={errors.password ? 'visible' : 'hidden'}
            >
              Senha é obrigatório
            </Text>
          </Box>

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
              <Link to="/account/new-password">Esqueceu sua senha?</Link>
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
            m="1.5rem 0 0 0"
            textAlign="center"
            color="white.400"
            fontSize="md"
            fontWeight={400}
            lineHeight="1.375rem"
            letterSpacing="-0.41px"
          >
            Ainda não tem uma conta?{' '}
            <LinkChakra as={Link} to="/account/signin" fontWeight={700}>
              Cadastre-se
            </LinkChakra>
          </Text>
        </VStack>
      </FormControl>
    </VStack>
  )
}
