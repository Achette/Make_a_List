import React from 'react'
import { useMedia } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { NewProduct } from 'components/NewProduct'
import { Button, Divider, Flex, HStack, Text, Avatar } from '@chakra-ui/react'
import { AddUserList } from 'components/AddUserList'

export interface ListDetailTopBarProps {
  name: string
  shared?: { id: string; name: string; email: string }[]
  created_by: { id: string; name: string; email: string }
  fetchList: () => Promise<void>
}

export const ListDetailTopBar = ({
  name,
  shared,
  created_by,
  fetchList,
}: ListDetailTopBarProps) => {
  const [modal, setModal] = React.useState<boolean>(false)
  const [modalUser, setModalUser] = React.useState<boolean>(false)
  const { isMobileOrTablet } = useMedia()
  const navigate = useNavigate()

  return (
    <>
      <Flex w="full" justifyContent="space-between">
        <Text
          fontSize="2.125rem"
          fontWeight={700}
          lineHeight="2.5625rem"
          letterSpacing="0.025rem"
          color="blue.900"
        >
          {name}
        </Text>

        <HStack
          w="fit-content"
          justifyContent={isMobileOrTablet ? 'flex-start' : 'flex-end'}
          alignItems="center"
          flexDirection="row"
        >
          <Button
            px={isMobileOrTablet ? '0' : '1rem'}
            fontSize={isMobileOrTablet ? '1rem' : '1.0625rem'}
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            bgColor={isMobileOrTablet ? 'transparent' : 'blue.900'}
            color={isMobileOrTablet ? 'blue.900' : 'white'}
            borderRadius="0.625rem"
            _hover={{ bgColor: isMobileOrTablet ? 'transparent' : 'blue.500' }}
            onClick={() => setModal(true)}
          >
            Adicionar Produtos
          </Button>

          <NewProduct modal={modal} setModal={setModal} fetchList={fetchList} />

          {!isMobileOrTablet && (
            <Button
              bgColor="transparent"
              color="red.400"
              fontSize="1.0625rem"
              fontWeight={500}
              lineHeight="1.375rem"
              letterSpacing="-0.02563rem"
              onClick={() => navigate(-1)}
            >
              Fechar
            </Button>
          )}
        </HStack>
      </Flex>

      <AddUserList modal={modalUser} setModal={setModalUser} shared={shared} fetchList={fetchList} created_by={created_by} />

      <Flex
        w="full"
        align="center"
        justifyContent="space-between"
        flexDirection="row"
        gap="0.5rem"
        cursor='pointer'
        onClick={() => setModalUser(true)}
      >
        <Text
          whiteSpace="nowrap"
          fontSize="1.0625rem"
          color="gray.400"
          fontWeight={400}
          lineHeight="1.375rem"
          letterSpacing="-0.02563rem"
        >
          Compartilhado com
        </Text>

        <Divider />

        {shared && (
          <Flex align="start" h="1.875rem" position="relative">
            {shared.slice(0, 5).map((item, index) => (
              <Avatar
                key={index}
                w={isMobileOrTablet ? '2rem' : '2.25rem'}
                h={isMobileOrTablet ? '2rem' : '2.25rem'}
                name={item.name}
                color="whiteAlpha.900"
                border="none"
                title={item.name}
                position="absolute"
                right={`${(index * 22) / 16}rem`}
                zIndex="index"
              />
            ))}
          </Flex>
        )}
      </Flex>
    </>
  )
}
