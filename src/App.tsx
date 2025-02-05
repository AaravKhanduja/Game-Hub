import { Grid, GridItem, HStack, useBreakpointValue } from '@chakra-ui/react';
import NavBar from './components/navbar/navbar';
import GameGrid from './components/GameGrid';
import SideBar from './components/SideBar';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({genre: null, platform: null});

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
        <GridItem paddingX={5} area="aside"><SideBar onSelectGenre={(genre)=> setGameQuery({...gameQuery, genre})}/></GridItem>
      )}
       
      

      <GridItem area="main" >
        <HStack>
      <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
        <SortSelector/>
      </HStack>
      <GameGrid gameQuery={gameQuery} />
      </GridItem>
      
    </Grid>
  );
}

export default App;