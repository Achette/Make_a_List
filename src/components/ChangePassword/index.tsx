import React from 'react'
import { useMedia } from 'hooks'
import {
  Box,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from '@chakra-ui/react'

export const ChangePassword = () => {
  const { isDesktop } = useMedia()

  return (
    <VStack w="full">
      <HStack
        maxW="full"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        px={isDesktop ? '4rem' : '0'}
      >
        <Text color="blue.900" fontSize="1.5rem" fontWeight={500} margin="0">
          Alterar senha
        </Text>

        <Text
          color="blue.900"
          fontSize="1.0625rem"
          fontWeight={500}
          lineHeight="1.375rem"
          letterSpacing="-0.02563rem"
        >
          Salvar
        </Text>
      </HStack>

      <Box maxW="36rem" mt={isDesktop ? '2.5rem' : 'none'}>
        <VStack pt="1.8rem" w="full">
          <Flex w="full" alignItems="flex-start" justifyContent="flex-start">
            <InputGroup>
              <InputLeftAddon
                w="40%"
                bgColor="transparent"
                border="none"
                color="blue.900"
                fontSize="1.0625rem"
                fontWeight={400}
                lineHeight="1.375rem"
                letterSpacing="-0.02562rem"
              >
                Senha antiga
              </InputLeftAddon>
              <Input
                type="password"
                name="old-password"
                placeholder="Obrigatório"
                _placeholder={{ color: 'blue.900', opacity: '0.6' }}
                _focusVisible={{ border: 'none' }}
                border="none"
                color="blue.900"
                maxWidth="25rem"
                outline="none"
                required
              />
            </InputGroup>
          </Flex>
          <Divider />

          <Flex w="full" alignItems="flex-start" justifyContent="flex-start">
            <InputGroup mt="1rem">
              <InputLeftAddon
                w="40%"
                bgColor="transparent"
                border="none"
                color="blue.900"
                fontSize="1.0625rem"
                fontWeight={400}
                lineHeight="1.375rem"
                letterSpacing="-0.02562rem"
              >
                Nova senha
              </InputLeftAddon>
              <Input
                type="password"
                placeholder="Obrigatório"
                _placeholder={{ color: 'blue.900', opacity: '0.6' }}
                _focusVisible={{ border: 'none' }}
                border="none"
                color="blue.900"
                maxWidth="25rem"
                outline="none"
                required
              />
            </InputGroup>
          </Flex>
          <Divider />

          <Flex w="full" alignItems="flex-start" justifyContent="flex-start">
            <InputGroup mt="1rem">
              <InputLeftAddon
                w="40%"
                bgColor="transparent"
                border="none"
                color="blue.900"
                fontSize="1.0625rem"
                fontWeight={400}
                lineHeight="1.375rem"
                letterSpacing="-0.02562rem"
              >
                Validação
              </InputLeftAddon>
              <Input
                type="password"
                placeholder="Obrigatório"
                _placeholder={{ color: 'blue.900', opacity: '0.6' }}
                _focusVisible={{ border: 'none' }}
                border="none"
                color="blue.900"
                maxWidth="25rem"
                outline="none"
                required
              />
            </InputGroup>
          </Flex>
          <Divider />
        </VStack>
      </Box>
    </VStack>
  )
}
