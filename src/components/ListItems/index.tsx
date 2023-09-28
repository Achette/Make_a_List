import React from 'react'
import { useMedia } from 'hooks'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Checkbox, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react'

type ListItemsProps = {
  productName: string
  price: number
  place: string
  quantity: number
}

export const ListItems = ({
  productName,
  price,
  quantity,
  place,
}: ListItemsProps) => {
  const { isMobileOrTablet } = useMedia()

  return (
    <Flex w="full" justifyContent="space-between" alignItems="center">
      <HStack flex={1}>
        <Checkbox size="lg" />
        <VStack alignItems="flex-start">
          <Text
            fontSize="1.0625rem"
            fontWeight={400}
            lineHeight="1.375rem"
            letterSpacing="-0.02563"
            mb="-0.55rem"
          >
            {productName}
          </Text>
          <Text
            fontSize="0.755rem"
            fontWeight={200}
            lineHeight="1.375rem"
            letterSpacing="-0.02563"
          >
            {place}
          </Text>
        </VStack>
      </HStack>

      <Flex
        w="full"
        flex={isMobileOrTablet ? 1 : 2}
        justifyContent="space-between"
      >
        <Text
          fontSize="1rem"
          fontWeight={400}
          lineHeight="1.375rem"
          letterSpacing="-0.02563"
        >
          R${price}
        </Text>
        <Text
          fontSize="1rem"
          fontWeight={400}
          lineHeight="1.375rem"
          letterSpacing="-0.02563"
        >
          {quantity}
        </Text>

        <Icon as={RiDeleteBin6Fill} w="2rem" h="1.25rem" color="red.400" />
      </Flex>
    </Flex>
  )
}
