import React from 'react'
import { useMedia } from 'hooks'
import { getListById } from 'services/list-services'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  BottomDrawer,
  ListDetailTopBar,
  ListItems,
  TotalBar,
  BottomOptionsBar,
} from 'components'
import {
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  Link as LinkChakra,
  Divider,
} from '@chakra-ui/react'

type ListDetailProps = {
  name: string
  total: number
  shared: { id: string; name: string; email: string }[]
  productsList: {
    category: string
    products: {
      id: string
      name: string
      place: string
      price: number
      quantity: number
    }[]
  }[]
}

export const ListDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [listDetails, setListDetails] = React.useState<ListDetailProps>({
    name: '',
    total: 0,
    shared: [],
    productsList: [],
  })

  const { isMobileOrTablet } = useMedia()

  React.useEffect(() => {
    getListById(id).then((res) => setListDetails(res.data.list))
  }, [])

  const { name, total, shared, productsList } = listDetails

  return (
    <VStack w="full" px={isMobileOrTablet ? '' : '3rem'}>
      <Flex w="full" justifyContent="space-between">
        {isMobileOrTablet && (
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

      <ListDetailTopBar name={name} shared={shared} />

      <Flex w="full" h="auto" flexDir="column">
        {productsList &&
          productsList.map((prod) => (
            <Box key={prod.category} p="0.5rem" mb="0.5rem">
              <Text mb="0.5rem">{prod.category}</Text>
              <VStack alignItems="flex-start">
                {prod.products.map((product) => (
                  <ListItems
                    key={product.id}
                    productName={product.name}
                    place={product.place}
                    price={product.price}
                    quantity={product.quantity}
                  />
                ))}
              </VStack>
            </Box>
          ))}
      </Flex>

      <TotalBar>{total}</TotalBar>

      <Box pos="absolute" bottom="4.5rem" w="90%">
        <Divider orientation="horizontal" />
      </Box>
      {!isMobileOrTablet && <BottomOptionsBar />}
    </VStack>
  )
}
