import React, { useState } from "react"
import { Flex, Text, Box } from "@chakra-ui/react"

export const ColorSelect = () => {

    const [selectetColor, setSelectetColor] = useState('')

    const colors = [
        "#27488F", "#047C52", "#FFE200", "#6E7972", "#D23D33", "#C1A386", "#64D2FF", "#FF9F0A", "#00EA96", "#E1289B", "#BF5AF2", "#734230"
    ]

    return (
        <>
            <Flex
                flexDirection={'column'}    
                maxW={'400px'}
                w={'100%'}>
                <Text
                 paddingLeft={'16px'} 
                 fontSize={'17px'} 
                 fontWeight={400} 
                 color={"blue.900"}>
                    Cor
                </Text>
                <Flex maxW={'100%'} flexWrap={"wrap"}>
                    {colors.map((color, index) => {
                        return(
                        <Flex 
                            key={index} 
                            w={'16.6%'} 
                            paddingY={'5px'} 
                            justifyContent={'center'}
                            alignItems={'center'}>
                            <Flex 
                                onClick={()=>setSelectetColor(color)}
                                justifyContent={'center'} 
                                alignItems={'center'} 
                                border={color === selectetColor ? '2px' : 'unset'} 
                                borderColor={'#27488F4D'} 
                                cursor={'pointer'} 
                                w={'42px'} 
                                h={'42px'} 
                                borderRadius={"full"}>
                            
                                <Box 
                                bg={color}
                                borderRadius={"full"} 
                                w={'33px'} 
                                h={'33px'}>
                                </Box>
                            </Flex>
                        </Flex>) 
                    })}
                </Flex>
            </Flex>
        </>
    )
}