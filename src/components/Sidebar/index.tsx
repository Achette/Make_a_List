import React from 'react'
import { VStack } from '@chakra-ui/react'
import { Navigation } from 'components/Navigation'


export type SidebarProps = {
  collapse: boolean
}

export const Sidebar = ({ collapse }: SidebarProps) => {
  return (
    <VStack w="full" h="100%" justifyContent="space-between">
      <Navigation collapse={collapse} />
    </VStack>
  )
}
