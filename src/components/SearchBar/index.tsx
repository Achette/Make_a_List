import React from 'react'
import { MdMenu } from 'react-icons/md'
import { Avatar, Flex, HStack, IconButton, Input } from '@chakra-ui/react'

type SearchBarProps = {
  collapse: boolean
  handleCollapse: () => void
}

export const SearchBar = ({ handleCollapse }: SearchBarProps) => {

  return (
    <Flex w="full" h="3.5rem" flexDir="row">
      <HStack
        w="full"
        h="full"
        bg="gray.100"
        borderRadius="62.5rem"
        justifyContent="space-between"
        p="0 0.75rem"
      >
        <IconButton
          bg="transparent"
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          onClick={() => handleCollapse()}
        />
        <Input
          w="14rem"
          border="none"
          placeholder="Procurar nas suas listas"
          outline="none"
          _placeholder={{
            color: 'blue.900',
            fontWeight: '500',
            fontSize: '1rem',
          }}
          focusBorderColor="transparent"
        />
        <Avatar name="Igor Achette" w="1.75rem" h="1.75rem" />
      </HStack>
    </Flex>
  )
}
