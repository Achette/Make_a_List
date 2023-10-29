import React from 'react'
import { Box } from '@chakra-ui/react'
import { UserApi } from 'services/auth-services'
import { AboutMeBar, ChangePassword } from 'components'

export const AboutMe = () => {
  const [user, setUser] = React.useState({
    name: 'Igor Achette',
    email: 'igor.achette@teste.com',
  })

  const FindMe = React.useCallback(async () => {
    try {
      const response = await UserApi.findMe()
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }, [])

  React.useEffect(() => {
    FindMe()
  }, [])

  return (
    <Box w="full" p="1rem">
      <AboutMeBar name={user.name} email={user.email} />
      <ChangePassword />
    </Box>
  )
}
