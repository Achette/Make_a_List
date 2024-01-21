import React from 'react'
import { getUser } from 'hooks'
import { MdMenu } from 'react-icons/md'
import { useSidebarCollapse } from 'contexts'
import { useNavigate } from 'react-router-dom'
import { Avatar, Flex, HStack, IconButton, Input } from '@chakra-ui/react'

export const SearchBar = () => {
  const navigate = useNavigate()

  const [user, setUser] = React.useState<string>()

  const { collapse, setCollapse } = useSidebarCollapse()

  React.useEffect(() => {
    setUser(getUser() ?? '')
  }, [])

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
          w="14rem"
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
        <Avatar
          name={user}
          w="1.75rem"
          h="1.75rem"
          color="white"
          cursor="pointer"
          onClick={() => navigate('/about-me')}
        />
      </HStack>
    </Flex>
  )
}
