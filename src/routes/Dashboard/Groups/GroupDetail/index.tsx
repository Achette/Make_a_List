import React from 'react'
import { useMedia } from 'hooks'
import { stringToIcon } from 'utils'
import { getGroupById } from 'services/group-services'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  GroupList,
  GroupDetailTopBar,
  DeleteGroupButton,
} from 'components'
import {
  Flex,
  Icon,
  VStack,
  Link as LinkChakra,
  Text,
  Box,
} from '@chakra-ui/react'

type GroupDetailProps = {
  name: string
  color: string
  icon: string
  created_by: { id: string; name: string; email: string }
  user_list: { id: string; name: string; email: string }[]
  purchase_list: {
    id: string
    name: string
    color: string
    icon: string
    total: number
    shared: []
  }[]
}

export const GroupDetail = () => {
  const { id } = useParams()

  const { isMobileOrTablet } = useMedia()
  const navigate = useNavigate()

  const [groupDetails, setGroupDetails] = React.useState<GroupDetailProps>({
    name: '',
    color: '',
    icon: '',
    created_by: {
      id: '',
      name: '',
      email: '',
    },
    user_list: [],
    purchase_list: [],
  })

  const fetchListDetails = React.useCallback(async () => {
    try {
      const response = await getGroupById(id)
      const group = response.data.group[0]
      setGroupDetails(group)
    } catch (e) {
      console.error(e)
    }
  }, [])

  React.useEffect(() => {
    fetchListDetails()
  }, [])

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
          </Flex>
        )}
      </Flex>

      <GroupDetailTopBar
        name={groupDetails.name}
        shared={groupDetails.user_list}
        fetchList={fetchListDetails}
        created_by={groupDetails.created_by}
      />

      <Box w="full" h="full">
        <Flex
          mt="1rem"
          maxH="calc(100% - 13vh)"
          h="100%"
          alignItems="center"
          justifyContent={groupDetails.purchase_list?.length ? '' : 'center'}
          flexDir="column"
          gap="0.75rem"
          py="1.87rem"
          px={isMobileOrTablet ? '0' : '4rem'}
          overflow="auto"
        >
          {groupDetails.purchase_list &&
            groupDetails.purchase_list.map((item) => (
              <GroupList
                key={item.id}
                idList={item.id}
                bgColor={item.color}
                icon={stringToIcon(item.icon) ?? undefined}
                name={item.name}
                shared={item.shared}
                fetchList={fetchListDetails}
              />
            ))}

          {!groupDetails.purchase_list?.length && (
            <Text
              fontSize={isMobileOrTablet ? '0.75rem' : '1rem'}
              fontWeight={500}
              color="blue.50"
            >
              Sem Listas
            </Text>
          )}
        </Flex>
      </Box>

      <DeleteGroupButton id={id || ''} isMobileOrTablet={isMobileOrTablet} />
    </VStack>
  )
}
