import React from 'react'
import { useMedia } from 'hooks'
import { iconToString } from 'utils'
import { useNavigate } from 'react-router-dom'
import { newGroup } from 'services/group-services'
import { ColorSelect, IconSelect } from 'components'
import { Box, Flex, Text, Input, Button, useToast } from '@chakra-ui/react'
import { Box, Flex, Text, Input, Button, useToast } from '@chakra-ui/react'

export const NewGroup = () => {
  const toast = useToast()
  const toast = useToast()
  const navigate = useNavigate()
  const { isDesktop, isMobileOrTablet, isTablet } = useMedia()

  const [name, setListName] = React.useState<string>('')
  const [color, setColor] = React.useState<string>('')
  const [icon, setIcon] = React.useState<string>('')

  const handleGetColor = (color: string) => {
    setColor(color)
  }

  const handleGetIcon = (icon?: number) => {
    const parsedIcon = iconToString(icon)
    if (parsedIcon) return setIcon(parsedIcon)
  }

  const handleCreateGroup = async () => {
    try {
      await newGroup(name, color, icon)
      toast({
        description: `Grupo ${name} foi criado com sucesso!`,        
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
      navigate('/groups')
    } catch (e) {
      toast({
        description: 'Não foi possível criar o grupo.',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
      toast({
        description: 'Não foi possível criar o grupo.',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }

  return (
    <Box
      padding="0.75rem"
      margin={isDesktop || isTablet ? 'auto auto' : '0 auto'}
      maxW="56rem"
    >
      <Flex
        w="full"
        fontSize="1.0625rem"
        fontWeight={500}
        color="blue.900"
        justifyContent={isDesktop ? 'space-between' : 'space-between'}
        alignItems={isDesktop ? 'center' : 'unset'}
        flexDirection={isMobileOrTablet ? 'column-reverse' : 'row'}
      >
        <Text color="blue.900" fontSize="2.215rem" fontWeight={700}>
          Novo grupo
        </Text>
        <Flex
          flexDirection={isDesktop ? 'column-reverse' : 'row'}
          justifyContent={isDesktop ? 'flex-end' : 'space-between'}
          alignItems={isDesktop ? 'center' : 'unset'}
          gap="0.625rem"
        >
          <Button
            w={isDesktop ? '10rem' : 'auto'}
            w={isDesktop ? '10rem' : 'auto'}
            bgColor="transparent"
            color="red.400"
            fontSize="1.0625rem"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            px="0"
            onClick={() => navigate(-1)}
          >
            Cancelar
          </Button>{' '}
          <Button
            w={isDesktop ? '10rem' : 'auto'}
            bgColor={isDesktop ? 'blue.900' : 'transparent'}
            color={isDesktop ? 'whiteAlpha.900' : 'blue.900'}
            fontSize="1.0625rem"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            px="0"
            _hover={{
              bgColor: isMobileOrTablet ? 'transparent' : 'blue.500',
            }}
            _hover={{
              bgColor: isMobileOrTablet ? 'transparent' : 'blue.500',
            }}
            onClick={() => handleCreateGroup()}
          >
            Criar grupo
          </Button>
        </Flex>
      </Flex>

      <Input
        mt={5}
        variant="flushed"
        placeholder="Nome"
        color="blue.900"
        maxWidth="25rem"
        _placeholder={{ color: 'blue.900', opacity: '0.6' }}
        value={name}
        onChange={(e) => setListName(e.target.value)}
        required
      />

      <Flex
        w="full"
        flexDirection={isDesktop ? 'row' : 'column'}
        justifyContent={isDesktop ? 'space-between' : 'center'}
        alignItems="baseline"
        gap={isMobileOrTablet ? '1rem' : '2.5rem'}
      >
        <Box>
          <Box mt={5}>
            <ColorSelect getColor={handleGetColor} />
          </Box>
        </Box>

        <Box>
          <Box my={5}>
            <IconSelect getIcon={handleGetIcon} />
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
