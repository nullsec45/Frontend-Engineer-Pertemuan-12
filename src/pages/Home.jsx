import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";
import AddMovie from "../components/AddMovie/AddMovie";
import { useState } from "react";

const Home = () => {   
  const [movies, setMovies] = useState([]);


  return (
    <div>
      <Hero />
      <AddMovie movies={movies} setMovies={setMovies}/>
      <Movies movies={movies} setMovies={setMovies}/>
    </div>
  );
}

export default Home;