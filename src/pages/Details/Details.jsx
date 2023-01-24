import React from "react";
import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import axios from "axios";
import Header from "../Home/components/Header";

const Details = () => {
  // state containing movie details 
  const [currentMovieData, setCurrentMovieData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const currentMovieId = useMatch("Details/:id")?.params?.id;

  useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/shows/${currentMovieId}`)
      .then((res) => {
        console.log(res.data);
        setCurrentMovieData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentMovieId]);

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <h1>hello from the other side</h1>
      {
          <div>

            <img src={currentMovieData.image.medium} alt="" />

          </div>
       
      }
    </div>
  );
};

export default Details;
