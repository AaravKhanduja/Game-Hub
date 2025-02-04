import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import NavBar from './components/navbar/navbar';
import GameGrid from './components/GameGrid';
function App() {
  const gridTemplate = useBreakpointValue({
    base: `"nav" "main"`, 
    lg: `"nav nav" "aside main"`
  }) ?? `"nav" "main"`;  // Fallback to prevent 'undefined'

  return (
    <Grid templateAreas={gridTemplate} gap={4}>
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
       

      {gridTemplate.includes("aside") && (
        <GridItem area="aside" bg="gold">Aside</GridItem>
      )}

      <GridItem area="main" bg="dodgerblue">
      <GameGrid />
      </GridItem>
      
    </Grid>
  );
}

export default App;