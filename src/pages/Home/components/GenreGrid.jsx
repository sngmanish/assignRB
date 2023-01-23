import React from "react";
import "../../../Style/stories.css";
import MovieCard from "./MovieCard";

const GenreGrid = ({ genreName, moviesData }) => {
  return (
    <>
      <h1>{genreName}</h1>
      <div className="container">
        {moviesData?.map((item, index) => (
          <MovieCard movieData={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default GenreGrid;
