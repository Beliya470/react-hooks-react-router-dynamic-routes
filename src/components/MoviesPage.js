import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow"; // Make sure to import the MovieShow component

function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesList movies={movies} />
      {/* Add a Route for MovieShow component */}
      <Route path="/movies/:movieId">
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;
