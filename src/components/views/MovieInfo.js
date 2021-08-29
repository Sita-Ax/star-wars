import React from "react";
import Card from "@material-ui/core/Card";

export const MovieInfo = ({ movies, movieHandler }) => {

  const listHandler = () => {
    movieHandler(movies);
  };
  
  return(
      <Card bg="primary" style={{ width: "16rem" }}onClick={listHandler}>
        <div style={{borderBottom:"5px solid gray"}} >
          <div style={{ color: "green", fontSize: "20px" }}>Title:{movies.title} ReleaseDate: {movies.release_date}</div>
        </div>
      </Card>
  );
};
