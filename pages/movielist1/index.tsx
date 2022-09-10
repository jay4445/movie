import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box } from "./styles";

interface IData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  opularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_count: number;
}

function Index() {
  const [newMovie, setNewMovie] = useState<IData[]>();
  const [page, setPage] = useState(1);

  const get = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${page}`
      )
      .then((res: { data: { results: IData[] } }) => {
        setNewMovie({ ...newMovie, ...res.data.results });
        console.log(res.data.results);
      });
  };

  const getMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Box>
      {newMovie && (
        <>
          <img
            className="main_img"
            src={`http://image.tmdb.org/t/p/w1280${newMovie[0].backdrop_path}`}
          />
          <div className="main">
            <div className="top_img">
              <div>
                <ul>
                  {newMovie.map((el) => (
                    <li>
                      <img
                        src={`http://image.tmdb.org/t/p/w500${el.poster_path}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button onClick={getMore}>more...</button>
        </>
      )}
    </Box>
  );
}

export default Index;
