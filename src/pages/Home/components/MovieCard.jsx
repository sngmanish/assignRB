import shadows from "@material-ui/core/styles/shadows";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Style/stories.css";
const MovieCard = ({ movieData }) => {
  console.log(movieData);
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/Details/${movieData?.show?.id}`);
  };

  return (
    <div className="card">
      <img
        src={movieData?.show?.image?.medium}
        alt={movieData?.show?.name}
        onClick={() => handleMovieClick()}
      />
    </div>
  );
};

export default MovieCard;
