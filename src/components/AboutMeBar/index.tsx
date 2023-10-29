import React from 'react'
import { useMedia } from 'hooks'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import {
  Flex,
  HStack,
  Text,
  Link as ChakraLink,
  Icon,
  VStack,
  Avatar,
  Button,
} from '@chakra-ui/react'

type AboutMeProps = {
  name: string
  email: string
}

export const AboutMeBar = ({ name, email }: AboutMeProps) => {
  const navigate = useNavigate()
  const { isMobileOrTablet } = useMedia()
  return (
    <>
      {isMobileOrTablet ? (
        <HStack w="full" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="center">
            <Icon
              as={MdOutlineArrowBackIos}
              w="1.3125rem"
              h="1.3125rem"
              color="blue.900"
            />
            <ChakraLink as={Link} onClick={() => navigate(-1)}>
              <Text color="blue.900" fontSize="1.0625rem" fontWeight={500}>
                Voltar
              </Text>
            </ChakraLink>
          </Flex>
          <Text color="blue.900" fontSize="1.0625rem" fontWeight={500}>
            Meu Perfil
          </Text>
          <Text color="blue.900" fontSize="1.0625rem" fontWeight={500}>
            Editar
          </Text>
        </HStack>
      ) : (
        <Flex w="full" justifyContent="space-between">
          <Text
            fontSize="2.125rem"
            fontWeight={700}
            lineHeight="2.5625rem"
            letterSpacing="0.025rem"
            color="blue.900"
          >
            Meu Perfil
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
              Editar
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

      <VStack p="2.5rem">
        <Avatar name="Igor Achete" size="xl" bgColor="blue.900" color="white" />

        <VStack h="3.25rem">
          <Text color="blue.900" fontSize="1.5rem" fontWeight={500} margin="0">
            {name}
          </Text>
          <Text color="blue.900" fontSize="1rem" fontWeight={300} mt="-0.75rem">
            {email}
          </Text>
        </VStack>
      </VStack>
    </>
  )
}
