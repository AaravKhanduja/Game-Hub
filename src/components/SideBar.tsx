import React from 'react'
import useGenres from '../hooks/useGenres';

const SideBar = () => {
const { genres, error, isLoading } = useGenres()
  return (
     <div>
       {isLoading && <p>Loading...</p>}
       {error && <p>{error}</p>}
       <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
       </ul>
     </div>
  )
}

export default SideBar
