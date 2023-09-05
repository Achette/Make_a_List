import React from 'react'
import { Logo } from '../../components'
import { useMedia } from '../../hooks/useMedia'
import { Sidebar } from '../../components/Sidebar'
import { MdArrowBack, MdMenu } from 'react-icons/md'
import { CollapsedLogo } from '../../components/CollapsedLogo'
import { FooterNavigation } from '../../components/Navigation'
import { Flex, Icon, IconButton, Text, VStack } from '@chakra-ui/react'

export const Dashboard = () => {
  const [collapse, setCollapse] = React.useState(false)

  const { isMobile } = useMedia()

  return (
    <Flex
      w="full"
      h="100vh"
      bg="white"
      padding={isMobile ? 'none' : 2}
      position={'relative'}
      transition="ease-in-out .2s"
    >
      <Flex
        as="aside"
        h="full"
        maxW={!isMobile ? (collapse ? 350 : 100) : 350}
        w={isMobile ? '350px' : 'full'}
        bg="blue.900"
        alignItems="start"
        padding={!collapse ? '1.5rem 1.5rem 0 1rem' : '1.5rem 1.5rem 0 1.5rem'}
        flexDirection="column"
        justifyContent="space-between"
        borderRadius="0.5rem"
        mr="0.5rem"
        position={isMobile ? 'absolute' : 'inherit'}
        display={isMobile && !collapse ? 'none' : 'inherit'}
        zIndex={1}
        transition="ease-in-out .2s"
      >
        <VStack h="100%" gap={6} paddingTop={isMobile ? 0 : 6}>
          {isMobile && (
            <Flex w="full" justifyContent={'flex-end'}>
              <Icon
                as={MdArrowBack}
                color="white"
                w={4}
                h={4}
                onClick={() => setCollapse(!collapse)}
              />
            </Flex>
          )}
          {collapse ? <Logo /> : <CollapsedLogo />}
          <Sidebar collapse={collapse} />
          <FooterNavigation collapse={collapse} />
        </VStack>
      </Flex>

      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="0.5rem"
      >
        <IconButton
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          position="absolute"
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />

        <Text fontSize={100} color="gray.300">
          Main
        </Text>
      </Flex>
    </Flex>
  )
}
