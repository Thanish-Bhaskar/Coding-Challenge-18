import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import UploadButton from '../UploadButton';
import './Toolbar.css';

const Toolbar = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const movies = [
    { id: 1, title: 'Inception' },
    { id: 2, title: 'Interstellar' },
    { id: 3, title: 'Dunkirk' },
  ];

  const handleMovieSelect = (e) => {
    const movieId = e.target.value;
    const movie = movies.find((m) => m.id === parseInt(movieId));
    setSelectedMovie(movie);
  };

  return (
    <div className="toolbar">
      <select onChange={handleMovieSelect} className="movie-selector">
        <option value="">Select a movie</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedMovie && (
        <div className="movie-details">
          <h3>{selectedMovie.title}</h3>
          <RateMovieButton movieId={selectedMovie.id} />
        </div>
      )}
      <UploadButton />
    </div>
  );
};

export default Toolbar;
