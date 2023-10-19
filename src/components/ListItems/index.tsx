import React from 'react'
import { useMedia } from 'hooks'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { deleteProduct } from 'services/list-services'
import {
  Button,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'

type ListItemsProps = {
  id: string
  productName: string
  price: number
  place: string
  quantity: number
  fetchList: () => Promise<void>
}

export const ListItems = ({
  id,
  productName,
  price,
  quantity,
  place,
  fetchList,
}: ListItemsProps) => {
  const { isMobileOrTablet, isMobile } = useMedia()
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id)
      toast({
        description: `Item excluído com sucesso!`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })

      onClose()
    } catch (e: unknown) {
      const errorMessage =
        (e as any).response?.data?.error || 'Ocorreu um erro desconhecido'
      toast({
        description: errorMessage,
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
    onClose()
    fetchList()
  }

  return (
    <>
      <Flex w="full" justifyContent="space-between" alignItems="center">
        <HStack flex={1}>
          <Checkbox size="lg" />
          <VStack alignItems="flex-start">
            <Text
              fontSize="1.0625rem"
              fontWeight={400}
              lineHeight="1.375rem"
              letterSpacing="-0.02563"
              mb="-0.55rem"
            >
              {productName}
            </Text>
            <Text
              fontSize="0.755rem"
              fontWeight={200}
              lineHeight="1.375rem"
              letterSpacing="-0.02563"
            >
              {place}
            </Text>
          </VStack>
        </HStack>

        <Flex
          w="full"
          flex={isMobileOrTablet ? 1 : 2}
          justifyContent="space-between"
        >
          <Text
            fontSize="1rem"
            fontWeight={400}
            lineHeight="1.375rem"
            letterSpacing="-0.02563"
          >
            R${price}
          </Text>
          <Text
            fontSize="1rem"
            fontWeight={400}
            lineHeight="1.375rem"
            letterSpacing="-0.02563"
          >
            {quantity}
          </Text>

          <Icon
            as={RiDeleteBin6Fill}
            w="2rem"
            h="1.25rem"
            color="red.400"
            cursor="pointer"
            title="Excluir produto"
            onClick={() => onOpen()}
          />
        </Flex>
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalContent bgColor="white" w={isMobile ? '22rem' : ''}>
          <ModalHeader>Excluir item?</ModalHeader>
          <ModalBody>
            <Text fontWeight="medium" mb="1rem">
              Tem certeza que deseja excluir <strong>{productName}</strong> da
              sua lista de compra?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleDeleteProduct(id)}
            >
              Confirmar exclusão
            </Button>
            <Button variant="ghost" color="red.400" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
