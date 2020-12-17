import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map(movie => {
      return(<div>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {renderGenres(movie.genres)}
        </ul>
      </div>
      )
    })
  }

  const renderGenres = (genres) => {
    return genres.map(genre => <li>{genre}</li>)
  }
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
