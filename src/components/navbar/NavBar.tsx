import { HStack, Image } from '@chakra-ui/react'
import moshicon from '../../assets/AK_logo.png';

import ColorModeSwitch from '../ColorModeSwitch';
import SearchBar from '../SearchBar';

interface Props {
  onSearch: (search: string) => void;
}


const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding={'10px'}  >
        <Image cursor={'pointer'} onClick={() => window.location.reload()} borderRadius="100%" src={moshicon} boxSize={"60px"} alt="logo" />
        <SearchBar onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar