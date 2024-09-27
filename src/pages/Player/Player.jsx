import React from "react";
import { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

import { useParams, Link } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzUyYjI3MmUwYjRhNjcwMDUzYTNlNDQ2NzdjYzgxYiIsIm5iZiI6MTcyNzAwMTI2MS42NzE5NTIsInN1YiI6IjY2ZWIxNTI1MWJlY2E4Y2UwN2QzYTFhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEoQEmDlAlh3aZSv1a6amPeHGHDMe1Wa8BkA_jR3uIU",
    },
  };

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setApiData(response.results[0]))
  //     .catch((err) => console.error(err));
  // }, [id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        } else {
          console.error("No results found");
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <Link to={"/"}>
        <img src={back_arrow_icon} alt="Back" />
      </Link>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
