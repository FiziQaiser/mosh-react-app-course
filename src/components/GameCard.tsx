import React from 'react'
// import useGames, { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface Platform {
    id: number
    name: string
    slug: string
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
}

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {

    return (
        <Card>
            <Image src={game.background_image} borderRadius={10} overflow={'hidden'}/>
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            </CardBody>
        </Card>
    )
}
export default GameCard