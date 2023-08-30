import React from 'react'
import { VStack, Heading, Text } from '@chakra-ui/react'

type SlideProps = {
  title: string
  content: string
}

export const Slide = ({ title, content }: SlideProps) => {
  return (
    <VStack
      w="100%"
      h="11.75rem"
      bg="transparent"
      alignContent="center"
      justifyContent="center"
    >
      <VStack w="22rem" alignContent="center" justifyContent="center" px={10}>
        <Heading as="h3" fontSize="2xl" mb={2}>
          {title}
        </Heading>
        <Text color="black" fontSize="md" textAlign="center">
          {content}
        </Text>
      </VStack>
    </VStack>
  )
}
