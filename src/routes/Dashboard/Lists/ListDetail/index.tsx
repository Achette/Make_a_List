import React from 'react'
import { useMedia } from 'hooks'
import { colorSelector } from 'utils'
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
  useToast,
} from '@chakra-ui/react'

export type ListDetailProps = {
  name: string
  total: number
  shared: { id: string; name: string; email: string }[]
  created_by: { id: string; name: string; email: string }
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

  const toast = useToast()
  const navigate = useNavigate()

  const { isMobileOrTablet } = useMedia()

  const [listDetails, setListDetails] = React.useState<ListDetailProps>({
    name: '',
    total: 0,
    shared: [],
    created_by: {
      id: '',
      name: '',
      email: '',
    },
    productsList: [],
  })

  const fetchListDetails = React.useCallback(async () => {
    try {
      const response = await getListById(id)
      const data = await response.data
      const list = await data.list
      setListDetails(list)
    } catch (e) {
      toast({
        description: 'Não foi possível carregar os itens da lista.',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }, [setListDetails])

  const controller = new AbortController()

  React.useEffect(() => {
    fetchListDetails()

    return () => controller.abort()
  }, [fetchListDetails])

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

            <BottomDrawer listName={listDetails.name} />
          </Flex>
        )}
      </Flex>

      <ListDetailTopBar
        name={listDetails.name}
        shared={listDetails.shared}
        created_by={listDetails.created_by}
        fetchList={fetchListDetails}
      />

      <Flex
        w="full"
        h={isMobileOrTablet ? 'calc(100% - 13rem)' : 'calc(100% - 17rem)'}
        overflow="auto"
        flexDir="column"
      >
        {listDetails.productsList &&
          listDetails.productsList.map((prod) => (
            <Box key={prod.category} p="0.5rem" mb="0.5rem">
              <Flex w="full" justifyContent="space-between" alignItems="center">
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
              </Flex>

              <VStack alignItems="flex-start">
                {prod.products.map((product) => (
                  <ListItems
                    key={product.id}
                    id={product.id}
                    productName={product.name}
                    place={product.place}
                    price={+product.price}
                    quantity={product.quantity}
                    fetchList={fetchListDetails}
                  />
                ))}
              </VStack>
            </Box>
          ))}

        {!listDetails.productsList.length && (
          <Text
            margin="auto auto"
            fontSize={isMobileOrTablet ? '0.75rem' : '1rem'}
            fontWeight={500}
            color="blue.50"
          >
            Sem Produtos
          </Text>
        )}
      </Flex>

      {listDetails.productsList.length && (
        <TotalBar>{listDetails.total.toFixed(2).replace('.', ',')}</TotalBar>
      )}

      <Box pos="absolute" bottom="4.5rem" w="90%">
        <Divider orientation="horizontal" />
      </Box>
      {!isMobileOrTablet && (
        <BottomOptionsBar id={id} listName={listDetails.name} />
      )}
    </VStack>
  )
}
