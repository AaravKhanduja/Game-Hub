import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack>
        <Switch isChecked ={colorMode === 'dark'} onChange={toggleColorMode} colorScheme ={'green'}/>
        <Text fontWeight={500} whiteSpace="nowrap">Dark Mode</Text>
      
    </HStack>
  )
}

export default ColorModeSwitch
