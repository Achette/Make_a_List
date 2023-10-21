import React from 'react'
import { useMedia } from 'hooks'
import { Box, Flex, Text } from '@chakra-ui/react'

type TotalBarProps = {
  children: React.ReactNode
}

export const TotalBar = ({ children }: TotalBarProps) => {

    const { isMobileOrTablet } = useMedia()
  return (
    <Box
      w={isMobileOrTablet ? "full" : "calc(100% - 11rem)"}
      h="4.3125rem"
      position="absolute"
      bottom={isMobileOrTablet ? "2rem" : "8rem"}
      bgColor="rgba(125, 196, 228, 0.30)"
      px="1.5rem"
    >
      <Flex
        w="full"
        h="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontSize="1.25rem"
          fontWeight={700}
          lineHeight="1.375rem"
          letterSpacing="-0.02563rem"
          color="blue.900"
        >
          Total
        </Text>
        <Text
          fontSize="1.8125rem"
          fontWeight={500}
          fontStyle="italic"
          lineHeight="1.375rem"
          letterSpacing="-0.02563rem"
          color="blue.900"
        >
          R${children}
        </Text>
      </Flex>
    </Box>
  )
}
