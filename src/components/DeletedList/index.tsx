/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { useMedia } from 'hooks'
import { stringToIcon } from 'utils'
import { IconType } from 'react-icons/lib'
import { MdRestore } from 'react-icons/md'
import { ListProps } from 'components/List'
import { Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react'

type DeletedListProps = Omit<ListProps, 'icon'> & {
  restore: (id: string) => Promise<void>
  icon: string | IconType
}

export const DeletedList = ({
  id,
  icon,
  bgColor,
  name,
  restore,
}: DeletedListProps) => {
  const { isMobileOrTablet } = useMedia()

  return (
    <Flex w="full" alignItems="center">
      <HStack
        w="full"
        h={isMobileOrTablet ? '3rem' : '4.25rem'}
        bg="gray.100"
        borderRadius="62.5rem"
        p={isMobileOrTablet ? '1rem' : '2rem'}
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Flex
            h={isMobileOrTablet ? '1.8rem' : '2.5rem'}
            w={isMobileOrTablet ? '1.8rem' : '2.5rem'}
            bg={bgColor}
            p=".75rem"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={stringToIcon(icon!) ?? undefined}
              h={isMobileOrTablet ? '1.15rem' : '1.5rem'}
              w={isMobileOrTablet ? '1.15rem' : '1.5rem'}
              color="whiteAlpha.900"
            />
          </Flex>
          <Text
            fontSize="1.0625rem"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            color="blue.900"
            ml="0.75rem"
          >
            {name}
          </Text>
        </Flex>
      </HStack>

      <VStack paddingLeft="1rem" cursor="pointer" onClick={() => restore(id)}>
        <Icon
          as={MdRestore}
          w="3rem"
          h="3rem"
          p="0.7rem"
          bg="blue.200"
          color="blue.600"
          borderRadius="full"
          title="Restaurar lista"
        />
      </VStack>
    </Flex>
  )
}
