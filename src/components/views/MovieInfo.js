import React from "react";
import Card from "@material-ui/core/Card";
import {useHistory} from "react-router-dom";

export const MovieInfo = ({ movies, movieHandler }) => {
  const history = useHistory();

  const listHandler = () => {
    const moviesCharacter = movies;
    movieHandler(moviesCharacter);
     history.push("/Character");
  };
  //put history to listHandler and get the characters for the movie
  return(
      <Card bg="primary" style={{ width: "16rem" }} onClick={listHandler}>
        <div style={{borderBottom:"5px solid gray"}} >
          <div style={{ color: "green", fontSize: "20px" }}>Title:{movies.title} ReleaseDate: {movies.release_date}</div>
        </div>
      </Card>
  );
};
