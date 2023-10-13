import React from 'react'
import { useMedia } from 'hooks'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { deleteProduct } from 'services/list-services'
import {
  Checkbox,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react'

type ListItemsProps = {
  id: string
  productName: string
  price: number
  place: string
  quantity: number
  fetchList: () => Promise<void>
}

export const ListItems = ({
  id,
  productName,
  price,
  quantity,
  place,
  fetchList,
}: ListItemsProps) => {
  const { isMobileOrTablet } = useMedia()
  const toast = useToast()

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id)
    } catch (e: unknown) {
      const errorMessage =
        (e as any).response?.data?.error || 'Ocorreu um erro desconhecido'
      toast({
        description: errorMessage,
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
    fetchList()
  }

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

        <Icon
          as={RiDeleteBin6Fill}
          w="2rem"
          h="1.25rem"
          color="red.400"
          cursor="pointer"
          title="excluir produto"
          onClick={() => handleDeleteProduct(id)}
        />
      </Flex>
    </Flex>
  )
}
