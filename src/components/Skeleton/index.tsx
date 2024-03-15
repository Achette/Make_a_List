import React from 'react'
import { Skeleton, SkeletonText } from '@chakra-ui/react'

export const ListSkeletons = () => {
  return (
    <>
      <Skeleton mt="1rem" height="12" width="full" />
      <Skeleton mt="1rem" height="12" width="full" />
      <Skeleton mt="1rem" height="12" width="full" />
      <Skeleton mt="1rem" height="12" width="full" />
      <Skeleton mt="1rem" height="12" width="full" />
      <Skeleton mt="1rem" height="12" width="full" />
    </>
  )
}

export const TextSkeleton = () => {
  return <SkeletonText noOfLines={1} skeletonHeight="10" width="12rem" />
}
