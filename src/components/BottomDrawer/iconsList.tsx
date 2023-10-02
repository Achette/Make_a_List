import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Icon, Link as LinkChakra, Text } from '@chakra-ui/react'
import {
  MdContentCopy,
  MdDeleteOutline,
  MdOutlineArchive,
  MdOutlineBookmarkAdd,
  MdOutlineShare,
} from 'react-icons/md'

const navigation = [
  {
    name: 'Excluir',
    icon: MdDeleteOutline,
  },
  {
    name: 'Arquivar',
    icon: MdOutlineArchive,
  },
  {
    name: 'Salvar como modelo',
    icon: MdOutlineBookmarkAdd,
  },
  {
    name: 'Criar Cópia',
    icon: MdContentCopy,
  },
  {
    name: 'Compartilhar',
    icon: MdOutlineShare,
  },
]

export const DrawerNavigation = React.memo(function DrawerNavigation() {
  return (
    <>
      {navigation.map((item, index) => (
        <Flex key={index} w="full" alignItems="center" m="1.25rem 0">
          <Icon as={item.icon} w="2rem" h="1.5rem" color="gray.100" />
          <LinkChakra
            as={Link}
            _hover={{ textDecoration: 'none' }}
            _focus={{ border: 'none' }}
          >
            <Text fontSize="1rem" color="gray.100" fontWeight={500} ml="1rem">
              {item.name}
            </Text>
          </LinkChakra>
        </Flex>
      ))}
    </>
  )
})

export const BottomOptionsBar = React.memo(function BottomOptionsBar() {
  return (
    <>
      <Flex w="full" position="absolute" bottom="1rem">
        {navigation.map((item, index) => (
          <Flex
            key={index}
            w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Flex>
              <Icon as={item.icon} w="2rem" h="1.5rem" color="blue.900" />
              <LinkChakra
                as={Link}
                _hover={{ textDecoration: 'none' }}
                _focus={{ border: 'none' }}
              >
                <Text
                  fontSize="1rem"
                  color="blue.900"
                  fontWeight={500}
                  ml="1rem"
                >
                  {item.name}
                </Text>
              </LinkChakra>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  )
})
