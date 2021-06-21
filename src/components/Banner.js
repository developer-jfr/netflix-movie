import React, { useEffect, useState } from "react";
import axios from "./../API/axios";
import requests from "./request";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  
  return (
    <>
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <div className="banner_title">
          <h1>{movie?.title || movie?.name}</h1>
         </div>

         <div className="banner_btn">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
         </div>
        
        <h1 className="banner_description">
        {truncate(movie?.overview, 150)}</h1>
        
      </div>

      <div className='opacity'></div>
    </header>  

    </>
  );
};
export default Banner;
