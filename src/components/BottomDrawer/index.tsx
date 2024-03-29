/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { useMedia } from 'hooks'
import { HiDotsVertical } from 'react-icons/hi'
import { moveToRecycleBin } from 'services/list-services'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Icon,
  useDisclosure,
  Link as LinkChakra,
  Text,
  useToast,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import {
  MdContentCopy,
  MdDeleteOutline,
  MdOutlineArchive,
  MdOutlineBookmarkAdd,
} from 'react-icons/md'

type BottomDrawerProps = {
  listName: string
}

export const BottomDrawer = ({ listName }: BottomDrawerProps) => {
  const [modal, setModal] = React.useState<boolean>(false)

  const toast = useToast()
  const { id } = useParams()
  const navigate = useNavigate()
  const { isMobileOrTablet, isMobile } = useMedia()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const deleteListById = async (id: string) => {
    try {
      await moveToRecycleBin(id, true)

      toast({
        description: `A lista ${listName} foi excluída com sucesso!`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })

      navigate(-1)
    } catch (e: unknown) {
      const errorMessage =
        (e as any).response?.data?.error ?? 'Ocorreu um erro desconhecido'
      toast({
        description: errorMessage,
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }

  const handleOpenConfirmModal = () => {
    onClose()
    setModal(true)
  }

  return (
    <>
      <Flex>
        <Icon
          as={HiDotsVertical}
          w="1.5rem"
          h="1.5rem"
          color="blue.900"
          onClick={onOpen}
          cursor="pointer"
        />
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
          variant="primary"
        >
          <DrawerContent>
            <DrawerBody>
              <>
                <Flex
                  w="full"
                  alignItems="center"
                  m="1.25rem 0"
                  onClick={() => handleOpenConfirmModal()}
                >
                  <Icon
                    as={MdDeleteOutline}
                    w="2rem"
                    h="1.5rem"
                    color="gray.100"
                  />
                  <LinkChakra
                    as={Link}
                    _hover={{ textDecoration: 'none' }}
                    _focus={{ border: 'none' }}
                  >
                    <Text
                      fontSize="1rem"
                      color="gray.100"
                      fontWeight={500}
                      ml="1rem"
                    >
                      Excluir
                    </Text>
                  </LinkChakra>
                </Flex>

                <Flex w="full" alignItems="center" m="1.25rem 0">
                  <Icon
                    as={MdOutlineArchive}
                    w="2rem"
                    h="1.5rem"
                    color="gray.100"
                  />
                  <LinkChakra
                    as={Link}
                    _hover={{ textDecoration: 'none' }}
                    _focus={{ border: 'none' }}
                  >
                    <Text
                      fontSize="1rem"
                      color="gray.100"
                      fontWeight={500}
                      ml="1rem"
                    >
                      Arquivar
                    </Text>
                  </LinkChakra>
                </Flex>

                <Flex w="full" alignItems="center" m="1.25rem 0">
                  <Icon
                    as={MdOutlineBookmarkAdd}
                    w="2rem"
                    h="1.5rem"
                    color="gray.100"
                  />
                  <LinkChakra
                    as={Link}
                    _hover={{ textDecoration: 'none' }}
                    _focus={{ border: 'none' }}
                  >
                    <Text
                      fontSize="1rem"
                      color="gray.100"
                      fontWeight={500}
                      ml="1rem"
                    >
                      Salvar como modelo
                    </Text>
                  </LinkChakra>
                </Flex>

                <Flex w="full" alignItems="center" m="1.25rem 0">
                  <Icon
                    as={MdContentCopy}
                    w="2rem"
                    h="1.5rem"
                    color="gray.100"
                  />
                  <LinkChakra
                    as={Link}
                    _hover={{ textDecoration: 'none' }}
                    _focus={{ border: 'none' }}
                  >
                    <Text
                      fontSize="1rem"
                      color="gray.100"
                      fontWeight={500}
                      ml="1rem"
                    >
                      Criar cópia
                    </Text>
                  </LinkChakra>
                </Flex>
              </>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={modal} onClose={onClose}>
        <ModalContent bgColor="white" w={isMobile ? '22rem' : ''}>
          <ModalHeader color="blue.900">Excluir lista?</ModalHeader>
          <ModalBody>
            <Text fontWeight="medium" mb="1rem" color="blue.900">
              Tem certeza que deseja excluir a lista <strong>{listName}</strong>
              ?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => deleteListById(id!)}
            >
              Confirmar exclusão
            </Button>
            <Button
              variant="ghost"
              color="red.400"
              onClick={() => setModal(false)}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
