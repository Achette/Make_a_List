import React from 'react'
import { ListDetailMobileProps } from 'models'
import { Link, useNavigate } from 'react-router-dom'
import { BottomDrawer } from 'components/BottomDrawer'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Flex, Icon, Link as LinkChakra, Text } from '@chakra-ui/react'

export const ListDetailsMobileBar = ({ listName }: ListDetailMobileProps) => {
  const navigate = useNavigate()
  return (
    <Flex w="full" justifyContent="space-between" alignItems="center">
      <Flex>
        <Icon
          as={MdOutlineArrowBackIos}
          w="1.3125rem"
          h="1.3125rem"
          color="blue.900"
        />
        <LinkChakra
          as={Link}
          color="blue.900"
          fontSize="1.0625rem"
          lineHeight="1.375rem"
          letterSpacing="-0.02563rem"
          _hover={{ textDecoration: 'none', fontWeight: 600 }}
          onClick={() => navigate(-1)}
        >
          <Text>Listas</Text>
        </LinkChakra>
      </Flex>

      <BottomDrawer listName={listName} />
    </Flex>
  )
}
