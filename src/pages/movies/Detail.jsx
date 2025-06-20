import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';
import axios from 'axios';
import Button from '../../components/ui/Button';
import { Movies } from '../../components';

const StyledDetailMovie = styled.div`
  // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }

  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .poster {
      flex-basis: 30%;
    }

    .info {
      flex-basis: 60%;
    }
  }

  // Large Screen
  @media screen and (min-width: 992px) {
  }
`;


const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState("");
  const [movies,setMovies]=React.useState([]);
  const genres=movie && movie.genres.map((genre) => genre.name).join(', ');
  const trailer=movie && `https://youtube.com/watch?v=${movie.videos?.results[0]?.key}`;

  useEffect(() => {
    async function getDetailMovie(){
        const API_KEY=import.meta.env.VITE_API_KEY;
        const params=`?api_key=${API_KEY}&append_to_response=videos`;
        const URL=`https://api.themoviedb.org/3/movie/${id}${params}`;
        const response=await axios(URL);
        setMovie(response.data);
    }

    async function getRecommendationMovies(){
        const API_KEY=import.meta.env.VITE_API_KEY;
        const params=`?api_key=${API_KEY}&append_to_response=videos`;
        const URL=`https://api.themoviedb.org/3/movie/${id}/recommendations${params}`;
        const response=await axios(URL);
        console.log(response);
        setMovies(response.data.results);
    }

    getDetailMovie();
    getRecommendationMovies();

  },[id]);


  return (
    <>
        <StyledDetailMovie>
            <div className='poster'>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className='info'>
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>{movie.overview}</p>
                <Button as='a' href={trailer}>Watch</Button>
            </div>
        </StyledDetailMovie>
        <Movies movies={movies}/>
    </>
  )
}

export default Detail