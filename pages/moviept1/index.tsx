import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box } from "./styles";

function Index() {
  const [data, setData] = useState<any>();

  const get = () => {
    axios
      .get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Box>
      {data &&
        data.movies.map((el: any) => (
          <>
            <div className="main_box">
              <div className="in_box">
                <img src={el.medium_cover_image} />
              </div>
              <div>
                <h1> {el.title} </h1>
                <h2> {el.year} </h2>
                <p>
                  {" "}
                  {el.summary.length > 235
                    ? `${el.summary.slice(0, 235)}...`
                    : el.summary}
                </p>
                <ul>
                  {el.genres.map((item: any) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ))}
    </Box>
  );
}

export default Index;
