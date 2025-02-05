import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
 
const SortSelector = () => {
     const[selectedSort, setSelectedSort] = useState('Relevance')
  return (
      <Menu>
       <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {selectedSort}</MenuButton>
       <MenuList>
       
    <MenuItem>
    test
    </MenuItem>

       </MenuList>
  
      </Menu>
    )
  }
  
  export default SortSelector