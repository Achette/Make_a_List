import React from 'react'
import { useMedia } from 'hooks'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Flex,
  Icon,
  Link as LinkChakra,
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

  const { isMobile } = useMedia()

  return (
    <Flex
      position="absolute"
      right={isMobile ? 8 : 12}
      bottom={isMobile ? 8 : 12}
      flexDir="column"
      overflow="hidden"
    >
      <Collapse in={collapse} animateOpacity>
        <VStack flexDir="column-reverse">
          <LinkChakra as={Link} title="Add group" order={4}>
            <Icon
              as={MdGroupAdd}
              w="3rem"
              h="3rem"
              p="0.7rem"
              bg="blue.50"
              color="blue.900"
              borderRadius="full"
            />
          </LinkChakra>

          <LinkChakra title="Add list" order={3}>
            <Icon
              as={MdPlaylistAdd}
              w="3rem"
              h="3rem"
              p="0.7rem"
              bg="blue.50"
              color="blue.900"
              borderRadius="full"
            />
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