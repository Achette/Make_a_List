import React from 'react'
import { useMedia } from 'hooks'
import { iconToString } from 'utils'
import { useNavigate } from 'react-router-dom'
import { newList } from 'services/list-services'
import { ColorSelect, IconSelect } from 'components'
import { Box, Flex, Text, Input, Button, Divider } from '@chakra-ui/react'

export const NewList = () => {
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

  const handleCreateList = async () => {
    try {
      await newList(name, color, icon)
      navigate('/lists')
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
          Nova lista
        </Text>
        <Flex
          flexDirection={isDesktop ? 'column-reverse' : 'row'}
          justifyContent={isDesktop ? 'flex-end' : 'space-between'}
          alignItems={isDesktop ? 'center' : 'unset'}
          gap="0.625rem"
        >
          <Button
           
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
            _hover={{ bgColor: !isDesktop ? 'transparent' : 'blue.500' }}
            color={isDesktop ? 'whiteAlpha.900' : 'blue.900'}
            fontSize="1.0625rem"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            px="0"
            onClick={() => handleCreateList()}
          >
            Criar Lista
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

      <Divider orientation="horizontal" />

      <Text mt={5} textAlign="center" color="blue.900">
        ou
      </Text>

      <Flex justifyContent="center" mt={5}>
        <Button variant="link" color="blue.900" type="button">
          Criar a partir de um modelo
        </Button>
      </Flex>
    </Box>
  )
}
