import React from "react";
import GenreGrid from "./GenreGrid";

const MovieGrids = ({ data }) => {
  const MoviesSortedByGenre = data?.reduce((acc, curr) => {
    curr.show.genres.forEach((genre) =>
      acc[genre] ? acc[genre].push(curr) : (acc[genre] = [curr])
    );
    return acc;
  }, {});

  // console.log(Object.entries(MoviesSortedByGenre));

  return (
    <div className="cards">
      {Object.entries(MoviesSortedByGenre || {})?.map((item, index) => (
        <GenreGrid genreName={item[0]} moviesData={item[1]} key={index} />
      ))}
    </div>
  );
};

export default MovieGrids;
