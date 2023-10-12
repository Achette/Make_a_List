import React, { useState } from 'react'
import { getUserId, useMedia } from 'hooks'
import { MdClose, MdSend } from 'react-icons/md'
import {
  Box,
  Flex,
  Text,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody,
  HStack,
  Icon,
  Avatar,
  Spacer,
  Input,
  useToast,
} from '@chakra-ui/react'
import { leaveList, sharedList } from 'services/list-services'
import { useNavigate, useParams } from 'react-router-dom'

type AddUserListProps = {
  modal: boolean
  setModal: (arg: boolean) => void
  shared?: { id: string; name: string; email: string }[]
  created_by: { id: string; name: string; email: string }
  fetchList: () => Promise<void>
}

export const AddUserList = ({ modal, setModal, fetchList, shared, created_by }: AddUserListProps) => {
  const { onClose, onOpen } = useDisclosure()
  const [email, setEmail] = useState<string>('');
  const { isDesktop } = useMedia()
  const { id } = useParams()
  const navigate = useNavigate()

  const { isMobileOrTablet } = useMedia()

  const userId = getUserId()

  const toast = useToast()

  const handleExitList = async () => {
    try {
      await leaveList(id!, userId!)

      navigate('/lists')

      toast({
        description: `Sucesso ao sair da lista.`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    } catch (e) {
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

  const handleLeaveUsers = async (sharedId: string) => {
    try {
      await leaveList(id!, sharedId)
      fetchList()

      toast({
        description: `Usuario removido com sucesso.`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    } catch (e) {
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

  const handleShared = async () => {
    try {
      await sharedList(id!, email)

      fetchList()
      setEmail('')
      toast({
        description: `Sucesso ao compartilhar.`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    } catch (e) {
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
    <Modal onClose={onClose} size={isDesktop ? 'lg' : 'full'} isOpen={modal}>
      <ModalOverlay />
      <ModalContent backgroundColor="white">
        <ModalBody border="1px solid teal">
          <Flex flexDirection="column">
            <Box p="0.5rem" order={isDesktop ? 1 : 2}>
              <Flex w="full" justifyContent="space-between" alignItems="center">
                <Text
                  color="blue.900"
                  fontSize="2.125rem"
                  fontWeight={700}
                  onClick={onOpen}
                >
                  Compartilhado com
                </Text>

                <Icon
                  type="button"
                  as={MdClose}
                  w="1.3125rem"
                  h="1.3125rem"
                  color="blue.900"
                  cursor="pointer"
                  onClick={() => setModal(false)}
                />
              </Flex>

              <Flex p="0.5rem" align='center'>
                <Input
                  w="full"
                  h="3rem"
                  placeholder="E-mail"
                  type="email"
                  color="black.600"
                  _placeholder={{ color: 'blue.900' }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Icon as={MdSend} w="2rem" h="1.5rem" color="blue.900" cursor='pointer' onClick={() => handleShared()} />
              </Flex>


              <HStack
                w="full"
                h={isMobileOrTablet ? '3rem' : '4.25rem'}
                p={isMobileOrTablet ? '1rem' : '2rem'}
              >
                <Avatar
                  w={isMobileOrTablet ? '2rem' : '2.25rem'}
                  h={isMobileOrTablet ? '2rem' : '2.25rem'}
                  name={created_by.name}
                  color="whiteAlpha.900"
                  border="none"
                  title={created_by.name}
                />
                <Flex flexDirection="column" alignItems="start">
                  <Text
                    fontSize="1.063rem"
                    fontWeight={600}
                    lineHeight="1.375rem"
                    letterSpacing="-0.026rem"
                    color="blue.900"
                    ml="0.75rem"
                  >
                    {created_by.name}
                  </Text>
                  <Text
                    fontSize="0.75rem"
                    fontWeight={500}
                    lineHeight="1.375rem"
                    letterSpacing="-0.02563rem"
                    color="blue.900"
                    ml="0.75rem"
                  >
                    {created_by.email}
                  </Text>
                </Flex>

                <Spacer></Spacer>

                {userId === created_by.id && <Text
                  fontSize="0.75rem"
                  fontWeight={600}
                  lineHeight="1.375rem"
                  letterSpacing="-0.026rem"
                  color="red.500"
                  ml="0.75rem"
                  cursor='pointer'
                  onClick={() => handleExitList()}
                >
                  Sair da lista
                </Text>}
              </HStack>

              {shared &&
                shared.map((item) => (
                  <HStack
                    key={item.id}
                    w="full"
                    h={isMobileOrTablet ? '3rem' : '4.25rem'}
                    p={isMobileOrTablet ? '1rem' : '2rem'}
                  >
                    <Avatar
                      w={isMobileOrTablet ? '2rem' : '2.25rem'}
                      h={isMobileOrTablet ? '2rem' : '2.25rem'}
                      name={item.name}
                      color="whiteAlpha.900"
                      border="none"
                      title={item.name}
                    />
                    <Flex flexDirection="column" alignItems="start">
                      <Text
                        fontSize="1.063rem"
                        fontWeight={600}
                        lineHeight="1.375rem"
                        letterSpacing="-0.026rem"
                        color="blue.900"
                        ml="0.75rem"
                      >
                        {item.name}
                      </Text>
                      <Text
                        fontSize="0.75rem"
                        fontWeight={500}
                        lineHeight="1.375rem"
                        letterSpacing="-0.02563rem"
                        color="blue.900"
                        ml="0.75rem"
                      >
                        {item.email}
                      </Text>
                    </Flex>

                    <Spacer></Spacer>

                    {userId === item.id && <Text
                      fontSize="0.75rem"
                      fontWeight={600}
                      lineHeight="1.375rem"
                      letterSpacing="-0.026rem"
                      color="red.500"
                      ml="0.75rem"
                      cursor='pointer'
                      onClick={() => handleExitList()}
                    >
                      Sair da lista
                    </Text>}

                    {userId === created_by.id && <Text
                      fontSize="0.75rem"
                      fontWeight={600}
                      lineHeight="1.375rem"
                      letterSpacing="-0.026rem"
                      color="red.500"
                      ml="0.75rem"
                      cursor='pointer'
                      onClick={() => handleLeaveUsers(item.id)}
                    >
                      remover
                    </Text>}

                  </HStack>
                ))}
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
