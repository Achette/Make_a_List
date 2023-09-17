import React from 'react'
import { useMedia } from 'hooks'
import { Button, Divider, Flex, HStack, Text } from '@chakra-ui/react'

type AddProductButtonProps = {
  children: React.ReactNode
}

export const ListDetailTopBar = ({ children }: AddProductButtonProps) => {
  const { isMobile } = useMedia()

  return (
    <Flex w="full" justifyContent="space-between">
      <Flex w="full" justifyContent="space-between" flexDirection="column">
        <Text
          fontSize="2.125rem"
          fontWeight={700}
          lineHeight="2.5625rem"
          letterSpacing="0.025rem"
          color="blue.900"
        >
          {children}
        </Text>

        <Text
          fontSize="1.0625rem"
          color="gray.400"
          fontWeight={400}
          lineHeight="1.375rem"
          letterSpacing="-0.02563rem"
          
        >
          Compartilhado com
        </Text>

        <Divider />
      </Flex>

      <HStack
        w="fit-content"
        justifyContent={isMobile ? 'flex-start' : 'flex-end'}
        alignItems="center"
        flexDirection="column"
      >
        <Button
          px={isMobile ? '0' : '1rem'}
          fontSize={isMobile ? '1rem' : '1.0625rem'}
          fontWeight={500}
          lineHeight="1.375rem"
          letterSpacing="-0.02563rem"
          bgColor={isMobile ? 'transparent' : 'blue.900'}
          color={isMobile ? 'blue.900' : 'white'}
          borderRadius="0.625rem"
          _hover={{ bgColor: isMobile ? 'transparent' : 'blue.500' }}
        >
          Adicionar Produtos
        </Button>

        {!isMobile && (
          <Button
            bgColor="transparent"
            color="red.400"
            fontSize="1.0625rem"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
          >
            Fechar
          </Button>
        )}
      </HStack>
    </Flex>
  )
}
