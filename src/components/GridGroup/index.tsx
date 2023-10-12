import React from 'react'
import { useMedia } from 'hooks'
import { ListProps } from 'components/List'
import { useNavigate } from 'react-router-dom'
import { Box, Center, Flex, Icon, Text, VStack } from '@chakra-ui/react'

export const GridGroup = ({ id, icon, bgColor, name }: ListProps) => {
  const { isMobileOrTablet } = useMedia()
  const navigate = useNavigate()

  return (
    <Box
      bg="gray.100"
      height="12rem"
      borderRadius="1.2rem"
      onClick={() => navigate(`/groups/${id}`)}
    >
      <Center h="100%" w="100%" color="white">
        <VStack spacing={4} direction="column">
          <Flex
            h={isMobileOrTablet ? '4rem' : '4.5rem'}
            w={isMobileOrTablet ? '4rem' : '4.5rem'}
            bg={bgColor}
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={icon}
              h={isMobileOrTablet ? '2.15rem' : '2.5rem'}
              w={isMobileOrTablet ? '2.15rem' : '2.5rem'}
              color="whiteAlpha.900"
            />
          </Flex>

          <Text
            fontSize="1.0625rem"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            color="blue.900"
          >
            {name}
          </Text>
        </VStack>
      </Center>
    </Box>
  )
}
