import React from 'react'
import { useMedia } from 'hooks'
import { iconToString } from 'utils'
import { useNavigate } from 'react-router-dom'
import { ColorSelect, IconSelect } from 'components'
import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import { newGroup } from 'services/group-services'

export const NewGroup = () => {
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
      navigate('/groups')
    } catch (e) {
      console.error(e)
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
            type="button"
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
            type="button"
            w={isDesktop ? '10rem' : 'auto'}
            bgColor={isDesktop ? 'blue.900' : 'transparent'}
            color={isDesktop ? 'whiteAlpha.900' : 'blue.900'}
            fontSize="1.0625rem"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            px="0"
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
