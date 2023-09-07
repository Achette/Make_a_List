import React from 'react'
import { useMedia } from '../../hooks'
import { Logo } from '../../components'
import { MdArrowBack } from 'react-icons/md'
import { Sidebar } from '../../components/Sidebar'
import { Flex, Icon, VStack } from '@chakra-ui/react'
import { SearchBar } from '../../components/SearchBar'
import { CollapsedLogo } from '../../components/CollapsedLogo'
import { FooterNavigation } from '../../components/Navigation'

export const Dashboard = () => {
  const [collapse, setCollapse] = React.useState(false)

  const { isMobile } = useMedia()


  const handleCollapseComponent = () => {
    setCollapse(() => !collapse)
  }

  return (
    <Flex
      w="full"
      h="100vh"
      bg="white"
      padding={isMobile ? 'none' : 1}
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
        p="1.75rem"
        flexDirection="row"
        position="relative"
        borderRadius="0.5rem"
        border="1px solid orange"
      >
        <SearchBar
          collapse={collapse}
          handleCollapse={handleCollapseComponent}
        />
      </Flex>
    </Flex>
  )
}
