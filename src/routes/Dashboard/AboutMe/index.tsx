import React from 'react'
import { getUserId, useMedia } from 'hooks'
import { Box, useToast } from '@chakra-ui/react'
import { UserApi } from 'services/auth-services'
import { AboutMeBar, ChangePassword } from 'components'

export const AboutMe = () => {
  const toast = useToast()
  const { isMobileOrTablet } = useMedia()

  const [user, setUser] = React.useState({
    name: '',
    email: '',
  })

  const FindMe = React.useCallback(async () => {
    const id = getUserId()

    try {
      const response = await UserApi.findMe(id!)
      setUser({
        ...user,
        name: response.data.users[0].name,
        email: response.data.users[0].email,
      })
    } catch (e) {
      toast({
        description: 'Erro ao carregar dados do usuário',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }, [])

  React.useEffect(() => {
    FindMe()
  }, [])

  return (
    <Box w="full" p="0.5rem">
      <AboutMeBar name={user.name} email={user.email} />
      <ChangePassword />
    </Box>
  )
}
