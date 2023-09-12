import React from 'react'
import { VStack } from '@chakra-ui/react'
import { Navigation } from 'components/Navigation'

export const Sidebar = () => {
  return (
    <VStack w="full" h="100%" justifyContent="space-between">
      <Navigation />
    </VStack>
  )
}
