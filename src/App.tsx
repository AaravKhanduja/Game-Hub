import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import NavBar from './components/navbar/navbar';
import GameGrid from './components/GameGrid';
import SideBar from './components/SideBar';

function App() {
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
        <GridItem paddingX={5} area="aside"><SideBar/></GridItem>
      )}

      <GridItem area="main" >
      <GameGrid />
      </GridItem>
      
    </Grid>
  );
}

export default App;