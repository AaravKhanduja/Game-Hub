import { HStack, Image } from '@chakra-ui/react'
import moshicon from '../../assets/mosh-icon.png';

import ColorModeSwitch from '../ColorModeSwitch';


const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} p={'10px'}  >
        <Image src={moshicon} boxSize={"60px"} alt="logo" />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar