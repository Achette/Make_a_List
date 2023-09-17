import React from 'react'
import { useMedia } from 'hooks'
import { listMock } from 'mock/listmock'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BottomDrawer, ListDetailTopBar, ListItems } from 'components'
import {
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  Link as LinkChakra,
} from '@chakra-ui/react'

export const ListDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { isMobile } = useMedia()

  const list = listMock.productLists[Number(id)]
  const { products } = list

  return (
    <VStack w="full" px={isMobile ? '' : '3rem'}>
      <Flex w="full" justifyContent="space-between">
        {isMobile && (
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Flex>
              <Icon
                as={MdOutlineArrowBackIos}
                w="1.3125rem"
                h="1.3125rem"
                color="blue.900"
              />
              <LinkChakra
                as={Link}
                color="blue.900"
                fontSize="1.0625rem"
                lineHeight="1.375rem"
                letterSpacing="-0.02563rem"
                _hover={{ textDecoration: 'none', fontWeight: 600 }}
                onClick={() => navigate(-1)}
              >
                <Text>Listas</Text>
              </LinkChakra>
            </Flex>

            <BottomDrawer />

          </Flex>
        )}
      </Flex>

      <ListDetailTopBar>{list.name}</ListDetailTopBar>

      <Flex w="full" h="auto" flexDir="column">
        {products.map((item, index) => (
          <Box key={index} p="0.5rem" mb="0.5rem">
            <Text mb="0.5rem">{item.category}</Text>
            <VStack alignItems="flex-start">
              {item.products.map((prod) => (
                <ListItems
                  key={prod.id}
                  productName={prod.productName}
                  place={prod.place}
                  price={prod.price}
                  quantity={prod.quantity}
                />
              ))}
            </VStack>
          </Box>
        ))}
      </Flex>
    </VStack>
  )
}
