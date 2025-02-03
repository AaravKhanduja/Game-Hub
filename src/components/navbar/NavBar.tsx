
import { HStack, Image } from '@chakra-ui/react'
import moshicon from '../../assets/mosh-icon.png';
import { Text } from '@chakra-ui/react';


const NavBar = () => {
  return (
    <HStack>
        <Image src={moshicon} boxSize={"60px"} alt="logo" />
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
