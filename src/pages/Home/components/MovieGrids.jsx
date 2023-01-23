import React from "react";
import GenreGrid from "./GenreGrid";
import { useMemo } from "react";

// All the gneres will render inside this component
const MovieGrids = ({ data }) => {
  // Grouping movies by genre.
  const MoviesSortedByGenre = data?.reduce((acc, curr) => {
    curr.show.genres.forEach((genre) =>
      acc[genre] ? acc[genre].push(curr) : (acc[genre] = [curr])
    );
    return acc;
  }, {});

  // console.log(Object.entries(MoviesSortedByGenre || {}));

  return (
    <div className="cards">
      {Object.entries(MoviesSortedByGenre || {})?.map((item, index) => (
        <GenreGrid genreName={item[0]} moviesData={item[1]} key={index} />
      ))}
    </div>
  );
};

export default MovieGrids;
