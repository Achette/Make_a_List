/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { deleteList } from 'services/list-services'
import { Link, useNavigate } from 'react-router-dom'
import { Flex, Icon, Link as LinkChakra, Text } from '@chakra-ui/react'
import {
  MdContentCopy,
  MdDeleteOutline,
  MdOutlineArchive,
  MdOutlineBookmarkAdd,
} from 'react-icons/md'

type BottomOptionsBarProps = {
  id?: string
}

export const BottomOptionsBar = React.memo(function BottomOptionsBar({
  id,
}: BottomOptionsBarProps) {
  const navigate = useNavigate()

  const deleteListById = async (id: string) => {
    try {
      await deleteList(id)
      navigate(-1)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Flex w="full" position="absolute" bottom="1rem">
        <Flex w="full" alignItems="center" justifyContent="space-around">
          <Flex onClick={() => deleteListById(id!)}>
            <Icon as={MdDeleteOutline} w="2rem" h="1.5rem" color="blue.900" />
            <LinkChakra
              as={Link}
              _hover={{ textDecoration: 'none' }}
              _focus={{ border: 'none' }}
            >
              <Text
                fontSize="1rem"
                color="blue.900"
                fontWeight={500}
                ml="0.25rem"
              >
                Excluir
              </Text>
            </LinkChakra>
          </Flex>

          <Flex>
            <Icon as={MdOutlineArchive} w="2rem" h="1.5rem" color="blue.900" />
            <LinkChakra
              as={Link}
              _hover={{ textDecoration: 'none' }}
              _focus={{ border: 'none' }}
            >
              <Text
                fontSize="1rem"
                color="blue.900"
                fontWeight={500}
                ml="0.25rem"
              >
                Arquivar
              </Text>
            </LinkChakra>
          </Flex>

          <Flex>
            <Icon
              as={MdOutlineBookmarkAdd}
              w="2rem"
              h="1.5rem"
              color="blue.900"
            />
            <LinkChakra
              as={Link}
              _hover={{ textDecoration: 'none' }}
              _focus={{ border: 'none' }}
            >
              <Text
                fontSize="1rem"
                color="blue.900"
                fontWeight={500}
                ml="0.25rem"
              >
                Salvar como modelo
              </Text>
            </LinkChakra>
          </Flex>

          <Flex>
            <Icon as={MdContentCopy} w="2rem" h="1.5rem" color="blue.900" />
            <LinkChakra
              as={Link}
              _hover={{ textDecoration: 'none' }}
              _focus={{ border: 'none' }}
            >
              <Text
                fontSize="1rem"
                color="blue.900"
                fontWeight={500}
                ml="0.25rem"
              >
                Criar cópia
              </Text>
            </LinkChakra>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
})
