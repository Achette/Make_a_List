/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { deleteList } from 'services/list-services'
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
} from '@chakra-ui/react'
import {
  MdContentCopy,
  MdDeleteOutline,
  MdOutlineArchive,
  MdOutlineBookmarkAdd,
} from 'react-icons/md'

export const BottomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()
  const { id } = useParams()

  const deleteListById = async (id: string) => {
    try {
      await deleteList(id)
      navigate(-1)
    } catch (e) {
      console.error(e)
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
