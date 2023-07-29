import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      {/* Use the correct Link URL by providing the correct movieId */}
      <Link to={`/movies/${movieID}`}>
        <img src={movies[movieID].imageUrl} alt={movies[movieID].title} />
        <span>{movies[movieID].title}</span>
      </Link>
    </li>
  ));

  return <ul>{renderMovies}</ul>;
}

export default MoviesList;
