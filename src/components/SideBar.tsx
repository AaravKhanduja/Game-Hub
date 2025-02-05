import { Button, HStack, List, Spinner, textDecoration } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import { ListItem } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import { Text } from '@chakra-ui/react';
import { FaBold } from 'react-icons/fa';


 interface Props {
          onSelectGenre: (genre: Genre) => void;
     }

const SideBar = ({ onSelectGenre} : Props) => {
  const { data, isLoading, error } = useGenres();

  if(error){
     return null;
  }

  if (isLoading) {
    return <Spinner />;
  }
 
  return (
    <List>
     
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}> 
        <HStack>
          <Image borderRadius={8} 
          boxSize={'32px'} 
          src={getCroppedImageUrl(genre.image_background)}
          />
          <Button onClick={()=>onSelectGenre(genre)} fontSize={'lg'} variant='link'>{genre.name}</Button>
        </HStack>
        
        </ListItem>
      ))} 
    </List>

  );
};

export default SideBar;