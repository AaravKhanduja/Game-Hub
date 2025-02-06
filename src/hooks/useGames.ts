import { GameQuery } from '../App';
import useData from './useData';
import {Filter} from 'bad-words';




export interface Platform {
        id: number;
        name: string;
        slug: string;
}

export interface Game {
    id: number;
    name: string; 
    background_image: string;
    parent_platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
        }
    }[];
    metacritic: number;

}
const filter = new Filter();

const nsfwWords = import.meta.env.VITE_NSFW_WORDS?.split(",") || [];
filter.addWords(...nsfwWords);
 
const useGames = (gameQuery: GameQuery) => {
    const { data, error, isLoading } = useData<Game>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }, [gameQuery]);

      // Filter out NSFW game names
  const filteredGames = data.filter(game => !filter.isProfane(game.name));

  return { data: filteredGames, error, isLoading };
};

export default useGames; 
