
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import LoadingSkeleton from './LoadingSkeleton'
import GameCardContainer from './GameCardContainer'
import { GameQuery } from '../App'



interface Props{
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
    const { data, error, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    if(error){
      return <Text>{error}</Text>
    }
    
  return ( 
    <SimpleGrid columns = {{sm: 1, md: 2, lg:3, xl: 4}} padding="10" spacing = {6}> 
        {isLoading && skeletons.map((skeleton) => 
        <GameCardContainer key={skeleton}>
        <LoadingSkeleton />
      </GameCardContainer>)}  
        {data.map((game) => (
            <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>))}
    </SimpleGrid>
  )
}

export default GameGrid
