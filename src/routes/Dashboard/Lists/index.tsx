import React from 'react'
import { useMedia } from 'hooks'
import { SearchBar } from 'components'
import { AddButton } from 'components/AddButton'
import { Box, Flex, Text } from '@chakra-ui/react'

export const Lists = () => {
  const { isMobile } = useMedia()

  return (
    <Box w="full" h="full">
      <SearchBar />
      <Flex h="calc(100% - 3.5rem)" alignItems="center" justifyContent="center">
        <Text
          fontSize={isMobile ? '0.75rem' : '1rem'}
          fontWeight={500}
          color="blue.50"
        >
          Sem Listas
        </Text>
        <AddButton />
      </Flex>
    </Box>
  )
}
