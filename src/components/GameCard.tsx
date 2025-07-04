import { type Game } from '../hooks/useGames';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import getCroppedImageUrl from '../services/getCroppedImageUrl'
import CriticScore from './CriticScore';


interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {

    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <HStack justify={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}
export default GameCard