import React from 'react'
import { Box } from '@chakra-ui/react'
import { AboutMeBar, ChangePassword } from 'components'

export const AboutMe = () => {
  return (
    <Box w="full" p="0.5rem">
      <AboutMeBar />
      <ChangePassword />
    </Box>
  )
}
