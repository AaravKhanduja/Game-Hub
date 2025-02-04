
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import { useState } from 'react'
import LoadingSkeleton from './LoadingSkeleton'

const GameGrid = () => {
    const { games, error, isLoading } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns = {{sm: 1, md: 2, lg:3, xl: 4}} padding="10" spacing = {10}> 
        {isLoading && skeletons.map((skeleton) => (
            <LoadingSkeleton key={skeleton} />
        ))}  
        {games.map((game) => (
            <GameCard key={game.id} game={game} />
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
