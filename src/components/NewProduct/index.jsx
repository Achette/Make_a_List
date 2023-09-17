import React from 'react'
import { 
  Box,
  Flex,
  Text,
  Input,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody 
} from '@chakra-ui/react'
import { useMedia } from 'hooks'
import { CategorySelect } from 'components/CategorySelect'

export const NewProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isDesktop } = useMedia()

  return (
    <Modal onClose={onClose} size={isDesktop ? 'lg': 'full'} isOpen={isOpen}>
    <ModalOverlay />
    <ModalContent backgroundColor={'#ffff'}>
      <ModalBody>

        <Box padding={'16px'}>
            <Flex fontSize={'17px'} fontWeight={500} color="blue.900" justifyContent={'space-between'}><button type='button' onClick={onClose}>Cancelar</button> <button type='button'>Adicionar Produto</button></Flex>
                <Text color="blue.900" fontSize={'34px'} fontWeight={700}>Novo produto</Text>
                <Input mt={5} variant='flushed' placeholder='Nome do produto' color={'blue.900'} maxWidth={'400px'}  _placeholder={{ color: '#27488F', opacity:'0.6' }} required/>
                <Input mt={5} variant='flushed' placeholder='Local da compra' color={'blue.900'} maxWidth={'400px'}  _placeholder={{ color: '#27488F', opacity:'0.6' }} />

                <Flex>
                    <Input mt={5} variant='flushed' placeholder='Preço' color={'blue.900'} maxWidth={'400px'}  _placeholder={{ color: '#27488F', opacity:'0.6' }} />
                     <Input mt={5} variant='flushed' placeholder='Quantidade' color={'blue.900'} maxWidth={'400px'}  _placeholder={{ color: '#27488F', opacity:'0.6' }}/>
                </Flex>
         </Box>

        <Box mt={5}>
           <CategorySelect></CategorySelect>
        </Box>
      
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}
