import React from 'react'
import { useMedia } from 'hooks'
import { Link } from 'react-router-dom'
import { useSidebarCollapse } from 'contexts'
import { IconType } from 'react-icons/lib'
import { Box, Link as LinkChakra, ListIcon, Text } from '@chakra-ui/react'

type NavItemProps = {
  item: {
    type: string
    label: string
    icon: IconType
    path: string
  }
  isActive: boolean
}

export const NavItem = ({ item, isActive }: NavItemProps) => {
  const { icon, label } = item

  const { collapse, setCollapse } = useSidebarCollapse()

  const { isDesktop } = useMedia()

  return (
    <Box display="flex" alignItems="center" my={6} justifyContent="center">
      <LinkChakra
        as={Link}
        to={item.path}
        gap={4}
        display="flex"
        alignItems="center"
        _hover={{ textDecoration: 'none', color: 'whiteAlpha.900' }}
        fontWeight="medium"
        color={isActive ? 'whiteAlpha.900' : 'white.400'}
        w="full"
        justifyContent={!collapse ? 'center' : ''}
        title={label}
        onClick={() => setCollapse(false)}
      >
        <ListIcon
          mt={isDesktop ? '8rem' : 0}
          as={icon}
          color="white"
          w={8}
          h={8}
          m="0"
        />
        {collapse && <Text fontSize="xl">{label}</Text>}
      </LinkChakra>
    </Box>
  )
}
