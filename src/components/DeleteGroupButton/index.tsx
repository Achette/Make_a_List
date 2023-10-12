import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { Flex, Icon, Link as LinkChakra, Text, VStack, useToast } from '@chakra-ui/react'
import { deleteGroup } from 'services/group-services'
import { useNavigate } from 'react-router-dom'


export type ButtonProps = {
  id: string
  isMobileOrTablet: boolean
}

export const DeleteGroupButton = ({ id, isMobileOrTablet }: ButtonProps) => {
  const toast = useToast()
  const navigate = useNavigate()

  const deleteGroupById = async () => {
    try {
      await deleteGroup(id)
      navigate(-1)
    } catch (e: unknown) {
      const errorMessage = (e as any).response?.data?.error || 'Ocorreu um erro desconhecido';
      toast({
        description: errorMessage,
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }

  return (
    <Flex
      position="absolute"
      right={isMobileOrTablet ? 8 : 12}
      bottom={isMobileOrTablet ? 8 : 12}
      flexDir="column"
      overflow="hidden"
    >
      <LinkChakra title="Delete" order={3} _hover={{ textDecoration: 'none' }}>
        <VStack onClick={() => deleteGroupById()}>
          <Icon
            as={MdDeleteOutline}
            w="3rem"
            h="3rem"
            p="0.7rem"
            bg="red.200"
            color="red.600"
            borderRadius="full"
          />
          <Text
            color="red.600"
            fontSize="0.75rem"
            fontWeight={500}
            mt="-0.35rem"
          >
            Deletar grupo
          </Text>
        </VStack>
      </LinkChakra>
    </Flex>
  )
}
