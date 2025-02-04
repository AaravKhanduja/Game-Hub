import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText, Stack, HStack } from '@chakra-ui/react';
import { Card, CardBody, Heading } from '@chakra-ui/react';

const LoadingSkeleton = () => {
  return (
     <Card width= '300px' borderRadius="10px" overflow='hidden'>
     <Skeleton height="200px" />
     <CardBody> 
     <SkeletonText /> 
     </CardBody>
     </Card>
     )
     }

export default LoadingSkeleton
