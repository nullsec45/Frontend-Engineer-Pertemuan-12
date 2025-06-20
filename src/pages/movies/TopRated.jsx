import React, {use, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Movies } from '../../components'
import {Hero} from '../../components'
import ENDPOINTS from '../../utils/constants/endpoints'


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
        const response=await axios.get(ENDPOINTS.TOPRATED);

        setMovies(response.data.results);
      }

      fetchPopularMovies();
  },[])

  return (
    <div>
      <Hero />
      <PageTitle>Top Rated Movies</PageTitle>
      <Movies movies={movies}  title="Top Rated Movies"/>
    </div>
  )
}

export default TopRated