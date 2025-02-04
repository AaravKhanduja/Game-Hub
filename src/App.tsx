import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import NavBar from './components/navbar/navbar';
import GameGrid from './components/GameGrid';
function App() {
  const gridTemplate = useBreakpointValue({
    base: `"nav" "main"`, 
    lg: `"nav nav" "aside main"`
  }) ?? `"nav" "main"`;  // Fallback to prevent 'undefined'

  return (
    <Grid templateAreas={gridTemplate} gap={'10px'}>
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
       

      {gridTemplate.includes("aside") && (
        <GridItem area="aside">Aside</GridItem>
      )}

      <GridItem area="main" >
      <GameGrid />
      </GridItem>
      
    </Grid>
  );
}

export default App;