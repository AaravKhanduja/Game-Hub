import { HStack, List } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import { ListItem } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import { Text } from '@chakra-ui/react';


const SideBar = () => {
  const { data } = useGenres();

 
  return (
    <List>
     
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}> 
        <HStack>
          <Image borderRadius={8} 
          boxSize={'32px'} 
          src={getCroppedImageUrl(genre.image_background)}
          />
          <Text fontSize="large">{genre.name}</Text>
        </HStack>
        
        </ListItem>
      ))} 
    </List>

  );
};

export default SideBar;