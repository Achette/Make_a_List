import React from 'react'
import { Logo } from '../Logo'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

export const LateralDrawew = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box w="fit-content">
        <IconButton
          bg="transparent"
          aria-label="hamburguer"
          onClick={onOpen}
          icon={<HamburgerIcon />}
        />

        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="left"
          variant="primary"
        >
          <DrawerContent>
            <DrawerCloseButton color="white.400" />
            <DrawerHeader display="flex" mt={8}>
              <Logo />
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}
