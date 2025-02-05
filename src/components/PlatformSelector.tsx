import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({onSelectPlatform}: Props) => {
const{data, error}  = usePlatforms()
const[selectedPlatform, setSelectedPlatform] = useState('All Platforms')

if(error) return null;

  return (
    <Menu>
     <MenuButton as={Button} rightIcon={<BsChevronDown/>}> {selectedPlatform}</MenuButton>
     <MenuList>
     {data?.map((platform) => (
  <MenuItem
    key={platform.id}
    onClick={() => {
      onSelectPlatform(platform);
      setSelectedPlatform(platform.name);
    }}
  >
    {platform.name}
  </MenuItem>
))}
     </MenuList>

    </Menu>
  )
}

export default PlatformSelector
