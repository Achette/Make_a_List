import React from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Checkbox, Flex, Icon, Text } from '@chakra-ui/react'

type ListItemsProps = {
  productName: string
  price: number
  place: string
  quantity: number
}

export const ListItems = ({ productName, price, quantity, place }: ListItemsProps) => {
  return (
    <Flex w="full" justifyContent="space-around">
      <Checkbox size="lg" flex={1}>
        {`${productName}\n${place}`}
      </Checkbox>
      <Text flex={1}>R${price}</Text>
      <Text flex={1}>{quantity}</Text>
      <Icon as={RiDeleteBin6Fill} />
    </Flex>
  )
}
