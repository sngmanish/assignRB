import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieGrids from "./components/MovieGrids";
import "../../Style/Home.css";

// import Details from "../Details/Details";

const Home = () => {
  const [data, setdata] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  return (
    <>
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

      {searchTerm?.length === 0 ? (
        <h1>Please begin searching....</h1>
      ) : data?.length === 0 ? (
        <h1>No Matching Movies Found.</h1>
      ) : (
        <MovieGrids data={data} />
      )}
    </>
  );
};

export default Home;
