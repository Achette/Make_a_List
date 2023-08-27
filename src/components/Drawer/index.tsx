import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'

export const LateralDrawew = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box>
        <IconButton
          aria-label="hamburguer"
          onClick={onOpen}
          icon={<HamburgerIcon />}
        />

        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />

          <DrawerContent>
            DRAWER TESTE
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}
