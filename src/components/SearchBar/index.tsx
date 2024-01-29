import React from 'react'
import { MdMenu } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'redux/store'
import { useSidebarCollapse } from 'contexts'
import { useNavigate } from 'react-router-dom'
import { getUser, getUserId, useMedia } from 'hooks'
import { fetchAboutMe, getAboutUser } from '../../redux/reducers/user'
import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Input,
  useToast,
} from '@chakra-ui/react'

export const SearchBar = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()

  // const [user, setUser] = React.useState<string>()
  const { isMobileOrTablet } = useMedia()

  const { collapse, setCollapse } = useSidebarCollapse()

  const user = useSelector(getAboutUser)

  const fetchUser = React.useCallback(async () => {
    const id = getUserId()
    try {
      // const response = await UserApi.findMe(id!)

      dispatch(fetchAboutMe(id!))
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
    fetchUser()
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
          name={user.name}
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
