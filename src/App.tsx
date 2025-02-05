import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import NavBar from './components/navbar/navbar';
import GameGrid from './components/GameGrid';
import SideBar from './components/SideBar';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);
  const gridTemplate = useBreakpointValue({
    base: `"nav" "main"`, 
    lg: `"nav nav" "aside main"`
  }) ?? `"nav" "main"`;  // Fallback to prevent 'undefined'

  return (
    <Grid templateAreas={gridTemplate}  
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
        
        }}>
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
       

      {gridTemplate.includes("aside") && (
        <GridItem paddingX={5} area="aside"><SideBar onSelectGenre={(genre)=> setSelectedGenre(genre)}/></GridItem>
      )}
       
      

      <GridItem area="main" >
      <PlatformSelector onSelectPlatform={(platform) => setSelectPlatform(platform)} />
      <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectPlatform}/>
      </GridItem>
      
    </Grid>
  );
}

export default App;