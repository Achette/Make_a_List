import React from 'react'
import { DrawerNavigation } from './iconsList'
import { HiDotsVertical } from 'react-icons/hi'
import {
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
        <DrawerContent>
          <DrawerBody>
            <DrawerNavigation />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
