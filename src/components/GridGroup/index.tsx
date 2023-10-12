import React from 'react'
import { useMedia } from 'hooks'
import { Link } from 'react-router-dom'
import { ListProps } from 'components/List'
import {
  Box,
  Center,
  Flex,
  Icon,
  Text,
  VStack,
  Link as LinkChakra,
} from '@chakra-ui/react'

export const GridGroup = ({ id, icon, bgColor, name }: ListProps) => {
  const { isMobileOrTablet } = useMedia()

  return (
    <LinkChakra
      w="full"
      h={isMobileOrTablet ? '3rem' : '4.25rem'}
      as={Link}
      to={`/groups/${id}`}
      _hover={{ color: 'blue.400', stroke: 'blue.400' }}
    >
      <Box bg="gray.100" height="12rem" borderRadius="1.2rem">
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
    </LinkChakra>
  )
}
