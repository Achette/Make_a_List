import React from 'react'
import { 
    Flex,
    Text,
    VStack,
    Link as LinkChakra,
    Icon,
    Checkbox,
    theme,
    Box
 } from '@chakra-ui/react'

import { useMedia } from 'hooks'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

export const Configurations = () => {

    const customTheme = theme;

    const { isMobileOrTablet } = useMedia()
    const navigate = useNavigate()

    return (
        <VStack w="full" px={isMobileOrTablet ? '' : '3rem'} color={`blue.900`}>
            <Flex w="full" justifyContent="space-between">
                {isMobileOrTablet && (
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
                )}
            </Flex>

            <Flex flexDirection="column" maxW="25rem" w="100%" mt={`2.4rem`} >
                <Text
                 
                    fontSize="1.5rem"
                    fontWeight={500}
                    color="blue.900"
                >
                    Itens e Listas
                </Text>


        <Box fontSize={isMobileOrTablet ? '12px' : '1rem'}>

                <Flex flexDirection={'row'} justifyContent={`space-between`} padding={`.5rem`} >Adicionar novos itens ao fim da lista <Checkbox size={'lg'} colorScheme='blue' ></Checkbox></Flex>
                <Flex flexDirection={'row'} justifyContent={`space-between`}  padding={`.5rem`}>Mover os itens marcados para o final da lista <Checkbox size={'lg'} colorScheme='blue' ></Checkbox></Flex>
                <Flex flexDirection={'row'} justifyContent={`space-between`} padding={`.5rem`}>Ativar tema escuro<Checkbox size={'lg'} colorScheme='blue' ></Checkbox></Flex>

        </Box>

            </Flex>

            <Flex flexDirection="column" maxW="25rem" w="100%" mt={`2rem`}>
                <Text
                   
                    fontSize="1.5rem"
                    fontWeight={500}
                    color="blue.900"
                >
                    Compartilhamento
                </Text>

                <Box fontSize={isMobileOrTablet ? '12px' : '1rem'}>
                    <Flex flexDirection={'row'} justifyContent={`space-between`} padding={`.5rem`}>Ativar compartilhamento <Checkbox size={'lg'} colorScheme='blue' ></Checkbox></Flex>
                    <Flex flexDirection={'row'} justifyContent={`space-between`} padding={`.5rem`}>Definir senha para acesso <Checkbox size={'lg'} colorScheme='blue' ></Checkbox></Flex>
                </Box>
            
            </Flex>

        </VStack>
    )
}
