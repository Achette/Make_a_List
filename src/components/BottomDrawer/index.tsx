import React from 'react'
import { DrawerNavigation } from './iconsList'
import { HiDotsVertical } from 'react-icons/hi'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Icon,
  useDisclosure,
} from '@chakra-ui/react'

export const BottomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex>
      <Icon
        as={HiDotsVertical}
        w="1.5rem"
        h="1.5rem"
        color="blue.900"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        variant="primary"
      >
        <Box bgColor="blue.900">
          <DrawerContent>
            <DrawerBody>
              <DrawerNavigation />
            </DrawerBody>
          </DrawerContent>
        </Box>
      </Drawer>
    </Flex>
  )
}
