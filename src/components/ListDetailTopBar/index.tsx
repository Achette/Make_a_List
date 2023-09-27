import React from 'react'
import { useMedia } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { Button, Divider, Flex, HStack, Text, Avatar } from '@chakra-ui/react'


interface AddProductButtonProps {
  children: React.ReactNode;
  shared: Array<string>;
}

export const ListDetailTopBar = ({ children, shared }: AddProductButtonProps) => {
  const { isMobile } = useMedia()
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
          {children}
        </Text>

        <HStack
          w="fit-content"
          justifyContent={isMobile ? 'flex-start' : 'flex-end'}
          alignItems="center"
          flexDirection="row"
        >
          <Button
            px={isMobile ? '0' : '1rem'}
            fontSize={isMobile ? '1rem' : '1.0625rem'}
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            bgColor={isMobile ? 'transparent' : 'blue.900'}
            color={isMobile ? 'blue.900' : 'white'}
            borderRadius="0.625rem"
            _hover={{ bgColor: isMobile ? 'transparent' : 'blue.500' }}
          >
            Adicionar Produtos
          </Button>

          {!isMobile && (
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



      <Flex w="full" align='center' justifyContent="space-between" flexDirection="row">
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
          <Flex align="start" h="30px" style={{ position: "relative" }}>
            {shared.slice(0, 5).map((item, index) => (
              <Avatar
                key={index}
                w={isMobile ? '2rem' : '2.25rem'}
                h={isMobile ? '2rem' : '2.25rem'}
                name={item}
                color="whiteAlpha.900"
                border="none"
                title={item}
                style={{
                  position: "absolute",
                  right: `${index * 22}px`,
                  zIndex: index,
                }}
              />
            ))}
          </Flex>

        )}
      </Flex >
    </>
  )
}
