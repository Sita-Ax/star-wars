import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
export const Character = ({ moviePeople }) => {
  const [peopleList, setPeopleList] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useHistory();
  const charaArr = moviePeople.characters;

  //https://stackoverflow.com/questions/49216282/sort-by-last-name-data-fetched-from-api-in-react-js
  //https://reactjs.org/docs/concurrent-mode-suspense.html
  //https://dev.to/jamesliudotcc/how-to-use-async-await-with-map-and-promise-all-1gb5
  //When you have a array with multiple promises use Promise.all and it will resolve when all promises in the array have resolved.
  //It will resolve value of all arguments and sontains resolved values of each promise in the array then set it to
  useEffect(() => {
    async function fetchPeople() {
      const movieChararray = await Promise.all(charaArr.map(url => fetch(url).then(character => character.json())));
      setPeopleList(movieChararray);
      setLoading(false);     
    }
    fetchPeople();
  },[]);
 
  return(
    <>
      {loading ? <h2>Loading....</h2> :(
        <Card bg="primary" style={{ width: "18rem" }}>
          <div style={{ border: "1px solid black" }}>Character:
            {peopleList.sort((a, b) => {
                var A = a.name.toUpperCase();
                var B = b.name.toUpperCase();
                return (A < B )? -1 : (A > B) ? 1 : 0;
                }).map((people, index) => {
                  return <div key={index}>{people.name}</div>
                  })}
          </div>
        </Card>
      )};
      <Button variant="contained" style={{ color: "green", fontSize: "1rem"}}onClick={() => history.goBack()}>
        Back
      </Button>
    </>
  );
};
