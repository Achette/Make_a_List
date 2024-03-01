import React from 'react'
import { useMedia } from 'hooks'
import { useLoading } from 'contexts'
import { colorSelector } from 'utils'
import { ProductDetailProps } from 'models'
import { Flex, Text } from '@chakra-ui/react'
import { ListSkeletons } from 'components/Skeleton'

export const ListProductDetails = ({ prod }: ProductDetailProps) => {
  const { isMobileOrTablet } = useMedia()
  const { isLoading } = useLoading()

  return (
    <Flex w="full" justifyContent="space-between" alignItems="center">
      {isLoading ? (
        <ListSkeletons />
      ) : (
        <>
          <Text
            color={colorSelector(prod.category)}
            fontStyle="italic"
            fontSize="1.0625rem"
            fontWeight={500}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            flex={isMobileOrTablet ? 3 : 'none'}
          >
            {prod.category}
          </Text>
          <Text
            color={colorSelector(prod.category)}
            fontStyle="italic"
            fontSize="0.75rem"
            fontWeight={300}
            lineHeight="1.375rem"
            flex={isMobileOrTablet ? 1 : 'none'}
          >
            Preço
          </Text>
          <Text
            color={colorSelector(prod.category)}
            fontStyle="italic"
            fontSize="0.75rem"
            fontWeight={300}
            lineHeight="1.375rem"
            letterSpacing="-0.02563rem"
            textAlign="center"
            flex={isMobileOrTablet ? 1 : 'none'}
          >
            Qtd.
          </Text>
          <Text visibility="hidden" flex={isMobileOrTablet ? 1 : 'none'}>
            icon
          </Text>
        </>
      )}
    </Flex>
  )
}
