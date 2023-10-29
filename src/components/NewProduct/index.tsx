/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { useMedia } from 'hooks'
import { CategorySelect } from 'components'
import { addNewProduct } from 'services/list-services'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Flex,
  Text,
  Input,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  useToast,
} from '@chakra-ui/react'

type NewProductProps = {
  modal: boolean
  setModal: (arg: boolean) => void
  fetchList: () => Promise<void>
}

type InputsProps = {
  name: string
  quantity: string
  price: string
  place: string
}

export const NewProduct = ({ modal, setModal, fetchList }: NewProductProps) => {
  const { onClose, onOpen } = useDisclosure()
  const { isDesktop, isMobileOrTablet } = useMedia()
  const { id } = useParams()
  const toast = useToast()
  const navigate = useNavigate()

  const [category, setCategory] = React.useState<string>('')
  const [newProduct, setNewProduct] = React.useState<InputsProps>({
    name: '',
    place: '',
    price: '',
    quantity: '',
  })

  const handleGetNewProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const handleGetCategory = (category: string) => {
    setCategory(category)
  }

  const handleAddNewProduct = async () => {
    try {
      await addNewProduct(
        id!,
        newProduct.name,
        +newProduct.quantity,
        category,
        +newProduct.price,
        newProduct.place
      )

      toast({
        description: `Produto adicionado à sua lista!`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })

      fetchList()
      setModal(false)
      navigate(`/lists/${id}`)

      setNewProduct({
        name: '',
        place: '',
        price: '',
        quantity: '',
      })
    } catch (e) {
      toast({
        description: "Preencha todos os campos!",
        status: 'warning',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }

  return (
    <Modal onClose={onClose} size={isDesktop ? 'lg' : 'full'} isOpen={modal}>
      <ModalOverlay />
      <ModalContent backgroundColor="white">
        <ModalBody>
          <Flex flexDirection="column">
            <Flex
              order={isDesktop ? 3 : 1}
              my={isDesktop ? '2rem' : 'unset'}
              fontSize="1.0625rem"
              fontWeight={500}
              color="blue.900"
              justifyContent={'space-between'}
            >
              <Button
                type="button"
                w={isDesktop ? '10rem' : 'fit-content'}
                color="red.400"
                fontSize="1.0625rem"
                fontWeight={500}
                lineHeight="1.375rem"
                letterSpacing="-0.02563rem"
                bg="none"
                px="0"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                w={isDesktop ? '10rem' : 'fit-content'}
                type="button"
                color={isDesktop ? 'white' : 'blue.900'}
                fontSize="1.0625rem"
                fontWeight={500}
                lineHeight="1.375rem"
                letterSpacing="-0.02563rem"
                bg={isDesktop ? 'blue.900' : 'none'}
                _hover={{ bgColor: !isDesktop ? 'transparent' : 'blue.500' }}
                px="0"
                onClick={() => handleAddNewProduct()}
              >
                Adicionar
              </Button>
            </Flex>
            <Box p="0.5rem" order={isDesktop ? 1 : 2}>
              <Text
                color="blue.900"
                fontSize="2.125rem"
                fontWeight={700}
                onClick={onOpen}
              >
                Novo produto
              </Text>
              <Input
                name="name"
                value={newProduct.name}
                onChange={(e) => handleGetNewProduct(e)}
                mt={5}
                variant="flushed"
                placeholder="Nome do produto*"
                color="blue.900"
                maxWidth="25rem"
                outline="none"
                _placeholder={{ color: 'blue.900', opacity: '0.6' }}
                required
              />
              <Input
                mt={5}
                name="place"
                value={newProduct.place}
                onChange={(e) => handleGetNewProduct(e)}
                variant="flushed"
                placeholder="Local da compra"
                color="blue.900"
                maxWidth="25rem"
                _placeholder={{ color: 'blue.900', opacity: '0.6' }}
              />
              <Flex>
                <Input
                  mt={5}
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={(e) => handleGetNewProduct(e)}
                  variant="flushed"
                  placeholder="Preço"
                  color="blue.900"
                  maxWidth="25rem"
                  _placeholder={{ color: 'blue.900', opacity: '0.6' }}
                />
                <Input
                  mt={5}
                  type="number"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={(e) => handleGetNewProduct(e)}
                  variant="flushed"
                  placeholder="Quantidade"
                  color="blue.900"
                  maxWidth="25rem"
                  _placeholder={{ color: 'blue.900', opacity: '0.6' }}
                />
              </Flex>
            </Box>
            <Box mt={5} order={2}>
              <CategorySelect getCategory={handleGetCategory} />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
