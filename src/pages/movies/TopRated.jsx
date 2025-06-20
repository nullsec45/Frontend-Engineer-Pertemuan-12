import React, {use, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Movies } from '../../components'
import {Hero} from '../../components'


const PageTitle=styled.h2`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #4361ee;
  letter-spacing: 1px;
  text-align: center;
`


const TopRated = () => {
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
      async function fetchPopularMovies(){
        const API_KEY=import.meta.env.VITE_API_KEY;
        const URL=`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

        const response=await axios.get(URL);
        // console.log(response.data.results);

        setMovies(response.data.results);
      }

      fetchPopularMovies();
  },[])

  return (
    <div>
      <Hero />
      <PageTitle>Top Rated Movies</PageTitle>
      <Movies movies={movies} />
    </div>
  )
}

export default TopRated