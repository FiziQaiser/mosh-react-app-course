import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenres, { type Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/getCroppedImageUrl'

interface Props {
    onSelectedGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ( {onSelectedGenre, selectedGenre} : Props ) => {
    const { data, isLoading, error } = useGenres()
 
    if (error) return null
    if (isLoading) return <Spinner/>
    return(
        <List>
            {data.map(genre => <ListItem key = {genre.id} paddingY='5px'> 
                <HStack>
                    <Image 
                    boxSize={'32px'} 
                    borderRadius={8} 
                    src={getCroppedImageUrl(genre.image_background)}/>
                    <Button fontWeight={genre.id == selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} variant={'link'} fontSize={'lg'}>{genre.name}</Button >
                </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList