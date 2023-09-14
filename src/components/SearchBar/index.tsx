import React from 'react'
import { MdMenu } from 'react-icons/md'
import { SidebarContext } from 'contexts'
import { Avatar, Flex, HStack, IconButton, Input } from '@chakra-ui/react'
import { useMedia } from 'hooks'

export const SearchBar = () => {
  const { collapse, setCollapse } = React.useContext(SidebarContext)

  const { isMobile } = useMedia()

  return (
    <Flex w="full" h="3.5rem" flexDir="row">
      <HStack
        w="full"
        h="full"
        bg="gray.100"
        borderRadius="62.5rem"
        justifyContent="space-between"
        p="0 1rem"
      >
        <IconButton
          bg="transparent"
          borderRadius="full"
          color="blue.900"
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          onClick={() => setCollapse(!collapse)}
        />
        <Input
          maxW={isMobile ? '14rem' : '36rem'}
          border="none"
          placeholder="Procurar nas suas listas"
          outline="none"
          color="blue.900"
          fontWeight="600"
          _placeholder={{
            color: 'blue.900',
            fontWeight: '500',
            fontSize: '1rem',
            textAlign: 'center',
          }}
          focusBorderColor="transparent"
        />
        <Avatar name="Igor Achette" w="1.75rem" h="1.75rem" />
      </HStack>
    </Flex>
  )
}
