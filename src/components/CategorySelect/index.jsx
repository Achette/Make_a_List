import React, { useState } from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

export const CategorySelect = () => {
  const [selectetCategory, setSelectetCategory] = useState({})

  const categorys = [
    {name:'Açougue',color:'#D23D33'},
    {name:'Hortifruti',color:'#047C52'},
    {name:'Congelados',color:'#27488F'},
    {name:'Mercearia',color:'#FF9F0A'},
    {name:'Laticínios',color:'#C8B100'},
    {name:'Padaria',color:'#C1A386'},
    {name:'Bebidas',color:'#55B3DA'},
    {name:'Perfumaria',color:'#BF5AF2'},
    {name:'Limpeza',color:'#00D689'},
    {name:'Pet Shop',color:'#E1289B'},
    {name:'Farmácia',color:'#6E7972'},
    {name:'Outros',color:'#734230'},
  ]

  return (
    <>
      <Flex flexDirection="column" w="100%">
        <Text
          paddingLeft="1rem"
          fontSize="1.0625rem"
          fontWeight={400}
          color="blue.900"
        >
          Categoria
        </Text>
        <Flex maxW="100%" flexWrap="wrap">
          {categorys.map((category, index) => {
            return (
              <Flex
                key={index}
                w="25%"
                paddingY="0,3125rem"
                justifyContent="center"
                alignItems="center"
              >
                <Flex
                  onClick={() => setSelectetCategory(category)}
                  justifyContent="space-evenly"
                  alignItems="center"
                  cursor="pointer"
                  h="2.625rem"
                >
                    <Box borderRadius="full"  padding={'.1rem'} border={category.name === selectetCategory.name ? '2px' : 'unset'} borderColor="#27488F4D">
                        <Flex
                            bg={category.color}
                            borderRadius="full"
                            w={'80px'}
                            h="1.5rem"
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Text color={'white'} fontSize={'12px'}>{category.name}</Text>
                        </Flex> 
                    </Box>
                
                </Flex>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </>
  )
}
