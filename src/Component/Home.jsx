import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import Header from './Header'
import MovieGrids from './MovieGrids'

const Home = () => {
  const [data, setdata] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {

    axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((res) => {

        console.log(res.data)
        setdata(res.data)

      }).catch((err) => {

        console.log(err)

      })




  }, [searchTerm])
  return (
    <>
    <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
    <MovieGrids data={data} />
    

    </>
  )
}

export default Home
