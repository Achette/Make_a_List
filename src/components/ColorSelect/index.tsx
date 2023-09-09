import React, { useState } from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

export const ColorSelect = () => {
  const [selectetColor, setSelectetColor] = useState<string>()

  const colors = [
    '#27488F',
    '#047C52',
    '#FFE200',
    '#6E7972',
    '#D23D33',
    '#C1A386',
    '#64D2FF',
    '#FF9F0A',
    '#00EA96',
    '#E1289B',
    '#BF5AF2',
    '#734230',
  ]

  return (
    <>
      <Flex flexDirection="column" maxW="25rem" w="100%">
        <Text
          paddingLeft="1rem"
          fontSize="1.0625rem"
          fontWeight={400}
          color="blue.900"
        >
          Cor
        </Text>
        <Flex maxW="100%" flexWrap="wrap">
          {colors.map((color, index) => {
            return (
              <Flex
                key={index}
                w="16.6%"
                paddingY="0,3125rem"
                justifyContent="center"
                alignItems="center"
              >
                <Flex
                  onClick={() => setSelectetColor(color)}
                  justifyContent="center"
                  alignItems="center"
                  border={color === selectetColor ? '2px' : 'unset'}
                  borderColor="#27488F4D"
                  cursor="pointer"
                  w="2.625rem"
                  h="2.625rem"
                  borderRadius="full"
                >
                  <Box
                    bg={color}
                    borderRadius="full"
                    w="2.0625rem"
                    h="2.0625rem"
                  ></Box>
                </Flex>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </>
  )
}
