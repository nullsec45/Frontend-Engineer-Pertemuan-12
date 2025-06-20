import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import axios from 'axios';

const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

const HeroTitle = styled.h2`
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 2.44rem;
`;

const HeroGenre = styled.h3`
  color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.59rem;
`;

const HeroDescription = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
`;

const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #4361ee;
  color: #fff;
  cursor: pointer;
`;

const HeroRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;

const Hero = () => {
  const [movie, setMovie] = useState({});
  const [genres,setGenres]=useState(null);
  const [idTrailer,setIdTrailer]=useState(null);
  const API_KEY=import.meta.env.VITE_API_KEY;
  // const genres=movie && movie.genres.mao((genre) => genre.name).join(', ');
  // const idTrailer=movie && movie.videos.results[0].key;


  useEffect(() => {
    async function fetchTrendingMovie() {
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(url);
      const firstMovie = response.data.results[0];
      return firstMovie;
    }

    async function fetchDetailMovie(){
      const trendingMovie=await fetchTrendingMovie();
      const id=trendingMovie.id;

      const params=`?api_key=${API_KEY}&append_to_response=videos`;
      const URL=`https://api.themoviedb.org/3/movie/${id}${params}`;
      const response=await axios(URL);
      console.log(response);
      const dataGenres=response && response.data.genres.map((genre) => genre.name).join(', ');
      const dataIdTrailer=response && response.data.videos.results[0].key;
      setGenres(dataGenres);
      setIdTrailer(dataIdTrailer);


      setMovie(response.data);
    }

    fetchDetailMovie();
  }, []);

  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>{movie.title}</HeroTitle>
          <HeroGenre>Genre: {genres}</HeroGenre>
          <HeroDescription>{movie.overview}</HeroDescription>
          {/* <HeroButton>Watch</HeroButton> */}
          <Button size="md" variant="primary" as="a" href={`https://www.youtube.com/watch?v=${idTrailer}`} target="_blank">
       Watch Movie
      </Button>
        </HeroLeft>
        <HeroRight>
          <HeroImage src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
        </HeroRight>
      </HeroSection>
    </Container>
  );
};

export default Hero;
