import React from 'react'
import { useMedia } from 'hooks'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Flex,
  Icon,
  Link as LinkChakra,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  MdAdd,
  MdGroupAdd,
  MdOutlineClose,
  MdPlaylistAdd,
} from 'react-icons/md'

export const AddButton = () => {
  const [collapse, setCollapse] = React.useState<boolean>(false)

  const { isMobileOrTablet } = useMedia()

  return (
    <Flex
      position="absolute"
      right={isMobileOrTablet ? 8 : 12}
      bottom={isMobileOrTablet ? 8 : 12}
      flexDir="column"
      overflow="hidden"
    >
      <Collapse in={collapse} animateOpacity>
        <VStack flexDir="column-reverse">
          <LinkChakra as={Link} title="Add group" order={4}>
            <VStack>
              <Icon
                as={MdGroupAdd}
                w="3rem"
                h="3rem"
                p="0.7rem"
                bg="blue.50"
                color="blue.900"
                borderRadius="full"
              />
              <Text
                color="blue.900"
                fontSize="0.75rem"
                fontWeight={500}
                mt="-0.35rem"
              >
                Grupo
              </Text>
            </VStack>
          </LinkChakra>

          <LinkChakra title="Add list" order={3} >
            <VStack>
              <Icon
                as={MdPlaylistAdd}
                w="3rem"
                h="3rem"
                p="0.7rem"
                bg="blue.50"
                color="blue.900"
                borderRadius="full"
              />
              <Text
                color="blue.900"
                fontSize="0.75rem"
                fontWeight={500}
                mt="-0.35rem"
              >
                Lista
              </Text>
            </VStack>
          </LinkChakra>

          <LinkChakra
            title="Cancel and Close"
            order={2}
            onClick={() => setCollapse(false)}
          >
            <Icon
              as={MdOutlineClose}
              w="3rem"
              h="3rem"
              p="0.5rem"
              bg="blue.900"
              color="blue.50"
              borderRadius="full"
            />
          </LinkChakra>
        </VStack>
      </Collapse>

      {!collapse && (
        <LinkChakra
          title="Add"
          order={1}
          onClick={() => setCollapse(true)}
          mt="1rem"
        >
          <Icon
            as={MdAdd}
            w="3rem"
            h="3rem"
            bg="blue.50"
            color="blue.900"
            borderRadius="full"
          />
        </LinkChakra>
      )}
    </Flex>
  )
}
