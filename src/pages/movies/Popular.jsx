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


const Popular = () => {
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
      async function fetchPopularMovies(){
        const response=await axios.get(ENDPOINTS.POPULAR);

        setMovies(response.data.results);
      }

      fetchPopularMovies();
  },[])

  return (
    <div>
      <Hero />
      <PageTitle>Popular Movies</PageTitle>
      <Movies movies={movies} title="Popular Movies"/>
    </div>
  )
}

export default Popular