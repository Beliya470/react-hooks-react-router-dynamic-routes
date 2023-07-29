import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const params = useParams(); // Access the params from the URL

  // Get the movieId from the params and find the corresponding movie
  const movieId = params.movieId;
  const movie = movies[movieId];

  if (!movie) {
    // If the movie is not found, show a message or handle the case
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.imageUrl} alt={movie.title} />
      {/* Add more details about the movie if needed */}
    </div>
  );
}

export default MovieShow;
