/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { updateDeleteList } from 'services/list-services'
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
} from '@chakra-ui/react'
import {
  MdContentCopy,
  MdDeleteOutline,
  MdOutlineArchive,
  MdOutlineBookmarkAdd,
} from 'react-icons/md'
import { useMedia } from 'hooks'

export const BottomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()
  const { id } = useParams()
  const { isMobileOrTablet } = useMedia()
  const toast = useToast()

  const deleteListById = async (id: string) => {
    try {
      await updateDeleteList(id, true)
      navigate(-1)
    } catch (e: unknown) {
      const errorMessage = (e as any).response?.data?.error ?? 'Ocorreu um erro desconhecido';
      toast({
        description: errorMessage,
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }

  return (
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
                onClick={() => deleteListById(id!)}
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
                <Icon as={MdContentCopy} w="2rem" h="1.5rem" color="gray.100" />
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
  )
}
