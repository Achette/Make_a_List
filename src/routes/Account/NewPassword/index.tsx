import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'

type NewPasswordProps = {
  email: string
}

export const NewPassword = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordProps>()

  const onSubmit: SubmitHandler<NewPasswordProps> = async (data) => {
    console.log(data) // remover depois que integrar ao backend
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
            Nova Senha
          </Heading>

          <Input
            id="new-password"
            w="21.5rem"
            h="3rem"
            bg="linear-gradient(0deg, rgba(217, 217, 227, 0.40) 0%, rgba(217, 217, 227, 0.40) 100%), var(--dark-blue, #27488F)"
            border="none"
            placeholder="Digite seu e-mail"
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
              E-mail do usuário é obrigatório
            </Text>
          </Box>

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
            Alterar senha
          </Button>

          <Text
            m="1.5rem 0 0 0"
            textAlign="center"
            color="white.400"
            fontSize="md"
            fontWeight={400}
            lineHeight="1.375rem"
            letterSpacing="-0.41px"
            cursor="pointer"
            onClick={() => navigate(-1)}
          >
            Voltar
          </Text>
        </VStack>
      </FormControl>
    </VStack>
  )
}
