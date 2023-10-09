/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { useMedia } from 'hooks'
import { getAll } from 'services/list-services'
import { IconType } from 'react-icons/lib'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Flex,
  Text,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { stringToIcon } from 'utils'

type AddListProps = {
  modal: boolean
  setModal: (arg: boolean) => void
}

export type ListsProps = {
  id: string
  color: string
  icon: IconType | string
  created_at: string
  created_by: { id: string; name: string; email: string }
  name: string
  shared: { id: string; name: string; email: string }[]
  total: number
  updated_at: string
}

export const AddListGroup = ({ modal, setModal }: AddListProps) => {
  const { onClose, onOpen } = useDisclosure()
  const { isDesktop } = useMedia()
  // const { id } = useParams()
  // const navigate = useNavigate()

  const { isMobileOrTablet } = useMedia()

  const [lists, setLists] = React.useState<ListsProps[]>()

  React.useEffect(() => {
    getAll().then((res) => {
      setLists(res.data.list)
    })
  }, [])

  return (
    <Modal onClose={onClose} size={isDesktop ? 'lg' : 'full'} isOpen={modal}>
      <ModalOverlay />
      <ModalContent backgroundColor="white">
        <ModalBody border="1px solid teal">
          <Flex flexDirection="column">
            <Box p="0.5rem" order={isDesktop ? 1 : 2}>
              <Text
                color="blue.900"
                fontSize="2.125rem"
                fontWeight={700}
                onClick={onOpen}
              >
                Adicionar lista
              </Text>
              <Text
                color="blue.900"
                fontSize="1.0rem"
                fontWeight={400}
                onClick={onOpen}
              >
                Selecione uma lista para adicionar ao grupo.
              </Text>

              <Flex
                mt="1rem"
                maxH="calc(100% - 13vh)"
                h="100%"
                alignItems="center"
                justifyContent={lists?.length ? '' : 'center'}
                flexDir="column"
                gap="0.75rem"
                overflow="auto"
              >
                {lists &&
                  lists.map((item) => (
                    <HStack
                      key={item.id}
                      w="full"
                      h={isMobileOrTablet ? '3rem' : '4.25rem'}
                      bg="gray.100"
                      borderRadius="62.5rem"
                      p={isMobileOrTablet ? '1rem' : '2rem'}
                      justifyContent="space-between"
                    >
                      <Flex alignItems="center">
                        <Flex
                          h={isMobileOrTablet ? '1.8rem' : '2.5rem'}
                          w={isMobileOrTablet ? '1.8rem' : '2.5rem'}
                          bg={item.color}
                          p=".75rem"
                          borderRadius="full"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Icon
                            as={stringToIcon(item.icon) ?? undefined}
                            h={isMobileOrTablet ? '1.15rem' : '1.5rem'}
                            w={isMobileOrTablet ? '1.15rem' : '1.5rem'}
                            color="whiteAlpha.900"
                          />
                        </Flex>

                        <Text
                          fontSize="1.0625rem"
                          fontWeight={500}
                          lineHeight="1.375rem"
                          letterSpacing="-0.02563rem"
                          color="blue.900"
                          ml="0.75rem"
                        >
                          {item.name}
                        </Text>
                      </Flex>
                    </HStack>
                  ))}

                {!lists?.length && (
                  <Text
                    fontSize={isMobileOrTablet ? '0.75rem' : '1rem'}
                    fontWeight={500}
                    color="blue.50"
                  >
                    Sem Listas
                  </Text>
                )}
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
