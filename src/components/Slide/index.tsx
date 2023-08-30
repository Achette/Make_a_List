import React from 'react'
import { VStack, Heading, Text } from '@chakra-ui/react'

type SlideProps = {
  title: string
  content: string
}

export const SlideCard = ({ title, content }: SlideProps) => {
  return (
    <VStack
      w="100%"
      h="11.75rem"
      bg="transparent"
      alignContent="center"
      justifyContent="center"
    >
      <VStack w="22rem" alignContent="center" justifyContent="center" px={10}>
        <Heading as="h3" fontSize="2xl" textAlign="center" mb={2} color="gray.100">
          {title}
        </Heading>
        <Text fontSize="md" textAlign="center" color="gray.100">
          {content}
        </Text>
      </VStack>
    </VStack>
  )
}
