import React from 'react'
import useGames from '../hooks/useGames'
import { Game } from '../hooks/useGames'
import { Card, CardBody } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';


interface Props{
    game: Game;
}
const GameCard = ({game}: Props) => {

  return (
    <Card borderRadius="10px" overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map((parent_platform) => parent_platform.platform)} />

            
        </CardBody>
    </Card>
  )
}

export default GameCard
