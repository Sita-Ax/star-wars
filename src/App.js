import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { MovieInfo } from "./components/views/MovieInfo";
import { Character } from "./components/views/Character";
import { Navbar } from "./components/general/Navbar";

function App() {
  const [movieInfo, setMovieInfo] = useState([]);//array to all films-movieInfo, setMovieInfo take the result of dataFilms in useEffect
  const [moviePeople, setMoviePeople] = useState({});//moviePeople send in to the chatacters and setMoviePeople is the handler func that sends in to Character
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function fetchInfo() {
      let resp = await fetch("http://swapi.dev/api/films");
      let dataFilms = await resp.json();
      setMovieInfo(dataFilms.results);
      setLoading(false);
    }
    fetchInfo();
  }, []);

  const movieHandler = (movieInformation) => {
    setMoviePeople(movieInformation);
    console.log(moviePeople);
  };

  return (
    <Router>
      <Navbar />
      <div>{loading ? <h2 style={{ border: "1px solid black" }}>Loading....</h2>
      :(
        <Switch>
          <Route exact path="/MovieInfo" >
          {movieInfo.map((movies, i) => {
            return <MovieInfo key={i} movies={movies} movieHandler={movieHandler} />
          })}
          </Route>
          <Route exact path="/Character" >
        <Character moviePeople={moviePeople}/>
        </Route>
        </Switch>
      )}
      </div>
    </Router>
  );
}

export default App;
