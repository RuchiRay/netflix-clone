import axios from "../../axios";
import React, { useState, useEffect } from "react";
import { requests } from "../../request";
import truncate from "../../utilities/truncate";
export const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const movie =
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ];
      setBannerMovie(movie);
    };
    fetchData();
  }, []);

  return (
    <div className="banner-wrapper">
      <div
        className="min-h-[600px] relative flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}') `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          height: "80vh",
        }}
      >
        <div className="pl-12 pb-12">
          <h1 className="mb-5 text-[3.8rem]">
            {bannerMovie?.title ||
              bannerMovie?.name ||
              bannerMovie?.original_name}
          </h1>
          <div>
            <button className="py-3 w-32 rounded-md bg-white mr-4">Play</button>
            <button className="py-3 w-32 rounded-md bg-white">My List</button>
          </div>
          <div className="text-lg mt-4 w-[34rem]">
            <p>{truncate(bannerMovie?.overview)}</p>
          </div>
        </div>
        <div className="fade-bottom"></div>
      </div>
    </div>
  );
};
