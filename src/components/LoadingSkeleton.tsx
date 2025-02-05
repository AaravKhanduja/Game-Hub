import { Skeleton, SkeletonText } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';

const LoadingSkeleton = () => {
  return (
     <Card>
     <Skeleton height="200px" />
     <CardBody> 
     <SkeletonText /> 
     </CardBody>
     </Card>
     )
     }

export default LoadingSkeleton
