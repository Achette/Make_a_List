import React from 'react'
import { useMedia } from 'hooks'
import { useLoading } from 'contexts'
import { ListDetailProps } from 'models'
import { useParams } from 'react-router-dom'
import { getListById } from 'services/list-services'
import { Box, Flex, Text, VStack, Divider, useToast } from '@chakra-ui/react'
import {
  ListDetailTopBar,
  ListItems,
  TotalBar,
  BottomOptionsBar,
  ListDetailsMobileBar,
  ListProductDetails,
  ListSkeletons,
} from 'components'

export const ListDetail = () => {
  const toast = useToast()
  const { id } = useParams()
  const { isLoading, setIsLoading } = useLoading()
  const { isMobileOrTablet } = useMedia()
  const controller = new AbortController()
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
      setIsLoading(true)
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
    } finally {
      setIsLoading(false)
    }
  }, [setListDetails])

  React.useEffect(() => {
    fetchListDetails()

    return () => controller.abort()
  }, [])
  }, [])

  return (
    <VStack w="full" px={isMobileOrTablet ? '' : '3rem'}>
      <Flex w="full" justifyContent="space-between">
        {isMobileOrTablet && (
          <ListDetailsMobileBar listName={listDetails.name} />
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
              <ListProductDetails prod={prod} />

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

        {isLoading && !listDetails.productsList.length && <ListSkeletons />}
        {!isLoading && !listDetails.productsList.length && (
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
