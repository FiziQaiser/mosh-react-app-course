import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/ditto_pfp.jpg'

const NavBar = () => {
    return (
        <>
            <HStack bg="blue.100" p={4}>
                <Image src={logo} boxSize="60px"/>
                <Text color="black">Ditto</Text>
            </HStack>
        </>
    )
}
export default NavBar