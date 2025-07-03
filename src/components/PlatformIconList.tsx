import { HStack, Icon, Text } from '@chakra-ui/react'
import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaApple, FaAndroid } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { MdPhoneIphone } from 'react-icons/md'
import type { IconType } from 'react-icons'


interface Platform {
    id: number
    name: string
    slug: string
}

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props ) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        android: FaAndroid,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <>
            <HStack marginY={1}>
                {platforms.map(platform => <Icon as={iconMap[platform.slug]} color={'gray.500'}/>)}
            </HStack>
        </>
    )
}

export default PlatformIconList