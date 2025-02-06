import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
     onSelectSort: (sort: string) => void;
}
 
const SortSelector = ({onSelectSort}: Props) => {
     const[selectedSort, setSelectedSort] = useState('Relevance')

     const sortOrders = [
          {value: '', label: 'Relevance'},
          {value: '-added', label: 'Date added'},
          {value: 'name', label: 'Name'},
          {value: '-released', label: 'Release date'},
          {value: '-metacritic', label: 'Popularity'}

     ]

  return (
      <Menu>
       <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {selectedSort}</MenuButton>
       <MenuList>
       
     {sortOrders.map((order) => (
           <MenuItem 
           key={order.value} 
           onClick={() => {onSelectSort(order.value);
               setSelectedSort(order.label);}}

           >{order.label}
           </MenuItem>
     ))}
    

       </MenuList>
  
      </Menu>
    )
  }
  
  export default SortSelector