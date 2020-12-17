import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor => {
      return(
        <div>
          <h3>Name: {actor.name}</h3>
          {renderMovies(actor.movies)}
        </div>
      )
    })
  }

  const renderMovies = (movies) => {
    return movies.map(movie => <li>{movie}</li>)
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
