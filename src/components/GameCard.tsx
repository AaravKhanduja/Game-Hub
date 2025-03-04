import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';


interface Props{
    game: Game;
}
const GameCard = ({game}: Props) => {


  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
        <HStack marginBottom="3" justifyContent={'space-between'}>
              <PlatformIconList platforms={game.parent_platforms.map((parent_platform) => parent_platform.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize='2xl'>{game.name}</Heading>
            

            
        </CardBody>
    </Card>
  )
}

export default GameCard
