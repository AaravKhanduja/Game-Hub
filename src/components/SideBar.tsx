import { Button, Heading, HStack, List, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import { ListItem } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';


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
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
     
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}> 
        <HStack>
          <Image borderRadius={8} 
          boxSize={'32px'} 
          src={getCroppedImageUrl(genre.image_background)}
          objectFit={'cover'}
          />
          <Button whiteSpace={'normal'} textAlign={'left'} onClick={()=>onSelectGenre(genre)} fontSize={'lg'} variant='link'>{genre.name}</Button>
        </HStack>
        
        </ListItem>
      ))} 
    </List>
    </>

  );
};

export default SideBar;