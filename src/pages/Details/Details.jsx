import React from "react";
import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import axios from "axios";

const Details = () => {
  // state containing movie details 
  const [currentMovieData, setCurrentMovieData] = useState(null);

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
  }, []);

  return (
    <div>
      <h1>hello from the other side</h1>
      {/* implement the details design  here. */}
    </div>
  );
};

export default Details;
