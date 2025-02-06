import { HStack, Image } from '@chakra-ui/react'
import moshicon from '../../assets/mosh-icon.png';

import ColorModeSwitch from '../ColorModeSwitch';
import SearchBar from '../SearchBar';

interface Props {
  onSearch: (search: string) => void;
}


const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding={'10px'}  >
        <Image src={moshicon} boxSize={"60px"} alt="logo" />
        <SearchBar onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar