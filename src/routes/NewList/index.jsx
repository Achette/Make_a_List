import React from 'react'
import { ColorSelect, IconSelect, NewProduct } from 'components'
import { Box,  Flex,  Text, Input, Button } from '@chakra-ui/react'
import { useMedia } from 'hooks'

export const NewList = () => {
    const { isDesktop } = useMedia()

  return (
    <Box padding={'16px'}>
      <Flex fontSize={'17px'} fontWeight={500} color="blue.900" justifyContent={'space-between'}><button type='button'>Cancelar</button> <button type='button'>Criar Lista</button></Flex>
        <Text color="blue.900" fontSize={'34px'} fontWeight={700}>Nova lista</Text>
        <Input mt={5} variant='flushed' placeholder='Nome' color={'blue.900'} maxWidth={'400px'}  _placeholder={{ color: 'blue.900', opacity:'0.6' }} required/>

        <Flex flexDirection={isDesktop ? 'row' : 'column'}  justifyContent={isDesktop ? 'space-between' : 'center'} alignItems={'baseline'}>
            <Box>
                <Box mt={5}>
                    <ColorSelect></ColorSelect>
                </Box>
            </Box>
        
            <Box>
                <Box  my={5}>
                        <IconSelect></IconSelect>
                </Box>
            </Box> 
        </Flex>

        <hr  />

        <Text mt={5} textAlign={'center'}  color="blue.900">ou</Text>

        <Flex justifyContent={'center'} mt={5}> 
            <Button variant='link' color={'blue.900'} type='button'>Criar a partir de um modelo</Button>
        </Flex>
        <NewProduct></NewProduct>
      
    </Box>
  )
}
