import React from 'react'
import { Logo } from '../Logo'
import { useMedia } from '../../hooks/useMedia'
import { ArrowBackIcon, HamburgerIcon, Icon } from '@chakra-ui/icons'
import {
  MdBookmarkBorder,
  MdDeleteOutline,
  MdHelpOutline,
  MdList,
  MdOutlineArchive,
  MdOutlineGroup,
  MdOutlineSettings,
  MdPowerSettingsNew,
} from 'react-icons/md'
import {
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Text,
  HStack,
  VStack,
  DrawerFooter,
} from '@chakra-ui/react'


export const LateralDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { isDesktop } = useMedia()

  return (
    <>
      <Box w="fit-content">
        {!isDesktop ? (
          <IconButton
            bg="transparent"
            aria-label="hamburguer"
            onClick={onOpen}
            icon={<HamburgerIcon />}
          />
        ) : null}

        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="left"
          variant="primary"
        >
          <DrawerContent>
            <DrawerCloseButton color="white.400">
              <ArrowBackIcon w={5} h={5} />
            </DrawerCloseButton>
            <DrawerHeader display="flex" mt={12}>
              <Logo />
            </DrawerHeader>

            <DrawerBody>
              <VStack alignItems="flex-start" gap={6}>
                <HStack gap={4}>
                  <Icon as={MdList} color="white" w={8} h={8} />
                  <Text color="white" fontSize="xl">
                    Listas
                  </Text>
                </HStack>
                <HStack gap={4}>
                  <Icon as={MdOutlineGroup} color="white" w={8} h={8} />
                  <Text color="white" fontSize="xl">
                    Grupos
                  </Text>
                </HStack>
                <HStack gap={4}>
                  <Icon as={MdBookmarkBorder} color="white" w={8} h={8} />
                  <Text color="white" fontSize="xl">
                    Modelos
                  </Text>
                </HStack>
                <HStack gap={4}>
                  <Icon as={MdOutlineArchive} color="white" w={8} h={8} />
                  <Text color="white" fontSize="xl">
                    Arquivadas
                  </Text>
                </HStack>
                <HStack gap={4}>
                  <Icon as={MdDeleteOutline} color="white" w={8} h={8} />
                  <Text color="white" fontSize="xl">
                    Lixeira
                  </Text>
                </HStack>
                <HStack gap={4}>
                  <Icon as={MdHelpOutline} color="white" w={8} h={8} />
                  <Text color="white" fontSize="xl">
                    Ajuda e Feedback
                  </Text>
                </HStack>
                <HStack gap={4}>
                  <Icon as={MdOutlineSettings} color="white" w={8} h={8} />
                  <Text color="white" fontSize="xl">
                    Configurações
                  </Text>
                </HStack>
              </VStack>
            </DrawerBody>

            <DrawerFooter placeContent="flex-start">
              <HStack gap={4}>
                <Icon as={MdPowerSettingsNew} color="white" w={8} h={8} />
                <Text color="white" fontSize="xl">
                  Sair da Conta
                </Text>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}
