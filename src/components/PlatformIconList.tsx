import {Platform} from '../hooks/useGames'
import {FaWindows, FaPlaystation, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone } from "react-icons/md";
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { HStack } from '@chakra-ui/react';

interface Props {
     platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
     const IconMap: { [key: string]: IconType} = {
          pc: FaWindows,
          playstation: FaPlaystation,
          xbox: FaWindows, 
          linux: FaLinux ,
          mac: FaApple,
          android: FaAndroid,
          nintendo: SiNintendo ,
          ios: MdPhoneIphone ,
          web: BsGlobe,


     }
  return (
     
     <HStack marginY={1}>
     {platforms.map((platform) => (
     <Icon key={platform.id} as={IconMap[platform.slug]} color = 'gray.500'/>
     ))}
     </HStack>
     
     )
}

export default PlatformIconList
