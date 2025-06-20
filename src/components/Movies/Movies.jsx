import React from 'react';
import styles from './Movies.module.css';

const Movies = ({ movies }) => (
  <div className={styles.container}>
    <section className={styles.movies}>
      {/* <h2 className={styles.movies__title}>Latest Movies</h2> */}
      <div className={styles.movie__grid}>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className={styles.movie__card}>
              <div className={styles.movie__poster}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.movie__image}
                />
                <span className={styles.movie__rating}>
                  ⭐ {movie.vote_average}
                </span>
              </div>
              <div className={styles.movie__info}>
                <h3 className={styles.movie__title}>{movie.title}</h3>
                <p className={styles.movie__date}>{movie.release_date}</p>
                <p className={styles.movie__genre}>
                  {Array.isArray(movie.genre_ids)
                    ? movie.genre_ids.join(', ')
                    : ''}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.no__movies}>No movies available</p>
        )}
      </div>
    </section>
  </div>
);

export default Movies;
