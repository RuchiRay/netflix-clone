import axios from "../../axios";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./row.css";
import { RowPoster } from "./RowPoster";

export const Row = ({ title, fetchUrl, isLargeRow = false, id }) => {
  const [movies, setMovies] = useState([]);
  const toScroll = document.getElementById(id);
  console.log(title, isLargeRow);
  useEffect(() => {
    const fetchdata = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchdata();
  }, []);

  return (
    <div className="ml-12">
      <h2>{title}</h2>
      <div className="relative">
        <div className={isLargeRow ? "largeBox-wrap" : "box-wrap"} id={id}>
          {movies.map((movie) => {
            const { id, poster_path, backdrop_path } = movie;
            const imgSrc = isLargeRow ? poster_path : backdrop_path;
            return (
              <div className={isLargeRow ? "largeBox" : "box"} key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
                  className='rounded-md'
                  alt=""
                />
                <RowPoster />
              </div>
            );
          })}
        </div>
        <div className="absolute cursor-pointer h-40 w-14 flex items-center justify-center top-2/4 opacity-30 hover:opacity-100 left-0">
          <MdOutlineKeyboardArrowLeft
            className="text-[4rem]"
            onClick={() => {
              toScroll.scrollLeft -= window.innerWidth - 80;
            }}
          />
        </div>
        <div className="absolute cursor-pointer h-40 w-14 flex items-center justify-center top-2/4 opacity-30 right-0 hover:opacity-100">
          <MdOutlineKeyboardArrowRight
            className="text-[4rem]"
            onClick={() => {
              toScroll.scrollLeft += window.innerWidth - 80;
            }}
          />
        </div>
      </div>
    </div>
  );
};
