import shadows from "@material-ui/core/styles/shadows";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Style/stories.css";
const MovieCard = ({ movieData }) => {
  const navigate = useNavigate();
  console.log(movieData);
  //   shadows.image.medium

  const handleImageClick = () => {
    // navigate.push(`/Details/${}`)
  };
  return (
    <div className="card">
      <img
        src={movieData?.show?.image?.medium}
        alt={movieData?.show?.name}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default MovieCard;
