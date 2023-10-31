import React from 'react'
import { useMedia } from 'hooks'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import {
  Flex,
  Text,
  VStack,
  Link as LinkChakra,
  Icon,
  Checkbox,
  Box,
  HStack,
  Button,
} from '@chakra-ui/react'

export const Settings = () => {
  

  const { isMobileOrTablet } = useMedia()
  const navigate = useNavigate()

  return (
    <VStack w="full" px={isMobileOrTablet ? '' : '3rem'} color={`blue.900`}>
      <Flex w="full" justifyContent="space-between">
        {isMobileOrTablet ? (
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Flex>
              <Icon
                as={MdOutlineArrowBackIos}
                w="1.3125rem"
                h="1.3125rem"
                color="blue.900"
              />
              <LinkChakra
                as={Link}
                color="blue.900"
                fontSize="1.0625rem"
                lineHeight="1.375rem"
                letterSpacing="-0.02563rem"
                _hover={{ textDecoration: 'none', fontWeight: 600 }}
                onClick={() => navigate(-1)}
              >
                <Text>Configurações</Text>
              </LinkChakra>
            </Flex>
          </Flex>
        ) : (
          <Flex w="full" justifyContent="space-between">
          <Text
            fontSize="2.125rem"
            fontWeight={700}
            lineHeight="2.5625rem"
            letterSpacing="0.025rem"
            color="blue.900"
          >
            Configurações
          </Text>

          <HStack
            w="fit-content"
            justifyContent={isMobileOrTablet ? 'flex-start' : 'flex-end'}
            alignItems="center"
            flexDirection="row"
          >
            <Button
              px={isMobileOrTablet ? '0' : '1.5rem'}
              fontSize={isMobileOrTablet ? '1rem' : '1.0625rem'}
              fontWeight={500}
              lineHeight="1.375rem"
              letterSpacing="-0.02563rem"
              bgColor={isMobileOrTablet ? 'transparent' : 'blue.900'}
              color={isMobileOrTablet ? 'blue.900' : 'white'}
              borderRadius="0.625rem"
              _hover={{
                bgColor: isMobileOrTablet ? 'transparent' : 'blue.500',
              }}
            >
              Salvar
            </Button>

            {!isMobileOrTablet && (
              <Button
                bgColor="transparent"
                color="red.400"
                fontSize="1.0625rem"
                fontWeight={500}
                lineHeight="1.375rem"
                letterSpacing="-0.02563rem"
                onClick={() => navigate(-1)}
              >
                Voltar
              </Button>
            )}
          </HStack>
        </Flex>
        )}
      </Flex>

      <Flex flexDirection="column" maxW="25rem" w="100%" mt="4rem">
        <Text fontSize="1.5rem" fontWeight={500} color="blue.900">
          Itens e Listas
        </Text>

        <Box fontSize={isMobileOrTablet ? '12px' : '1rem'}>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            padding="0.5rem"
          >
            Adicionar novos itens ao fim da lista{' '}
            <Checkbox size="lg" colorScheme="blue"></Checkbox>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            padding="0.5rem"
          >
            Mover os itens marcados para o final da lista{' '}
            <Checkbox size="lg" colorScheme="blue"></Checkbox>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            padding="0.5rem"
          >
            Ativar tema escuro
            <Checkbox size="lg" colorScheme="blue"></Checkbox>
          </Flex>
        </Box>
      </Flex>

      <Flex flexDirection="column" maxW="25rem" w="100%" mt="2rem">
        <Text fontSize="1.5rem" fontWeight={500} color="blue.900">
          Compartilhamento
        </Text>

        <Box fontSize={isMobileOrTablet ? '12px' : '1rem'}>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            padding="0.5rem"
          >
            Ativar compartilhamento{' '}
            <Checkbox size="lg" colorScheme="blue"></Checkbox>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            padding="0.5rem"
          >
            Definir senha para acesso{' '}
            <Checkbox size="lg" colorScheme="blue"></Checkbox>
          </Flex>
        </Box>
      </Flex>
    </VStack>
  )
}
