import React, { useState } from "react"
import { Flex, Text, Icon } from "@chakra-ui/react"
import {
    FaShoppingBasket,
    FaHeart,
    FaWineGlassAlt,
    FaBriefcaseMedical,
    FaGift,
    FaLeaf,
    FaTools,
    FaPaw,
    FaVolleyballBall,
    FaTag,
    FaGamepad,
    FaGraduationCap,} from "react-icons/fa"

export const IconSelect = () => {

    const [selectetIconIndex, setSelectetIconIndex] = useState('')


    const icons = [
        FaShoppingBasket,
        FaHeart,
        FaWineGlassAlt,
        FaBriefcaseMedical,
        FaGift,
        FaLeaf,
        FaTools,
        FaPaw,
        FaVolleyballBall,
        FaTag,
        FaGamepad,
        FaGraduationCap,
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
                    Ícones
                </Text>
                <Flex maxW={'100%'} flexWrap={"wrap"}>
                    {icons.map((icon, index) => {
                        return(
                        <Flex 
                            key={index} 
                            w={'16.6%'} 
                            paddingY={'5px'} 
                            justifyContent={'center'}
                            alignItems={'center'}>
                            <Flex 
                                onClick={()=>{setSelectetIconIndex(index)}}
                                justifyContent={'center'} 
                                alignItems={'center'} 
                                border={index === selectetIconIndex ? '2px' : 'unset'} 
                                borderColor={'#27488F4D'} 
                                cursor={'pointer'} 
                                w={'42px'} 
                                h={'42px'} 
                                borderRadius={"full"}>
                            
                                <Flex 
                                bg={'#E5E5E5'}
                                borderRadius={"full"} 
                                w={'33px'} 
                                h={'33px'}
                                justifyContent={'center'}
                                alignItems={'center'}>
                                    <Icon as={icon} color="blackAlpha.700" w={'100%'}></Icon>
                                </Flex>
                            </Flex>
                        </Flex>) 
                    })}
                </Flex>
            </Flex>
        </>
    )
}